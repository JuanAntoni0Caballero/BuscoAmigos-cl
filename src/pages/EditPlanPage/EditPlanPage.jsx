import { Container, Row, Col } from 'react-bootstrap'
import EditPlanFrom from "../../components/EditPlanFrom/EditPlanFrom"


const EditPlanPage = () => {


    return (
        <Container>

            <Row>

                <Col md={{ offset: 3, span: 6 }}>

                    <h1>Editar el plan</h1>

                    <hr />

                    <EditPlanFrom />

                </Col>
            </Row>

        </Container>
    )
}

export default EditPlanPage