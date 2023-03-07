import axios from 'axios'

class PlanService {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/plan`
        })

        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken");

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })

    }

    getPlan() {
        return this.api.get('/getPlans')
    }

    savePlan(planData) {
        return this.api.post('/savePlan', planData)
    }

    getOnePlan(plan_id) {
        return this.api.get(`/getOnePlan/${plan_id}`)
    }

    editPlan(plan_id) {
        return this.api.get(`/edit/${plan_id}`)
    }

    deletePlan(plan_id) {
        return this.api.post(`/delete/${plan_id}`)
    }
}

const planService = new PlanService()

export default planService