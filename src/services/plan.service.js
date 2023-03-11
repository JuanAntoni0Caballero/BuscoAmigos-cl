import axios from 'axios'

class PlanService {

    constructor() {


        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/plan`
        })


        this.api.interceptors.request.use((config) => {

            const storedToken = localStorage.getItem("authToken")

            if (storedToken) {
                config.headers = { Authorization: `Bearer ${storedToken}` }
            }

            return config
        })

    }

    getPlans({ origin, destination, date, duration, typePlan }) {
        return this.api.get(`/getPlans?origin=${origin}&destination=${destination}&date=${date}&duration=${duration}&typePlan=${typePlan}`)
    }

    getOriginPlan() {
        return this.api.get('/getOriginPlan')
    }

    getDestinationPlan() {
        return this.api.get('/getDestinationPlan')
    }

    getTypePlan() {
        return this.api.get('/getTypePlan')
    }

    getOnePlan(plan_id) {
        return this.api.get(`/getOnePlan/${plan_id}`)
    }

    createPlan(planData) {
        return this.api.post('/createPlan', planData)
    }

    deletePlan(plan_id) {
        return this.api.delete(`/deletePlan/${plan_id}`)
    }

    editPlan(plan_id, planData) {
        return this.api.put(`/editPlan/${plan_id}`, planData)
    }
}

const planService = new PlanService()

export default planService