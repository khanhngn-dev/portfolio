import { FaEnvelope, FaGithub, FaLinkedin, FaPhone } from 'react-icons/fa6';

import { QuoteCardProps } from '@/components/Card/types';
import { ContactProps } from '@/components/Contact/Contact';
import { StaggerImageProps } from '@/components/Images/StaggerImage';

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

export const ENGINEERING_SKILLS: StaggerImageProps['items'] = [
  {
    title: 'js / ts',
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
  },
  {
    title: 'react',
    images: [
      {
        alt: 'react icon',
        src: '/icons/react.svg',
      },
    ],
  },
  {
    title: 'next',
    images: [
      {
        alt: 'next icon',
        src: '/icons/next.svg',
      },
    ],
  },
  {
    title: 'node / express',
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
  },
];
