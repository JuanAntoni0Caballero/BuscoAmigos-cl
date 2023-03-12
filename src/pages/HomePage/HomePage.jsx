import { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PlanSearchForm from '../../components/PlanSearchForm/PlanSearchForm'
import PlanCard from "../../components/PlanCard/PlanCard"

const HomePage = () => {

    const [plansFounded, setPlansFounded] = useState([])

    const getPlans = (data) => {
        setPlansFounded(data)
    }


    return (

        <Container className="Home">

            <h1>Busco Amigos</h1>
            <hr />

            <Row>

                <PlanSearchForm getPlans={getPlans} />

                {plansFounded.length >= 1
                    ? plansFounded.map(elm => (
                        <Col md={3} key={elm._id}>
                            <PlanCard {...elm} />
                        </Col>
                    ))
                    : <p>No matches....</p>
                }

            </Row>


        </Container >
    )
}

export default HomePage

