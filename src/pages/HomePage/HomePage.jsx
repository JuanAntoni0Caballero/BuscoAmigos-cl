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

        <div className='SearchForm'>

            <Container className="Home">

                <Row >
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

        </div>
    )
}

export default HomePage

