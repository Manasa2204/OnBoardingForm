import React from 'react';
import '../css/Popup.css'; // Style for the popup
import { BiX } from "react-icons/bi";

const Popup = ({ isOpen, onClose, header, children }) => {

    return (
        <>
            {isOpen && (
                <div className="popup-overlay" onClick={onClose}>
                    <div className="popup-content" onClick={(e) => e.stopPropagation()}>
                        {header ? <div className="popup-header-box">
                            <div class="empty"></div>
                            <div class="popup-header">{header.toUpperCase()}</div>
                            <BiX className="close-btn header-btn" color='white' size={25} onClick={onClose} />
                        </div> :
                            <div className="popup-header-box">
                                <BiX className="close-btn " color='white' size={25} onClick={onClose} />
                            </div>
                        }
                        <div className="popup-body">
                            {children}
                        </div>
                        <div className='footer'>
                            <p>Submit</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Popup;
