import { useEffect, useState } from "react"
import planService from "../../service/plan.service"
import PlanCard from "../PlanCard/PlanCard"


const Plan = () => {

    const [plan, setPlan] = useState([])

    useEffect(() => {
        planService
            .getPlan()
            .then(({ data }) => setPlan(data))
            .catch(err => console.log(err))
    }, [])


    return (

        plan.map(elm => {

            return (
                <PlanCard key={elm._id} plan={elm} />
            )
        })

    )


}

export default Plan