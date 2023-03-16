import { Route, Routes } from "react-router-dom"
import PrivateRoute from "./PrivateRoute"
import HomePage from "../pages/HomePage/HomePage"
import PlanDetailsPage from "../pages/PlanDetailsPage/PlanDetailsPage"
import PlanEditPage from "../pages/PlanEditPage/PlanEditPage"
import EditUserPage from "../pages/EditUserPage/EditUserPage"
import ImboxPage from "../pages/InboxPage/InboxPage"
import MyPlansPage from "../pages/MyPlansPage/MyPlansPage"
import AboutUsPage from "../pages/AboutUsPage/AboutUsPage"
import ErrorPage from "../pages/ErrorPage/ErrorPage"
import GiftPage from "../components/Gift/Gift"



const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/aboutUs" element={<AboutUsPage />} />
            <Route path="/planDetails/:plan_id" element={<PlanDetailsPage />} />
            <Route path="*" element={<ErrorPage />} />

            <Route element={<PrivateRoute />}>

                <Route path="/planEdit/:plan_id" element={<PlanEditPage />} />
                <Route path="/editUser" element={<EditUserPage />} />
                <Route path="/deleteUser" element={<HomePage />} />
                <Route path="/inbox" element={<ImboxPage />} />
                <Route path="/myPlans" element={<MyPlansPage />} />

            </Route>

        </Routes>
    )
}

export default AppRoutes