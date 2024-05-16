import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { getAllBusinesses } from "../../store/business"

import AverageStarRating from "../AverageStarRating"
import SearchCategories from "../Categories/SearchCategory"
import Footer from "../Footer"
import './ViewAll.css'
import { getAllCategories } from "../../store/categories"

export default function Businesses() {
    const dispatch = useDispatch()
    const [isLoaded, setIsLoaded] = useState(true)

    const businessesList = useSelector(state => state.businesses)
    const categoriesList = useSelector(state => state.categories)

    // const [categories, setCategories] = useState([])

    const [selectedCate, setSelectedCate] = useState([])
    const [selection, setSelection] = useState([])


    const businesses = Object.values(businessesList)
    const categories = Object.values(categoriesList)


    useEffect(() => {
        dispatch(getAllBusinesses()).then(() => dispatch(getAllCategories())).then(() => setIsLoaded(true))

    }, [])

    // fetching the categories directly
    // useEffect(() => {
    //     async function fetchData() {
    //         const response = await fetch('/api/categories')

    //         if (response.ok) {
    //             const data = await response.json()
    //             setCategories(data.categories)
    //         }
    //     }
    //     fetchData()
    // }, [])



    // Category Filter
    useEffect(() => {
        let picked = []
        businesses.forEach(bus => {
            if (bus.categories) {
                bus.categories.forEach(cat => {
                    if (cat.name === selectedCate) {
                        picked.push(bus)
                    }
                })
            }
            setSelection(picked)
        })

    }, [selectedCate])


    return isLoaded ? (
        <>
            <div className="entire-business-container">
                <div className="business-title">
                    <span>
                        Businesses
                    </span>
                </div>

                <div className="business-container-with-search">
                    <div className="search-by-category-container">
                        <button className={'business-category-item-not-picked'}
                            onClick={() => { setSelectedCate([]) }}
                            type='button'> All Businesses
                        </button>
                        {categories.map(cate => (
                            <SearchCategories cate={cate} businesses={businesses} selectedCate={selectedCate} setSelectedCate={setSelectedCate} setSelection={setSelection} />
                        ))
                        }
                    </div>

                    {selectedCate.length > 0 ?
                        selection.map((bus, idx) => (
                            (<div key={bus.id} className='business-container'>
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
                                            <div className="business-average">
                                                <AverageStarRating reviewAverage={bus.reviewAverage} />
                                                <span style={{ fontWeight: '500', paddingLeft: '10px', paddingRight: '5px' }}>{bus.reviewAverage > 0 ? bus.reviewAverage.toFixed(1) : 0}</span>
                                                {' '}({bus.reviewCount > 0 ? bus.reviewCount : 0} reviews)
                                            </div>
                                            <div className="entire-category-container-view-all">

                                                {bus.categories ?
                                                    bus.categories.map(cate => (
                                                        <div className='business-category-item-view-all' key={cate.id}>
                                                            <div className="category-button-container-view-all">{cate.name}</div>
                                                        </div>
                                                    )) :
                                                    null
                                                }
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

                            </div>))
                        ) :
                        businesses.map((bus, idx) => (
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

                                            <div className="business-average">
                                                <AverageStarRating reviewAverage={bus.reviewAverage} />
                                                <span style={{ fontWeight: '500', paddingLeft: '10px', paddingRight: '5px' }}>{bus.reviewAverage > 0 ? bus.reviewAverage.toFixed(1) : 0}</span>
                                                {' '}({bus.reviewCount > 0 ? bus.reviewCount : 0} reviews)
                                            </div>

                                            <div className="entire-category-container-view-all">
                                                {bus.categories ? bus.categories.map(cate => (
                                                    <div className='business-category-item-view-all' key={cate.id}>
                                                        <div className="category-button-container-view-all">{cate.name}</div>
                                                    </div>
                                                )) : null
                                                }
                                            </div>
                                            <div className="business-review-container">
                                                <i className="fa-regular fa-comment"></i>
                                                {bus.reviews ? (
                                                    <span style={{ padding: '6px', color: '#6E7072' }}>
                                                        "{bus.reviews[0].review.length < 150 ? bus.reviews[0].review :
                                                            `${bus.reviews[0].review.slice(0, 150)}...see more`}
                                                    </span>

                                                ) :
                                                    <span style={{ paddingLeft: '5px', color: '#6E7072' }}>"No Reviews yet"</span>
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </NavLink>
                            </div>
                        ))}
                </div>

                {selection.length === 0 && selectedCate.length > 0 ?
                    <div className="no-business-in-category">
                        <h1>Nothing to see here!</h1>
                        <h2>No businesses in {selectedCate} category</h2>

                        <button className={'business-category-item-not-picked apples'}
                            onClick={() => { setSelectedCate([]) }}
                            type='button'>Back to All Businesses
                        </button>
                    </div>
                    :
                    null
                }
            </div >
            <Footer />
        </>
    ) :
        <>
            <div className="loading-screen">
                <h1>Loading...</h1>
                <img src="/static/images/logos/icons8-hamburger-48.png" alt="burger-loading" className="burger-spin"></img>
            </div>
            {/* <Footer /> */}
        </>
}
