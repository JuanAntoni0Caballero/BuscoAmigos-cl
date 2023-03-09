import { Container, Row, Col } from 'react-bootstrap'
import PlanNewForm from "../../components/PlanNewForm/PlanNewForm"


const PlanNewPage = () => {


    return (
        <Container>

            <Row>

                <Col md={{ offset: 3, span: 6 }}>

                    <h1>Crear un nuevo plan</h1>

                    <hr />

                    <PlanNewForm />

                </Col>
            </Row>

        </Container>
    )
}

export default PlanNewPage