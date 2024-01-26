import React from "react"
import classNames from "classnames"
import { DateLocation } from "@/components"
import { useAppContext } from '@/hooks'
import styles from "@/styles/Global.module.scss"
import iconDecorateWedding1 from "@/assets/Icon_decorate_wedding_1.svg"
import iconDecorateWedding2 from "@/assets/Icon_decorate_wedding_2.svg"
import imgLucasName from "@/assets/LucasSVG.svg"
import imgGenesisName from "@/assets/GenesisSVG.svg"

export type HomeProps = {
  className?: string
}

export const Home: React.FC<HomeProps> = ({ className }) => {
  const { user } = useAppContext()
  const dateParts = ['18', 'FEB', '2024'];
  const locationText = 'Km 17.5 carr vieja a León';

  return (
    <div className={classNames(className, styles.invitationContainer)}>
      <div className={styles.leftColumn} />
      <div className={styles.rightColumn}>
        <div className={styles.textContent}>
          <div className={styles.heartContainer}>
            <div className={styles.heart} />
          </div>
          <div className={styles.titleContainer}>
            <img src={iconDecorateWedding2} alt="Detalle decorativo de boda" title="Adorno Elegante de Boda" className={styles.decorativeSvg} />
            <h1 className={styles.title_custom}>
              Celebración de nuestra unión
            </h1>
            <img src={iconDecorateWedding1} alt="Elemento decorativo de boda" title="Diseño Decorativo para Boda" className={styles.decorativeSvg} />
          </div>
          <div className={styles.namesContainer}>
            <img src={imgLucasName} alt="Lucas" title="Lucas" className={styles.namesSvg} />
            <span className={styles.custom_text}>&</span>
            <img src={imgGenesisName} alt="Genesis" title="Genesis" className={styles.namesSvg} />

          </div>
          <p>Te invitamos a ser parte del capítulo más mágico de nuestra historia: el día de nuestra boda.</p>

          <div className={styles.paraContainer}>
            <p>
              <b>Para: {user?.name}</b>
            </p>
          </div>
          <div className={styles.data_invitados}>
            <p>
              <i className="fa fa-table"></i> Mesa: {user?.tableNumber}{" "}<br />
              <i className="fa fa-users"></i> Válido para: {user?.validFor}
            </p>

          </div>
          <p className={styles.cita}> "El amor es paciente, el amor es bondadoso."<br /> 1 Corintios 13:4</p>
          <div className={styles.data_invitados}>
            <p className={styles.hora}>3:00 p.m.</p>
          </div>
          <DateLocation date={dateParts} location={locationText} />
        </div>

      </div>
    </div>
  )
}

export default Home