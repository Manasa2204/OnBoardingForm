import React, { useState } from "react";
import "../css/Form.css"
import Input from "../components/Input";
import { BiPlus, BiSolidTrash } from "react-icons/bi";

const PersonalDetails = ({ formik }) => {
    const [haveChildren, setHaveChildren] = useState("No");

    const handleIconClick = () => {
        document.getElementById('dateInput').showPicker(); // Trigger focus on the input
    };

    const handleAddValue = () => {
        formik.setValues({
            ...formik.values,
            children: [...formik.values.children, {}] // Adding an empty string
        });
    };

    const handleRemoveValue = index => {
        if (formik.values.children.length === 1) {
            alert("Cannot delete the child")
            return;
        }
        const newValues = [...formik.values.children];
        newValues.splice(index, 1); // Remove value at the specified index
        formik.setValues({
            ...formik.values,
            children: newValues
        });
    };

    return (

        <div style={{ display: "flex", gap: "20px", justifyContent: 'center', flexDirection: "column", width: "100%" }}>

            <div className="personal-form-container">

                <div className="flex-input">
                    <label
                        className="label-txt"
                        htmlFor="firstName"
                        style={{ textAlign: "left" }}
                    >
                        First Name
                    </label>
                    <Input inputType="input" name="firstName" type="text" placeholder="Enter First Name" inputValue={formik.values.firstName}
                        onChange={formik.handleChange} />

                </div>
                <div className="flex-input" >
                    <label
                        className="label-txt"
                        htmlFor="middleName"
                        style={{ textAlign: "left" }}
                    >
                        Middle Name

                    </label>
                    <Input inputType="input" name="middleName" type="text" placeholder="Enter Middle Name" inputValue={formik.values.middleName}
                        onChange={formik.handleChange} />

                </div>
                <div className="flex-input">
                    <label
                        className="label-txt"
                        htmlFor="lastName"
                        style={{ textAlign: "left" }}
                    >
                        Last Name
                    </label>
                    <Input inputType="input" name="lastName" type="text" placeholder="Enter Last Name" inputValue={formik.values.lastName}
                        onChange={formik.handleChange} />

                </div>
                <div className="flex-input">
                    <label
                        className="label-txt"
                        htmlFor="dob"
                        style={{ textAlign: "left" }}
                    >
                        DOB
                    </label>
                    <Input inputType="input-date" id='dateInput' handleIconClick={handleIconClick} className="date-input" type="date" name="dob" inputValue={formik.values.dob}
                        onChange={formik.handleChange} />

                </div>

                <div className="flex-input">
                    <label
                        className="label-txt"
                        htmlFor=" gender"
                        style={{ textAlign: "left" }}
                    >
                        Gender

                    </label>
                    <Input inputType="dropdown" options={["select", "Male", "Female", "No mention"]} name="gender" inputValue={formik.values.gender}
                        onChange={formik.handleChange} />

                </div>
                <div className="flex-input">
                    <label
                        className="label-txt"
                        htmlFor=" maritalStatus"
                        style={{ textAlign: "left" }}
                    >
                        Marital Status

                    </label>
                    <Input inputType="radio" style={{ marginTop: "10px" }} options={["Married", "Single"]} name="maritalStatus" inputValue={formik.values.maritalStatus}
                        onChange={formik.handleChange} />

                </div>


                {formik.values.maritalStatus && formik.values.maritalStatus === 'Married' ?
                    <>
                        <div className="flex-input">
                            <label
                                className="label-txt"
                                htmlFor={formik.values.gender === "Male" ? "wife-name" : "spouse-name"}
                                style={{ textAlign: "left" }}
                            >
                                {formik.values.gender && formik.values.gender === "Male" ? "Wife Name" : "Spouse Name"}
                            </label>
                            <Input inputType="input" name={formik.values.gender === "Male" ? "wifeName" : "spouseName"} type="text" placeholder={`Enter ${formik.values.gender === "Male" ? "Wife Name" : "Spouse Name"}`} inputValue={formik.values[formik.values.gender === "Male" ? "wifeName" : "spouseName"]}
                                onChange={formik.handleChange} />
                        </div>
                        <div className="flex-input">
                            <label
                                className="label-txt"
                                htmlFor="have-children"
                                style={{ textAlign: "left" }}
                            >
                                Children
                            </label>
                            <Input name="have-children" inputType="dropdown" options={["select", "Yes", "No"]} inputValue={haveChildren}
                                onChange={e => {
                                    if (e.target.value === "Yes") {

                                        setHaveChildren("Yes")
                                    }
                                    else {
                                        setHaveChildren("No")
                                    }
                                }} />
                        </div>
                        {
                            haveChildren === "Yes" && <div className="flex-input2">
                                {formik.values.children && formik.values.children.map((child, index) => {
                                    console.log(child, index, "children in form");
                                    return (
                                        <div className="child-input" key={index}>
                                            <div className="flex-input1">
                                                <label
                                                    className="label-txt"
                                                    htmlFor="children"
                                                    style={{ textAlign: "left" }}
                                                    key={index}
                                                >
                                                    {`child ${index + 1}`}
                                                </label>
                                                <Input inputType="input" name={`children[${index}]`} type="text" placeholder={`Enter Child Name`} inputValue={formik.values.children[index].name} onChange={(e) => {
                                                    const children = [...formik.values.children];
                                                    children[index] = { name: e.target.value }
                                                    formik.setValues({
                                                        ...formik.values,
                                                        children: children// Adding an empty string
                                                    })
                                                }}
                                                />
                                            </div>
                                            <BiPlus className="child-icon" color="#50ce60" onClick={() => handleAddValue()} />
                                            <BiSolidTrash className="child-icon" key={index} color="red" onClick={() => handleRemoveValue(index)} />
                                        </div>
                                    )
                                })}
                            </div>
                        }
                    </>
                    : formik.values.maritalStatus === "Single" ?
                        <>
                            <div className="flex-input">
                                <label
                                    className="label-txt"
                                    htmlFor="fatherName"
                                    style={{ textAlign: "left" }}
                                >
                                    Father Name
                                </label>
                                <Input inputType="input" name="fatherName" type="text" placeholder="Enter Father Name" inputValue={formik.values.fatherName}
                                    onChange={formik.handleChange} />

                            </div>
                            <div className="flex-input">
                                <label
                                    className="label-txt"
                                    htmlFor="motherName"
                                    style={{ textAlign: "left" }}
                                >
                                    Mother Name
                                </label>
                                <Input inputType="input" name="motherName" type="text" placeholder="Enter Mother Name" inputValue={formik.values.motherName}
                                    onChange={formik.handleChange} />

                            </div>
                        </> : null

                }
                <div className="flex-input">
                    <label
                        className="label-txt"
                        htmlFor=" bloodGroup"
                        style={{ textAlign: "left" }}
                    >
                        Blood Group

                    </label>
                    <Input inputType="input" name="bloodGroup" placeholder="Enter Blood group" inputValue={formik.values.bloodGroup}
                        onChange={formik.handleChange} />

                </div>
                <div className="flex-input">
                    <label
                        className="label-txt"
                        htmlFor="smoker"
                        style={{ textAlign: "left" }}
                    >
                        Smoker

                    </label>
                    <Input inputType="radio" options={["Yes", "No"]} name="smoker" inputValue={formik.values.smoker}
                        onChange={formik.handleChange} />


                </div>

                {/* <button type="submit">Submit</button> */}

            </div>
            {/* // <div>
                    //     {Object.entries(formData).map(([key, value]) => (
                    //         <li key={key}>
                    //             <strong>{key}:</strong> {value.toString()}
                    //         </li>
                    //     ))}
                    // </div> */}

        </div >


    );
};

export default PersonalDetails;

