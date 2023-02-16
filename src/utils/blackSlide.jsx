import React from 'react';
import '../componets/style.css';
import { motion } from 'framer-motion';

const BlackSlide = ({ children }) => {
    const blackSlide = {
        initial: {
            height: '100vh',
            width: 0,
            left: 100,
            zIndex: 99999,
        },
        animate: {
            width: [0, 'calc(100% - 100)', 0],
        }
    }


    return (
        <div className='absolute'>
            <motion.div
                initial={blackSlide.initial}
                // animate={blackSlide.animate}
                animate={{
                    width: [0, 1200, 300, 100, 0],
                    rotate: [0, 0, 180, 180, 180],
                    borderRadius: ["0%", "0%", "50%", "0%", "0%"]
                }}
                // transition={{ duration: 2, delay: 0.5 }}
                transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.7, 1],
                }}
                className='black_slider'>
                {children}
            </motion.div>
        </div>
    )
}

export default BlackSlide;