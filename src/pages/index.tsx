import type { NextPage } from 'next';
import { About } from '../components/sections/About';
import { Contact } from '../components/sections/Contact';
import { Hero } from '../components/sections/Hero';
import { Projects } from '../components/sections/Projects';

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
