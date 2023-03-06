import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
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
                <PlanCard plan={elm} />
            )
        })

        /* {plan.map(elm => <h1>{elm.title}</h1>)} */
    )


}

export default Plan