'use client';

import clsx from 'clsx';

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
  Section,
  SectionHeader,
  StaggerImage,
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
          title="tldr:"
          className="mt-20 flex items-center gap-3 border-l-white border-l-2 mr-3 sm:mr-4"
          postFix={() => <Button>grab my cv</Button>}
        />

        <div className="mt-20 flex flex-col sm:flex-row gap-4 p-3 sm:p-4 border-l-2 border-l-blue-600 border-solid">
          <ImpressionHeader className={style['impression-header-sticky']}>NORMAL PERSON</ImpressionHeader>
          <Card className="flex-grow" showPlus plusPosition="tl">
            <CardList items={BRIEF_INFO} />
          </Card>
        </div>

        <div className="mt-20 flex flex-col sm:flex-row-reverse gap-4 p-3 sm:p-4 border-l-2 border-l-white border-solid">
          <ImpressionHeader className={style['impression-header-sticky']}>WITH ENGINEERING</ImpressionHeader>
          <Card
            className="flex-grow"
            detail={{
              url: '/engineer',
              title: '/engineer for more detail',
            }}
            showPlus
            preFix={() => (
              <>
                <SectionHeader title="brief" />
                <CardList
                  className="p-3 sm:p-4 border-solid border-white/20 border bg-neutral-800 mt-3"
                  items={BRIEF_ENGINEER}
                  withCursor
                />
                <SectionHeader className="mt-10" title="technology" />
                <StaggerImage className="mt-3" items={ENGINEERING_SKILLS} />
                <SectionHeader className="mt-10" title="words to live by" />
                <div className="p-3 sm:p-4 border-solid border-white/20 border bg-neutral-800 mt-3">
                  <blockquote className="leading-loose">
                    &ldquo;Any application that can be written in JavaScript, will eventually be written in
                    JavaScript.&rdquo;
                  </blockquote>
                  <div className="w-max ml-auto italic font-sm mt-3">- Jeff Atwood, 2009</div>
                </div>
              </>
            )}
          ></Card>
        </div>

        <div className="mt-20 flex flex-col sm:flex-row gap-4 p-3 sm:p-4 border-l-2 border-l-primary border-solid">
          <ImpressionHeader className={style['impression-header-sticky']}>with ui/ux</ImpressionHeader>
          <Card
            className="flex-grow"
            showPlus
            plusPosition="tl"
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

            <ContactList className="mt-5 h-full" contacts={CONTACT_INFO} />
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
