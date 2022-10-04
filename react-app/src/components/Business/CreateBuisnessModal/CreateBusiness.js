import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom"
import { createABusiness } from "../../../store/business";

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
    // console.log(currentUser)


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
            <div> Create New Business
                <div>
                    {errors.length > 0 && (
                        <div>
                            {errors.map((error, id) => (
                                <div key={id}>{error.split(":")[1]}</div>
                            ))}
                        </div>
                    )}
                </div>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                    <label>
                        Name
                        <input
                            type="text"
                            name="name"
                            placeholder="Business's Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <label>
                        Email
                        <input
                            type="email"
                            required
                            name="email"
                            placeholder="Business's Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <label>
                        Phone Number
                        <input
                            type="tel"
                            required
                            maxLength={12}
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                            name="phone"
                            placeholder="Format: 123-456-7890"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </label>
                    <label>
                        Address
                        <input
                            type="text"
                            required
                            name="Adress"
                            placeholder="Business's Address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </label>
                    <label>
                        City
                        <input
                            type="text"
                            required
                            name="city"
                            placeholder="City"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />
                    </label>
                    <label>
                        State
                        <input
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
                        Zipcode
                        <input
                            type="text"
                            required
                            name="zipcode"
                            placeholder="Zipcode"
                            value={zipcode}
                            onChange={(e) => setZipcode(e.target.value)}
                        />
                    </label>
                    <label>
                        Country
                        <input
                            type="text"
                            required
                            name="country"
                            placeholder="Country"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        />
                    </label>
                    <label>
                        Description
                        <input
                            type="text"
                            required
                            name="description"
                            placeholder="Desciption of business"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </label>
                    <label>
                        Image
                        <input
                            type="text"
                            required
                            name="image"
                            placeholder="Image of business"
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        />
                    </label>
                    <div>
                        <button type="submit">Create Buisness</button>
                        <button onClick={() => setShowModal(false)}> Cancel</button>
                    </div>
                </form>
            </div>
        </>
    )
}
