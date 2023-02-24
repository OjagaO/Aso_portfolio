import React, { useEffect } from 'react';
import '../componets/style.css';
import icon from './logo/toukalogo4.png';
import { Link } from 'react-router-dom';
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"
import { AmbientLight, AnimationMixer } from 'three';
import BlackLine from '../utils/blackLine';

const Index = () => {
    useEffect(() => {

        let innerWidth = window.innerWidth;
        let innerheight = window.innerHeight;

        const sizes = {
            width: innerWidth / 2,
            height: innerheight,
        }
        const canvas = document.getElementById("canvas");
        let model;

        // scene
        const scene = new THREE.Scene();

        // camera
        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
        camera.position.set(0, 0.7, 2);

        // renderer
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,
            alpha: true,
        });
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(window.devicePixelRatio);

        // 確認用キューブ
        // const geometry = new THREE.BoxGeometry(1, 1, 1);
        // const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        // const cube = new THREE.Mesh(geometry, material);
        // scene.add(cube);

        // モデルの読み込み
        const gltfLoader = new GLTFLoader();
        let mixer;

        gltfLoader.load("./models/cat.gltf", (gltf) => {
            model = gltf.scene;
            model.scale.set(0.06, 0.06, 0.06);
            model.rotation.y = -Math.PI / 1.3;
            scene.add(model);

            mixer = new THREE.AnimationMixer(model);
            const clips = gltf.animations;
            clips.forEach(function (clip) {
                const action = mixer.clipAction(clip);
                action.play();
            })
        });

        // light
        const ambientLight = new AmbientLight(0xffffff, 3);
        scene.add(ambientLight);
        const pointLight = new THREE.PointLight(0xffffff, 2, 100);
        scene.add(pointLight);

        // animation
        const tick = () => {
            renderer.render(scene, camera);
            if (mixer) {
                mixer.update(0.02);
            }
            requestAnimationFrame(tick);
        }
        tick();
    }, []);

    return (
            <div>
                <BlackLine></BlackLine>
                <canvas id='canvas'></canvas>
                <div id="video">
                    <div className="header-main">
                        <div className="main-logo-box">
                            <p className="main-logo">
                                <img src={icon} alt=""></img>
                            </p>
                            <nav className="header-navigation">
                                <ul className="header-list">
                                    <li className="header-list-parts"><Link className="to_a target" to="/React_portfolio/about"><span>Hover
                                        Here</span><span>About
                                            Me</span></Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Index;