export default {
    name: 'job-category',
    title: 'Jobs Category',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'category title',
            type: 'string',
        },
        {
            name: 'image',
            title: 'Company Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        }, 
           
    ]
}