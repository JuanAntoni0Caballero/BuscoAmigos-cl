import { useEffect, useState, useContext } from "react"
import { Button } from "react-bootstrap"
import Table from 'react-bootstrap/Table'
import { Link } from "react-router-dom"
import { AuthContext } from "../../contexts/auth.context"
import planService from "../../services/plan.service"



const MyPlansPage = () => {

    const [plans, setPlans] = useState([])

    useEffect(() => {
        loadPlans()
    }, [])

    const { user } = useContext(AuthContext)

    const loadPlans = () => {

        planService
            .getMyPlans()
            .then(({ data }) => setPlans(data))
            .catch(err => console.log(err))
    }
    console.log('mis planes', plans)


    return (
        <h1>Holi</h1>
    )
}

export default MyPlansPage