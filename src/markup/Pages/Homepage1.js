import React from 'react';
import {Link} from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import IndexBanner from './../Element/IndexBanner';
import Jobcategories from './../Element/Jobcategories';


//Images
var aboutImage = require('./../../images/img1.jpg');


function Homepage(){
	return(
		<div className="page-wraper">
			<Header />
			<div className="page-content">
				<IndexBanner />
				<div className="section-full job-categories content-inner-2 bg-white">
					<div className="container">
						<div className="section-head d-flex head-counter clearfix">
							<div className="mr-auto">
								<h2 className="m-b5">Browse our Jobs by Categories</h2>
							</div>
						</div>
						
						<Jobcategories />
						<div className='mb-5 mt-20'>
							<hr className='solid'/>
						</div>
						<div className="section-head d-flex head-counter clearfix">
							<div className="mr-auto">
								<h2 className="m-b5">About Spectre Search</h2>
							</div>
						</div>
						<div className='section-head d-flex'>
							<div className='row'>
								<div className='col-xl-6'>
									<p>Morgan Hunt is a multi-award-winning UK recruitment agency with offices in London, 
										Birmingham, Manchester, Glasgow and Milton Keynes. We provide specialist recruitment 
										services to organisations across the public, private and not for profit sectors.
										<br /> <br />
										Founded in 1994, we’ve become renowned for connecting talented candidates and brilliant 
										organisations within the charity, education, finance, government, housing, professional 
										services, property & construction, social care and technology sectors.
									</p>
									<Link to='/about-us' className='site-button p-t10 p-b10'>More About Us</Link>
									
								</div>
								<div className='col-xl-6 col-md-6 '>
									<img src={aboutImage} alt="aboutUs" className='p-t10 m-auto' style={{width: '100%'}}/>
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
export default Homepage;