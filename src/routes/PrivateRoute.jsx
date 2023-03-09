import { useContext } from "react"
import { Outlet, Navigate } from "react-router-dom"
import Loader from "../components/Loader/Loader"
import { AuthContext } from "../context/auth.context"

const PrivateRoute = () => {

    const { user, isLoading } = useContext(AuthContext)

    if (!user) {
        return <Navigate to="/login" />
    }

    if (isLoading) {
        return <Loader />
    }

    return <Outlet />
}

export default PrivateRoute