import React, { useEffect, useState } from 'react';
import {Link } from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import { client, urlFor } from '../../client';
// import Row from 'react-bootstrap/Row';
// import { Modal } from 'react-bootstrap';
// import {Form} from 'react-bootstrap';
// import Col from 'react-bootstrap/Col';
import {AiOutlineLinkedin} from 'react-icons/ai';
import {IoLocationSharp, IoLogoEuro} from 'react-icons/io5';
import {IoIosArrowBack } from 'react-icons/io';
import {BiTimeFive} from 'react-icons/bi';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Jobfindbox from './../Element/Jobfindbox';
//import {PortableText} from '@portabletext/react'
//import BlockContent from '@sanity/block-content-to-react';


function Jobdetail(job){
	
	 const singleJob  = job.match.params.job;
	
	const [jobInfo, setJobInfo] = useState([]);
	//const [job, setJob] = useState([]);
	
	
	useEffect(() => {
		const query = '*[_type == "jobs"]';

		client.fetch(query)
		.then((jobInfo)  => setJobInfo(jobInfo))
		.catch(console.error)

	})


	
		
	

	return(
		<>
			<Header />	
			<div className="page-content bg-white">
			
				<div className="content-block job-background" >
						
					<div className="section-full content-inner-1">
					<Jobfindbox />
						<div className="container">
							<div className="row">
							  
								<div className="col-lg-8">
								{jobInfo.filter(jobs => jobs.title === singleJob).map((data, index) => (
									<div className="job-info-box" key={index}>
											
											<h3 className="job-title m-t0 m-b50  font-weight-900">
												<Link to={"#"} className="text-secondry">{data.title}</Link>
											</h3>

													<ul className='under-title'>
														<li className='h4 m-b20'><IoLocationSharp color="black" size={25}/><strong className="font-weight-700 text-black m-l10"> {data.location} </strong></li>
														<li className='h4 m-b20'><IoLogoEuro color="black" size={25}/><strong className="font-weight-700 text-black m-l10"> {data.salary} </strong></li>
														<li className='h4 m-b20'><BiTimeFive color="black" size={25}/><strong className="font-weight-700 text-black m-l10"> {data.jobType} </strong></li>
													</ul>

												<Link to={"/browse-job"} className="m-r30"><IoIosArrowBack /> Back to Job Listing</Link>
											<div className='p-t20'></div>
												<div className='d-flex justify-content-between apply-btn' style={{display: 'flex'}}>
													<Link to={`/Apply/${data.title}`} className="site-button ">Apply Now</Link>
													<Link to={`/Apply/${data.title}`} className="site-button " style={{background: 'red'}}>Quick-Apply</Link>
													<Link to={`/Apply/${data.title}`} className="site-button " style={{background: 'gray'}}>Apply With Linkedin <AiOutlineLinkedin size={20}/></Link>
													<Link to={"#"} className="site-button " style={{background: 'gray'}}>Save </Link>
													<Link to={"#"} className="site-button " style={{background: 'gray'}}>Share </Link>
												</div>
										<div className='inner-job-info'>
											<h5 className="font-weight-600">Job Description</h5>
											{/* <p>{data.desc}</p> */}
											<div className="dez-divider divider-2px bg-gray-dark mb-4 mt-0"></div>
											
											<h5 className="font-weight-600">Job Role</h5>
											<div className="dez-divider divider-2px bg-gray-dark mb-4 mt-0"></div>
												<ul>
													<li>Manage all IT systems - software and hardware - collaborating with external providers as necessary to ensure the effectiveness and integrity of all our systems.</li>
													<li>Identify, investigate, and resolve IT problems including tracking progress and lessons learnt and implementing changes, as necessary. Develop mechanisms to prevent re-occurrence of the issues.</li>
													<li>Develop systems to ensure all IT incidents/problems and their solutions are recorded to inform knowledge management.</li>
													<li>Work with consultants on developing and delivering IT infrastructure solutions and projects, leading on projects as our in-house expert.</li>
													<li>Develop policies, protocols, practices, and procedures that manage the full data lifecycle needs of the organisation and manage our data governance whilst monitoring the quality and consistency of data. Ensure the organisation's approach to data quality is consistent and maintained.</li>
												</ul>
											<h5 className="font-weight-600">Job Requirements</h5>
											<div className="dez-divider divider-2px bg-gray-dark mb-4 mt-0"></div>
											<p>{data.requirement}</p>
											
											<div className='d-flex justify-content-between apply-btn p-t15' style={{display: 'flex'}}>
													<Link to={`/Apply/${data.title}`} className="site-button ">Apply Now</Link>
													<Link to={`/Apply/${data.title}`} className="site-button " style={{background: 'red'}}>Quick-Apply</Link>
													<Link to={`/Apply/${data.title}`} className="site-button " style={{background: 'gray'}}>Apply With Linkedin <AiOutlineLinkedin /></Link>
													<Link to={"#"} className="site-button " style={{background: 'gray'}}>Save </Link>
													<Link to={"#"} className="site-button " style={{background: 'gray'}}>Share </Link>
												</div>

											{/* <div className="dez-divider divider-2px bg-gray-dark mb-4 mt-0"></div>
											<BlockContent 
												blocks={data.desc}  
												serializers={serializers}
												projectId="tzkhk12b"
												dataset="production"
											/> */}
											


										</div>
									</div>
								 ))} 
									</div>
									{jobInfo.filter(jobs => jobs.title === singleJob).map((data, index) => (
								<div className="col-lg-4"  key={index}>
									<div className="">{/*Gotta remove this letter*/}
										<div className="row">
											<div className="col-lg-10 col-md-6 m-l50 m-t50">
											<p className='contract-title text-black'>Contract</p>
												<div className="widget bg-white">
													<img src={urlFor(data.image).width(350).url()} alt="" />
													<h6 className="text-red p-t25 m-b15 m-t30 m-l20">{data.recruiter}</h6>
													<ul className='under-picture'>
														<li><strong className="font-weight-700 text-black"></strong> Consultant </li>
														<li><strong className="font-weight-700 text-black"></strong> Technology Recruitment Team</li>
														<li><strong className="font-weight-700 text-black"></strong> London </li>
													</ul>
												</div>
											</div>
										</div>
									</div>
								</div>
							))}
								
							</div>
						</div>
					</div>
					
				</div>
			</div>		
			
			<Footer />
												
		</>		
	)
}

export default Jobdetail;

