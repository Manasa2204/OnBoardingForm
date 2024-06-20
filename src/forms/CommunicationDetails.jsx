import React from 'react'
import Input from '../components/Input';

export default function CommunicationDetails({ formik }) {
    const extractAddressFromGoogleMapsUrl = (url) => {

        try {
            const urlObj = new URL(url);

            // Extracting the address part from the pathname
            const pathParts = urlObj.pathname.split('/');
            const addressIndex = pathParts.findIndex(part => part === 'place');

            if (addressIndex !== -1 && addressIndex + 1 < pathParts.length) {
                // Decode the address part and replace '+' with spaces
                return decodeURIComponent(pathParts[addressIndex + 1]).replace(/\+/g, ' ');
            }

            return null; // Address not found
        } catch (error) {
            console.error('Invalid URL:', error);
            return null;
        }
    };

    // Example usage
    const fullUrl = 'https://www.google.com/maps/place/The+Westin+Hyderabad+Mindspace/@17.4456832,78.381056,14z/data=!4m9!3m8!1s0x3bcb93e1ac389ce3:0x7acc5d097f6e2e6!5m2!4m1!1i2!8m2!3d17.4425419!4d78.3816452!16s%2Fg%2F1jkxj_frc?entry=ttu';
    const address = extractAddressFromGoogleMapsUrl(fullUrl);
    console.log('Extracted Address:', address);

    return (
        <div style={{ display: "flex", gap: "20px", justifyContent: 'center', flexDirection: "column", width: "100%" }}>

            <div className="personal-form-container">

                <div className="flex-input">
                    <label
                        className="label-txt"
                        htmlFor="email"
                        style={{ textAlign: "left" }}
                    >
                        Email
                    </label>
                    <Input inputType="input" name="email" type="email" placeholder="Enter Email Address" inputValue={formik.values.email}
                        onChange={formik.handleChange} />

                </div>
                <div className="flex-input">
                    <label
                        className="label-txt"
                        htmlFor="alternateEmail"
                        style={{ textAlign: "left" }}
                    >
                        Alternate Email
                    </label>
                    <Input inputType="input" name="alternateEmail" type="email" placeholder="Enter Alternate Email Address" inputValue={formik.values.alternateEmail}
                        onChange={formik.handleChange} />

                </div>
                <div className="flex-input">
                    <label
                        className="label-txt"
                        htmlFor="phoneNumber"
                        style={{ textAlign: "left" }}
                    >
                        Phone Number
                    </label>
                    <Input inputType="input" name="phoneNumber" type="number" placeholder="Enter Phone Number" inputValue={formik.values.phoneNumber}
                        onChange={formik.handleChange} />

                </div>
                <div className="flex-input">
                    <label
                        className="label-txt"
                        htmlFor="alternateNumber"
                        style={{ textAlign: "left" }}
                    >
                        Alternate Phone Number
                    </label>
                    <Input inputType="input" name="alternateNumber" type="number" placeholder="Enter Alternate Phone Number" inputValue={formik.values.alternateNumber}
                        onChange={formik.handleChange} />

                </div>
                <h3> Temporary Address</h3>
                <div className='personal-form-container'>

                    <div className="flex-input">

                        <Input inputType="input" name="houseNo" type="text" placeholder="Building / House No." inputValue={formik.values.houseNo}
                            onChange={formik.handleChange} />

                    </div>
                    <div className="flex-input">

                        <Input inputType="input" name="houseAddress" type="text" placeholder="Location address" inputValue={formik.values.houseAddress}
                            onChange={formik.handleChange} />

                    </div>
                    <div className="flex-input">

                        <Input inputType="input" name="addressUrl" type="text" placeholder="Google maps url" inputValue={formik.values.addressUrl}
                            onChange={formik.handleChange} />

                    </div>
                </div>
                <h3> Permanent Address</h3>
                <div className='personal-form-container'>

                    <div className="flex-input">

                        <Input inputType="input" name="houseNo" type="text" placeholder="Building / House No." inputValue={formik.values.houseNo}
                            onChange={formik.handleChange} />

                    </div>
                    <div className="flex-input">

                        <Input inputType="input" name="houseAddress" type="text" placeholder="Location address" inputValue={formik.values.houseAddress}
                            onChange={formik.handleChange} />

                    </div>
                    <div className="flex-input">

                        <Input inputType="input" name="addressUrl" type="text" placeholder="Google maps url" inputValue={formik.values.addressUrl}
                            onChange={formik.handleChange} />

                    </div>
                </div>
            </div>
        </div >
    )
}
