'use client';

import clsx from 'clsx';
import Image from 'next/image';
import { HiChevronDoubleUp, HiPlus } from 'react-icons/hi2';

import {
  Button,
  Card,
  CardCheckList,
  CardList,
  CardSwiper,
  ContactList,
  Header,
  Hero,
  ImpressionHeader,
  Observer,
  QuoteCard,
  RotateCard,
  Section,
  SectionHeader,
  StaggerImage,
  SubSectionHeader,
  Tooltip,
  TypingText,
} from '@/components';
import { QuoteCardProps } from '@/components/Card/types';
import {
  BRIEF_ENGINEER,
  BRIEF_INFO,
  BRIEF_UI_UX,
  CONTACT_INFO,
  ENGINEERING_SKILLS,
  REFERENCES,
  TITLE_TEXTS,
  TODO_LIST,
} from '@/constants';

import style from './home.module.css';

export default function Home() {
  return (
    <>
      <Observer querySelector=".section-container" />
      <Section id="greeting">
        <Hero
          title="Khanh G. Nguyen"
          subtitle="hi, I'm"
          nextSection={{
            title: 'about me',
            url: '#about',
          }}
          postFix={() => (
            <TypingText
              textArr={TITLE_TEXTS}
              typingTextClassName="text-3xl sm:text-4xl font-medium"
              wrapperClassName="mt-3"
            />
          )}
        />
      </Section>
      <Section id="about" className="sm:pt-60 pt-20">
        <Header subtitle="something" title="about me" />

        <Card
          className="mt-20 border-l-white border-l-2"
          preFix={() => (
            <>
              <div className="flex gap-3 items-center">
                <SectionHeader title="tldr:" />
                <Button>grab my cv</Button>
              </div>
            </>
          )}
          postFix={() => (
            <div className="mt-10">
              <SectionHeader title="how to reach me" />
              <ContactList
                className="mt-3 h-full flex-wrap sm:flex-row flex-col justify-between"
                contacts={CONTACT_INFO}
              />
            </div>
          )}
        >
          <CardList items={BRIEF_INFO} />
        </Card>
      </Section>
      <Section id="engineer" className="sm:pt-60 pt-20">
        <Header subtitle="all about" title="engineer career" />

        <div className="mt-20">
          <SubSectionHeader>brief</SubSectionHeader>

          <Card
            title='dev card'
            className="border-l-white border-l-2 mt-20"
            preFix={() => (
              <div id="dev-card-container" className="py-20 border-primary/40 border border-solid mt-3">
                <RotateCard
                  container="dev-card-container"
                  className="mx-auto"
                  style={{ borderRadius: 22 }}
                  width={288}
                  height={400}
                >
                  <Image
                    src="https://raw.githubusercontent.com/KhanhNguyenGia/KhanhNguyenGia/main/devcard.svg"
                    className="object-cover object-center w-full h-full"
                    alt="dev card"
                    fill
                  />
                </RotateCard>
                <p className="mt-8 flex items-end gap-2 font-light text-white/80 text-sm justify-center">
                  <HiChevronDoubleUp className="w-6 h-6" />
                  <a className="link" href="https://app.daily.dev/khanh_ng">
                    that&rsquo;s my daily.dev dev card
                  </a>
                </p>
              </div>
            )}
            postFix={() => (
              <div className="flex flex-wrap justify-between mt-3 bg-neutral-800">
                <div className="flex flex-1 justify-center basis-[320px] border border-white/20 border-solid px-3 py-4 sm:px-4 sm:py-5">
                  <div className="flex flex-col items-center">
                    <p className="text-[240px] leading-[0.7] text-blue-600 relative">3</p>
                  </div>
                  <div className="sm:text-lg space-y-2">
                    <p className="text-xl text-blue-600">years</p>
                    <p>with Javascript</p>
                    <p>working with React</p>
                    <p>as Frontend dev</p>
                  </div>
                </div>
                <div className="flex flex-1 justify-center basis-[320px] border border-white/20 border-solid px-3 py-4 sm:px-4 sm:py-5">
                  <div className="flex flex-col items-center">
                    <p className="text-[240px] leading-[0.7] text-primary relative">2</p>
                  </div>
                  <div className="sm:text-lg space-y-2">
                    <p className="text-xl text-primary">years</p>
                    <p>with Typescript</p>
                    <p>working with Next</p>
                    <p>as Fullstack dev</p>
                  </div>
                </div>
                <div className="flex flex-1 justify-center basis-[320px] border border-white/20 border-solid px-3 py-4 sm:px-4 sm:py-5">
                  <div className="flex flex-col items-center">
                    <p className="text-[240px] leading-[0.7] relative">E</p>
                  </div>
                  <div className="sm:text-lg space-y-2">
                    <p className="text-xl">xperience</p>
                    <p>startup + big-tech</p>
                    <p>automation platform</p>
                    <p>
                      <span className="blinking-cursor w-max">_</span>
                    </p>
                  </div>
                </div>
              </div>
            )}
          ></Card>
        </div>

        <SubSectionHeader className="mt-20">the stack(overflow)</SubSectionHeader>

        <StaggerImage className="mt-20" items={ENGINEERING_SKILLS} />
        <SectionHeader className="mt-10" title="words to live by" />
        <div className="p-3 sm:p-4 border-solid border-white/20 border bg-neutral-800 mt-3">
          <blockquote className="leading-loose">
            &ldquo;Any application that can be written in JavaScript, will eventually be written in JavaScript.&rdquo;
          </blockquote>
          <div className="w-max ml-auto italic font-sm mt-3">- Jeff Atwood, 2009</div>
        </div>

        <div className="mt-20 flex flex-col sm:flex-row gap-4 p-3 sm:p-4 border-l-2 border-l-primary border-solid">
          <ImpressionHeader className={style['impression-header-sticky']}>with ui/ux</ImpressionHeader>
          <Card
            className="flex-grow -mx-3 sm:mx-0"
            showPlus
            plusPosition="br"
            preFix={() => (
              <>
                <SectionHeader title="brief" />
                <CardList
                  items={BRIEF_UI_UX}
                  className="p-3 sm:p-4 border-solid border-white/20 border bg-neutral-800 mt-3"
                />
                <SectionHeader className="mt-10" title="how I use figma" />
                <div className="p-3 sm:p-4 border-solid border-white/20 border bg-neutral-800 mt-3">
                  <div className="flex gap-5 sm:items-center flex-col sm:flex-row">
                    <Button className="justify-center">remember my cv?</Button>
                    yes, designed with figma
                  </div>
                  <div className="mt-5">why? swapping relevant items using components</div>
                  <div className="mt-5 pb-1 border-b border-white/20 border-solid">
                    =&gt; hr gets that tailored cv in seconds; I get to do other things; win-win
                  </div>
                </div>
              </>
            )}
          ></Card>
        </div>
      </Section>

      <Section id="goal" className="sm:pt-60 pt-20">
        <Header subtitle="future" title="todo list" />

        <Card title="things I want to do" className="mt-20 border-l-primary border-l-2" showPlus>
          <CardCheckList items={TODO_LIST} withCursor />
        </Card>
      </Section>

      <Section id="reference" className="sm:pt-60 pt-20">
        <Header subtitle="references" title="what others say" />

        <CardSwiper<QuoteCardProps>
          className="mt-20"
          items={REFERENCES}
          template={(item) => <QuoteCard className="h-full flex flex-col" {...item} />}
          navigation
          pagination={{
            clickable: true,
          }}
        />
      </Section>

      <Section id="contact" className="sm:pt-60 pt-20">
        <Header subtitle="how to" title="reach me" />

        <div className="mt-20 flex flex-wrap border-solid border-l-2 border-l-blue-600">
          <div className="bg-neutral-900 p-3 flex-1 basis-1/2 min-w-[300px] flex flex-col">
            <SectionHeader title="my contact" />
          </div>
          <div className="bg-neutral-800 p-3 sm:p-4 flex-1 basis-1/2 min-w-[300px]">
            <SectionHeader title="leave yours" />
            <form className="mt-5 flex flex-col" onSubmit={(e) => e.preventDefault()}>
              <label className="block">
                <p>name</p>
                <input
                  type="text"
                  placeholder="who are you"
                  className="w-full p-3 mt-3 bg-neutral-850 border border-solid border-white/20 hover:border-white/80 transition-colors"
                />
              </label>
              <label className="block mt-5">
                <p>email</p>
                <input
                  type="email"
                  placeholder="name@email.com"
                  className="w-full mt-3 p-3 bg-neutral-850 border border-solid border-white/20 hover:border-white/80 transition-colors"
                />
              </label>

              <label className="block mt-5">
                <p>message</p>
                <textarea
                  placeholder="your inquiry"
                  className="w-full mt-3 p-3 bg-neutral-850 border border-solid border-white/20 hover:border-white/80 transition-colors"
                />
              </label>

              <p className="mt-5 italic text-white/60 font-light">note: don&rsquo;t worry, no malicious intent here</p>

              <button type="submit" className="mt-5 px-4 py-2 ml-auto bg-primary hover:bg-opacity-80 transition-colors">
                send
              </button>
            </form>
          </div>
        </div>
      </Section>
    </>
  );
}
