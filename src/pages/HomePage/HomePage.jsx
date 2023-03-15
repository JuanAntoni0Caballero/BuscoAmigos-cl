import { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import PlanSearchForm from '../../components/PlanSearchForm/PlanSearchForm'
import PlanCard from "../../components/PlanCard/PlanCard"
import './HomePage.css'

const HomePage = () => {

    const [plansFounded, setPlansFounded] = useState([])

    const getPlans = (data) => {
        setPlansFounded(data)
    }


    return (

        <Container className="Home">

            <Row className='SearchForm'>
                <PlanSearchForm getPlans={getPlans} />
            </Row>

            <Row>
                {plansFounded.length >= 1
                    ? plansFounded.map(elm => (
                        <Col md={6} lg={4} xxl={3} className='CardPlanCol' key={elm._id}>
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

