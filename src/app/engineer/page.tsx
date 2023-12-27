import { Metadata } from 'next';
import Link from 'next/link';
import { HiCog6Tooth } from 'react-icons/hi2';

import {
  Accordion,
  Button,
  Card,
  CardList,
  FlexGrid,
  Header,
  Hero,
  Observer,
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

export const metadata: Metadata = {
  title: "Jerry's portfolio | Engineer",
  description: "Jerry Nguyen portfolio's engineer page",
};

const EngineerPage = () => {
  return (
    <>
      <Observer querySelector=".section-container" />
      <Section id="greeting">
        <Hero
          title="Engineer Career"
          subtitle="all about"
          postFix={() => (
            <TypingText
              textArr={['tech stack', 'projects', 'leetcode', 'hackerrank']}
              typingTextClassName="text-3xl sm:text-4xl font-medium"
              wrapperClassName="mt-3"
              timePersist={3_000}
            />
          )}
          nextSection={{
            title: 'stack(overflow)',
            url: '#stack',
          }}
        />
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
