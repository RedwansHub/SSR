import React from 'react';
import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';

function Error404(){
	return(
		<div className="page-wraper">
			<Header />
			<div className="page-content">
				<div className="section-full content-inner-3 bg-white">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 col-md-12 col-sm-12 error-page text-center">
								<h3>OOPS!</h3>
								<h4 className="text-primary">Page Under Development</h4>
								<Link to={"./"} className="site-button">Back To Home</Link>
							</div>
						</div>
					</div>
				</div>
			</div>	
			<Footer />
		</div>
	)
}
export default Error404;