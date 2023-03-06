import { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import Plan from "../../components/Plan/Plan"
import planService from "../../service/plan.service"


const PlanPage = () => {
    
    const [a, setA] = useState([])

    useEffect(() => {
        planService
            .getPlan()
            .then(({ data }) => setA(data))
            .catch(err => console.log(err))
    }, [])


    return (
        <Container>
            <Plan />
            <div>
                {a.map(elm => <h1>{elm.title}</h1>)}
            </div>
        </Container>
    )
}

export default PlanPage