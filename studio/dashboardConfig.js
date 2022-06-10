export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '62a30119961d60076a9d4da3',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-do1xapnk',
                  apiId: '35e0723b-a4a9-41a7-be37-5ce8c5b94b4a'
                },
                {
                  buildHookId: '62a30119b85bd679ad977037',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-imm9bio4',
                  apiId: 'a5354de6-5a4e-444b-9f35-8f1cc7f9b003'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/billiamllc/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-imm9bio4.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
