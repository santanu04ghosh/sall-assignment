import React, { Fragment, useState, useContext } from "react";
import UserContext from "../Context/userContext";
import Modal from "./Modal";

const Person = ({eachPerson}) => {

    const user = useContext(UserContext);
    const [lightBoxImages, setLightBoxImages] = useState('')
    const [lightBoxDisplay, setLightBoxDisplay] = useState(false);
    const [showModal, setShowModal] = useState(false)
    const [showbackdrop, setShowbackdrop] = useState(false)
    

    const showLightBox = (image) => {
        setLightBoxImages(image);
        setLightBoxDisplay(true)
        console.log(image)
    }

    const hideLightBox = () => {
        setLightBoxDisplay(false)
    }

    const openModalHandler =() => {
        setShowbackdrop(true)
        setShowModal(true);
    } 
    const hideModalHandler = () =>{
        setShowbackdrop(false)
        setShowModal(false)
    }
    

    const persons = eachPerson.map((data, index) => {
        const dob = data.dob
        const accDate = new Date(dob.date).toLocaleDateString('en-GB', {
            day:'numeric',
            month: 'numeric',
            year: 'numeric',
          });
        const phoneNumber = data.phone.replaceAll('-', '');
        
        
        return(
        <Fragment  key={data.id}>
                <div className="user_list_field">
                    <div className="row align-items-center">

                        <div className="col-md-1 col-xs-12">
                            <div className="user_image">
                                <img src={data.image.thumbnail} alt={data.name.first} onClick={() => showLightBox(data.image.large)}></img>
                                
                            </div>                        
                        </div>

                        <div className="col-md-3 col-xs-12" >
                            <div className="person_username" onClick={() => {user.setUserData(data); openModalHandler()}}>
                                <span>User Name: </span> {data.username.username }
                            </div>
                        </div>

                        <div className="col-md-5 col-xs-12 mobile_Device">
                            <div className="heading_text">User Details</div>
                            <div className="each_data"><span>Name: </span> {`${data.name.first} ${data.name.last}`}</div>    
                            
                            <div className="each_data"><span>Email: </span>{data.email}</div>   
                            <div className="each_data"><span>Dob: </span>{accDate}</div> 
                            <div className="each_data"><span>Contact: </span>{phoneNumber}</div>
                        </div>

                        <div className="col-md-3 col-xs-12 mobile_Device">
                            <div className="heading_text">Address Details</div>
                            <div className="each_data"><span>Street: </span>{`${data.address.street.number}, ${data.address.street.name}`}</div>   
                            <div className="each_data"><span>City: </span>{data.address.city}</div> 
                            <div className="each_data"><span>Country: </span>{data.address.country}</div>
                            <div className="each_data"><span>Postcode: </span>{data.address.postcode}</div>
                        </div>

                    </div>
                    
                </div>

                </Fragment>
            
        )
    })

    return(
        <Fragment>
               {persons}           
               {lightBoxDisplay ? <div id="lightbox-img" key="new1">
                                <div id="lightbox" onClick={hideLightBox}><img src={lightBoxImages} alt="iamges"></img></div>
                                </div>: ""}
               {showModal ? <Modal hideModalHandler={hideModalHandler}/> : ''}

        </Fragment>
            
       
    )
}

export default Person;