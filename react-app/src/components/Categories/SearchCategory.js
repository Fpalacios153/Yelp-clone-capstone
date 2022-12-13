import { useEffect, useState } from "react"

export default function SearchCategories({ cate }) {
    const [categories, setCategories] = useState([])
    const [selectedCate, setSelectedCate] = useState([])
    const [chosen, setChosen] = useState(false)


    function afterPush(cate) {
        setSelectedCate(cate)
        setChosen(!chosen)
    }
    return (
        <div>

            <button className={chosen ? "business-category-item-picked" : 'business-category-item-not-picked'}
                type='button' key={cate.id} onClick={() => afterPush(cate.name)} >{cate.name}
            </button>

        </div>
    )
}
