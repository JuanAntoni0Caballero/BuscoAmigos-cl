import axios from 'axios'

class PlanService {

    constructor() {
        this.api = axios.create({
            baseURL: `${process.env.REACT_APP_API_URL}/plan`
        })
    }

    getPlan() {
        return this.api.get('/getAllPlan')
    }

    getOnePlan(coaster_id) {
        return this.api.get(`/getOnePlan/${coaster_id}`)
    }

    savePlan(coasterData) {
        return this.api.post('/savePlan', coasterData)
    }
}

const planService = new PlanService()

export default planService