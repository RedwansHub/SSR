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
									<p>Spectre Search Recruitment (“SSR”) is a unique new headhunting and recruitment business – 
										led by three IT Recruitment directors with over 25 years of experience between them, 
										our key philosophy is our focus is understanding our client and candidate pool in order to 
										match the best quality candidate with the right client. <br />All three directors, each with a 
										very different style of recruitment which has proven to be a success in their past experiences, 
										are working in synergy to combine their talents in order to to set up this unique agency.
										 
									</p>
									<Link to='/about-us' className='site-button  p-b10'>More About Us</Link>
									
								</div>
								<div className='col-xl-6 col-md-6 '>
									<img src={aboutImage} alt="aboutUs" className='p-t10  m-auto' style={{width: '100%'}}/>
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