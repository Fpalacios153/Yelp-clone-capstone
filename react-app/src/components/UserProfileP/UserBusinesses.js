import { NavLink } from "react-router-dom";
import './UserBusiness.css'
import AverageStarRating from "../AverageStarRating";

export default function UsersBusinesses({ usersBusinesses, usersName }) {



    return (
        <>

            <div className="entire-user-business-container">
                <h4 className="user-business-top-title">
                    {usersName}'s Businesses
                </h4>

                {usersBusinesses.map((bus, idx) => (
                    <div key={bus.id} className='user-business-container'>
                        <NavLink className='navlink-business-list' to={`/businesses/${bus.id}`}>
                            <div className="user-business-list">
                                <div className="user-business-text-container">
                                    <div className="user-business-name">
                                        {idx + 1}.
                                        <div style={{ paddingLeft: '5px' }}>
                                            {bus.name}
                                        </div>
                                    </div>
                                    <div className="user-business-average">
                                        <AverageStarRating reviewAverage={bus.reviewAverage} />
                                        <span style={{ fontWeight: '500', paddingLeft: '10px', paddingRight: '5px' }}>{bus.reviewAverage > 0 ? bus.reviewAverage.toFixed(1) : 0}</span>
                                        {' '}({bus.reviewCount > 0 ? bus.reviewCount : 0} reviews)
                                    </div>
                                    <div className="business-name">{bus.address} {bus.city} {bus.state} {bus.zipcode} {bus.country}</div>
                                </div>
                                <img
                                    className="user-business-image"
                                    src={bus.image}
                                    alt={bus.name}
                                    onError={e => { e.currentTarget.src = '/static/images/restpic/pexels-aleksandar-pasaric-3342739.jpg' }}

                                />
                            </div>
                        </NavLink>
                    </div>
                ))}
            </div>
        </>)
}
