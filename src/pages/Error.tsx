import React, { useEffect } from 'react';
import gsap from 'gsap';
import classNames from "classnames";
import { DateLocation } from "@/components";
import styles from "@/styles/Global.module.scss";


export type ErrorProps = {
  className?: string
}

export const Error: React.FC<ErrorProps> = ({ className }) => {
  const dateParts = ['18', 'FEB', '2024'];
  const locationText = 'Km 17.5 carr vieja a León';
  useEffect(() => {

    const btn = document.querySelector(`.${styles.btn_wedding}`);
    if (btn) {
      const onMouseEnter = () => gsap.to(btn, { scale: 1.1, duration: 0.2 });
      const onMouseLeave = () => gsap.to(btn, { scale: 1, duration: 0.2 });

      btn.addEventListener("mouseenter", onMouseEnter);
      btn.addEventListener("mouseleave", onMouseLeave);

      return () => {
        btn.removeEventListener("mouseenter", onMouseEnter);
        btn.removeEventListener("mouseleave", onMouseLeave);
      };
    }
    gsap.to(`.${styles.textoFadeIn}`, { opacity: 1, duration: 1 });


  }, []);

  return (
    <div className={classNames(className, styles.invitationContainer)}>
      <div className={styles.leftColumn} />
      <div className={styles.rightColumn}>
        <div className={styles.align_text_wedding}>
          <p className={styles.h1_custom}>Oops!...</p>
          <p className={styles.textoFadeIn}>Esta página se ha escapado con un centro de mesa.</p>
          <p className={styles.textoFadeIn}>El camino de regreso a nuestra boda está por aquí.</p>
          <div className={styles.centeredContainer}>
            <a className={styles.btn_wedding} href="/"><span>Regresar</span></a>
          </div>
          <DateLocation date={dateParts} location={locationText} />
        </div>
      </div>
    </div>
  )
}

export default Error