import React from 'react'
import "../css/Input.css"
import { BiCalendarAlt } from "react-icons/bi";


export default function Input({ inputType, inputValue, options, selectedOption, handleIconClick, ...props }) {
    // const [isEditing, setIsEditing] = useState(initialValue ? false : true);
    // const [value, setValue] = useState(initialValue)

    // const changeName = (event) => {
    //     setValue(event.target.value)
    // }



    return (
        <div >
            <span className='input-box'>

                <>
                    {
                        (function () {
                            switch (inputType) {
                                case 'input':
                                    return <input className='input'  {...props} value={inputValue} required />

                                case 'textarea':
                                    return <textarea className='input'  {...props} type='text' value={inputValue} required />
                                case 'input-date':
                                    return <div className="date-wrapper" style={{ margin: 0 }}>
                                        <input className='date-input'  {...props} value={inputValue} required />
                                        <BiCalendarAlt color='#50ce60' className='calendar-icon' onClick={handleIconClick} />
                                    </div>
                                case 'radio':
                                    return <>
                                        {options.map(item => {
                                            return <label className='radio-input'>
                                                <input
                                                    type="radio"
                                                    value={item}
                                                    {...props}
                                                    checked={inputValue === item}
                                                />
                                                {item}
                                            </label>
                                        })}
                                    </>
                                case 'dropdown':
                                    // return <input className='input' {...props} value={inputValue} required />
                                    return <select className='input' style={{ marginBottom: "8px", marginTop: "8px", borderRadius: "5px" }} value={inputValue}  {...props} >
                                        {
                                            options.map((item) => {
                                                return <option value={item} selected={item === "select"} disabled={item === "select"}>{item}</option>
                                            })
                                        }

                                    </select>

                                default:
                                    return <input className='input' {...props} type='text' value={inputValue} required />

                            }
                        })()
                    }
                </>

            </span>
        </div >
    )
}
