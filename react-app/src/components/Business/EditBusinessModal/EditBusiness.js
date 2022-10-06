import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom"
import { getAllBusinesses, updateABusiness } from "../../../store/business";

export default function UpdateBusiness({ setShowModal }) {
    const dispatch = useDispatch()
    const history = useHistory()
    const { businessId } = useParams()

    const business = useSelector(state => state.businesses[businessId])
    const [name, setName] = useState(business.name)
    const [email, setEmail] = useState(business.email)
    const [phone, setPhone] = useState(business.phone)
    const [address, setAddress] = useState(business.address)
    const [state, setState] = useState(business.state)
    const [city, setCity] = useState(business.city)
    const [zipcode, setZipcode] = useState(business.zipcode)
    const [country, setCountry] = useState(business.country)
    const [description, setDescription] = useState(business.description)
    const [image, setImage] = useState(business.image)

    const business1 = useSelector(state => state.businesses)
    let businessArr = Object.values(business1)
    const originalName = business.name
    const originalEmail = business.email

    const [errors, setErrors] = useState([])

    const statesAbrivation = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY']

    useEffect(() => {
        let error = []
        if (address.length > 40) error.push('error:Address must be less than 40 character')
        if (city.length > 25) error.push('error:City must be less than 25 characters')
        if (country.length > 30) error.push('error:Country must be less than 30 characters')
        if (isNaN(zipcode) || zipcode.length > 5) error.push('error:Zipcode must be a 5 digit number')
        if (image.length && !image.includes('.png') && !image.includes('.jpeg') && !image.includes('.jpg')) error.push('error: Image must be in jpeg, jpg or png format')
        businessArr.map(business => {
            if (name.toLowerCase() === business.name.toLowerCase() && name.toLowerCase() && name !== originalName) {

                error.push('error:Business with that name already exists')
            }
        })
        businessArr.map(business => {
            if (email.toLowerCase() === business.email.toLowerCase() && email.toLowerCase() && email !== originalEmail) {

                error.push('error:Business with that name already exists')
            }
        })
        setErrors(error)
    }, [address, city, zipcode, country, image, name])


    const handleSubmit = async (e) => {
        e.preventDefault()
        // setHasSubmitted(true)
        const newBusiness = {
            id: business.id,
            name,
            email,
            phone,
            address,
            city,
            state,
            zipcode,
            country,
            description,
            image,
            ownerId: business.ownerId
        }
        if (!errors.length) {

            let data = await dispatch(updateABusiness(newBusiness, business.id));

            if (Array.isArray(data)) {
                setErrors(data)
            } else {
                // await history.push(`/businesses/${data.id}`)
                await setShowModal(false)
                await dispatch(getAllBusinesses())

            }
        }

    }

    return (
        <>
            <div className="business-form-container">

                <h2 className="buisness-form-title">
                    Update Business
                </h2>
                <div style={{ display: 'flex' }}>

                    <form onSubmit={handleSubmit} className="form-holder">
                        <div>
                            {errors.length > 0 && (
                                <div>
                                    {errors.map((error, id) => (
                                        <div className='error-text' key={id}>{error.split(":")[1]}</div>))}
                                </div>
                            )}
                        </div>
                        <div className="form-wide-container">

                            <div className="form-wide-left-container">
                                <label>
                                    <input
                                        type="text"
                                        name="name"
                                        required
                                        placeholder="Business's Name"
                                        className='login-form-input'
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </label>
                                <label>

                                    <input
                                        className='login-form-input'
                                        type="email"
                                        required
                                        name="email"
                                        placeholder="Business's Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </label>
                                <label>
                                    <input
                                        className='login-form-input'
                                        type="tel"
                                        required
                                        maxLength={14}
                                        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                        name="phone"
                                        placeholder="Phone Format: 123-456-7890"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </label>
                                <label>
                                    <textarea
                                        className='login-form-input textarea-business'
                                        type="text"
                                        // required
                                        wrap="hard"
                                        maxLength='500'
                                        spellCheck={true}
                                        name="description"
                                        placeholder="Description of business"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                    <div className="counter-div">

                                        <span>{description.length}/500</span>
                                    </div>
                                </label>
                            </div>
                            <div className="form-wide-right-container">

                                <label>


                                    <input
                                        className='login-form-input'
                                        type="text"
                                        required
                                        name="image"
                                        placeholder="Image of business"
                                        value={image}
                                        onChange={(e) => setImage(e.target.value)}
                                    />
                                </label>
                                <label>
                                    <input
                                        className='login-form-input'
                                        type="text"
                                        required
                                        maxLength={41}
                                        name="Address"
                                        placeholder="Business's Address"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                </label>
                                <label>

                                    <input
                                        className='login-form-input'
                                        type="text"
                                        required
                                        maxLength={26}
                                        name="city"
                                        placeholder="City"
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                    />
                                </label>
                                <label>
                                    <select name="rating"
                                        required
                                        value={state}
                                        onChange={(e) => setState(e.target.value)}
                                        className='login-form-input selected-state'
                                    >
                                        <option hidden required  >Select State </option>
                                        {statesAbrivation.map(state => (
                                            <option required key={state} value={state}>{state}</option>
                                        ))}
                                    </select>
                                </label>
                                <label>
                                    <input
                                        className='login-form-input'
                                        type="text"
                                        required
                                        name="zipcode"
                                        maxLength={6}
                                        placeholder="Zipcode"
                                        value={zipcode}
                                        onChange={(e) => setZipcode(e.target.value)}
                                    />
                                </label>
                                <label>
                                    <input
                                        className='login-form-input'
                                        type="text"
                                        required
                                        maxLength='31'
                                        name="country"
                                        placeholder="Country"
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                    />
                                </label>
                            </div>
                        </div>
                        <div className="button-create-container">

                            <button type="submit" className="login-form-buttom">Update Buisness</button>
                            <button className="login-form-buttom" onClick={() => setShowModal(false)}> Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
