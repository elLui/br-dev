import { motion } from 'framer-motion';
import React from 'react';



const styles = {
    cls1: {
        width: 'auto',
        height: 'auto',
        fontSize: '6.45rem',
        fontFamily: "VinerHandITC, 'Viner Hand ITC'",
    },
    cls2: {
        width: 'auto',
        height: 'auto',
        fontSize: '6.45rem',
    },
    cls3: {
        width: 'auto',
        height: 'auto',
        fontSize: '6.45rem',
        fontFamily: "Chiller-Regular, Chiller",
    },
    cls4: {
        fontFamily: "VinerHandITC, 'Viner Hand ITC'",
    },
    cls5: {
        fontFamily: "Chiller-Regular, Chiller",
    },
};

const LogoFC: React.FC = () => (
    <motion.svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256.04 225.07">
        <motion.g id="Layer_1-2" data-name="Layer 1" className="noise">
            <motion.text style={styles.cls1} transform="translate(76.17 161.62)">
                <tspan x="0" y="0" className="text-white">R</tspan>
            </motion.text>
            <motion.text style={styles.cls3} transform="translate(125.32 147.77)">
                <tspan x="0" y="0">oute</tspan>
            </motion.text>
            <motion.text style={styles.cls3} transform="translate(59.92 82.04)">
                <tspan x="0" y="0">itter</tspan>
            </motion.text>
            <motion.text style={styles.cls2} transform="translate(0 125.38)">
                <tspan style={styles.cls4} x="0" y="0">B</tspan>
                <tspan style={styles.cls5} x="78.6" y="0"></tspan>
            </motion.text>
        </motion.g>
    </motion.svg>
);

export default LogoFC;
