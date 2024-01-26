import React, { useState, useEffect, createContext, ReactNode } from 'react'
import { Invitado } from "@/interfaces"
import { invitados } from "@/data"

//Defino el contexto
interface AppContextType {
  //states
  user: Invitado | null
  //setters
  loadUser: (userData: Invitado) => void
  findUser: (userId: string | undefined) => Invitado | undefined
}

export const AppContext = createContext<AppContextType | null>(null)

//Defino el componente que provee el contexto
interface AppContextProviderProps {
  children: ReactNode
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  const [user, setUser] = useState<Invitado | null>(null)

  const findUser = (userId: string | undefined) => {
    console.log(userId)
    if (userId) {
      return invitados.find((invitado) => invitado.id === userId)
    } else {
      return undefined
    }
  }

  const loadUser = (userData: Invitado) => {
    if (userData) {
      window.sessionStorage.setItem("userId", userData.id);
      setUser(userData);
    }
  }

  useEffect(() => {
    if (user) {
      window.sessionStorage.setItem("userId", user.id);
    } else {
      const userId = window.sessionStorage.getItem("userId") || undefined;
      const result = findUser(userId)
      result && setUser(result)
    }
  }, [user])

  const data: AppContextType = {
    user,
    loadUser,
    findUser
  };

  return (
    <AppContext.Provider value={data}>
      {children}
    </AppContext.Provider>
  )
}
