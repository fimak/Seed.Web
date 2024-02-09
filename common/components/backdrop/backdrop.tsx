import { motion } from "framer-motion";
import { ReactNode } from "react";
import styles from './backdrop.module.scss';

export type BackdropModel = {
    children: ReactNode,
    onClick: () => void,
}

export default function Backdrop({children, onClick} : BackdropModel) {
    return (
        <motion.div className={styles.backdrop} onClick={onClick} initial={{opacity: 0}} animate={{opacity:1}} exit={{opacity:0}}>
            {children}
        </motion.div>
    )
}