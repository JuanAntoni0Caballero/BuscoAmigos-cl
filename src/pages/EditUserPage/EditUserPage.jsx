import { Container, Row, Col } from 'react-bootstrap'
import EditUserForm from "../../components/EditUserForm/EditUserForm"


const EditUserPage = () => {


    return (
        <Container>

            <Row>

                <Col md={{ offset: 3, span: 6 }}>

                    <h1>Editar usuario</h1>

                    <hr />

                    <EditUserForm />

                </Col>
            </Row>

        </Container>
    )
}

export default EditUserPage