module.exports = {
  email: 'murgosilvana@gmail.com',
  professionalTitle: 'Software Developer',
  platzi: 'https://platzi.com/@silnose/',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/silnose',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/silvanaanahimurgo',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/silnose',
    },
    {
      name: 'Telegram',
      url: 'https://t.me/silnose',
    },
    {
      name: 'Email',
      url: 'https://mail.google.com/mail/u/0/?view=cm&fs=1&to=murgosilvana@gmail.com&tf=1',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Courses',
      url: '/#courses',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
