import { Route, Routes } from "react-router-dom"
import PrivateRoute from "./PrivateRoute"
import LoginPage from "../pages/LoginPage/LoginPage"
import HomePage from "../pages/HomePage/HomePage"
import SignupPage from "../pages/SignupPage/SignupPage"
import PlanDetailsPage from "../pages/PlanDetailsPage/PlanDetailsPage"
import PlanEditPage from "../pages/PlanEditPage/PlanEditPage"
import PlanNewPage from "../pages/PlanNewPage/PlanNewPage"
import ProfilePage from "../pages/ProfilePage/PofilePage"
import EditUserPage from "../pages/EditUserPage/EditUserPage"
import ProfilePost from "../components/ProfilePost/ProfilePost"
import ImboxPage from "../pages/InboxPage/Inbox.Page"
import ContactPage from "../pages/ContactPage/ContactPage"



const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contact" element={<ContactPage />} />

            <Route element={<PrivateRoute />}>

                <Route path="/create-plan" element={<PlanNewPage />} />
                <Route path="/planDetails/:plan_id" element={<PlanDetailsPage />} />
                <Route path="/planEdit/:plan_id" element={<PlanEditPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/editUser" element={<EditUserPage />} />
                <Route path="/deleteUser" element={<HomePage />} />
                <Route path="/inbox" element={<ImboxPage />} />
                <Route path="/inbox/:conversation_id" element={<ProfilePost />} />


            </Route>


            {/* <Route path="/gift" element={<GiftPage />} /> */}
            {/* <Route path="*" element={<p>404</p>} /> */}
        </Routes>
    )
}

export default AppRoutes