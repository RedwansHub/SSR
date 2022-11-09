

export function selectJob(Job) {

        return(dispatch) => {
            dispatch({
                title: Job.title, 
                slug: Job.slug,
                location: Job.location,
                Salary: Job.Salary,
                jobType: Job.jobType,
                Description: Job.desc,
                Requ: Job.requirement,
                company: Job.company,
                img: Job.img, 
            })
        }
    

}

export default JobAction.selectJob;