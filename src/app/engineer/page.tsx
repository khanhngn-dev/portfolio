/* eslint-disable @next/next/no-img-element */
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { HiChevronDoubleUp, HiCog6Tooth } from 'react-icons/hi2';

import {
  Accordion,
  Button,
  Card,
  CardList,
  FlexGrid,
  Header,
  Observer,
  RotateCard,
  Section,
  SkillCard,
  StaggerImage,
  SubSection,
  SubSectionHeader,
  TypingText,
} from '@/components';
import {
  BUNDLER_BUILD_TOOOL_SKILL,
  DATA_BASE_SKILL,
  HTML_CSS_SKILL,
  JS_TS_SKILL,
  NEXT_ASTRO_SKILL,
  NODE_EXPRESS_SKILL,
  PROJECTS,
  REACT_SKILL,
  TAILWIND_SKILL,
  TESTING_OTHERS_SKILL,
  VERSION_CI_CD_SKILL,
} from '@/constants';

/* eslint-disable @next/next/no-img-element */

const EngineerPage = () => {
  return (
    <>
      <Observer querySelector=".section-container" />
      <Section id="dev_card">
        <div className="dashed-vertical"></div>
        <div
          className="min-h-[100lvh] pt-[calc(var(--height-navbar)_+_2rem)] flex items-center gap-10 flex-col-reverse sm:flex-row justify-center"
          id="dev-card-container"
        >
          <div>
            <RotateCard
              container="dev-card-container"
              style={{ borderRadius: 22 }}
              width={288}
              height={400}
            >
              <img src="https://raw.githubusercontent.com/KhanhNguyenGia/KhanhNguyenGia/main/devcard.svg" className="object-cover object-center w-full h-full" alt="dev card" />
            </RotateCard>
            <p className="mt-8 flex items-end gap-2 font-light text-white/80 text-sm justify-center">
              <HiChevronDoubleUp className="w-6 h-6" />
              <a className="link" href="https://app.daily.dev/khanh_ng">
                that&rsquo;s my daily.dev dev card
              </a>
            </p>
          </div>
          <div>
            <h1 className="text-6xl sm:text-7xl font-bold">Engineer Career</h1>
            <TypingText
              textArr={['tech stack', 'projects & projects', 'geek stats']}
              typingTextClassName="text-3xl sm:text-4xl font-medium"
              wrapperClassName="mt-3"
            />
          </div>
        </div>
      </Section>
      <Section id="stack" className="pt-20 sm:pt-60">
        <Header subtitle="technology &" title="stack-overflow" />

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
                  <CardList className="p-3 sm:p-4" items={TESTING_OTHERS_SKILL.items} />
                </Accordion>
              )}
            ></Card>
          </FlexGrid>
        </SubSection>
      </Section>
      <Section id="projects" className="pt-20 sm:pt-60">
        <Header subtitle="playground &" title="projects" />

        <SubSectionHeader className="mt-20">most notable</SubSectionHeader>

        <StaggerImage className="mt-20" items={PROJECTS} lightBorder />

        <Card
          className="mt-10 flex gap-3"
          title="wanna find more projects?"
          postFix={() => (
            <Link href="/documents">
              <Button>to the search</Button>
            </Link>
          )}
        ></Card>
      </Section>
    </>
  );
};

export default EngineerPage;
