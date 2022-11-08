import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getOneCategories, toRemoveCategories } from "../../store/categories"

export default function GetCategoriesOfBusiness() {
    const dispatch = useDispatch()
    const { businessId } = useParams()
    const businessCategories = useSelector(state => state.categories)
    const businessCategoriesArr = Object.values(businessCategories)

    useEffect(() => {
        dispatch(getOneCategories(businessId))
    }, [])

    const toDelete = (id) => {
        dispatch(toRemoveCategories(businessId, id))
            .then(() => dispatch(getOneCategories(businessId)))
    }
    return (
        <>
            <div>
                {businessCategoriesArr.map(cate => (
                    <>
                        <div>{cate.name}</div>
                        <button onClick={() => toDelete(cate.id)}></button>
                    </>

                ))}


            </div>
        </>
    )
}
