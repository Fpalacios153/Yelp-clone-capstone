import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getOneCategories, toRemoveCategories } from "../../store/categories"
import './BusinesseCategories.css'

export default function GetCategoriesOfBusiness({ business, currentUser }) {
    const dispatch = useDispatch()
    const { businessId } = useParams()
    const businessCategories = useSelector(state => state.categories)
    const businessCategoriesArr = Object.values(businessCategories)

    useEffect(() => {
        dispatch(getOneCategories(businessId))
    }, [])

    const toDelete = (cateId) => {
        dispatch(toRemoveCategories(business.id, cateId))
    }
    return currentUser ? (
        <>
            <div className="entire-category-container">
                {businessCategoriesArr.map(cate => (

                    <div className='business-category-item' key={cate.id}>
                        <div className="category-button-container">{cate.name}</div>
                        {currentUser.id === business.ownerId ? (

                            <button className="category-delete-button" onClick={() => toDelete(cate.id)}>
                                <i className="fa-solid fa-xmark"></i>
                            </button>
                        ) : null
                        }
                    </div>


                ))}


            </div>
        </>
    ) :
        <div className="entire-category-container">
            {businessCategoriesArr.map(cate => (

                <div className='business-category-item' key={cate.id}>
                    <div className="category-button-container">{cate.name}</div>
                    {/* {currentUser.id === business.ownerId ? (

                        <button className="category-delete-button" onClick={() => toDelete(cate.id)}>
                            <i className="fa-solid fa-xmark"></i>
                        </button>
                    ) : null
                    } */}
                </div>


            ))}


        </div>
}
