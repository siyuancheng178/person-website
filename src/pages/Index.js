import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Siyuan Cheng's personal website. An undergradute student from National University of Singapore."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About this site</Link></h2>
          <p>
            Siyuan Cheng&apos;s Personal Site
          </p>
        </div>
      </header>
      <p> Welcome to my website. Please feel free to read more <Link to="/about-me">about me</Link>.
        You can check out my {' '}
        <Link to="/projects">projects</Link> {' '}
        or <Link to="/contact">contact</Link> me.
      </p>
    </article>
  </Main>
);

export default Index;
