import './Categories.css'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react'
import { getAllCategories } from '../../store/categories'


export default function Categories() {
    // const typesOfBusiness = [
    //     { "type": "Burgers", "icon": "linkHere" },
    //     { "type": "Pizza", "icon": "linkHere" },
    //     { "type": "Italian", "icon": "linkHere" },
    //     { "type": "Mexican", "icon": "linkHere" },
    //     { "type": "American", "icon": "linkHere" },
    //     { "type": "Japanese", "icon": "linkHere" },
    //     { "type": "Chineses", "icon": "linkHere" },
    // ]
    const dispatch = useDispatch()
    const Cate = useSelector(state => state.categories)
    const cateArr = Object.values(Cate)
    // console.log(cateArr)
    useEffect(() => {
        dispatch(getAllCategories())
    }, [dispatch])
    return (
        <div className='entire-categories-container' >
            {cateArr.map(category => (
                <h2 key={category.id} className='categories-item'>
                    {category.name}
                </h2>
            ))}
        </div>
    )
}
