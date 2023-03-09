import { Route, Routes } from "react-router-dom"
import LoginPage from "../pages/LoginPage/LoginPage"
import HomePage from "../pages/HomePage/HomePage"
import SignupPage from "../pages/SignupPage/SignupPage"
import PlanListPage from "../pages/PlanListPage/PlanListPage"
import PlanDetailsPage from "../pages/PlanDetailsPage/PlanDetailsPage"
import PlanEditPage from "../pages/PlanEditPage/PlanEditPage"
import PlanNewPage from "../pages/PlanNewPage/PlanNewPage"
import ProfilePage from "../pages/ProfilePage/PofilePage"
import EditUserForm from "../components/EditUserForm/EditUserForm"
import PrivateRoute from "./PrivateRoute"
import ProfilePost from "../components/ProfilePost/ProfilePost"


const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/plan" element={<PlanListPage />} />


            <Route element={<PrivateRoute />}>

                <Route path="/create-plan" element={<PlanNewPage />} />
                <Route path="/planDetails/:plan_id" element={<PlanDetailsPage />} />
                <Route path="/planEdit/:plan_id" element={<PlanEditPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/editUser" element={<EditUserForm />} />
                <Route path="/deleteUser" element={<HomePage />} />
                <Route path="/inbox" element={<ProfilePost />} />


            </Route>


            {/* <Route path="/contact" element={<ContactPage />} /> */}
            {/* <Route path="/gift" element={<GiftPage />} /> */}
            {/* <Route path="*" element={<p>404</p>} /> */}
        </Routes>
    )
}

export default AppRoutes