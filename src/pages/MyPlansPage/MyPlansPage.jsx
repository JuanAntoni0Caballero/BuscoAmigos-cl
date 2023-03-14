import { useEffect, useState, useContext } from "react"
import { AuthContext } from "../../contexts/auth.context"
import planService from "../../services/plan.service"
import { Container, Row, Col, Button } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"



const MyPlansPage = () => {


    const navigate = useNavigate()

    const [plans, setPlans] = useState([])

    useEffect(() => {
        loadPlans()
    }, [])

    const { user } = useContext(AuthContext)

    const loadPlans = () => {

        planService
            .getMyPlans(user._id)
            .then(({ data }) => setPlans(data))
            .catch(err => console.log(err))

    }


    const handleDeletePlan = plan_id => {

        planService
            .deletePlan(plan_id)
            .then(() => navigate('/myPlans'))
            .catch(err => console.log(err))
    }

    return (

        <Container>

            <Row>

                <Col md={{ span: 6, offset: 1 }}>


                    {
                        plans?.map(elm => {
                            return (
                                <Container>

                                    < h6 > Description</h6>
                                    <p>{elm.description}</p>
                                    <h6>Origen</h6>
                                    <p>{elm.origin}</p>
                                    <h6>Destino</h6>
                                    <p>{elm.destination}</p>
                                    <h6>Fecha</h6>
                                    <p>{elm.date}</p>
                                    <h6>Duración</h6>
                                    <p>{elm.duration}</p>
                                    <hr />

                                    <img src={elm.typePlan?.picture} style={{ width: '100%' }} alt='PlanImg' />

                                    <Link to={`/planEdit/${elm._id}`}>
                                        <Button as="figure" variant="dark">Edit</Button>
                                    </Link>

                                    <Link to='/plan'>
                                        <Button as="figure" onClick={() => handleDeletePlan(elm._id)} variant="dark">Delete</Button>
                                    </Link>

                                    <Link to="/profile">
                                        <Button as="figure" variant="dark">Go back</Button>
                                    </Link>
                                </Container>
                            )
                        })
                    }




                </Col>
            </Row>
        </Container >


    )


}

export default MyPlansPage