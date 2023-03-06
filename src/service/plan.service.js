import axios from 'axios'

class PlanService {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/plan`
        })
    }

    getPlan() {
        return this.api.get('/getPlans')
    }

    savePlan(coasterData) {
        return this.api.post('/savePlan', coasterData)
    }

    getOnePlan(coaster_id) {
        return this.api.get(`/getOnePlan/${coaster_id}`)
    }

    editPlan(coaster_id) {
        return this.api.get(`/editPLan/${coaster_id}`)
    }

    deletePlan(coaster_id) {
        return this.api.post(`/deletePlan/${coaster_id}`)
    }
}

const planService = new PlanService()

export default planService