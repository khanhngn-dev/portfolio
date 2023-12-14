import { SectionHeader, Header, TypingText } from '@/components';
import { HiChevronDown } from 'react-icons/hi2';
import { FaEnvelope } from 'react-icons/fa6';
import { TITLE_TEXTS } from '@/constants/home';

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-4 overflow-x-hidden">
      <section id="greeting" className="flex flex-col h-[100dvh] justify-center relative gap-4">
        <p className="text-2xl sm:text-4xl font-medium">hi, I&rsquo;m</p>
        <h1 className="text-6xl sm:text-7xl font-extrabold flex flex-col bg-gradient-to-r from-blue-500  to-primary bg-clip-text text-transparent pb-2">
          Khanh Gia Nguyen
        </h1>
        <TypingText textArr={TITLE_TEXTS} typingTextClassName="text-3xl sm:text-5xl font-medium " />
        <a href="#about" className="absolute bottom-6 flex flex-col items-center gap-3 self-center">
          <span>about me</span>
          <HiChevronDown className="w-8 h-8 animate-bounce" />
        </a>
      </section>
      <Header id="about" subtitle="something" title="about me" className="pt-20" />
      <section className="mt-10">
        <SectionHeader
          title="contact"
          className="text-xl md:text-2xl font-bold !border-primary"
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
      </section>
    </main>
  );
}
