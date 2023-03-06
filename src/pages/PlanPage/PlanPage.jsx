import { Container } from "react-bootstrap"
import Plan from "../../components/Plan/Plan"


const PlanPage = ({ plan }) => {



    return (
        <Container>
            <h1>Listado de Planes</h1>
            <hr />
            <Plan plan={plan} />
        </Container>
    )
}

export default PlanPage