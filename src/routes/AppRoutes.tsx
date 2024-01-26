import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, MuestrasDeAfecto, Direccion, Error, Init } from "@/pages"
import { useAppContext } from "@/hooks"
import { Layout } from "@/layout"
import { routeHome, routeMuestrasDeAfecto, routeDireccion, routeError, routeInitInvitado } from "@/routes"

export const AppRoutes = () => {
  const { user } = useAppContext()

  return (
    <Router>
      {user ? (
        <Layout>
          <Routes>
            <Route path={routeHome} element={<Home />} />
            <Route path={routeMuestrasDeAfecto} element={<MuestrasDeAfecto />} />
            <Route path={routeDireccion} element={<Direccion />} />
            <Route path={routeInitInvitado(":id")} element={<Init />} />

            <Route path={routeError} element={<Error />} />
          </Routes>
        </Layout>
      ) : (
        <Layout>
          <Routes>
            <Route path={routeInitInvitado(":id")} element={<Init />} />

            <Route path={routeError} element={<Error />} />
          </Routes>
        </Layout>
      )}
    </Router>
  )
}

export default AppRoutes