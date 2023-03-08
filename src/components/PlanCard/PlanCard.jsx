import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';



const PlanCard = ({ plan }) => {

    return (

        <Link to={`/planDetails/${plan._id}`}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={plan.typePlan.picture} />
                <Card.Body>
                    <Card.Title>{plan.title}</Card.Title>
                    <p>{plan.destination}</p>
                    <Card.Text>
                        {plan.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default PlanCard