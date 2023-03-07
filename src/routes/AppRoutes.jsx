import { Route, Routes } from "react-router-dom"
import LoginPage from "../pages/LoginPage/LoginPage"
import HomePage from "../pages/HomePage/HomePage"
import SignupPage from "../pages/SignupPage/SignupPage"
import PlanPage from "../pages/PlanPage/PlanPage"
import PlanDetailsPage from "../pages/PlanDetailsPage/PlanDetailsPage"
import NewPlanPage from "../pages/NewPlanPage/NewPlanPage"
import ProfilePage from "../pages/ProfilePage/PofilePage"


const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/plan" element={<PlanPage />} />
            <Route path="/details/:plan_id" element={<PlanDetailsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            {/* <Route path="/inbox" element={<InboxPage />} /> */}
            {/* <Route path="/contact" element={<ContactPage />} /> */}
            {/* <Route path="/gift" element={<GiftPage />} /> */}
            <Route path="/create-plan" element={<NewPlanPage />} />
            {/* <Route path="/details:id" element={<PLanDetailsPage />} /> */}
            {/* <Route path="*" element={<p>404</p>} /> */}
        </Routes>
    )
}

export default AppRoutes