import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import PlanSearchForm from '../../components/PlanSearchForm/PlanSearchForm'


const HomePage = () => {

    return (
        <Container className="Home">

            <Row>

                <Col md={{ span: 10, offset: 1 }}>

                    <h1>Busco Amigos</h1>
                    <hr />

                    <PlanSearchForm />

                </Col>

            </Row>

        </Container>
    )
}

export default HomePage