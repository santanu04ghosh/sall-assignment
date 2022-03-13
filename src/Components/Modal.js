import React, { Fragment } from "react";
import MoreInformation from "./MoreInformation";

const Modal = (props) => {

    return(
        <Fragment>
            <div className="backdrops" onClick={props.hideModalHandler}>
                
            </div>
            <div className="modal">
                <div className="modal_Data">
                    <div className="modal_header_sec">
                        <div className="header_txt"></div>
                        <div className="close" onClick={props.hideModalHandler}>X</div>
                    </div>
                    <MoreInformation />
                </div>
                
            </div>
        </Fragment>
        
    )
}

export default Modal;