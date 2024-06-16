import { useState } from 'react';
import './css/App.css';
import { GoPlus } from "react-icons/go";
import Popup from './components/Popup';
import PersonalDetails from './forms/PersonalDetails';
import { useFormik } from 'formik';


function App() {

  const [visibleContent, setVisibleContent] = useState({ personalDetails: false, communicationDetails: false, financialDetails: false, workExperience: false, educationDetails: false, companyAssets: false })
  const [showContent, setShowContent] = useState({ personalDetails: false, communicationDetails: false, financialDetails: false, workExperience: false, educationDetails: false, companyAssets: false, onBoardingDeatils: false })

  const [isOpen, setIsOpen] = useState({ personalDetails: false, communicationDetails: false, financialDetails: false, workExperience: false, educationDetails: false, companyAssets: false });
  const [type, setType] = useState("")

  const openPopup = (type) => {
    console.log(type)
    setIsOpen(prev => { return { ...prev, [type]: true } });
  };

  const closePopup = () => {
    setIsOpen(prev => { return { ...prev, [type]: false } });
  };

  const renderComponent = () => {
    switch (type) {
      case 'personalDetails':
        return <PersonalDetails formik={formik} />;
      // case 'ComponentB':
      //   return <ComponentB />;
      default:
        return null;
    }
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      middleName: '',
      lastName: '',
      dob: '',
      gender: undefined,
      maritalStatus: '',
      wifeName: '',
      spouseName: '',
      fatherName: '',
      motherName: '',
      bloodGroup: '',
      smoker: '',
      children: [{}],
      email: "",
      alternateEmail: "",
      phoneNumber: "",
      alternateNumber: "",
      panNumber: "",
      panFile: [],
      pfNumber: "",
      pfFile: [],
      esiNumber: "",
      esiFile: [],
      bankName: "",
      ifscCode: "",
      accountName: "",
      accountNumber: "",
      checkNumber: "",
      cancelledCheck: [],
      education: [],
      experience: [],

    },
    onSubmit: values => {
      console.log(values);
    },
    validate: values => {
      const errors = {};
      return errors;
    },
  });

  return (
    <div className='app-container'>


      <div className="row">
        <div className="col ">
          <div>
            <h6 className='primary-heading'>Personal Details</h6>
            <div className="card">
              {
                !visibleContent.personalDetails ?
                  <div className='content center'>
                    <GoPlus color='#50ce60' size={25} onClick={() => {
                      setVisibleContent({ ...visibleContent, personalDetails: true });
                      setType("personalDetails");
                      openPopup("personalDetails")
                    }} />
                  </div> :
                  <div>

                  </div>
              }
            </div>
          </div>
          <div style={{ marginTop: "1rem" }}>
            <h6 className='primary-heading'>Communication Details</h6>

            <div className="card">
              {
                !visibleContent.communicationDetails ?
                  <div className='content center'>
                    <GoPlus color='#50ce60' size={25} onClick={() => setVisibleContent({ ...visibleContent, communicationDetails: true })} />
                  </div> : null
              }
            </div>
          </div>

          <div style={{ marginTop: "1rem" }}>
            <h6 className='primary-heading'>Financial Details</h6>
            <div className="card">
              {
                !visibleContent.financialDetails ?
                  <div className='content center'>
                    <GoPlus color='#50ce60' size={25} onClick={() => setVisibleContent({ ...visibleContent, financialDetails: true })} />
                  </div> :
                  <div>

                  </div>
              }
            </div>
          </div>

        </div>
        <div className="col ">
          <div>
            <h6 className='primary-heading'>Education Details</h6>
            <div className="card">
              {
                !visibleContent.educationDetails ?
                  <div className='content center'>
                    <GoPlus color='#50ce60' size={25} onClick={() => setVisibleContent({ ...visibleContent, educationDetails: true })} />
                  </div> :
                  <div>

                  </div>
              }
            </div>
          </div>
          <div style={{ marginTop: "1rem" }}>
            <h6 className='primary-heading'>Work Experience</h6>

            <div className="card">
              {
                !visibleContent.workExperience ?
                  <div className='content center'>
                    <GoPlus color='#50ce60' size={25} onClick={() => setVisibleContent({ ...visibleContent, workExperience: true })} />
                  </div> : null
              }
            </div>
          </div>

        </div>

        <div className="col ">
          <div>
            <h6 className='primary-heading'>Onboarding Details</h6>
            <div className="card">
              <h1>jekhdajshdajk</h1>
              <p onClick={() => setShowContent({ ...showContent, onBoardingDeatils: true })}>View More</p>
              {
                showContent.onBoardingDeatils &&
                <div className='content center'>
                  <h2 onClick={() => setShowContent({ ...showContent, onBoardingDeatils: false })}>jksahdjaskkjjashd</h2>
                </div>
              }
            </div>
          </div>
          <div style={{ marginTop: "1rem" }}>
            <h6 className='primary-heading'>Company Asserts</h6>

            <div className="card">
              {
                !visibleContent.companyAssets ?
                  <div className='content center'>
                    <GoPlus color='#50ce60' size={25} onClick={() => setVisibleContent({ ...visibleContent, companyAssets: true })} />
                  </div> : null
              }
            </div>
          </div>

        </div>
      </div>

      {/*------------------- popups------------------- */}

      {isOpen[type] && <Popup isOpen={isOpen[type]} onClose={() => closePopup(type)} header={type}>
        {renderComponent()}
      </Popup>}
    </div>
  );
}

export default App;
