import { useEffect, useState } from "react"
import planService from "../../services/plan.service"
import PlanCard from "../PlanCard/PlanCard"


const PlansList = () => {

    const [plans, setPlans] = useState([])

    useEffect(() => {
        planService
            .getPlans()
            .then(({ data }) => setPlans(data))
            .catch(err => console.log(err))
    }, [])


    return (

        plans.map(elm => {

            return (
                <PlanCard key={elm._id} {...elm} />
            )
        })

    )


}

export default PlansList