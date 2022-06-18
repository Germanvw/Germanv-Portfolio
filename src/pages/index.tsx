import type { NextPage } from 'next';
import { About } from '../components/sections/About';
import { Contact } from '../components/sections/Contact';
import { Hero } from '../components/sections/Hero';
import { Journey } from '../components/sections/Journey';
import { Projects } from '../components/sections/Projects';

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <About />
      <Journey />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
