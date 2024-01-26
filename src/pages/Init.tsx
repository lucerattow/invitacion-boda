import React from "react"
import { useParams, useNavigate } from 'react-router-dom';
import { routeHome } from "@/routes"
import { useAppContext } from '@/hooks';

export const Init: React.FC = () => {
  const { id } = useParams();
  const { loadUser, findUser } = useAppContext()
  const navigate = useNavigate()

  React.useEffect(() => {
    const result = findUser(id)
    result && loadUser(result)

    navigate(routeHome)
  }, [])

  return (<></>)
}

export default Init