import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom';



function PlanCard({ plan }) {

    return (

        <Link to={`/details/${plan._id}`}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{plan.title}</Card.Title>
                    <p>{plan.destination}</p>
                    <img src={plan.imageUrl} alt="image" />
                    <Card.Text>
                        {plan.description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default PlanCard