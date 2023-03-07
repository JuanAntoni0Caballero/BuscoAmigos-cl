import { Container, Row, Col } from 'react-bootstrap'
import Profile from "../../components/Profile/Profile"


const ProfilePage = () => {

    return (

        <Container>

            <Row>

                <Col md={{ offset: 2, span: 8 }}>

                    <h1>My profile</h1>

                    <hr />

                    <Profile />

                </Col>

            </Row>

        </Container>
    )
}

export default ProfilePage