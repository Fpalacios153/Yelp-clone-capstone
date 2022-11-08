import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getAllCategories, getOneCategories, toAddCategories } from "../../../store/categories"
// import { getAllCategories, toAddCategories } from "../../../store/categories"

export default function AddCategories({ setShowModal }) {
    const dispatch = useDispatch()
    const { businessId } = useParams()
    const [selectedCate, setSelectedCate] = useState([])
    const Cate = useSelector(state => state.categories)
    const cateArr = Object.values(Cate)
    console.log(selectedCate)

    useEffect(() => {
        dispatch(getAllCategories())
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        let categoriesToAdd = {}
        selectedCate.forEach(catey => {
            categoriesToAdd[catey.id] = catey.name
        })

        dispatch(toAddCategories(businessId, categoriesToAdd)).then(() => dispatch(getOneCategories(businessId)))
        setShowModal(false)
    }
    const toPush = (name) => {
        selectedCate.push(name)
    }
    return (
        <div className="add-category-container">
            <h2 className="add-category-title">
                Add Categories to Business

            </h2>
            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        {cateArr.map(cate => (
                            <button type='button' key={cate.id} onClick={() => toPush(cate)}>{cate.name}</button>
                        ))}

                    </div>
                    <button type="submit"> Submit</button>
                </form>
            </div>
        </div>
    )
}
