import { useEffect } from "react"
import { Container } from "react-bootstrap"
import Plan from "../../components/Plan/Plan"
import planService from "../../service/plan.service"

const PlanPage = () => {


    useEffect(() => {
        planService()
            .getPlan()
            .then(({ data }) => console.log(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <Container>
            <Plan />
        </Container>
    )
}

export default PlanPage