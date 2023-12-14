import { SectionHeader, Header, TypingText } from '@/components';
import { HiChevronDown } from 'react-icons/hi2';
import { FaEnvelope } from 'react-icons/fa6';
import { TITLE_TEXTS } from '@/constants/home';

export default function Home() {
  return (
    <>
      {' '}
      <main className="overflow-x-hidden">
        <section id="greeting" className="container-center flex flex-col h-[100dvh] justify-center gap-6 relative">
          <div className="flex flex-col gap-6">
            <p className="text-2xl sm:text-4xl font-medium">hi, I&rsquo;m</p>
            <h1 className="text-6xl sm:text-7xl font-extrabold flex flex-col relative text-transparent bg-gradient-to-r from-blue-500 to-primary bg-clip-text pb-1">
              Khanh G. Nguyen
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
        <section className="container-center ">
          <Header id="about" subtitle="something" title="about me" />
          <div className="mt-10">
            <SectionHeader
              title="contact"
              className="text-xl sm:text-2xl font-bold !border-primary"
              iconClassName="stroke-primary stroke-[1.5px] w-8 h-8"
            />
            <p className="mt-5">You can reach me using</p>
            <ul>
              <li className="flex items-center gap-2">
                <FaEnvelope className="w-5 h-5 inline-block" />
                <a href="mailto:khanhngn.dev@gmail.com" className="hover:underline">
                  khanhngn.dev@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
