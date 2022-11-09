import React, { Component, useState } from 'react';
import Axios from 'axios';
import { Modal } from 'react-bootstrap';
//import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import {Form} from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Logout from './Logout';
// import CvModal from './CvModal';
import Emailjs from '@emailjs/browser';
import Logo from './../../images/assets/Black-logo.png';
// import logo2 from './../../images/SSR-Logo.png';

	
class Header extends Component{

	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);

		var templateParams = {
			subject: 'Candidate Application',
			name: this.state.name + ' ' + this.state.surname,
			Gender: this.state.gender,
			dob: this.state.dob,
			email: this.state.email,
			phoneNumber: this.state.phoneNumber,
			location: this.state.location,
			message: 'Sending this from Visual Code!',
			Cv: this.state.file,
			attachments: [{
				filename: this.state.file.name,
				content: this.state.file
			}]
		};
		 Emailjs.init("sN3zllzcIxcfjCdJ7");
		 Emailjs.send('service_cqwk5o9', 'template_yo8me9n', templateParams)
		 	.then(function(response) {
		 	console.log('SUCCESS!', response.status, response.text);
		 	}, function(error) {
		 	console.log('FAILED...', error);
		 	});

			// Emailjs.sendForm('service_cqwk5o9', 'template_yo8me9n',)
	};
	handleForm = (e) => {
		let {name, value} = e.target;
		if(name === 'name'){
			this.setState({name: value})
		}
		if(name === 'surname'){
			this.setState({surname: value})
		}
		if(name === 'email'){
			this.setState({email: value})
		}
		if(name === 'phoneNumber'){
			this.setState({phoneNumber: value})
		}
		if(name === 'location'){
			this.setState({location: value})
		}
		if(name === 'gender'){
			this.setState({gender: value})
		}
		if(name === 'dob'){
			this.setState({dob: value})
		}
		

		let form = e.currentTarget;
		if (form.checkValidity() === false) {
			e.preventDefault();
			e.stopPropagation();
		}
		this.setState({validated: true})
		
	};
	handleFile(e) {
		let file = e.target.files[0]
		this.setState({file: file})
	}

	state = {
		// initial state
		name: '',
		surname: '',
		email: '',
		phoneNumber: '',
		location: '',
		gender: '',
		dob: '',
		file: null,
		show: false,
		validated: false,
	};

	
	handleClose = () => {
		this.setState({ show: false });
	};
	handleShow = () => {
		this.setState({ show: true });
	};	
	componentDidMount() {
		//Quick CV

	  // sidebar open/close
		
        var Navicon = document.querySelector('.navicon');
        var sidebarmenu = document.querySelector('.myNavbar ');

        function toggleFunc() {
            sidebarmenu.classList.toggle('show');
         //   Navicon.classList.toggle('open');
        }
        Navicon.addEventListener('click', toggleFunc);

        // Sidenav li open close
        var navUl = [].slice.call(document.querySelectorAll('.navbar-nav > li > a, .sub-menu > li > a'));
        for (var y = 0; y < navUl.length; y++) {
            navUl[y].addEventListener('click', function () { checkLi(this) });
        }
		
        function checkLi(current) {
            current.parentElement.parentElement.querySelectorAll( "li" ).forEach( el =>
				(current.parentElement !== el) ? el.classList.remove('open') : ''
			);
			setTimeout(() => {
				current.parentElement.classList.toggle('open');
			}, 100);			
        }
	}	
	render(){	
		return(
			<>
				<header className="Sticky-header mo-left header fullwidth">
					<div className="sticky-header main-bar-wraper navbar-expand-lg shadow">
						<div className="main-bar clearfix">
							<div className="container clearfix">
								
								<div className="logo-header mostion">
									<Link to={"/"}><img src={Logo} className="logo" alt="img" /></Link>
								</div>
								
								 <button className="navbar-toggler collapsed navicon  justify-content-end" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
									<span></span>
									<span></span>
									<span></span>
								</button> 
								  
								<div className="header-nav navbar-collapse collapse myNavbar justify-content-start" id="navbarNavDropdown"> 
									<div className="logo-header mostion d-md-block d-lg-none">
										<Link to={'/'} className="dez-page"><img src={Logo} alt="" /></Link>
									</div>
									<ul className="nav navbar-nav">
										<li><Link to={"/about-us"}>About Us</Link></li>
										<li><Link to={'#'} >For Candidates</Link>
											<ul className="sub-menu">
												<li><Link to={"/browse-job"} className="dez-page">Browse Job </Link></li>
												<li><Link to={"#"}  className="dez-page"><span onClick={this.handleShow}>Quick Upload CV</span></Link></li>
											</ul>
										</li>
										{/* <li><Link to={"/company-post-jobs"} >For Employers</Link>
											<ul className="sub-menu">
												<li><Link to={"/company-post-jobs"} className="dez-page">Post A Jobs </Link></li>
												<li><Link to={"/company-manage-job"} className="dez-page">Manage jobs </Link></li>
												<li><Link to={"/browse-candidates"}  className="dez-page">Browse Candidates</Link></li>
											</ul>
										</li> */}
										
										<li><Link to={"/contact"}>Contact Us</Link></li>
										{/* <li><Link to={"/login"} className="site-button">Login / Register</Link></li> */}
										<li><Link to={'/login'} > Sign In/Register </Link>
											{/* <ul className="sub-menu">
												<li><Link to={"/jobs-profile"} className="dez-page">My Profile</Link></li>
												<li><Link to={"/jobs-my-resume"} className="dez-page">My Resume </Link></li>
												<li><Link to={"/jobs-applied-job"} className="dez-page">Applied Job </Link></li>
												<li><Link to={"/jobs-alerts"} className="dez-page">Jobs Alerts </Link></li>
												<li><Link to={"/jobs-saved-jobs"} className="dez-page">Saved Job </Link></li>
											</ul> */}
										</li>
										
									</ul>			
								</div>
							</div>
						</div>
					</div>
				</header>
				
				{/*  Model Start */}
				 <Modal  className=" lead-form-modal"  show={this.state.show} onHide={this.handleClose} centered >
					<div className="modal-dialog" role="document">
						<div className="modal-content">
							<button type="button" className="close" onClick={this.handleClose}>
								<span aria-hidden="true">&times;</span>
							</button>
							<div className="modal-body row m-a0 clearfix">
								{/* <div className="col-lg-6 col-md-6 overlay-primary-dark d-flex p-a0">
									<div className="form-info text-white align-self-center">
										<h3 className="m-b15">Send Us Your CV</h3>
										
									</div>
								</div> */}
								<div className="col-lg-12 col-md-6 p-a0">
									<div className="lead-form browse-job text-left">
											<h3 className="m-t0">Send Us Your CV</h3>
										<form action="https://getform.io/f/338bd723-5c36-419b-9ed1-ab0a948a07db" 
												method="POST" 
												enctype="multipart/form-data"
											>
											<Row className="mb-2">
												<Form.Group  as={Col} md="6" >
													<Form.Label>First Name</Form.Label>
													<Form.Control required type= "name" name="name" placeholder='Firstname' onChange={(e) => this.handleForm(e)} />
												</Form.Group>
												<Form.Group  as={Col} md="6" >
													<Form.Label>Last Name</Form.Label>
													<Form.Control type= "surname" name="surname" placeholder='Lastname ' onChange={(e) => this.handleForm(e)} required/>
												</Form.Group>
											</Row>
											<Row className="mb-2">
												
											</Row>
											<Row className="mb-1">
												<Form.Group  as={Col} md="6" >
													<Form.Label>Email Address</Form.Label>
													<Form.Control required type= "email" name="email" placeholder='Email Address ' onChange={(e) => this.handleForm(e)}/>
												</Form.Group>
												<Form.Group  as={Col} md="6" >
													<Form.Label>Mobile Number</Form.Label>
													<Form.Control required type= "phoneNumber" name="phoneNumber" placeholder='Mobile Number ' onChange={(e) => this.handleForm(e)}/>
												</Form.Group>
											</Row>
											<Row className="mb-2">
												<Form.Group  as={Col} md="6" >
													<Form.Label>Location</Form.Label>
													<Form.Control required type= "location" name="location" placeholder='Enter your Address' onChange={(e) => this.handleForm(e)}/>
													</Form.Group>
													<Form.Group  as={Col} md="6" >
													<Form.Label>Profession</Form.Label>
													<Form.Control required name="gender" as="select" custom className="select-btn" style={{height: '50px'}} onChange={(e) => this.handleForm(e)}>
														<option>Technology</option>
														<option>Software Developer</option>
														<option>Full stack Developer</option>
														<option>UI/UX Designer</option>
														<option>Other</option>
													</Form.Control>
												</Form.Group>
											</Row>
													
											
											
											
											{/* Add Upload CV */}
											<Form.Group controlId="formFile" className="mb-3">
												<Form.Label>Upload CV</Form.Label>
												<Form.Control required type="file" name="file" onChange={(e) =>  this.handleFile(e)} />
											</Form.Group>

											{/* Add Combo Butoon for policy&Terms and Consent */}
											<Form.Group>
												<Form.Check  required
													label="I agree to the Terms and conditions."
												/>
											</Form.Group>
											<div className="clearfix" style={{width: '45%'}}>
												<button type="submit" className="btn-primary site-button btn-block" >Submit</button>
											</div>
												
										</form>
										
									</div>
								</div>
							</div>	
						</div>
					</div>				
				</Modal>
				{/*  Model END */}
			</>
		)
	}
}
export default Header;

