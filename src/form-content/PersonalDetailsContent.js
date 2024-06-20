import React, { useState } from 'react'
import HorizontalDivider from '../components/HorizontalDivider'
import { BsCake } from "react-icons/bs";

export default function PersonalDetailsContent({ formik }) {
    const [showContent, setShowContent] = useState(false)

    return (
        <div className='card-body '>
            <div className=' center-horizontal flex-col center-vertical'>
                <img src='female.png' alt="profile" height="50px" width="50px" />
                <p>{formik.values.firstName} {formik.values.lastName}</p>

            </div>
            <HorizontalDivider />
            {
                showContent &&
                <>
                    <div className=' flex-col'>
                        <div className='flex-row justify-between center-vertical'>
                            <div style={{ gap: 7 }} className='flex-row'>
                                <span><BsCake size={20} color='#66be7a' /></span>
                                <span>Date of Birth</span>
                            </div>
                            <div>{formik.values.dob}</div>
                        </div>

                    </div>
                    <HorizontalDivider />
                    <div className=' flex-col'>
                        <div className='flex-row justify-between center-vertical'>
                            <div style={{ gap: 7 }} className='flex-row'>
                                <span><BsCake size={20} color='#66be7a' /></span>
                                <span>Date of Birth</span>
                            </div>
                            <div>{formik.values.dob}</div>
                        </div>

                    </div>
                    <HorizontalDivider />

                </>
            }

            <div style={{ display: 'flex', justifyContent: "flex-end", cursor: "pointer" }} onClick={() => setShowContent(!showContent)}>
                <p>{showContent ? "View Less" : "View More"}</p>
            </div>


        </div>
    )
}
