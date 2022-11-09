import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import { urlFor, client } from '../../client';
// import education from '../../images/job-category'

function Jobcategories(){

	const [cat, setCat] = useState([]);

	useEffect(() => {
		const category = `*[_type == "job-category"]`;

		client.fetch(category)
		.then((data) => setCat(data))
		.catch(console.error)

	})
	return(
		<div className="row">
		  {cat.map((data, index ) => (
			
		  
			<div className="col-lg-4 col-md-6 col-sm-8">
				<div className="box">
						<Link to={'/browse-job'}>
							<img className="imageBox" src={urlFor(data.image).url()} alt=""/>
						</Link>
					
					<div className="icon-content">
						<Link to={"/browse-job"} className="dez-tilte">{data.title}</Link>
					</div>
				</div>
			</div>
		))}
		
		</div>
	)
}

export default Jobcategories;