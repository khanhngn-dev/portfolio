import { Header, TypingText, Card, Section, CardList, Accordion, AlignImage, Observer } from '@/components';
import { HiChevronDown } from 'react-icons/hi2';
import clsx from 'clsx';
import style from './home.module.css';
import { BRIEF_ENGINEER, BRIEF_INFO, BRIEF_UI_UX, TITLE_TEXTS } from '@/constants';
import Image from 'next/image';
export default function Home() {
  return (
    <main id="main" className="overflow-x-clip">
      <Observer querySelector=".section-container" />
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
          <CardList items={BRIEF_INFO} />
        </Card>

        <Card
          title="As an engineer"
          className="mt-10 border-white"
          detail={{
            url: '#engineer',
            title: 'More detail',
          }}
        >
          <CardList items={BRIEF_ENGINEER} withCursor />
        </Card>

        <Card
          title="With UI/UX"
          detail={{
            url: '#uiux',
            title: 'More detail',
          }}
          className="mt-10 border-primary"
        >
          <CardList items={BRIEF_UI_UX} />
        </Card>
      </Section>

      <Section id="motto" className="sm:pt-60 pt-20">
        <Header subtitle="very very" title="important motto" />

        <Card className="mt-10 border-white font-mono">
          <blockquote>
            &ldquo;Any application that can be written in JavaScript, will eventually be written in JavaScript.&rdquo;
          </blockquote>
          <div className="w-max ml-auto italic font-sm mt-3">- Jeff Atwood, 2009</div>
        </Card>
      </Section>

      <Section id="engineer" className="sm:pt-60 pt-20">
        <Header subtitle="all about" title="engineering career" />

        {/* Languages */}
        <Accordion stickyLabel title="languages" className="mt-10">
          <Card className="border-none w-full overflow-y-auto" showPlus={false} title="javascript/typescript">
            <div className="flex flex-col sm:flex-row gap-5">
              <div className={clsx(style['image-wrapper'])}>
                <AlignImage
                  items={[
                    {
                      src: '/icons/js.svg',
                      alt: 'js icon',
                    },
                    {
                      src: '/icons/ts.svg',
                      alt: 'ts icon',
                    },
                  ]}
                />
              </div>
              <CardList
                className="min-w-[50%]"
                items={[
                  'working with Javascript for 3 years',
                  '2 years with its typed counter part',
                  'experience with ES6+ features',
                  'familiar with browser APIs',
                  'learn JS/TS before learning its numerous libraries and frameworks',
                ]}
              />
            </div>
          </Card>
          <Card title="html/css" showPlus={false} className="border-none">
            <div className="flex flex-col sm:flex-row gap-5">
              <div className={clsx(style['image-wrapper'])}>
                <AlignImage
                  items={[
                    {
                      src: '/icons/html.svg',
                      alt: 'html icon',
                    },
                    {
                      src: '/icons/css.svg',
                      alt: 'css icon',
                    },
                  ]}
                />
              </div>
              <CardList
                className="min-w-[50%]"
                items={[
                  'learn this before js/ts',
                  'semantic and accessible HTML',
                  'animation with CSS',
                  'responsive design',
                  'turing complete',
                ]}
              />
            </div>
          </Card>
          <Card title="sql/nosql" showPlus={false} className="border-none">
            <div className="flex flex-col sm:flex-row gap-5">
              <div className={clsx(style['image-wrapper'])}>
                <Image className="p-10" fill src="/icons/sql.svg" alt="sql icon" />
              </div>
              <CardList
                className="min-w-[50%]"
                items={[
                  'familiar with N + 1',
                  'understand tradeoffs between sql and nosql',
                  'indexes and query optimization',
                  'experience with ORM (Prisma, TypeORM)',
                ]}
              />
            </div>
          </Card>
        </Accordion>
        {/* Frontend */}
        <Accordion stickyLabel title="frontend">
          <Card showPlus={false} title="react" className="border-none">
            <div className="flex flex-col sm:flex-row gap-10">
              <div className={clsx(style['image-wrapper'])}>
                <AlignImage
                  items={[
                    {
                      src: '/icons/react.svg',
                      alt: 'react icon',
                    },
                    {
                      src: '/icons/redux.svg',
                      alt: 'redux icon',
                    },
                    {
                      src: '/icons/router.svg',
                      alt: 'router icon',
                    },
                  ]}
                />
              </div>
              <CardList
                className="min-w-[50%]"
                items={[
                  'working with react for 3 years',
                  'understand lifecycle and hooks',
                  'write reuseable components',
                  'use UI lib AntD, MUI, Prime',
                  'familiar with react-ecosystem (router, form, state, TanStackQuery)',
                  'optimize performance with memoization and lazy loading',
                  'experience with @redux/toolkit and context',
                  'the (best) library that beats frameworks',
                ]}
              />
            </div>
          </Card>
          <Card showPlus={false} title="vue" className="border-none">
            <div className="flex flex-col sm:flex-row gap-10">
              <div className={clsx(style['image-wrapper'])}>
                <AlignImage
                  items={[
                    {
                      src: '/icons/vue.svg',
                      alt: 'vue icon',
                    },
                    {
                      src: '/icons/pinia.svg',
                      alt: 'pinia icon',
                    },
                  ]}
                />
              </div>
              <CardList
                className="min-w-[50%]"
                items={['working with vue for 6 months', 'use vue3 with composition api', 'not the best nor popular']}
              />
            </div>
          </Card>
          <Card showPlus={false} title="tailwind" className="border-none">
            <div className="flex flex-col sm:flex-row gap-10">
              <div className={clsx(style['image-wrapper'])}>
                <Image className="p-10" fill src="/icons/tailwind.svg" alt="tailwind icon" />
              </div>
              <CardList
                className="min-w-[50%]"
                items={[
                  'working with tailwind for 3 years',
                  'custom themes and plugins',
                  '"there are two types of technologies: those that people complain about and those that nobody uses."',
                ]}
              />
            </div>
          </Card>
          <Card showPlus={false} title="ssg/ssr" className="border-none">
            <div className="flex flex-col sm:flex-row gap-10">
              <div className={clsx(style['image-wrapper'])}>
                <AlignImage
                  items={[
                    {
                      src: '/icons/next.svg',
                      alt: 'next icon',
                    },
                    {
                      src: '/icons/astro.svg',
                      alt: 'astro icon',
                    },
                  ]}
                />
              </div>
              <CardList
                className="min-w-[50%]"
                items={[
                  'working with next for 2 years',
                  'astro for 6 months and is amazing',
                  'seo friendly',
                  'astro + react > next',
                  'serious: next is getting worse and worse with each version and being vendor locked into vercel is not a good idea',
                ]}
              />
            </div>
          </Card>
        </Accordion>
        {/* Backend */}
        <Accordion stickyLabel title="backend">
          <Card showPlus={false} title="nodejs" className="border-none">
            <div className="flex flex-col sm:flex-row gap-10">
              <div className={clsx(style['image-wrapper'], 'bg-white')}>
                <Image className="p-10" fill src="/icons/node.svg" alt="node icon" />
              </div>
              <CardList
                className="min-w-[50%]"
                items={[
                  'working with nodejs for 2 years',
                  'flexible and scalable',
                  'serverless',
                  'work with filesystem and workers',
                  'the event loop has 6 queues',
                ]}
              />
            </div>
          </Card>
          <Card showPlus={false} title="express" className="border-none">
            <div className="flex flex-col sm:flex-row gap-10">
              <div className={clsx(style['image-wrapper'], 'bg-white')}>
                <Image fill src="/icons/express.svg" alt="express icon" />
              </div>
              <CardList
                className="min-w-[50%]"
                items={[
                  'working with express for 2 years',
                  'write efficient middleware',
                  'experience with REST API and Websocket',
                  'configure with ts and nodemon',
                ]}
              />
            </div>
          </Card>
          <Card showPlus={false} title="databases" className="border-none">
            <div className="flex flex-col sm:flex-row gap-10">
              <div className={clsx(style['image-wrapper'])}>
                <AlignImage
                  items={[
                    {
                      src: '/icons/mongo.svg',
                      alt: 'mongo icon',
                    },
                    {
                      src: '/icons/postgre.svg',
                      alt: 'postgre icon',
                    },
                    {
                      src: '/icons/mysql.svg',
                      alt: 'mysql icon',
                    },
                  ]}
                />
              </div>
              <CardList
                className="min-w-[50%]"
                items={['mongo: nosql, scalable, fast to iterate', 'postgre + mysql: sql, relational, reliable']}
              />
            </div>
          </Card>
        </Accordion>
        <Accordion stickyLabel title="tools">
          <Card showPlus={false} className="border-none" title="version control">
            <div className="flex flex-col sm:flex-row gap-10">
              <div className={clsx(style['image-wrapper'])}>
                <AlignImage
                  items={[
                    {
                      src: '/icons/git.svg',
                      alt: 'git icon',
                    },
                    {
                      src: '/icons/github.svg',
                      alt: 'github icon',
                    },
                    {
                      src: '/icons/gitlab.svg',
                      alt: 'gitlab icon',
                    },
                  ]}
                />
              </div>
              <CardList
                className="min-w-[50%]"
                items={[
                  'understands git workflow',
                  'ci/cd with github actions/gitlab ci',
                  'hosting using github',
                  'achievement: "rebase without losing code"',
                ]}
              />
            </div>
          </Card>
          <Card showPlus={false} className="border-none" title="testing">
            <div className="flex flex-col sm:flex-row gap-10">
              <div className={clsx(style['image-wrapper'])}>
                <AlignImage
                  items={[
                    {
                      src: '/icons/playwright.svg',
                      alt: 'playwright icon',
                    },
                    {
                      src: '/icons/jest.svg',
                      alt: 'jest icon',
                    },
                    {
                      src: '/icons/vitest.svg',
                      alt: 'vitest icon',
                    },
                  ]}
                />
              </div>
              <CardList
                className="min-w-[50%]"
                items={[
                  'use playwright for booking and enrolling in class',
                  'use jest for unit testing',
                  'vitest is amazing (period)',
                ]}
              />
            </div>
          </Card>
          <Card showPlus={false} className="border-none" title="bundler/build tool">
            <div className="flex flex-col sm:flex-row gap-10">
              <div className={clsx(style['image-wrapper'])}>
                <AlignImage
                  items={[
                    {
                      src: '/icons/webpack.svg',
                      alt: 'webpack icon',
                    },
                    {
                      src: '/icons/vite.svg',
                      alt: 'vite icon',
                    },
                    {
                      src: '/icons/rollup.svg',
                      alt: 'rollup icon',
                    },
                  ]}
                />
              </div>
              <CardList
                className="min-w-[50%]"
                items={[
                  'flex: can config webpack',
                  'adore vite for speed and ease of config',
                  'anything that runs on rollup runs on vite',
                ]}
              />
            </div>
          </Card>
          <Card showPlus={false} className="border-none" title="others">
            <div className="flex flex-col sm:flex-row gap-10">
              <div className={clsx(style['image-wrapper'])}>
                <AlignImage
                  items={[
                    {
                      src: '/icons/babel.svg',
                      alt: 'babel icon',
                    },
                    {
                      src: '/icons/prettier.svg',
                      alt: 'prettier icon',
                    },
                    {
                      src: '/icons/eslint.svg',
                      alt: 'eslint icon',
                    },
                  ]}
                />
              </div>
              <CardList
                className="min-w-[50%]"
                items={[
                  'three pillars of js development',
                  'config babel for transpiling, minifying, polyfilling',
                  'format code with prettier',
                  'lint code with eslint',
                ]}
              />
            </div>
          </Card>
        </Accordion>
        <h6 className="mt-5 text-sm font-light italic">note: this accordion is built using css only</h6>
      </Section>
    </main>
  );
}
