export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '613a695d1907e30d1d743c4b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-rihqbefv',
                  apiId: '664c9189-eb9a-472b-baa8-3b44e253c7ea'
                },
                {
                  buildHookId: '613a695d9a608b10e16b4120',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-rsrgd5x3',
                  apiId: 'a8b39430-8ad6-4fd0-8884-5b7a35857136'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/laniakea-studio/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-rsrgd5x3.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
