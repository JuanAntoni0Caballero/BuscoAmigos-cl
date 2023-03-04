import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const HomePage = () => {

    return (
        <Container className="Home">

            <Row>

                <Col md={{ span: 8, offset: 2 }}>

                    <h1>Busco Amigos</h1>
                    <hr />
                    <p>Siiiuuuuuuu</p>
                    {/* <Link to="/galeria">
                        <Button variant="dark">Ir a la galería</Button>
                    </Link> */}

                </Col>

            </Row>

        </Container>
    )
}

export default HomePage