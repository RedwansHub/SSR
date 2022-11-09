import React, {useState} from 'react';
import {useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import PageTitle from './../Layout/PageTitle';

import { loadingToggleAction,loginAction,
} from '../../store/actions/AuthActions';

var bnr = require('./../../images/banner/bnr2.jpg');


function Login(props){

	const [email, setEmail] = useState('demo@example.com');
	
    const [password, setPassword] = useState('123456');
	
    let errorsObj = { email: '', password: '' };
    const [errors, setErrors] = useState(errorsObj);
	
	

    const dispatch = useDispatch();

    function onLogin(e) {
        e.preventDefault();
        let error = false;
        const errorObj = { ...errorsObj };
        if (email === '') {
            errorObj.email = 'Email is Required';
            error = true;
        }
        if (password === '') {
            errorObj.password = 'Password is Required';
            error = true;
        }
        setErrors(errorObj);
        if (error) {
			return ;
		}
		dispatch(loadingToggleAction(true));	
        dispatch(loginAction(email, password, props.history));
	}
	return(
		<>
			<Header />
			<div className="page-content">
				<div className="dez-bnr-inr overlay-black-middle bg-pt" style={{backgroundImage: `url(${bnr})`}}>
					<PageTitle motherName="Home" activeName="Login" />
				</div>
				<div className="section-full content-inner-2 shop-account">
					<div className="container">
						<div className="max-w400 m-auto bg-white m-b30">
							<div className="p-a30 job-bx browse-job radius-sm seth">
								<div className="tab-content nav">
									<form id="login" onSubmit={onLogin} className="tab-pane active col-12 p-a0 ">
										<h4 className="font-weight-700">LOGIN</h4>
										<p className="font-weight-600">If you have an account with us, please log in.</p>
										<div className="form-group">
											<label className="font-weight-700">E-MAIL *</label>
											<input name="dzName" required="" className="form-control" placeholder="Your Email Address" type="email" />
										</div>
										<div className="form-group">
											<label className="font-weight-700">PASSWORD *</label>
											<input name="dzName" required="" className="form-control " placeholder="Type Password" type="password" />
											<Link data-toggle="tab" to="#forgot-password" className="m-l5 m-t15 forget-pass">Forgot Password</Link> 
										</div>
										
										<div className="text-left">
											<button className="site-button m-r5 button-lg">login</button>
											<Link  to="register" className="site-button-link forget-pass m-t15 float-right"><i className="fa fa-unlock-alt"></i> Sign up</Link> 
											
										</div>
									</form>
									<form id="forgot-password" className="tab-pane fade  col-12 p-a0">
										<h4 className="font-weight-700">FORGET PASSWORD ?</h4>
										<p className="font-weight-600">We will send you an email to reset your password. </p>
										<div className="form-group">
											<label className="font-weight-700">E-MAIL *</label>
											<input name="dzName" required="" className="form-control" placeholder="Your Email Address" type="email" />
										</div>
										<div className="text-left"> 
											<Link className="site-button outline gray button-lg" data-toggle="tab" to="#login">Back</Link>
											<button className="site-button pull-right button-lg">Submit</button>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</>	
	)
} 

export default Login;