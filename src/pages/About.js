import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/About/Education';
import Experience from '../components/About/Experience';
import Skills from '../components/About/Skills';
import Courses from '../components/About/Courses';

import courses from '../data/about/courses';
import degrees from '../data/about/degrees';
import positions from '../data/about/positions';
import { skills, categories } from '../data/about/skills';

const sections = [
  'Education',
  'Experience',
  'Skills',
  'Courses',
];

const AboutMe = () => (
  <Main
    title="About me"
    description="About Siyuan Cheng."
  >
    <article className="post" id="about">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="about-me">About Me</Link></h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>

        </div>
      </header>
      <Education data={degrees} />
      <Experience data={positions} />
      <Skills skills={skills} categories={categories} />
      <Courses data={courses} />

    </article>
  </Main>
);

export default AboutMe;
