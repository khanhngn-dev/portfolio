import { Header, TypingText, Card, Section } from '@/components';
import { HiChevronDown } from 'react-icons/hi2';
import { TITLE_TEXTS } from '@/constants/home';
import clsx from 'clsx';
import style from './home.module.css';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Section id="greeting">
        <div className={clsx(style['hero'])}>
          <div className="flex flex-col relative">
            <p className="text-2xl sm:text-3xl">hi, I&rsquo;m</p>
            <h1 className="text-6xl sm:text-7xl font-extrabold flex flex-col relative mt-4">
              <div className="w-max max-w-full text-transparent bg-gradient-to-r from-blue-500 to-primary bg-clip-text mt-2">
                Khanh G. Nguyen
              </div>
            </h1>
            <TypingText
              textArr={TITLE_TEXTS}
              typingTextClassName="text-3xl sm:text-4xl font-medium"
              wrapperClassName="mt-3"
            />
            {/* This will relative to the current position of the name */}
            <div className={clsx('dashed-horizontal')}></div>
            <div className={clsx('square-corner')}></div>
          </div>
          {/* This will relative to the current position within main */}
          <div className={clsx('dashed-vertical')}></div>
          <a href="#about" className="absolute bottom-6 flex flex-col items-center gap-3 self-center">
            <span>about me</span>
            <HiChevronDown className="w-8 h-8 animate-bounce" />
          </a>
        </div>
        {/* <div
          className="w-full h-full absolute -z-10 bottom-0"
          style={{
            background: `linear-gradient(180deg, rgba(0,0,0, 0) 0%, rgba(20,20,20,0.4) 65%, rgba(20,20,20,1) 100%)`,
          }}
        ></div> */}
      </Section>
      <Section id="about" className="sm:pt-60 pt-20">
        <Header subtitle="something" title="about me" />

        <Card title="As a normal person" className="mt-10 border-blue-500">
          <ul className="flex flex-col gap-5">
            <li>+ Confidence and meticulous</li>
            <li>+ Enthusiastic about programming and technology</li>
            <li>+ Always eager to learn</li>
            <li>+ Dare to challenge and dare to change</li>
            <li>+ Competent with English (*cough*, IELTS 8.5)</li>
          </ul>
        </Card>

        <Card
          title="As an engineer"
          className="mt-10 border-white"
          detail={{
            url: '#engineer',
            title: 'More detail',
          }}
        >
          <ul className="flex flex-col gap-5">
            <li>+ Primarily works as a Frontend developer, but takes over Fullstack whenever needed</li>
            <li>+ In a love-hate relationship with Javascript/Typescript</li>
            <li>+ Experience with major UI frameworks/libraries - ReactJS, VueJS, NextJS</li>
            <li>+ Startup mindset and experience</li>
            <li className="blinking-cursor w-max">_</li>
          </ul>
        </Card>

        <Card
          title="With UI/UX"
          detail={{
            url: '#uiux',
            title: 'More detail',
          }}
          className="mt-10 border-primary"
        >
          <ul className="flex flex-col gap-5">
            <li>+ Experience with Figma and Design guidelines</li>
            <li>+ Who needs to code when you can use Prototype for demo</li>
            <li>+ Responsive designs</li>
            <li>+ Minimalism for the win</li>
          </ul>
        </Card>
      </Section>

      <Section id="motto" className="sm:pt-60 pt-20">
        <Header subtitle="very very" title="important motto" />

        <Card className="mt-5 border-white font-mono">
          <blockquote>
            &ldquo;Any application that can be written in JavaScript, will eventually be written in JavaScript.&rdquo;
          </blockquote>
          <div className="w-max ml-auto italic font-sm mt-3">- Jeff Atwood, 2009</div>
        </Card>
      </Section>
    </main>
  );
}
