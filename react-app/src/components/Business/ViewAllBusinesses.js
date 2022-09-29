import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { getAllBusinesses } from "../../store/business"

export default function Businesses() {
    const dispatch = useDispatch()
    const [isLoaded, setIsLoaded] = useState(false)

    const businessesList = useSelector(state => state.businesses)
    const businesses = Object.values(businessesList)

    useEffect(() => {
        dispatch(getAllBusinesses()).then(() => setIsLoaded(true))
    }, [dispatch])

    return isLoaded ? (
        <>
            <div>
                All Businesses:
                {businesses.map(bus => (
                    <div key={bus.id}>
                        <NavLink to={`/businesses/${bus.id}`}>{bus.name}</NavLink>
                    </div>
                ))}
            </div>
        </>
    ) : null
}
