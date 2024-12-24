import { motion } from 'motion/react';
import { twJoin } from 'tailwind-merge';
import HTMLLogo from '@assets/htmlLogo.svg?react';
import CSSLogo from '@assets/cssLogo.svg?react';
import TailwindLogo from '@assets/tailwindLogo.svg?react';
import JavaScriptLogo from '@assets/javaScriptLogo.svg?react';
import TypeScriptLogo from '@assets/typeScriptLogo.svg?react';
import ReactLogo from '@assets/reactLogo.svg?react';
import JestLogo from '@assets/jestLogo.svg?react';
import TurborepoLogo from '@assets/turborepo.svg?react';
import SplunkLogo from '@assets/splunkLogo.svg?react';
import AppleLogo from '@assets/appleLogo.svg?react';
import ITermLogo from '@assets/itermLogo.svg?react';
import CloudflareLogo from '@assets/cloudFlareLogo.svg?react';
import NodeLogo from '@assets/nodeLogo.svg?react';
import NpmLogo from '@assets/npmLogo.svg?react';
import PnpmLogo from '@assets/pnpmLogo.svg?react';
import GitLogo from '@assets/gitLogo.svg?react';

type SkillLogo = () => JSX.Element;

const logoStyle = 'h-16 w-16';

const Logos: SkillLogo[] = [
  () => <HTMLLogo className={twJoin(logoStyle, 'fill-html-orange')} />,
  () => <CSSLogo className={twJoin(logoStyle, 'fill-css-blue')} />,
  () => <JavaScriptLogo className={twJoin(logoStyle, 'fill-js-yellow')} />,
  () => <TypeScriptLogo className={twJoin(logoStyle, 'fill-ts-blue')} />,
  () => <ReactLogo className={twJoin(logoStyle, 'fill-react-blue')} />,
  () => <TailwindLogo className={twJoin(logoStyle, 'fill-tw-blue')} />,
  () => <JestLogo className={twJoin(logoStyle, 'fill-jest-red')} />,
  () => <TurborepoLogo className={twJoin(logoStyle, 'fill-turbo-red')} />,
  () => <NodeLogo className={twJoin(logoStyle, 'fill-node-green')} />,
  () => <NpmLogo className={twJoin(logoStyle, 'fill-npm-red')} />,
  () => <PnpmLogo className={twJoin(logoStyle, 'fill-pnpm-orange')} />,
  () => <GitLogo className={twJoin(logoStyle, 'fill-git-orange')} />,
  () => <ITermLogo className={twJoin(logoStyle, 'fill-black')} />,
  () => <CloudflareLogo className={twJoin(logoStyle, 'fill-flare-orange')} />,
  () => <SplunkLogo className={twJoin(logoStyle, 'fill-black')} />,
  () => <AppleLogo className={twJoin(logoStyle, 'fill-black')} />,
];

const containerAnimation = {
  show: {
    rotate: [-5, 1, -1],
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const logoAnimation = {
  hidden: { y: -10 },
  show: { y: 0 },
};

export const Skills = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <motion.ol
        className="m-auto flex max-w-[50%] flex-wrap justify-center gap-4 rounded-xl bg-white py-8"
        initial="hidden"
        animate="show"
        variants={containerAnimation}
      >
        {Logos.map((SkillLogo, key: number) => (
          <motion.li
            key={key}
            className="flex basis-1/5 justify-center py-2"
            variants={logoAnimation}
            whileHover={{ scale: 1.5 }}
            whileTap={{ scale: 1.5 }}
            transition={{ type: 'spring' }}
          >
            <SkillLogo />
          </motion.li>
        ))}
      </motion.ol>
    </div>
  );
};
