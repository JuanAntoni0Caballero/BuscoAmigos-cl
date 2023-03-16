import { useEffect, useState, useContext } from "react"
import { AuthContext } from "../../contexts/auth.context"
import planService from "../../services/plan.service"
import { Container, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import './MyPlansPage.css'

const MyPlansPage = () => {

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


    return (

        <Container>

            {
                plans?.map(elm => {
                    return (

                        <div className="card" key='elm.id'>
                            <Link to={`/planDetails/${elm._id}`}>
                                <Card className='CardPlan'>

                                    <Card.Img className='CardPlanImage' variant="top" src={elm.image} />

                                    <Card.Body className='CardPlanBody'>
                                        <Card.Title className='CardPlanTitle'>{elm.title}</Card.Title>
                                        <p>{elm.origin} ~ {elm.destination}</p>
                                        {(elm.duration == 0) ? <p>{elm.date}</p> : <p>{elm.date} ~ {elm.duration} noche/es</p>}
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    )
                })
            }

        </Container >
    )
}

export default MyPlansPage