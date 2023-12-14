import { SectionHeader, Header, TypingText } from '@/components';
import { HiChevronDown } from 'react-icons/hi2';
import { TITLE_TEXTS } from '@/constants/home';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <main className="overflow-x-hidden">
        <section id="greeting" className="container-center flex flex-col h-[100dvh] justify-center gap-6 relative">
          <div className="flex flex-col gap-6">
            <p className="text-2xl sm:text-4xl font-medium">hi, I&rsquo;m</p>
            <h1 className="text-6xl sm:text-7xl font-extrabold flex flex-col relative pb-1">
              <div className="w-max max-w-full text-transparent bg-gradient-to-r from-blue-500 to-primary bg-clip-text pb-1">
                Khanh G. Nguyen
              </div>
              <div className="absolute border-t sm:border-t-[2px] border-dashed border-white/40 w-[100dvw] left-1/2 bottom-0 -z-10 -translate-x-1/2"></div>
              {/* This will relative to the current position of the name */}
              <div className="absolute border-b border-l sm:border-b-[2px] sm:border-l-[2px] border-solid border-white/40 w-3 sm:w-5 aspect-square -left-3 -bottom-3 sm:-left-5 sm:-bottom-5"></div>
            </h1>
            <TypingText textArr={TITLE_TEXTS} typingTextClassName="text-3xl sm:text-5xl font-medium " />
          </div>
          {/* This will relative to the current position within main */}
          <div className="absolute border-r sm:border-r-[2px] border-dashed border-white/40 h-[100dvh] -z-10"></div>
          <a href="#about" className="absolute bottom-6 flex flex-col items-center gap-3 self-center">
            <span>about me</span>
            <HiChevronDown className="w-8 h-8 animate-bounce" />
          </a>
        </section>
        <div
          className="w-full h-full absolute -z-10 bottom-0"
          style={{
            background: `linear-gradient(180deg, rgba(0,0,0, 0) 0%, rgba(20,20,20,0.4) 65%, rgba(20,20,20,1) 100%)`,
          }}
        ></div>
      </main>
      <main className="bg-[var(--color-bg)]">
        <section className="container-center">
          <Header id="about" subtitle="something" title="about me" className="pt-20" />
          <SectionHeader title="introduction" className="mt-10" iconClassName="stroke-primary stroke-[1.5px]" />
          <div className="flex mt-5 sm:flex-row flex-col gap-5">
            <div className="flex-1 font-light leading-loose flex flex-col gap-5 sm:gap-8 text-justify">
              Welcome to my portfolio, I am Khanh - some people also call me Jerry. I am a software engineer who is
              passionate about technologies in general, but more specifically, I am interested in web development and
              machine learning.
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-primary p-[2px] h-max">
              <div className="sm:w-[300px] h-[400px] relative">
                <Image src="/images/profile.jpg" alt="profile" fill />
              </div>
            </div>
          </div>
          <SectionHeader title="programming essentials" className="mt-10" iconClassName="stroke-primary stroke-[1.5px]" />
          <div>
            
          </div>
        </section>
      </main>
    </>
  );
}
