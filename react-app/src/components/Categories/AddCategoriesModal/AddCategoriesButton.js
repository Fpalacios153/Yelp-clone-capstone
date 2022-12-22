import { useEffect, useState } from "react"
// import { useSelector } from 'react-redux'

export default function AddCategoriesButton({ cate, selectedCate }) {
    const [chosen, setChosen] = useState(false)

    const toPush = (name) => {
        if (!selectedCate.includes(name)) {
            selectedCate.push(name)
            setChosen(!chosen)

        } else if (selectedCate.indexOf(name) > -1) {
            const index = selectedCate.indexOf(name)
            selectedCate.splice(index, 1)
            setChosen(!chosen)
        }
    }
    return (

        <button className={chosen ? "business-category-item-picked" : 'business-category-item-not-picked'}
            type='button' key={cate.id} onClick={() => toPush(cate)}>{cate.name}
        </button>
    )
}
