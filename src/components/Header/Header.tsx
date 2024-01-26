import React from "react"
import classNames from "classnames"
import { Link } from "react-router-dom"
import imgLetterWedding from "@/assets/letter-wedding.svg"
import imgTextureWedding from "@/assets/texture-wedding.svg"
import { routeHome, routeMuestrasDeAfecto, routeDireccion } from "@/routes"
import { Navbar } from "@/components"
import { Item } from '@/interfaces'
import styles from "./Header.module.scss"

export type HeaderProps = {
  className?: string
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  const items: Item[] = [
    {
      name: "Inicio",
      color: "#d58b43",
      url: routeHome
    },
    {
      name: "Muestras de cariño",
      color: "#d58b43",
      url: routeMuestrasDeAfecto
    },
    {
      name: "Dirección",
      color: "#d58b43",
      url: routeDireccion
    }
  ];

  return (
    <div className={classNames(className, styles.container)}>
      <Link to={routeHome}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src={imgLetterWedding} alt='logo letras boda' />
          <img className={styles.starterKitBanner} src={imgTextureWedding} alt='Banner circular boda' />
        </div>
      </Link>
      <Navbar items={items} />
      {/* <Link
        to='/'
        target='_blank'
        className={styles.dashboard}
      /> */}
    </div>
  )
}

export default Header