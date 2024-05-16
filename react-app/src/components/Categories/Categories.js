import './Categories.css'
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react'
import { getAllCategories } from '../../store/categories'


export default function Categories() {
    const dispatch = useDispatch()
    const Cate = useSelector(state => state.categories)
    const cateArr = Object.values(Cate)

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
