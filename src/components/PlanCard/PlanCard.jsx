import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'



const PlanCard = ({ _id, title, origin, destination, date, duration, image, typePlan, description }) => {

    return (

        <Link to={`/planDetails/${_id}`}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <p>{origin} ~ {destination}</p>
                    {(duration == 0) ? <p>{date}</p> : <p>{date} ~ {duration} noche/es</p>}
                </Card.Body>
            </Card>
        </Link>
    )
}

export default PlanCard