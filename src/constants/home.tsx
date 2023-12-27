import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa6';

import { QuoteCardProps } from '@/components/Card/types';
import { ContactProps } from '@/components/Contact/Contact';

export const TITLE_TEXTS = ['software engineer', 'fullstack developer', 'prompt engineer', 'tech lover'];

export const SECTIONS = ['greeting', 'about', 'motto', 'engineer', 'uiux', 'inspiration', 'contact'];

export const BRIEF_INFO = [
  'confidence and meticulous',
  'enthusiastic about programming and technology',
  'always eager to learn',
  'dare to challenge and dare to change',
  'competent with English (*cough*, IELTS 8.5)',
];

export const BRIEF_ENGINEER = [
  '3 years as Frontend, 2 years as Fullstack',
  'primarily works as a Frontend developer, but takes over Fullstack whenever needed',
  'in a love-hate relationship with Javascript/Typescript',
  'experience with automation softwares development',
  'startup + big-tech mindset and experience',
];

export const BRIEF_UI_UX = [
  'experience with Figma and Design guidelines',
  'who needs to code when you can use Prototype for demo',
  'responsive designs',
  'minimalism for the win',
];

export const TODO_LIST = [
  {
    title: 'play with graphql',
    checked: true,
    description: 'use this in combination with contentful CMS to create a blog; Apollo client',
  },
  {
    title: 'learn mobile development',
    checked: false,
    description: 'flutter or react native?',
  },
  {
    title: 'learn threejs',
    checked: false,
    description: 'wanna do cool stuff with 3d',
  },
  {
    title: 'learn golang',
    checked: false,
    description: 'replacement for nodejs?',
  },
];

export const JS_TS_SKILL = {
  title: 'javascript / typescript',
  images: [
    {
      alt: 'javascript icon',
      src: '/icons/js.svg',
    },
    {
      alt: 'typescript icon',
      src: '/icons/ts.svg',
    },
  ],
  items: ['3 years with js', '2 years with its typed counterpart', 'understand concepts of js', 'es6+ and Browser API'],
};

export const HTML_CSS_SKILL = {
  title: 'html / css',
  images: [
    {
      alt: 'html icon',
      src: '/icons/html.svg',
    },
    {
      alt: 'css icon',
      src: '/icons/css.svg',
    },
  ],
  items: ['semantic html', 'seo and accessibility', 'responsive design', 'compatibility with modern browsers'],
};

export const REACT_SKILL = {
  title: 'react',
  images: [
    {
      alt: 'react icon',
      src: '/icons/react.svg',
    },
  ],
  items: [
    '3 years with react',
    'understand lifecycle and hooks',
    'familiar with react-ecosystem (router, form, state, query, ui)',
    'optimize performance with memoization and lazy loading',
    'the library that beats frameworks',
  ],
};

export const TAILWIND_SKILL = {
  title: 'tailwind',
  images: [
    {
      alt: 'tailwind icon',
      src: '/icons/tailwind.svg',
    },
  ],
  items: [
    '3 years with tailwindcss',
    'custom themes and plugins',
    '"there are two types of technologies: those that people complain about and those that nobody uses."',
  ],
};

export const NEXT_ASTRO_SKILL = {
  title: 'next / astro',
  images: [
    {
      alt: 'next icon',
      src: '/icons/next.svg',
    },
    {
      alt: 'astro icon',
      src: '/icons/astro.svg',
    },
  ],
  items: [
    '3 years with nextjs',
    '6 months with astro',
    'astro + react > next; faster, lighter and easier',
    'optimize seo',
    'ISG',
  ],
};

export const NODE_EXPRESS_SKILL = {
  title: 'node/express',
  images: [
    {
      alt: 'node icon',
      src: '/icons/node.svg',
    },
    {
      alt: 'express icon',
      src: '/icons/express.svg',
    },
  ],
  items: [
    '2 years with both',
    'work with filesystem and workers',
    'experience with REST API and WebSocket',
    'write efficient middleware',
  ],
};

export const DATA_BASE_SKILL = {
  title: 'database',
  images: [
    {
      alt: 'mongo icon',
      src: '/icons/mongo.svg',
    },
    {
      alt: 'sql icon',
      src: '/icons/sql.svg',
    },
  ],
  items: ['familiar with both sql and nosql', 'understand tradeoffs', 'understand N+1 problem', 'ORM'],
};

export const VERSION_CI_CD_SKILL = {
  title: 'version control, ci/cd',
  images: [
    {
      src: '/icons/git.svg',
      alt: 'git icon',
    },
    {
      src: '/icons/docker.svg',
      alt: 'docker icon',
    },
  ],
  items: [
    'understands git workflow',
    'ci/cd with github actions/gitlab ci',
    'hosting using github',
    'deploy and build with docker',
  ],
};

export const BUNDLER_BUILD_TOOOL_SKILL = {
  title: 'bundler / build tool',
  images: [
    {
      src: '/icons/webpack.svg',
      alt: 'webpack icon',
    },
    {
      src: '/icons/vite.svg',
      alt: 'vite icon',
    },
  ],
  items: ['flex: can config webpack', 'adore vite for speed and ease of config', 'config rollup/vite'],
};

export const TESTING_OTHERS_SKILL = {
  title: 'testing / others',
  items: [
    'playwright for booking and enrolling in class',
    'jest and vitest for unit testing',
    'linting with eslint',
    'formatting with prettier',
  ],
};

export const BENEFIT_UI_UX = {
  title: 'best of both worlds',
  items: [
    'understand responsive and adaptive design',
    'understand accessibility and seo',
    'understand the importance of design system and component library',
  ],
};

export const USED_UI = {
  title: 'used ui libraries',
  items: [
    'ant design: great for dashboard',
    'material ui: the guidelines > the library',
    'prime: ant + mui',
    'tailwind ui, chakra, mantine, radix ui',
  ],
};

export const REFERENCES: QuoteCardProps[] = [
  {
    name: 'A V. Nguyen',
    title: 'Mentor - Senior Software Engineer',
    company: {
      name: 'Test inc.',
      url: '#',
    },
    quote: 'I have worked with him for 2 years. He is a hard-working and responsible person.',
    date: '12/2023',
  },
  {
    name: 'B T. Ngo',
    title: 'Colleague - Software Engineer',
    company: {
      name: 'Test inc.',
      url: '#',
    },
    quote:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: '12/2023',
  },
];

export const CONTACT_INFO: ContactProps[] = [
  {
    icon: <FaEnvelope className="w-6 h-8" />,
    text: 'khanhngn.dev@gmail.com',
    url: 'mailto:khanhngn.dev@gmail.com',
    textToCopy: 'khanhngn.dev@gmail.com',
  },
  {
    icon: <FaPhone className="w-6 h-8" />,
    text: '+84 839 868 853',
    url: 'tel:+84839868853',
    textToCopy: '+84839868853',
  },
  {
    icon: <FaGithub className="w-8 h-8" />,
    text: 'KhanhNguyenGia',
    url: 'https://github.com/KhanhNguyenGia',
  },
  {
    icon: <FaLinkedin className="w-8 h-8" />,
    text: 'khanh-gia-nguyen',
    url: 'https://www.linkedin.com/in/khanh-gia-nguyen/',
  },
];
