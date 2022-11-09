export default {
    name: 'team',
    title: 'Team',
    type: 'document',
    fields: [
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            }
        },
        {
            name: 'name',
            title: 'Member Name',
            type: 'string',
        },
        {
            name: 'title',
            title: 'Position Title',
            type: 'string',
        },
        
        
    ]
}