import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import PageTitle from './../Layout/PageTitle';
import { loadingToggleAction,loginAction,
} from '../../store/actions/AuthActions';

var bnr = require('./../../images/banner/bnr2.jpg');

function Login2(props){
	const [email, setEmail] = useState('demo@example.com');
    let errorsObj = { email: '', password: '' };
    const [errors, setErrors] = useState(errorsObj);
    const [password, setPassword] = useState('123456');

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
				
				<div className="section-full content-inner-2 shop-account">
					<div className="container">
						<div className="max-w500 m-auto bg-white m-b30">
							<div className="p-a30 job-bx browse-job radius-sm seth">
								<div className="tab-content nav">
									<form id="login" onSubmit={onLogin} className="tab-pane active col-12 p-a0 ">
										<h4 className="font-weight-700">LOGIN</h4>
										<p className="font-weight-600">If you have an account with us, please log in.</p>
										{props.errorMessage && (
												<div className='bg-red-300 text-red-900 border border-red-900 p-1 my-2'>
													{props.errorMessage}
												</div>
											)}
											{props.successMessage && (
												<div className='bg-green-300 text-green-900 border border-green-900 p-1 my-2'>
													{props.successMessage}
												</div>
											)}
										<div className="form-group">
											<label className="font-weight-700">E-MAIL *</label>
											<div className="input-group">
													<input type="email" className="form-control" 
														placeholder="Type Your Email Address"  
														value={email}
														onChange={(e) => setEmail(e.target.value)}
													/>
													{errors.email && <div className="text-danger fs-12">{errors.email}</div>}
												</div>
										</div>
										<div className="form-group">
											<label className="font-weight-700">PASSWORD *</label>
											<div className="input-group">
													<input
														type="password"
														className="form-control"
														value={password}
														placeholder="Type Your Password"
														onChange={(e) =>
															setPassword(e.target.value)
														}
													/>
													{errors.password && <div className="text-danger fs-12">{errors.password}</div>}
												</div>
											<Link data-toggle="tab" to="#forgot-password" className="m-l5 m-t5 forget-pass "><i className="fa fa-unlock-alt"></i> Forgot Password</Link> 
										</div>
										<div className="text-left">
											<button className="site-button m-r5 button-lg">login</button>
											<Link to="/Register" className='site-button outline outline-2 float-right'>Register</Link>
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

const mapStateToProps = (state) => {
    return {
        errorMessage: state.auth.errorMessage,
        successMessage: state.auth.successMessage,
        showLoading: state.auth.showLoading,
    };
};
export default connect(mapStateToProps)(Login2);
