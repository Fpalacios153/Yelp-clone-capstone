import { useEffect, useState } from "react";
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
    const buisness = useSelector(state => state.businesses)
    const businessArr = Object.values(buisness)
    console.log(buisness)
    const statesAbrivation = ['AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY']

    useEffect(() => {
        let error = []
        if (address.length > 40) error.push('error:Address must be less than 40 character')
        if (city.length > 25) error.push('error:City must be less than 25 characters')
        if (country.length > 30) error.push('error:Country must be less than 30 characters')
        if (isNaN(zipcode) || zipcode.length > 5) error.push('error:Zipcode must be a 5 digit number')
        if (image.length && !image.includes('.png') && !image.includes('.jpeg') && !image.includes('.jpg')) error.push('error: Image must be in jpeg, jpg or png format')
        businessArr.map(business => {
            if (business.name.toLowerCase() === name.toLowerCase()) {
                error.push('error: Business with that name already exists')
            }
        })
        businessArr.map(business => {
            if (business.email.toLowerCase() === email.toLowerCase()) {
                error.push('error: Business with that email already exists')
            }
        })
        setErrors(error)
    }, [address, city, zipcode, country, image, name, email])



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
        if (!errors.length) {

            let data = await dispatch(createABusiness(newBusiness));

            if (Array.isArray(data)) {
                setErrors(data)
            } else {
                await history.push(`/businesses/${data.id}`)
                await setShowModal(false)
            }
        }

    }

    return (
        <>
            <div className="business-form-container">

                <h2 className="buisness-form-title">
                    Create New Business
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

                            <button type="submit" className="login-form-buttom">Create Buisness</button>
                            <button className="login-form-buttom" onClick={() => setShowModal(false)}> Cancel</button>
                        </div>
                    </form>
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
{/* <label>

<input
className='login-form-input'
type="text"
// required
                                name="state"
                                maxLength={2}
                                placeholder="State Ex:CA"
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                            />
                        </label> */}
