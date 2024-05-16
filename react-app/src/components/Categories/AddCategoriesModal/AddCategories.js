import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { getAllBusinesses } from "../../../store/business"
import { getOneCategories, toAddCategories } from "../../../store/categories"
import AddCategoriesButton from "./AddCategoriesButton"
import './AddCategoriesModal.css'

export default function AddCategories({ setShowModal }) {
    const dispatch = useDispatch()
    const { businessId } = useParams()
    const [selectedCate] = useState([])
    const [categories, setCategories] = useState([])
    // const Cate = useSelector(state => state.categories)

    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/categories')

            if (response.ok) {
                const data = await response.json()
                setCategories(data.categories)
            }
        }
        fetchData()

    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        let categoriesToAdd = {}
        selectedCate.forEach(catey => {
            categoriesToAdd[catey.id] = catey.name
        })

        await dispatch(toAddCategories(businessId, categoriesToAdd))

        await setShowModal(false)
    }
    return categories.length > 0 ? (
        <div className="add-category-container">
            <h2 className="add-category-title">
                Add Categories to Business

            </h2>
            <div >
                <form className="category-list-container" onSubmit={handleSubmit}>
                    <div className="entire-category-container-form">
                        {categories.map(cate => (
                            <AddCategoriesButton key={cate.id} cate={cate} selectedCate={selectedCate} />
                        ))}

                    </div>
                    <div className="category-button-container-add">
                        <button className="category-form-cancel" type="button" onClick={() => setShowModal(false)}> Cancel</button>
                        <button className="category-form-cancel" type="submit"> Submit</button>
                    </div>
                </form>
            </div>
        </div>
    ) : null
}
