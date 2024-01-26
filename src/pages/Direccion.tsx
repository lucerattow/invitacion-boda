import React from "react"
import classNames from "classnames"
import styles from "@/styles/Global.module.scss"
import imgUbicacion from "@/assets/ubicacion.svg"

export type DireccionProps = {
  className?: string
}

export const Direccion: React.FC<DireccionProps> = ({ className }) => {
  return (
    <div className={classNames(className, styles.invitationContainer)}>
      <div className={styles.leftColumn} />
      <div className={styles.rightColumn}>
        <div className={styles.textContent}>
          <div className={styles.titleContainer}>
            <h1>Lugar del evento</h1>
          </div>
          <div className={styles.namesContainer}>

            <h3><span className={styles.direccion_label}>Centro Attentio</span><br /> Km 17.5 carr vieja a León <br /> 100 mts al norte</h3>
          </div>
          <a href="https://maps.app.goo.gl/hnNxbkjLBdb3vBGb8" target="_blank" rel="noopener noreferrer">
            <img src={imgUbicacion} alt="Mapa de ubicación de nuestra boda" title="ubicación" className={styles.namesSvg} />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Direccion