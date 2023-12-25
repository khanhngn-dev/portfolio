'use client';

import {
  Header,
  TypingText,
  Card,
  Section,
  CardList,
  Observer,
  SkillCard,
  CardCheckList,
  SubSection,
  SubSectionHeader,
  Grid,
  ImpressionHeader,
  CardSwiper,
  QuoteCard,
} from '@/components';
import { HiChevronDown } from 'react-icons/hi2';
import clsx from 'clsx';
import style from './home.module.css';
import {
  BENEFIT_UI_UX,
  BRIEF_ENGINEER,
  BRIEF_INFO,
  BRIEF_UI_UX,
  BUNDLER_BUILD_TOOOL_SKILL,
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
import { QuoteCardProps } from '@/components/Card/types';
export default function Home() {
  return (
    <main id="main" className="overflow-x-clip">
      <Observer querySelector=".section-container" />
      <Section id="greeting">
        <div className={clsx(style['hero'])}>
          <div className="flex flex-col relative">
            <p className="text-2xl sm:text-3xl">hi, I&rsquo;m</p>
            <h1 className={clsx(style['hero-heading'], 'mt-4')}>
              <div className={clsx(style['hero-text'], 'mt-2')}>Khanh G. Nguyen</div>
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
          <a href="#about" className={style['continue-icon']}>
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
              url: '#engineer',
              title: 'More detail',
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
              url: '#uiux',
              title: 'More detail',
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

        <Card title="checklist of thinks I want to do" className="mt-20 border-l-primary border-l-2" showPlus>
          <CardCheckList items={TODO_LIST} withCursor />
        </Card>
      </Section>

      <Section id="engineer" className="sm:pt-60 pt-20">
        <Header subtitle="all about" title="engineering career" />

        <Card className="mt-20 border-l-white border-l-2" title="words to live by">
          <blockquote className="leading-loose">
            &ldquo;Any application that can be written in JavaScript, will eventually be written in JavaScript.&rdquo;
          </blockquote>
          <div className="w-max ml-auto italic font-sm mt-3">- Jeff Atwood, 2009</div>
        </Card>
        {/* languages */}
        <SubSection className="mt-20">
          <SubSectionHeader className="my-20">languages</SubSectionHeader>

          <Grid className="mt-8">
            <SkillCard {...JS_TS_SKILL} />
            <SkillCard {...HTML_CSS_SKILL} />
          </Grid>
        </SubSection>

        {/* frontend */}
        <SubSection className="!border-blue-800 mt-20">
          <SubSectionHeader className="my-20">frontend stack</SubSectionHeader>

          <Grid className="mt-8">
            <SkillCard {...REACT_SKILL} />
            <SkillCard {...TAILWIND_SKILL} />
            <SkillCard {...NEXT_ASTRO_SKILL} />
          </Grid>
        </SubSection>

        {/* backend */}
        <SubSection className="!border-[rgb(116,34,130)] mt-20">
          <SubSectionHeader className="my-20">backend stack</SubSectionHeader>

          <Grid className="mt-8">
            <SkillCard {...NODE_EXPRESS_SKILL} />
            <SkillCard {...DATA_BASE_SKILL} />
          </Grid>
        </SubSection>

        {/* tools */}
        <SubSection className="mt-20">
          <SubSectionHeader className="my-20">dev tools</SubSectionHeader>

          <Grid className="mt-8">
            <SkillCard {...VERSION_CI_CD_SKILL} />
            <SkillCard {...BUNDLER_BUILD_TOOOL_SKILL} />
            <Card title={TESTING_OTHERS_SKILL.title} className="!border-[1px] border-white/10 h-max">
              <CardList items={TESTING_OTHERS_SKILL.items} />
            </Card>
          </Grid>
        </SubSection>
      </Section>

      <Section id="uiux" className="sm:pt-60 pt-20">
        <Header subtitle="faster than" title="designer" />

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
    </main>
  );
}
