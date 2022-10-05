import { useState } from "react";
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

    const [hasSubmitted, setHasSubmitted] = useState(false)
    const [errors, setErrors] = useState([])

    // const currentUser = useSelector(state => state.session.user)


    const handleSubmit = async (e) => {
        e.preventDefault()
        setHasSubmitted(true)
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
        let data = await dispatch(updateABusiness(newBusiness, business.id));

        if (Array.isArray(data)) {
            setErrors(data)
        } else {
            // await history.push(`/businesses/${data.id}`)
            await setShowModal(false)
            await dispatch(getAllBusinesses())

        }

    }

    return (
        <>
            <div className="business-form-container">
                <h2 className="buisness-form-title">
                    {/* grabe red from log in */}
                    Update Business
                </h2>
                <div style={{ display: 'flex' }}>
                    <form onSubmit={handleSubmit} className="form-holder">
                        <label>
                            <input
                                type="text"
                                name="name"
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
                                // required
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

                                // required
                                maxLength={12}
                                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                                name="phone"
                                placeholder="Phone Format: 123-456-7890"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </label>
                        <label>
                            <input
                                className='login-form-input'
                                type="text"
                                required
                                name="Adress"
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
                                name="city"
                                placeholder="City"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            />
                        </label>
                        <label>

                            <input
                                className='login-form-input'
                                type="text"
                                required
                                name="state"
                                maxLength={2}
                                placeholder="State Ex:CA"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                            />
                        </label>
                        <label>
                            <input
                                className='login-form-input'
                                type="text"
                                required
                                name="zipcode"
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
                                maxLength='30'
                                name="country"
                                placeholder="Country"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                            />
                        </label>
                        <label>

                            <textarea
                                className='login-form-input textarea-business'
                                type="text"
                                required
                                wrap="hard"
                                maxLength='501'
                                spellCheck={true}
                                name="description"
                                placeholder="Desciption of business"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                        </label>
                        <label>

                            <input
                                className='login-form-input'
                                type="text"
                                // required
                                name="image"
                                placeholder="Image of business"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                            />
                        </label>

                        <button type="submit" className="login-form-buttom">Update</button>
                        <button className="business-form-cancel" onClick={() => setShowModal(false)}> Cancel</button>
                    </form>

                    <div>
                        {errors.length > 0 && (
                            <div>
                                {errors.map((error, id) => (
                                    <div className='error-text' key={id}>{error.split(":")[1]}</div>))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}
