import React, {useState} from 'react'
import Jobfindbox from '../Element/Jobfindbox';
import Footer from '../Layout/Footer';
import Header from '../Layout/Header';
import {Form} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { AiFillFacebook, AiFillLinkedin, AiOutlineGoogle } from 'react-icons/ai';


function Apply(job){

    const appliedJob  = job.match.params.job;
    
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
  
      setValidated(true);
    };
  

  return (
    <div  className="page-wraper">
        <div className='content-block'>
        <Header />
        <div className="section-full content-inner-1">

            <div className="page-content bg-white">
                <div className="apply-container">
                    <div className="container">
                        <Jobfindbox />
                        <div className="inner-box">
                            <h1 className="text-black pl-5">Applying for Job: {appliedJob}</h1>
                        </div>
                    </div>
                </div>
                <div className='applyForm flex'>
                    <div className='Form col-xl-7'>
                        <h4 className='p-t20'>Your details</h4>
                        <form noValidate validated={validated} onSubmit={handleSubmit}
                                action="https://getform.io/f/338bd723-5c36-419b-9ed1-ab0a948a07db" 
                                method="POST"
                                enctype="multipart/form-data"
                            >
                            <Row className="mb-0">
                                <Form.Group  as={Col} md="6" >
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control required type="name" name= "name" placeholder='Enter Firstname '/>
                                </Form.Group>
                                <Form.Group  as={Col} md="6" >
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control required type="surname" name= "surname"  placeholder='Enter Lastname '/>
                                </Form.Group>
                            </Row>
                            <Row className="mb-0">
                                <Form.Group  as={Col} md="6" >
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control required type= "email" name="email" placeholder='Enter your Email '/>
                                </Form.Group>
                                <Form.Group  as={Col} md="6" >
                                    <Form.Label>Phone Number</Form.Label>
                                    <Form.Control required type= "text" name="phoneNumber" placeholder='Enter Phone Number '/>
                                </Form.Group>
                            </Row>
                            {/* Add Upload CV */}
											<Form.Group controlId="formFile" className="mb-3">
												<Form.Label>Upload CV</Form.Label>
												<Form.Control required type="file" name="file" />
											</Form.Group>

                            
                            
                            {/* Add Combo Butoon for policy&Terms and Consent */}
                            <div className='innerBox p-l20 p-b10 '>
                                <Form.Check  required
                                    id="consent"
                                    label="Acknowledge the Privacy Policy"
                                />
                            </div>
                            <div className='innerBox p-l20 p-b10 '>
                                <Form.Check  
                                    label="Call or text my phone"
                                />
                            </div>
                            <div className='innerBox p-l20 p-b10 '>
                                <Form.Check  
                                    label="Contact me by post"
                                />
                            </div>
                            <div className='innerBox p-l20 p-b10 '>
                                <Form.Check  
                                    label="Email me about other things"
                                />
                            </div>

                            <div className="clearfix " style={{width: '25%',float: "right"}}>
                                <button type="submit" className="btn-primary site-button btn-block ">Submit </button>
                            </div>
                                
                        </form>
                    </div>
                    <div className='sideBox col-xl-4 float-right'>
                        <h5 className='text-center p-t15'>Already Registered?</h5>
                        <div className='site-button gray m-l30'>SIGN IN WITH YOUR ACCOUNT</div>
                        <p>Use your social media account to register (don't worry we won't post anything)</p>
                        <div className='row'>
                            <div className='col-xl-5'>
                                <div className='site-button '>
                                    <div className='icon'><AiFillFacebook size={20}/></div>
                                    <div className='text'>Facebook</div>
                                </div>
                            </div>
                            <div className='col-xl-5 '>
                            <div className='site-button gray '>
                                    <div className='icon'><AiFillLinkedin size={20}/></div>
                                    <div className='text'>Linkedin</div>
                                </div>
                            </div>
                            <div className='col-xl-5 p-t5'>
                                <div className='site-button green'>
                                    <div className='icon'><AiOutlineGoogle size={20}/></div>
                                    <div className='text'>Google</div>
                                    </div>
                            </div>
                            <div className='p-l20 p-t20 p-b10 '>
                                <Form.Check  
                                    id="consent"
                                    label="To connect your social account 
                                        you must Acknowledge the Privacy Policy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        </div>
        <Footer /> 
    </div>
  )
}

export default Apply;