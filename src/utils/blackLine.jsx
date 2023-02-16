import React from 'react';
import { motion } from 'framer-motion';

const BlackLine = () => {
    let winW = window.innerWidth + 1;

    const blackLine = {
        initial: {
            position: "fixed",
            width: 0,
            height: 1,
            top: "50%",
        },
        animate: {
            width: [0, winW, winW, winW, winW],
            height: [1, 1, 1, 1, 0],
            right: [winW, winW, 0, 0, 0],
            rotate: [0, 0, 0, 90, 90],
        },
        trnasition: {
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.9, 0.2, 0.9],
            delay: 0,
        }
    }

    const blackSheetL = {
        initial: {

        },
        animate: {
            width: [winW/2, 0, 0],
        },
        trnasition: {
            delay: 1.6,
            times: [0, 1, 1],
            duration: 2,
            ease: "easeInOut",
        }
    }

    const blackSheetR = {
        initial: {

        },
        animate: {
            width: [winW/2, 0, 0],
        },
        trnasition: {
            delay: 1.6,
            times: [0, 1, 1],
            duration: 2,
            ease: "easeInOut",
        }
    }

    return (
        <>
            <motion.div
                initial={blackSheetL.initial}
                animate={blackSheetL.animate}
                transition={blackSheetL.trnasition}
                className='blackL'></motion.div>
            <motion.div
                initial={blackSheetR.initial}
                animate={blackSheetR.animate}
                transition={blackSheetR.trnasition}
                className='blackR'></motion.div>
            <motion.div
                initial={blackLine.initial}
                animate={blackLine.animate}
                transition={blackLine.trnasition}
                className="extend_line"></motion.div>
        </>
    )
}

export default BlackLine;