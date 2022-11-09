import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { Accordion,Card } from 'react-bootstrap';
//import {Form} from 'react-bootstrap';
import RangeSlider from 'react-bootstrap-range-slider';
  
function Accordsidebar(){

	const [ value, setValue ] = useState(0); 
	
	return(
		<div className="col-xl-3 col-lg-4 col-md-5 m-b10">
			<aside id="accordion1" className=" sidebar-filter">
				<Accordion defaultActiveKey="0">
					<h6 className="title"><i className="fa fa-sliders m-r5"></i> Refined Search <Link to={"#"} className="font-12 float-right">Reset All</Link></h6>
					
					<Accordion.Toggle as={Card} eventKey="0">
							<div className="acod-head">
								<h6 className="acod-title"> 
									<a data-toggle="collapse"  href="#salary" className="collapsed" >
										Salary 
									</a>
								</h6>
							</div>
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="0">
							<div id="salary" className="acod-body collapse show">
								<div className="acod-content">
								<label style={{float: 'right'}} >£{value}K</label>
									<h6 className="">Minimum Salary</h6>
									<RangeSlider
										onChange={changeEvent => setValue(changeEvent.target.value)}
										style={{width:'90%'}}
									/>
									
									{/* <input type="range" class="form-range" min="0" max="100" step="0.5" id="customRange1" />
									<output>value</output> */}
								</div>
							</div>
						</Accordion.Collapse>
						
						
						<Accordion.Toggle as={Card} eventKey="1">
							<div className="acod-head">
								<h6 className="acod-title"> 
									<a data-toggle="collapse" href="#profession" className="collapsed">Profession</a>
								</h6>
							</div>
						</Accordion.Toggle>
						 <Accordion.Collapse eventKey="1">
							<div id="Profession" className="acod-body collapse show">
								<div className="acod-content">
									<div className="custom-control custom-radio">
										<input className="custom-control-input" id="one-years" type="radio" name="radio-years" />
										<label className="custom-control-label" htmlFor="one-years">Information Technology</label>
									</div>
									<div className="custom-control custom-radio">
										<input className="custom-control-input" id="two-years" type="radio" name="radio-years" />
										<label className="custom-control-label" htmlFor="two-years">Human resources</label>
									</div>
									<div className="custom-control custom-radio">
										<input className="custom-control-input" id="three-years" type="radio" name="radio-years" />
										<label className="custom-control-label" htmlFor="three-years">Customer Service</label>
									</div>
									<div className="custom-control custom-radio">
										<input className="custom-control-input" id="three-year" type="radio" name="radio-years" />
										<label className="custom-control-label" htmlFor="three-years">Education</label>
									</div>
									<div className="custom-control custom-radio">
										<input className="custom-control-input" id="four-years" type="radio" name="radio-years" />
										<label className="custom-control-label" htmlFor="four-years">Construction</label>
									</div>
									<div className="custom-control custom-radio">
										<input className="custom-control-input" id="five-years" type="radio" name="radio-years" />
										<label className="custom-control-label" htmlFor="five-years">Housing & Revenues</label>
									</div>
								</div>
							</div>
						</Accordion.Collapse>
						<Accordion.Toggle as={Card} eventKey="2">
							<div className="acod-head">
								<h6 className="acod-title"> 
									<a data-toggle="collapse" href="#Location" className="collapsed">Location</a>
								</h6>
							</div>
						</Accordion.Toggle>
						
						<Accordion.Collapse eventKey="2">
							<div id="location" className="acod-body collapse show">
								<div className="acod-content">
									<div className="custom-control custom-checkbox">
										<input className="custom-control-input" id="location1" type="checkbox" name="checkbox-locations" />
										<label className="custom-control-label" htmlFor="location1">London <span>(50)</span> </label>
									</div>
									<div className="custom-control custom-checkbox">
										<input className="custom-control-input" id="location1" type="checkbox" name="checkbox-locations" />
										<label className="custom-control-label" htmlFor="location1">Scotland <span>(50)</span> </label>
									</div>
									<div className="custom-control custom-checkbox">
										<input className="custom-control-input" id="location1" type="checkbox" name="checkbox-locations" />
										<label className="custom-control-label" htmlFor="location1">The Midlands <span>(50)</span> </label>
									</div>
									<div className="custom-control custom-checkbox">
										<input className="custom-control-input" id="location1" type="checkbox" name="checkbox-locations" />
										<label className="custom-control-label" htmlFor="location1">The North West <span>(50)</span> </label>
									</div>
									<div className="custom-control custom-checkbox">
										<input className="custom-control-input" id="location1" type="checkbox" name="checkbox-locations" />
										<label className="custom-control-label" htmlFor="location1">The South West<span>(50)</span> </label>
									</div>
								</div>
							</div>
						</Accordion.Collapse>
						
						<Accordion.Toggle as={Card} eventKey="3">
							<div className="acod-head">
								<h6 className="acod-title"> 
									<a data-toggle="collapse"  href="#remote-work" className="collapsed" >
										Remote Work 
									</a>
								</h6>
							</div>
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="3">
							<div id="job-function" className="acod-body collapse show">
								<div className="acod-content">
									<div className="custom-control custom-radio">
										<input className="custom-control-input" id="function-services-1" type="radio" name="radio-function" />
										<label className="custom-control-label" htmlFor="function-services-1">Hybrid Working<span>(120)</span> </label>
									</div>
									<div className="custom-control custom-radio">
										<input className="custom-control-input" id="function-services-2" type="radio" name="radio-function" />
										<label className="custom-control-label" htmlFor="function-services-2">Work from Home<span>(80)</span> </label>
									</div>
								</div>
							</div>
						</Accordion.Collapse>
						<Accordion.Toggle as={Card} eventKey="4">
							<div className="acod-head">
								<h6 className="acod-title"> 
									<a data-toggle="collapse"  href="#job-type" className="collapsed" >
										Job Type 
									</a>
								</h6>
							</div>
						</Accordion.Toggle>
						<Accordion.Collapse eventKey="4">
							<div id="job-type" className="acod-body collapse show">
								<div className="acod-content">
									<div className="custom-control custom-radio">
										<input className="custom-control-input" id="industry1" type="radio" name="radio-industry" />
										<label className="custom-control-label" htmlFor="industry1">Permanent <span>(5)</span> </label>
									</div>
									<div className="custom-control custom-radio">
										<input className="custom-control-input" id="industry2" type="radio" name="radio-industry" />
										<label className="custom-control-label" htmlFor="industry2">Temporary <span>(10)</span> </label>
									</div>
									<div className="custom-control custom-radio">
										<input className="custom-control-input" id="industry3" type="radio" name="radio-industry" />
										<label className="custom-control-label" htmlFor="industry3">Contract/Intern <span>(15)</span> </label>
									</div>
								</div>
							</div>
						</Accordion.Collapse>
						
				</Accordion>
				
			</aside>	
		</div>
	)
}
export default Accordsidebar; 
