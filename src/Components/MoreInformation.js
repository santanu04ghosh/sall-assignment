import React, {useContext} from "react";
import UserContext from "../Context/userContext";

const MoreInformation = () => {

    const userList = useContext(UserContext);
    const {gender, name, email, image, dob, phone, username } = userList.userData;
    const formatedDOB = new Date(dob.date).toLocaleDateString('en-GB', {
        day:'numeric',
        month: 'numeric',
        year: 'numeric',
      });
      const phoneNumber = phone.replaceAll('-', '');

    return(  
        <div className="details_screen" key={username}>
            <div className="user_image"><img src={image.large} alt="image_user"></img></div>
            <div className="details">
                <div className="each_Details_data"><span>User Name:</span> {username.username}</div>
                <div className="each_Details_data"><span>Gender:</span> {gender}</div>
                <div className="each_Details_data"><span>UID:</span> {username.uuid}</div>
                <div className="each_Details_data"><span>Full Name:</span> {`${name.title} ${name.first} ${name.last}`}</div>
                <div className="each_Details_data"><span>Email:</span> {email}</div>
                <div className="each_Details_data"><span>DOB:</span> {formatedDOB}</div>
                <div className="each_Details_data"><span>Phone Number:</span> {phoneNumber}</div>
            </div>
            
        </div>
    )
}

export default MoreInformation