import React from "react"
import classNames from "classnames"
import { Header } from '@/components'
import styles from "./Layout.module.scss"

export type LayoutProps = {
  className?: string
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ className, children }) => {
  return (
    <div className={classNames(className)}>
      <Header />
      {children}
    </div>
  )
}

export default Layout