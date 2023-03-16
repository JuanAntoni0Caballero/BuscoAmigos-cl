import { Card, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Loader from '../Loader/Loader'
import './PlanCard.css'


const PlanCard = ({ _id, title, origin, destination, date, duration, image, owner }) => {

    if (!PlanCard) {
        return (
            <Loader />
        )
    }


    return (

        <Link to={`/planDetails/${_id}`}>
            <Card className='CardPlan'>
                <Card.Header as="h5">
                    <img className='CardPlanAvatar' src={owner ? owner.avatar : '/images/icon-yellow-2.png'} alt="Avatar" />
                    {owner?.username}
                </Card.Header>

                <Card.Img className='CardPlanImage' variant="top" src={image} />

                <Card.Body className='CardPlanBody'>
                    <Card.Title className='CardPlanTitle'>{title}</Card.Title>
                    <p>{origin} ~ {destination}</p>
                    {(duration == 0) ? <p>{date}</p> : <p>{date} ~ {duration} noche/es</p>}
                </Card.Body>
            </Card>
        </Link>
    )
}

export default PlanCard