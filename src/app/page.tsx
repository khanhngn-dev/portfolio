'use client';

import clsx from 'clsx';
import { HiCog6Tooth } from 'react-icons/hi2';

import {
  Accordion,
  Card,
  CardCheckList,
  CardList,
  CardSwiper,
  ContactList,
  FlexGrid,
  Header,
  Hero,
  ImpressionHeader,
  Observer,
  QuoteCard,
  Section,
  SectionHeader,
  SkillCard,
  SubSection,
  SubSectionHeader,
  TypingText,
} from '@/components';
import { QuoteCardProps } from '@/components/Card/types';
import {
  BENEFIT_UI_UX,
  BRIEF_ENGINEER,
  BRIEF_INFO,
  BRIEF_UI_UX,
  BUNDLER_BUILD_TOOOL_SKILL,
  CONTACT_INFO,
  DATA_BASE_SKILL,
  HTML_CSS_SKILL,
  JS_TS_SKILL,
  NEXT_ASTRO_SKILL,
  NODE_EXPRESS_SKILL,
  REACT_SKILL,
  REFERENCES,
  TAILWIND_SKILL,
  TESTING_OTHERS_SKILL,
  TITLE_TEXTS,
  TODO_LIST,
  USED_UI,
  VERSION_CI_CD_SKILL,
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
          className="mt-20 flex items-center gap-3 border-l-white border-l-2"
          postFix={() => <button className={style['action-btn']}>grab my cv</button>}
        />

        <div className="mt-20 flex flex-col sm:flex-row gap-4 p-3 sm:p-4 border-l-2 border-l-blue-600 border-solid">
          <ImpressionHeader>NORMAL PERSON</ImpressionHeader>
          <Card className="flex-grow" showPlus>
            <CardList items={BRIEF_INFO} />
          </Card>
        </div>

        <div className="mt-20 flex flex-col sm:flex-row-reverse gap-4 p-3 sm:p-4 border-l-2 border-l-white border-solid">
          <ImpressionHeader>WITH ENGINEERING</ImpressionHeader>
          <Card
            className="flex-grow"
            detail={{
              url: '/engineer',
              title: '/engineer',
            }}
            showPlus
          >
            <CardList items={BRIEF_ENGINEER} withCursor />
          </Card>
        </div>

        <div className="mt-20 flex flex-col sm:flex-row gap-4 p-3 sm:p-4 border-l-2 border-l-primary border-solid">
          <ImpressionHeader>with ui/ux</ImpressionHeader>
          <Card
            detail={{
              url: '/uiux',
              title: '/uiux',
            }}
            className="flex-grow"
            showPlus
          >
            <CardList items={BRIEF_UI_UX} />
          </Card>
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

      <Section id="engineer" className="sm:pt-60 pt-20">
        <Header subtitle="the stack(overflow)" title="engineer career" />

        <Card className="mt-20 border-l-2 border-l-white" title="words to live by">
          <blockquote className="leading-loose">
            &ldquo;Any application that can be written in JavaScript, will eventually be written in JavaScript.&rdquo;
          </blockquote>
          <div className="w-max ml-auto italic font-sm mt-3">- Jeff Atwood, 2009</div>
        </Card>
        <SubSection className="mt-20">
          <SubSectionHeader>languages</SubSectionHeader>

          <FlexGrid className="mt-20">
            <SkillCard {...JS_TS_SKILL} />
            <SkillCard {...HTML_CSS_SKILL} />
          </FlexGrid>
        </SubSection>

        <SubSection className="mt-20">
          <SubSectionHeader>frontend stack</SubSectionHeader>

          <FlexGrid className="mt-20">
            <SkillCard {...REACT_SKILL} />
            <SkillCard {...TAILWIND_SKILL} />
            <SkillCard {...NEXT_ASTRO_SKILL} />
          </FlexGrid>
        </SubSection>

        <SubSection className="mt-20">
          <SubSectionHeader>backend stack</SubSectionHeader>

          <FlexGrid className="mt-20">
            <SkillCard {...NODE_EXPRESS_SKILL} />
            <SkillCard {...DATA_BASE_SKILL} />
          </FlexGrid>
        </SubSection>

        <SubSection className="mt-20">
          <SubSectionHeader>dev tools</SubSectionHeader>

          <FlexGrid className="mt-20">
            <SkillCard {...VERSION_CI_CD_SKILL} />
            <SkillCard {...BUNDLER_BUILD_TOOOL_SKILL} />
            <Card
              className="!border-[1px] border-white/10 h-max pt-2 sm:pt-4 !px-0 !pb-0"
              preFix={() => (
                <div className="h-full w-full mb-5 max-w-[250px] max-h-[250px] aspect-square relative mx-auto">
                  <HiCog6Tooth className="w-2/3 h-2/3 center-absolute" />
                </div>
              )}
              postFix={() => (
                <Accordion title={TESTING_OTHERS_SKILL.title}>
                  <CardList className='p-3 sm:p-4' items={TESTING_OTHERS_SKILL.items} />
                </Accordion>
              )}
            ></Card>
          </FlexGrid>
        </SubSection>
      </Section>

      <Section id="uiux" className="sm:pt-60 pt-20">
        <Header subtitle="doable design" title="FASTER DESIGNER" />

        <div className="mt-20 flex flex-col sm:flex-row gap-4 p-3 sm:p-4 border-l-2 border-l-blue-600 border-solid">
          <ImpressionHeader>
            <span className="block">HOW I</span>
            <span className="block">USE FIGMA</span>
          </ImpressionHeader>
          <Card className="flex-grow">
            <div className="flex gap-5 sm:items-center flex-col sm:flex-row">
              <button className={clsx(style['action-btn'], 'justify-center')}>remember my cv?</button>
              yes, this was designed using figma
            </div>
            <div className="mt-5">
              why? allowing quick change of title/position, swapping relevant projects/skills since everything uses
              components
            </div>
            <div className="mt-5 pb-1 border-b border-white/40 border-solid">
              =&gt; hr gets that tailored cv in seconds; I get to do other things; win-win
            </div>
          </Card>
        </div>

        <div className="mt-20 flex flex-col sm:flex-row-reverse gap-4 p-3 sm:p-4 border-l-2 border-l-white border-solid">
          <ImpressionHeader>
            <span className="block">DEV +</span>
            <span className="block">DESIGN</span>
          </ImpressionHeader>
          <Card title={BENEFIT_UI_UX.title} className="flex-grow">
            <CardList items={BENEFIT_UI_UX.items} />
          </Card>
        </div>

        <div className="mt-20 flex flex-col sm:flex-row gap-4 p-3 sm:p-4 border-l-2 border-l-primary border-solid">
          <ImpressionHeader>LIBRARIES</ImpressionHeader>

          <Card className="flex-grow">
            <CardList items={USED_UI.items} />
          </Card>
        </div>
      </Section>

      <Section id="affiliations" className="sm:pt-60 pt-20">
        <Header subtitle="some" title="affiliations" />

        <SubSection className="mt-20">
          <FlexGrid>
            <SkillCard
              title="meow meow org"
              items={['4 members', '3 projects (aielts, k-eshop, mychat)', 'passionate and hardcore']}
              images={[
                {
                  src: '/icons/meowmeow.svg',
                  alt: 'meow meow org',
                },
              ]}
            />
            <SkillCard
              title="dsc fptu"
              items={['core frontend', 'training and mentoring new members', 'hosting events and sharing']}
              images={[
                {
                  src: '/icons/dsc.svg',
                  alt: 'dsc',
                },
              ]}
            />
          </FlexGrid>
        </SubSection>
      </Section>

      <Section id="contact" className="sm:pt-60 pt-20">
        <Header subtitle="how to" title="reach me" />

        <div className="mt-20 flex flex-wrap border-solid border-l-2 border-l-blue-600">
          <div className="bg-neutral-800 p-3 flex-1 basis-1/2 min-w-[300px] flex flex-col">
            <SectionHeader title="my contact" />

            <ContactList className="mt-5 h-full" contacts={CONTACT_INFO} />
          </div>
          <div className="bg-neutral-900 p-3 sm:p-4 flex-1 basis-1/2 min-w-[300px]">
            <SectionHeader title="leave yours" />
            <form className="mt-5 flex flex-col" onSubmit={(e) => e.preventDefault()}>
              <label className="block">
                <p>name</p>
                <input
                  type="text"
                  placeholder="who are you"
                  className="w-full p-3 mt-3 bg-neutral-850 border border-solid border-white/40 hover:border-white/80 transition-colors"
                />
              </label>
              <label className="block mt-5">
                <p>email</p>
                <input
                  type="email"
                  placeholder="name@email.com"
                  className="w-full mt-3 p-3 bg-neutral-850 border border-solid border-white/40 hover:border-white/80 transition-colors"
                />
              </label>

              <label className="block mt-5">
                <p>message</p>
                <textarea
                  placeholder="your inquiry"
                  className="w-full mt-3 p-3 bg-neutral-850 border border-solid border-white/40 hover:border-white/80 transition-colors"
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
