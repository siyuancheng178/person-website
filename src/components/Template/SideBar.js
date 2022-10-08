import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Siyuan Cheng</h2>
        <p><a href="mailto:siyuanc6794@gmail.com">siyuanc6794@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Siyuan. I like building things.
        I am a <a href="https://www.nus.edu.sg/">National University of Singapore (NUS)</a> computer engineering undergraduate.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/about-me') ? <Link to="/about-me" className="button">Learn More</Link> : <Link to="/about-me" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
    </section>
  </section>
);

export default SideBar;
