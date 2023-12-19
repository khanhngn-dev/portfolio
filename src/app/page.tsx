import { Header, TypingText, Card, Section, CardList, CardSwiper, Highlight, Accordion } from '@/components';
import { HiChevronDown } from 'react-icons/hi2';
import clsx from 'clsx';
import style from './home.module.css';
import { BRIEF_ENGINEER, BRIEF_INFO, BRIEF_UI_UX, TITLE_TEXTS } from '@/constants';
import Image from 'next/image';
export default function Home() {
  return (
    <main id="main" className="overflow-x-hidden">
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

      <Section id="engineer" className="sm:pt-60 pt-20 overflow-x-visible">
        <Header subtitle="all about" title="engineering career" />

        <Accordion title="languages" className="mt-10">
          <Card className="border-none w-full overflow-y-auto" showPlus={false} title="javascript/typescript">
            <div className="flex flex-col sm:flex-row gap-5">
              <div className="relative w-full max-w-[300px] aspect-square mx-auto">
                <Image
                  fill
                  className="absolute !w-1/2 !h-max"
                  style={{
                    aspectRatio: '1/1',
                    top: '0.5rem',
                    left: '0.5rem',
                  }}
                  src="/icons/js.svg"
                  alt="js icon"
                />
                <Image
                  fill
                  className="absolute !w-1/2 !h-max"
                  style={{
                    aspectRatio: '1/1',
                    top: 'auto',
                    bottom: '0.5rem',
                    right: '0.5rem',
                    left: 'auto',
                  }}
                  src="/icons/ts.svg"
                  alt="ts icon"
                />
              </div>
              <CardList
                className='min-w-[50%]'
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
              <div className="relative w-full max-w-[300px] aspect-square mx-auto">
                <Image
                  fill
                  className="absolute !w-1/2 !h-max"
                  style={{
                    aspectRatio: '1/1',
                    top: '0.5rem',
                    left: '0.5rem',
                  }}
                  src="/icons/html.svg"
                  alt="html icon"
                />
                <Image
                  fill
                  className="absolute !w-1/2 !h-max"
                  style={{
                    aspectRatio: '1/1',
                    top: 'auto',
                    bottom: '0.5rem',
                    right: '0.5rem',
                    left: 'auto',
                  }}
                  src="/icons/css.svg"
                  alt="css icon"
                />
              </div>
              <CardList
                className='min-w-[50%]'
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
        </Accordion>
        <Accordion title="backend">
          <Card showPlus={false} title="nodejs" className="border-none">
            <div className="flex flex-col sm:flex-row gap-10">
              <div className="relative w-full max-w-[300px] aspect-square mx-auto bg-white">
                <Image className="p-10" fill src="/icons/node.svg" alt="node icon" />
              </div>
              <CardList
                className='min-w-[50%]'
                items={[
                  'working with nodejs for 2 years',
                  'work with filesystem and workers',
                  'the event loop has 6 queues',
                ]}
              />
            </div>
          </Card>
          <Card showPlus={false} title="express" className="border-none">
            <div className="flex flex-col sm:flex-row gap-10">
              <div className="relative w-full max-w-[300px] aspect-square mx-auto bg-white">
                <Image className="p-10" fill src="/icons/node.svg" alt="express icon" />
              </div>
              <CardList
                className='min-w-[50%]'
                items={[
                  'working with express for 2 years',
                  'write efficient middleware',
                  'experience with REST API and Websocket',
                  'configure with ts and nodemon',
                ]}
              />
            </div>
          </Card>
        </Accordion>
      </Section>
    </main>
  );
}
