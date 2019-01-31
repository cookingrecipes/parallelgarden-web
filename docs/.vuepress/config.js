module.exports = {
  title: 'Grateful mood',
  description: 'Hello Ralu!',
  themeConfig: {
      sidebar: {
	  '/food/': [
	      '',
	      {	      
		  title: 'Salads',
		  collapsable: false,
		  children: [
		      'bc-salad/',
		  ]
	      },
	      {	      
		  title: 'Soups',
		  collapsable: false,
		  children: [
		      'cgo-soup/',
		  ]
	      },
	      {	      
		  title: 'Lunch',
		  collapsable: false,
		  children: [
		      'vegetables/',
		      'cabbage-knedlic/',
		  ]
	      },
	      {	      
		  title: 'Deserts',
		  collapsable: false,
		  children: [
		      'frangipane/',
		      'chocolate-brownies/',
		      'cheese-balls/',
		      'strudel/',
		  ]
	      },
	  ],

	  '/blog/': [
	      ['','some heading'],
	      'VAN',
	  ],

	  // fallback
	  '/': [
              '',        /* / */
              // 'contact', /* /contact.html */
              // 'about'    /* /about.html */
	  ]
      },
    nav: [
{ text: 'Home', link: '/' },
{ text: 'Blog', link: '/blog/' },
{ text: 'Food recipes', link: '/food/' },
// { text: 'Fermented Oddities', link: '/guide/' },
// { text: 'Photo', link: '/guide/' },
// { text: 'My notebooks & workshop', link: '/guide/' },
// { text: 'Fire show', link: '/guide/' },
// { text: 'My book', link: '/guide/' },
// { text: 'Canvas', link: '/guide/' },

    ]
  }
}
