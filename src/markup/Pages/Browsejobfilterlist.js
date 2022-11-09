import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { urlFor, client } from '../../client';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';
import Jobfindbox from './../Element/Jobfindbox';
import Accordsidebar from './../Element/Accordsidebar';



function Browsejobfilterlist(){


	const [jobInfo, setJobInfo] = useState([]);

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
				<div style={{height: '70px'}}></div>
				<Jobfindbox />
				<div className="content-block">
					<div className="section-full browse-job p-b50">
						<div className="container">
							<div className="row">
								<Accordsidebar />
								<div className="col-xl-9 col-lg-8 col-md-7">
									<div className="job-bx-title clearfix">
										<h5 className="font-weight-700 pull-left text-uppercase">2269 Jobs Found</h5>
										<div className="float-right">
											<span className="select-title">Sort by freshness</span>
											<select className="custom-btn">
												<option>Last 2 Months</option>
												<option>Last Months</option>
												<option>Last Weeks</option>
												<option>Last 3 Days</option>
											</select>
											<div className="float-right p-tb5 p-r10">
												<Link to={"/browse-job-filter-list"} className="p-lr5"><i className="fa fa-th-list"></i></Link>
												<Link to={"/browse-job"} className="p-lr5"><i className="fa fa-th"></i></Link>
											</div>
										</div>
									</div>
									<ul className="post-job-bx">
										{jobInfo.map((item,index)=>(
											<li key={item + index}>
												<div className="post-bx">
													<div className="d-flex m-b30">
														<div className="job-post-company">
															<Link to={"#"}><span>
															<img src={urlFor(item.image).url()} alt="" />
															</span></Link>
														</div>
														<div className="job-post-info">
															<h4><Link to={"/job-detail"}>{item.title}</Link></h4>
															
															<ul>
															<li><i className="fa fa-map-marker"></i>{item.location}</li>
																<li><i className="fa fa-bookmark-o"></i> {item.jobType}</li>
																<li><i className="fa fa-eur"></i> {item.salary}</li>
															</ul>
														</div>
													</div>
													<div className="d-flex">
														<div className="job-time mr-auto">
															<Link to={"#"}><span>Information Technology</span></Link>
														</div>
														<div className="detailsbtn">
															<Link to={`/job-detail/${item.title}`} className="site-button">See details</Link>
														</div>
														<div className="applybtn">
															<Link to={`/Apply/${item.title}`} className="site-button"  style={{background: 'gray'}}>Quick Apply</Link>
														</div>
													</div>
													<label className="like-btn">
														<input type="checkbox" />
														<span className="checkmark"></span>
													</label>
												</div>
											</li>
										))}	
									</ul>
									<div className="pagination-bx float-right m-t30">
										<ul className="pagination">
											<li className="previous"><Link to={"#"}><i className="ti-arrow-left"></i> Prev</Link></li>
											<li className="active"><Link to={"#"}>1</Link></li>
											<li><Link to={"#"}>2</Link></li>
											<li><Link to={"#"}>3</Link></li>
											<li className="next"><Link to={"#"}>Next <i className="ti-arrow-right"></i></Link></li>
										</ul>
									</div>
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
// export const getServerSideProps = async () => {
// 	const query = '*[_type == "jobs"]';
// 	const jobs = await client.fetch(query);

// 	return {
// 		 props: {jobs}
// 	}
// }
export default Browsejobfilterlist;