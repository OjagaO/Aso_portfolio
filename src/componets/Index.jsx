import React, { useEffect } from "react";
import "../componets/style.css";
import icon from "./logo/toukalogo4.png";
import { Link } from "react-router-dom";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { AmbientLight } from "three";
import BlackLine from "../utils/blackLine";

const Index = () => {

    useEffect(() => {
        let innerWidth = window.innerWidth;
        let innerheight = window.innerHeight;
      
        const sizes = {
          width: innerWidth,
          height: innerheight,
        };
        const canvas = document.getElementById("canvas");
        let model;
      
        // scene
        const scene = new THREE.Scene();
      
        // camera
        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
        if(innerWidth < 1024){
          camera.position.set(0, 0.55, 2);
        } else {
          camera.position.set(-0.85, 0.1, 2);
        }
      
        // renderer
        const renderer = new THREE.WebGLRenderer({
          canvas: canvas,
          antialias: true,
          alpha: true,
        });
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(window.devicePixelRatio);
      
        // モデルの読み込み
        const gltfLoader = new GLTFLoader();
        let mixer;
      
        gltfLoader.load("./models/scene.gltf", (gltf) => {
          model = gltf.scene;
          model.scale.set(0.28, 0.28, 0.28);
          model.rotation.y = -Math.PI / 0.415;
          model.rotation.x = -Math.PI / 0.485;
          model.rotation.z = -Math.PI / 0.485;
          scene.add(model);
      
          mixer = new THREE.AnimationMixer(model);
          const clips = gltf.animations;
          clips.forEach(function (clip) {
              const action = mixer.clipAction(clip);
              action.play();
          });
      
          // モデルが読み込まれたらレンダリングを開始する
          const tick = () => {
              renderer.render(scene, camera);
              if (mixer) {
                  mixer.update(0.02);
              }
              requestAnimationFrame(tick);
          };
          tick();
        });
      
        // light
        const ambientLight = new AmbientLight(0xffffff, 3);
        scene.add(ambientLight);
        const pointLight = new THREE.PointLight(0xffffff, 2, 100);
        scene.add(pointLight);
      
      }, []);

    return (
        <div>
            <BlackLine></BlackLine>
            <canvas id="canvas"></canvas>
            <div id="video">
                <div className="header-main">
                    <div className="main-logo-box">
                        <p className="main-logo">
                            <img src={icon} alt=""></img>
                        </p>
                        <nav className="header-navigation">
                            <ul className="header-list">
                                <li className="header-list-parts partsPC">
                                    <Link className="to_a target" to="/React_portfolio/about">
                                        <span>Hover Here</span>
                                        <span>About Me</span>
                                    </Link>
                                </li>
                                <li className="header-list-parts partsSP">
                                    <Link className="to_a target " to="/React_portfolio/about">
                                        <p>Click to myPage</p>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Index;
