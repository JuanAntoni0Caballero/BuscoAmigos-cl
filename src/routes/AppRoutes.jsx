import { Route, Routes } from "react-router-dom"
import PrivateRoute from "./PrivateRoute"
import HomePage from "../pages/HomePage/HomePage"
import PlanDetailsPage from "../pages/PlanDetailsPage/PlanDetailsPage"
import PlanEditPage from "../pages/PlanEditPage/PlanEditPage"
import ProfilePage from "../pages/ProfilePage/PofilePage"
import EditUserPage from "../pages/EditUserPage/EditUserPage"
import ImboxPage from "../pages/InboxPage/InboxPage"
import MyPlansPage from "../pages/MyPlansPage/MyPlansPage"
import ContactPage from "../pages/ContactPage/ContactPage"



const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/planDetails/:plan_id" element={<PlanDetailsPage />} />

            <Route element={<PrivateRoute />}>

                <Route path="/planEdit/:plan_id" element={<PlanEditPage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/editUser" element={<EditUserPage />} />
                <Route path="/deleteUser" element={<HomePage />} />
                <Route path="/inbox" element={<ImboxPage />} />
                {/* <Route path="/inbox/:conversation_id" element={<ProfilePost />} /> */}
                <Route path="/myPlans" element={<MyPlansPage />} />


            </Route>


            {/* <Route path="/gift" element={<GiftPage />} /> */}
            {/* <Route path="*" element={<p>404</p>} /> */}
        </Routes>
    )
}

export default AppRoutes