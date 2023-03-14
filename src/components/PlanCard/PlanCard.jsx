import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'



const PlanCard = ({ _id, title, origin, destination, date, duration, typePlan, description }) => {

    return (

        <Link to={`/planDetails/${_id}`}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={typePlan.picture} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <p>{origin} ~ {destination}</p>
                    <p>{date} ~ {duration} noches</p>
                </Card.Body>
            </Card>
        </Link>
    )
}

export default PlanCard