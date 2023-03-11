import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'



const PlanCard = ({ _id, typePlan, title, destination, description }) => {

    return (

        <Link to={`/planDetails/${_id}`}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={typePlan.picture} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <p>{destination}</p>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default PlanCard