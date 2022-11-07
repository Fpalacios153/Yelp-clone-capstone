import './Categories.css'

export default function Categories() {
    const typesOfBusiness = [
        { "type": "Burgers", "icon": "linkHere" },
        { "type": "Pizza", "icon": "linkHere" },
        { "type": "Italian", "icon": "linkHere" },
        { "type": "Mexican", "icon": "linkHere" },
        { "type": "American", "icon": "linkHere" },
        { "type": "Japanese", "icon": "linkHere" },
        { "type": "Chineses", "icon": "linkHere" },
    ]
    return (
        <div className='entire-categories-container' >
            {typesOfBusiness.map(business => (
                <h2 className='categories-item'>
                    {business.type}
                </h2>
            ))}
        </div>
    )
}
