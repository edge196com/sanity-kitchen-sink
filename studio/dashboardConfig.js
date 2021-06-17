export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60cb9fb7402a581938975acb',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-h5s9v4nk',
                  apiId: 'c5de3a77-8357-44e7-902c-dd900687cfd4'
                },
                {
                  buildHookId: '60cb9fb73d0e611ac602a3d7',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-zyzi89wz',
                  apiId: '020c53e9-0fcc-48a1-9e3e-1dcb21bc25e6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/edge196com/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-zyzi89wz.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
