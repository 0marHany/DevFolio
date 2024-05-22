import React from 'react';
import styles from "./style.module.css";

export default function Home() {
    return (<>
        <div className={`${styles.homeImage} position-relative d-flex`}>
            <div className={`${styles.bgDark} d-flex justify-content-center align-items-center`}>
                <div className="text-white text-center">
                    <h2 className="fa-4x">I am Morgan Freeman</h2>
                    <p className={`${styles.name} fa-2x fw-bold `}>Iam a  </p>
                </div>
            </div>
        </div>
        {/* //about */}
        

    </>);
}
