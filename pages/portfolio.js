import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import css from "../styles/portfolio.module.css";
const Portfolio = () => {
  return (
    <>
      <Head>
        <title>Mahmoud AlSofyani | Portfolio</title>
        <meta name="title" content="Mahmoud AlSofyani | Portfolio" />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://mahmoudalsofyani.dev/portfolio"
        />
        <meta property="og:title" content="Mahmoud AlSofyani | Portfolio" />
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
          content="https://mahmoudalsofyani.dev/portfolio"
        />
        <meta
          property="twitter:title"
          content="Mahmoud AlSofyani | Portfolio"
        />
      </Head>
      <Navbar />
      <section className={css.portfolioSection}>
        <div className={css.snapshotContainer}>
          <img src="./images/dvu-website-snapshot.png" />
        </div>
        <div className={css.container}>
          <h3>Der Volkskreis UAE</h3>
          <a href="https://www.volkskreisuae.com">
            https://www.volkskreisuae.com
          </a>
          <p>
            Der Volkskreis UAE was a website built for a Volkswagen enthusiast
            club based in the UAE. It assists the admins in managing their
            members, post announcements and updates
          </p>
          <h4>Technology used:</h4>
          <ul>
            <li>React JS</li>
            <li>Node JS</li>
            <li>MongoDB</li>
            <li>Express JS</li>
          </ul>
        </div>
        <div className={css.divider}></div>
        <div className={css.snapshotContainer}>
          <img src="./images/mission-website-snapshot.png" />
        </div>
        <div className={css.container}>
          <h3>Mission Motorsport Dubai</h3>
          <a href="https://www.missionmotorsport.co">
            https://www.missionmotorsport.co
          </a>
          <p>
            Mission Motorsport was built for a client that recently opened a new
            garage. I worked with the client closely and understood their needs
            and requirements.
          </p>
          <h4>Technology used:</h4>
          <ul>
            <li>React JS</li>
            <li>Curator.io for the Instagram API</li>
          </ul>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Portfolio;
