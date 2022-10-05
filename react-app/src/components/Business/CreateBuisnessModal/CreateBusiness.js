import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom"
import { createABusiness } from "../../../store/business";
import './CreateBusiness.css'

export default function CreateNewBusiness({ setShowModal }) {
    const dispatch = useDispatch()
    const history = useHistory()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [state, setState] = useState('')
    const [city, setCity] = useState('')
    const [zipcode, setZipcode] = useState('')
    const [country, setCountry] = useState('')
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')

    const [hasSubmitted, setHasSubmitted] = useState(false)
    const [errors, setErrors] = useState([])

    const currentUser = useSelector(state => state.session.user)


    const handleSubmit = async (e) => {
        e.preventDefault()
        // setHasSubmitted(true)
        const newBusiness = {
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
            ownerId: currentUser.id
        }
        let data = await dispatch(createABusiness(newBusiness));

        console.log(data)
        if (Array.isArray(data)) {
            setErrors(data)
        } else {
            await history.push(`/businesses/${data.id}`)
            await setShowModal(false)
        }

    }

    return (
        <>
            <div className="business-form-container">
                <h2 className="buisness-form-title">
                    {/* grabe red from log in */}
                    Create New Business
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
                                placeholder="Description of business"
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

                        <button type="submit" className="login-form-buttom">Create Buisness</button>
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
// //FUNCTIONS TO MASK PHONE NUMBER INPUTS:
// export const changeToDigits = (phoneNumber) => {
//     return phoneNumber.replace(/[^0-9,.]/g, ‘’)
//   }
// export const phoneNumberFormatter = (phone) => {
//     if(!phone){
//       return
//     }
//     const frame = ‘(___) ___-____’
//     const digits = changeToDigits(phone)
//     let i = 0
//     let lastIndex = 0
//     let formatted = frame.replace(/_/g, (_, j) => {
//       if (i >= digits.length) return ‘_’
//       lastIndex = j;
//       return digits[i++]
//     })
//     return formatted.substring(0, lastIndex + 1)
//   }





// 1:23
// useEffect(() => {
//     const formattedPhone = phoneNumberFormatter(phone)
//     setPhone(formattedPhone)
//   }, [phone])
