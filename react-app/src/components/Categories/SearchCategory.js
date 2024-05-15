import { useState } from "react"

export default function SearchCategories({ cate, setSelectedCate }) {
    const [chosen, setChosen] = useState(false)


    function afterPush(cate) {
        setSelectedCate(cate)
        setChosen(!chosen)

    }

    return (
        <div>
            <button className={'business-category-item-not-picked'}
                type='button' key={cate.id} onClick={() => afterPush(cate.name)} >{cate.name}
            </button>

        </div>
    )
}
