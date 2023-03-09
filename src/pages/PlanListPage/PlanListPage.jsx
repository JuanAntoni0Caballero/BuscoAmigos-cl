import { Container } from "react-bootstrap"
import PlanList from "../../components/PlanList/PlanList"


const PlanPage = ({ plan }) => {



    return (
        <Container>
            <h1>Listado de Planes</h1>
            <hr />
            <PlanList plan={plan} />
        </Container>
    )
}

export default PlanPage