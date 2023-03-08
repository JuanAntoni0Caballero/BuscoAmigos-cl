import { Container, Row, Col } from 'react-bootstrap'
import NewPlanFrom from "../../components/NewPlanForm/NewPlanForm"


const NewPlanPage = () => {


    return (
        <Container>

            <Row>

                <Col md={{ offset: 3, span: 6 }}>

                    <h1>Crear un nuevo plan</h1>

                    <hr />

                    <NewPlanFrom />

                </Col>
            </Row>

        </Container>
    )
}

export default NewPlanPage