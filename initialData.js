 export const initialData = {
    // hero header data object
   hero: {
        title:'Your experiences are valuable !',
        content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        buttons:[{
            title:'Start Here',
            icon:null,
            url:'/contact'
        },{
            title:'Learn About',
            icon: null,
            url: '/dg'
        }],
        userGuid:[
            {
                num:1,
                title:'Create Account',
                content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
            },
            {
                num:2,
                title:'Charge Wallet',
                content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
            },
            {
                num:3,
                title:'Good to go',
                content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod'
            }
        ]
    },
    // faq data object
   faq: {
        question:'',
        answer:'',
        buttons:[{
            title:'Learn About',
            icon: null,
            url: null
        }],
        accordionData:[
        {
        question:'Lorem ipsum dolor sit amet ?',
        answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
        question:'Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet?',
        answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
        question:'Lorem ipsum dolor sit amet a part ?',
        answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
        question:'Witch Lorem ipsum dolor sit amet a part ?',
        answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
    ]
    },
    // let's Start data object
   letsstart: {
        title:'Lets Start',
        content:'Lorem ipsum dolor sit amet, labore et dolore magna aliqua.Lorem ipsum dolor sit amet, labore et dolore magna aliqua.',
        buttons:[{
            title:'Learn About',
            icon: null,
            url: null
        },
        {
            title:'Start here',
            icon: null,
            url: null
        }
    ],

    },
    // Business Account data object
   bussiness: {
        question:'Own a business ?',
        subTitle:'Create A business Account with 0$',
        answer:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do agna aliqua. Ut enim ad minim veniam, nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        buttons:[{
            title:'',
            icon:null,
            url:null
        },{
            title:'',
            icon:null,
            url:null
        }],
        imageData : {
            src: null,
            alt: null
        }
    },
    // footer data object
   footer: {
        logoObj: {
            src:null,
            alt:null,
            redirectUrl:null
        },
        excerpt: null,
        socialButtons:[{},{},{}],
        subscribe:{
            title:'Subscribe',
            content:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,',
            buttons:[{
                title: 'Subscribe',
                icon: null,
                url: null
            }]
        },
        helpCenter:{
            title: 'Help Center',
           links: [
                {
                title:'About Us',
                route:null,
                },
                {
                title:'Help',
                route:null,
                },
                {
                title:'New item here',
                route:null,
                },
                {
                title:'Learn About',
                route:null,
                },
                {
                title:'Support',
                route:null,
                }
            ]},
        quickAccess:{
            title: 'Quick Access',
          links:  [
                {
                title:'Home',
                route:null
                },
                {
                title:'About us',
                route:null
                },
                {
                title:'Contact',
                route:null
                },
                {
                title:'Partnershop',
                route:null
                },
                {
                title:'Support',
                route:null
                }
            ]}
        
    },

}