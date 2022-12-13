import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { getAllBusinesses } from "../../store/business"
import { getOneCategories } from "../../store/categories"

import AverageStarRating from "../AverageStarRating"
import AddCategories from "../Categories/AddCategoriesModal/AddCategories"
import AddCategoriesButton from "../Categories/AddCategoriesModal/AddCategoriesButton"
import SearchCategories from "../Categories/SearchCategory"
// import Categories from "../Categories/Categories"s
import Footer from "../Footer"
import GetCategoriesOfBusiness from "./BusinessesCategories"
import './ViewAll.css'

export default function Businesses() {
    const dispatch = useDispatch()
    const [isLoaded, setIsLoaded] = useState(false)
    // const history = useHistory()

    const businessesList = useSelector(state => state.businesses)
    const [categories, setCategories] = useState([])
    const [selectedCate, setSelectedCate] = useState([])
    // const [chosen, setChosen] = useState(false)


    const businesses = Object.values(businessesList)
    console.log(businesses)
    console.log(selectedCate)



    useEffect(() => {
        dispatch(getAllBusinesses()).then(() => setIsLoaded(true))
    }, [dispatch])
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



    return isLoaded ? (
        <>
            <div className="entire-business-container">
                {/* <div>
                    <Categories />

                </div> */}
                <div className="business-title">
                    <span>
                        Businesses
                    </span>
                </div>
                <div className="search-by-category-container">
                    {categories.map(cate => (
                        <SearchCategories cate={cate} />
                    ))}
                </div>
                {businesses.map((bus, idx) => (
                    <div key={bus.id} className='business-container'>
                        <NavLink className='navlink-business-list' to={`/businesses/${bus.id}`}>
                            <div className="business-list">
                                <img
                                    className="business-image"
                                    src={bus.image}
                                    alt={bus.name}
                                    onError={e => { e.currentTarget.src = '/static/images/restpic/pexels-aleksandar-pasaric-3342739.jpg' }}

                                />
                                <div className="business-text-container">
                                    <div className="business-name">
                                        {idx + 1}.
                                        <div style={{ paddingLeft: '5px' }}>
                                            {bus.name}
                                        </div>
                                    </div>
                                    {/* <FavoritesOnBus /> */}

                                    <div className="business-average">
                                        <AverageStarRating reviewAverage={bus.reviewAverage} />
                                        <span style={{ fontWeight: '500', paddingLeft: '10px', paddingRight: '5px' }}>{bus.reviewAverage > 0 ? bus.reviewAverage.toFixed(1) : 0}</span>
                                        {' '}({bus.reviewCount > 0 ? bus.reviewCount : 0} reviews)
                                    </div>
                                    {/* {getId(bus.id)} */}
                                    {/* <GetCategoriesOfBusiness business={bus} /> */}
                                    <div className="entire-category-container-view-all">

                                        {bus.categories && bus.categories.map(cate => (
                                            <div className='business-category-item-view-all' key={cate.id}>
                                                <div className="category-button-container-view-all">{cate.name}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="business-review-container">
                                        <i className="fa-regular fa-comment"></i>
                                        {bus.reviews ? (
                                            <span style={{ paddingLeft: '5px', color: '#6E7072' }}>"{bus.reviews[0].review.length < 150 ? bus.reviews[0].review :
                                                `${bus.reviews[0].review.slice(0, 150)}...see more`}</span>

                                        ) :
                                            <span style={{ paddingLeft: '5px', color: '#6E7072' }}>"No Reviews yet"</span>
                                        }
                                    </div>
                                </div>
                            </div>
                        </NavLink>

                    </div>
                ))
                }
            </div >
            <Footer />
        </>
    ) : null
}
