import { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap'
import PlanSearchForm from '../../components/PlanSearchForm/PlanSearchForm'
import PlanCard from "../../components/PlanCard/PlanCard"


const HomePage = () => {

    const [plansFounded, setPlansFounded] = useState([])

    const getPlans = (data) => {
        setPlansFounded(data)
    }


    return (
        <Container className="Home">

            <h1>Busco Amigos</h1>
            <hr />

            <PlanSearchForm getPlans={getPlans} />

            {plansFounded.length >= 1
                ? plansFounded.map(elm => <PlanCard key={elm._id} {...elm} />)
                : <p>No matches....</p>
            }

        </Container >
    )
}

export default HomePage

