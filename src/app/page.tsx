import { SectionHeader, Header, TypingText, Card } from '@/components';
import { HiChevronDown } from 'react-icons/hi2';
import { TITLE_TEXTS } from '@/constants/home';
import clsx from 'clsx';
import style from './home.module.css';

export default function Home() {
  return (
    <>
      <section id="greeting" className="overflow-x-hidden mb-40">
        <div className={clsx('container-center', style['hero'])}>
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
            <div className={clsx(style['dashed-horizontal'])}></div>
            <div className={clsx(style['square-corner'])}></div>
          </div>
          {/* This will relative to the current position within main */}
          <div className={clsx(style['dashed-vertical'])}></div>
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
      </section>
      <section id="about" className="container-center">
        <Header subtitle="something" title="about me" />

        <Card className="bg-neutral-850/50 backdrop-blur mt-10 border-l-4 border-blue-500 border-solid">
          <SectionHeader title="As a normal person" />
          <ul className="mt-3 flex flex-col gap-3 p-3 border border-solid border-white/40 font-mono bg-neutral-800">
            <li>Confidence and meticulous</li>
            <li>Enthusiastic about programming and technology</li>
            <li>Always eager to learn</li>
            <li>Dare to challenge and dare to change</li>
            <li>Competent with English (*cough*, IELTS 8.5)</li>
          </ul>
        </Card>

        <Card className="bg-neutral-850/50 backdrop-blur mt-10 border-l-4 border-white border-solid">
          <SectionHeader title="As an engineer" />
          <ul className="mt-3 flex flex-col gap-3 p-3 border border-solid border-white/40 font-mono bg-neutral-800">
            <li>Primary works as a Frontend developer, but take over Fullstack whenever needed</li>
            <li>In a love hate relationship with Javascript/Typescript</li>
            <li className="blinking-cursor w-max">_</li>
          </ul>
        </Card>

        <Card className="bg-neutral-850/50 backdrop-blur mt-10 border-l-4 border-primary border-solid">
          <SectionHeader title="With UI/UX" />
          <ul className="mt-3 flex flex-col gap-3 p-3 border border-solid border-white/40 font-mono bg-neutral-800">
            <li>Experience with Figma and Design guidelines</li>
            <li>Who needs to code when you can use Prototype for demo</li>
            <li>Minimalism for the win</li>
          </ul>
        </Card>

        <Header id="the" subtitle="the" title="motto" className="mt-20" />
        <Card className="bg-neutral-850/50 backdrop-blur mt-5 border-l-4 border-white border-solid font-mono">
          <blockquote>
            &ldquo;Any application that can be written in JavaScript, will eventually be written in JavaScript.&rdquo;
          </blockquote>
          <div className="w-max ml-auto italic font-sm mt-3">- Jeff Atwood, 2009</div>
        </Card>
      </section>
      <div className="py-10"></div>
    </>
  );
}
