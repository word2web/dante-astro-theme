export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Graham Twaddle',
    description: 'Graham Twaddle\'s website. Knowledge management, communications and wee projects',
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Blog',
            href: '/blog'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
       
     
    ],
    footerNavLinks: [
     
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/gktwaddle/'
        },
        {
            text: 'Github',
            href: 'https://github.com/word2web'
        },
       
    ],
    hero: {
        title: 'Hello👋',
        text: "Thanks for stopping by. I'm Graham Twaddle and since 2017 I've been a contractor specialising in knowledge management, communications and business analysis. This site is a home for my <a href='/blog/'>blog</a> and for some wee personal <a href='/projects/'>projects</a> I've been working on. <p>Enjoy. 😊</p>",
    },
 
    postsPerPage: 5,
    projectsPerPage: 5
};

export default siteConfig;
