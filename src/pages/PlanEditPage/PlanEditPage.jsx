import { Container, Row, Col } from 'react-bootstrap'
import PlanEditFrom from "../../components/PlanEditForm/PlanEditForm"


const PlanEditPage = () => {

    return (
        <Container>
            <Row>
                <Col md={{ offset: 3, span: 6 }}>

                    <h1>Editar el plan</h1>
                    <hr />

                    <PlanEditFrom />

                </Col>
            </Row>
        </Container>
    )
}

export default PlanEditPage