import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { getAllBusinesses } from "../../store/business"
import { deleteABusiness } from "../../store/business"
// import { useHistory } from "react-router-dom"

export default function Businesses() {
    const dispatch = useDispatch()
    const [isLoaded, setIsLoaded] = useState(false)
    // const history = useHistory()

    const businessesList = useSelector(state => state.businesses)
    const businesses = Object.values(businessesList)

    useEffect(() => {
        dispatch(getAllBusinesses()).then(() => setIsLoaded(true))
    }, [dispatch])
    const toDelete = async (id) => {
        // e.preventDefault()
        await dispatch(deleteABusiness(id))
        // await history.push('/')
    }
    return isLoaded ? (
        <>
            <div>
                All Businesses:
                {businesses.map(bus => (
                    <div key={bus.id}>
                        <NavLink to={`/businesses/${bus.id}`}>{bus.name}</NavLink>
                        <div>
                            <button onClick={() => toDelete(bus.id)}>DELETE</button>
                        </div>

                    </div>
                ))}
            </div>
        </>
    ) : null
}
