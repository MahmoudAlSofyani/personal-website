import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import css from "../styles/skills.module.css";

const Skills = () => {
  return (
    <>
      <Head>
        <title>Mahmoud AlSofyani | Skills</title>
        <meta name="title" content="Mahmoud AlSofyani | Skills" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mahmoudalsofyani.dev/skills" />
        <meta property="og:title" content="Mahmoud AlSofyani | Skills" />
        <meta property="og:image" content="./logo/black_logo.png" />
        <meta
          name="description"
          content="Freelance software developer based in Dubai. Contact me if you need any software development services such as websites, back-ends, & mobile applications."
        />
        <meta
          property="og:description"
          content="Freelance software developer based in Dubai. Contact me if you need any software development services such as websites, back-ends, & mobile applications."
        />
        <meta
          property="twitter:description"
          content="Freelance software developer based in Dubai. Contact me if you need any software development services such as websites, back-ends, & mobile applications."
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://mahmoudalsofyani.dev/skills"
        />
        <meta property="twitter:title" content="Mahmoud AlSofyani | Skills" />
      </Head>
      <Navbar />
      <section className={css.skillsSection}>
        <div className={css.frontendContainer}>
          <h4>Front End</h4>
          <ul>
            <li>HTML</li>
            <li>CSS / SASS</li>
            <li>CSS Modules</li>
            <li>Styled Components</li>
            <li>jQuery</li>
            <li>JavaScript / Node JS</li>
            <li>React JS</li>
            <li>Next JS</li>
          </ul>
        </div>
        <div className={css.backendContainer}>
          <h4>Back End</h4>
          <ul>
            <li>Node JS</li>
            <li>Express JS</li>
            <li>MongoDB / Mongoose</li>
            <li>REST API</li>
          </ul>
        </div>
        <div className={css.mobileContainer}>
          <h4>Mobile</h4>
          <ul>
            <li>Android</li>
            <li>React Native</li>
          </ul>
        </div>
        <div className={css.languagesContainer}>
          <h4>Languages</h4>
          <ul>
            <li>C / C++</li>
            <li>Java</li>
            <li>JavaScript</li>
          </ul>
        </div>
        <div className={css.toolsetContainer}>
          <h4>Toolset</h4>
          <ul>
            <li>Visual Studio Code</li>
            <li>Android Studio</li>
            <li>Git CLI / Github</li>
            <li>npm</li>
            <li>Figma</li>
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Skills;
