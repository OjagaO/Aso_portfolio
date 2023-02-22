import React from 'react';
import '../componets/style.css';
import { motion } from 'framer-motion';

const BlackSlide = ({ children }) => {
    let winW = window.innerWidth - 100;
    let winH = window.innerHeight / 2 + 1;

        const blackSlideU = {
            animate: {
                width: [winW,winW, winW, winW],
                height: [winH,winH,0,0],
            },
            transition: {
                times: [0, 0, 0.4,0.9],
                duration: 1.3,
            }
        }
    
        const blackSlideL = {
            animate: {
                width: [winW,winW, winW, winW],
                height: [winH,winH,0,0],
            },
            transition: {
                times: [0, 0, 0.4,0.9],
                duration: 1.3,
            }
        }
    

    return (
        <div className='absolute'>
            <motion.div
                animate={blackSlideU.animate}
                transition={blackSlideU.transition}
                className='black_sliderU'>
                {children}
            </motion.div>
            <motion.div
            animate={blackSlideL.animate}
            transition={blackSlideL.transition}
            className='black_sliderL'>

            </motion.div>
        </div>
    )
}

export default BlackSlide;