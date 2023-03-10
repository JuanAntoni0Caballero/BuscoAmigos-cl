import { Container } from "react-bootstrap"
import PlansList from "../../components/PlanList/PlansList"


const PlanPage = () => {



    return (
        <Container>
            <h1>Listado de Planes</h1>
            <hr />
            <PlansList />
        </Container>
    )
}

export default PlanPage