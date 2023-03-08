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

    getTypePlan() {
        return this.api.get('/getTypePlan')
    }

    getOnePlan(plan_id) {
        return this.api.get(`/getOnePlan/${plan_id}`)
    }

    savePlan(planData) {
        return this.api.post('/savePlan', planData)
    }

    deletePlan(plan_id) {
        return this.api.post(`/delete/${plan_id}`)
    }

    editPlan(plan_id, planData) {
        return this.api.put(`/editPlan/${plan_id}`, planData)
    }
}

const planService = new PlanService()

export default planService