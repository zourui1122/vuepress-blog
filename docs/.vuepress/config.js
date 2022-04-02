module.exports = {
    title:'邹邹的博客',
    head: [
        ['link', { rel: 'icon', href: '/icon.svg' }]
      ],
    themeConfig: {
        logo: '/assets/img/logo.png',
        activeHeaderLinks: true,
        lastUpdated: 'Last Updated',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide.html' },
            { text: 'External', link: 'https://google.com' },
            {
                text: 'Languages',
                ariaLabel: 'Language Menu',
                items: [
                  { text: 'Chinese', link: '/language/chinese/' },
                  { text: 'Japanese', link: '/language/japanese/' }
                ]
              }
        ],
        text: 'Languages',
    sidebar: 'auto',   
    items: [
        {
            text: 'Group1', items: [{ text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },]
        },
        {
            text: 'Group2', items: [{ text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },]
        }
    ]
    },

    

}