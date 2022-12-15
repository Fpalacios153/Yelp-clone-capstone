import { useEffect, useState } from "react"

export default function SearchCategories({ cate, businesses, setSelectedCate, selectedCate, setSelection }) {
    const [categories, setCategories] = useState([])
    // const [selectedCate, setSelectedCate] = useState([])
    const [chosen, setChosen] = useState(false)


    function afterPush(cate) {
        // if (selectedCate.length === 0) {
        setSelectedCate(cate)
        setChosen(!chosen)

        // }
        // if (selectedCate.length > 0) {
        //     setSelection(businesses)

        //     setChosen(!chosen)
        // }

        // if (chosen) {
        //     setSelection([])
        // }
    }
    return (
        <div>

            <button className={chosen ? "business-category-item-picked" : 'business-category-item-not-picked'}
                type='button' key={cate.id} onClick={() => afterPush(cate.name)} >{cate.name}
            </button>

        </div>
    )
}
