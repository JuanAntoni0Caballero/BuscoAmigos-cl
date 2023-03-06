import { Route, Routes } from "react-router-dom"
import LoginForm from "../components/LoginForm/LoginForm"
import PlanPage from "../pages/PlanPage/PlanPage"
import HomePage from "../pages/HomePage/HomePage"

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/plan" element={<PlanPage />} />
            {/* <Route path="/register" element={<RegisterPage />} /> */}
            {/* <Route path="/profile" element={<ProfilePage />} /> */}
            {/* <Route path="/inbox" element={<InboxPage />} /> */}
            {/* <Route path="/contact" element={<ContactPage />} /> */}
            {/* <Route path="/gift" element={<GiftPage />} /> */}
            {/* <Route path="/create-plan" element={<PLanForm />} /> */}
            {/* <Route path="/details:id" element={<PLanDetailsPage />} /> */}
            {/* <Route path="*" element={<p>404</p>} /> */}
        </Routes>
    )
}

export default AppRoutes