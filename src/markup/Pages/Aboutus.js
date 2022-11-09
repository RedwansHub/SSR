import React, { useEffect, useState } from 'react';
import { urlFor, client } from './../../client';
//import blockContent from '@sanity/block-content-to-react';
//import {Link} from 'react-router-dom';

// import { urlFor } from '../lib/client'

import Header from './../Layout/Header';
import Footer from './../Layout/Footer';

import Client from '../../images/clients/face.jpg';
import Client2 from '../../images/clients/client2.png';
import Client3 from '../../images/clients/client3.png';
import Client4 from '../../images/clients/client4.png';
import Client5 from '../../images/clients/client5.png';
import Client6 from '../../images/clients/client6.png';


function Aboutus(){

  const [aboutData, setAbout] = useState([]);
  const [teamData, setTeam] = useState([]);


  useEffect(() => {
    const aboutQuery = '*[_type == "about"]'; 
	const teamQuery = '*[_type == "team"]';
    
	client.fetch(aboutQuery)
    .then((data) => setAbout(data))
    .catch(console.error)

	
	client.fetch(teamQuery)
	.then((data2) => setTeam(data2))
	.catch(console.error)

  }, []); 

	return(
		<div className="page-wraper">		
			<Header />	
			<div className="page-content bg-white">
				<div className="dez-bnr-inr overlay-black-middle">
					<div className="container">
						<div className="dez-bnr-inr-entry">
							<h1 className="text-white">About Us</h1>
						</div>
					</div>
				</div>
				<div className="content-block">
					<div className="section-full content-inner overlay-white-middle">
						<div className="container">
							<div className=''>
								{aboutData.map((data, index) => ( 
									<div className="row align-items-center m-b50">
										<div className="first-text col-md-12 col-lg-6 m-b20 " key={data.title + index}>
											<h3 className="fw4">{data.title}</h3>
											<p className="m-b15">{data.body}</p>
											
											{/* <BlockContent blocks={data.body}
															projectId="tzkhk12b"
															dataset="production"/>
											*/}
										</div>
										<div className="col-md-12 col-lg-6">
											{data.image ? <img src={urlFor(data.image).width(500).url()} alt=""/>
											: <p className="m-b15">{data.body}</p>
											}
											
										</div>
									</div>
								))}
							</div>
							{/* Our Experts */}
							<div className="row align-items-center m-b50 m-t50">
								<div className="  m-b20 ">
									<h2 className="m-b25">Our Experts</h2>
									<p className=" text-center m-b15">Our consultants have several years’ experience in specific sectors, up-to-date market knowledge 
														and are marking-leading experts in Technology Recruitment. 
														Our values are aligned with providing quality customer service to our clients and our candidate pool, 
														building an honest, professional relationship from the ground level up. </p>
									
									
									
								</div>
								
							</div>	

							<div className="row">
								{teamData.map((data2, index) => (
								
									<div className="teamBox col-lg-3 col-md-4 col-sm-12 m-b30">
										<div className="icon-bx-wraper p-a30 center bg-gray radius-sm"  key={data2.name + index}>
											<div className='Team-image'>
												<img src={urlFor(data2.image).width(300).url()} alt=''/>
											</div>
											<div className="icon-content">
												<h5 className="dlab-tilte text-uppercase">{data2.name}</h5>
												<p>{data2.title}</p>
											</div>
										</div>
									</div>
								))}
							</div>
							<div className="row align-items-center m-b50 m-t50">
								<div className="col-md-12 col-lg-6 m-b20 ">
									<h2 className="m-b45 " >Our Clients and Candidates</h2>
									<p className="m-b15">We provide a fast recruitment process but not forgetting our clients and candidates’ requirements.
														We provide staffing solutions to the public and private sectors. Our mission is to bring together 
														people and employers who look for a sense of purpose in the work they do. 
														And we understand that jobseekers now more than ever demand more than just a competitive salary. 
														
														</p>
									
									<p className=''></p>
									
								</div>
								<div className="col-md-12 col-lg-6">
								<img src={Client} alt='' width={500}/>
								
									
								</div>
							</div>	
							
							<div className='Honesty'>
								<h2 className="m-b25">Honesty and Integrity</h2>
							</div>
							<div className="row align-items-center m-b50 m-t10">
								<div className="col-md-12 col-lg-6 m-b20 ">
									<p className="m-b15">We understand the needs and requirements of employers and employees to ensure they are the right fit 
														and create lasting value for both parties. Our market knowledge and experience commit’s us to
														making sure our clients and candidates are satisfied with our service. 
														We pride ourselves on building long-term relationships.</p>
									
								</div>
								<div className="col-md-12 col-lg-6">
							
								<p className="m-b15">We look to build trusting, professional relationships with clients and candidates, 
													acting as dedicated partners for their requirements. We’ll be clear about the challenges 
													of hiring a role and we’ll only suggest appropriate solutions. We provide honest, 
													constructive feedback to candidates. This open, transparent approach leads 
													to the best possible results for both parties.</p>
									
								</div>
							</div>	
							
				{/* Start Clients Area */}
							
					
					{/* End Clients Area */}				
					
						</div>
					</div>						
				</div>
			</div>
			<Footer />
		</div>	
	)
	
}
export default Aboutus;
