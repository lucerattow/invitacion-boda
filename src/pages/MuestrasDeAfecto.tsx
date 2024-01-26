import React, { useEffect, useState } from 'react';
import gsap from 'gsap';
import classNames from "classnames";
import { DateLocation } from "@/components";
import styles from "@/styles/Global.module.scss";
import gifGames from "@/assets/games.gif";

export type MuestrasDeAfectoProps = {
  className?: string
}

export const MuestrasDeAfecto: React.FC<MuestrasDeAfectoProps> = ({ className }) => {
  const dateParts = ['18', 'FEB', '2024'];
  const locationText = 'Km 17.5 carr vieja a León';
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
    gsap.to(`.${styles.programmerJoke}`, { opacity: 1, duration: 1 });

    setTimeout(() => {
      gsap.to(`.${styles.programmerJoke}`, { opacity: 0, duration: 1 });
      setShowMessage(false);
    }, 5000);
  };

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
        <div className={styles.textContent}>
          <div className={styles.titleContainer}>
            <h1>Pronto emprenderemos un nuevo viaje</h1>
          </div>
          <p>
            Apreciamos mucho su amor y apoyo. Si desean obsequiarnos algo, nos encantaría recibir regalos
            que quepan en nuestra maleta o muestras de amor en sobres 💵😏🤣!
          </p>
          <p>
            Mientras unimos nuestras vidas, te invitamos a unirte a la partida: trae tu control y celebremos juntos
          </p>
          <img
            src={gifGames}
            alt="Control de SNES"
            title="Control Clásico de SNES"
            className={styles.namesSvg}
            onClick={handleClick}
          />
          {showMessage && (
            <div className={styles.programmerJoke}>
              <p>Si encuentras un bug, ¡felicidades! Acabas de encontrar una característica exclusiva diseñada por nosotros, los novios programadores. 😉</p>
              <p>En nuestra boda, esperamos menos bugs y más amor. 💻❤️</p>
            </div>
          )}
          <div className={styles.paraContainer} />
          <DateLocation date={dateParts} location={locationText} />
        </div>
      </div>
    </div>
  );
};

export default MuestrasDeAfecto;
