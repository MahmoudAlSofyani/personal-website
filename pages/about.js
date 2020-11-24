import Navbar from "../components/Navbar";
import Head from "next/head";
import css from "../styles/about.module.css";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Head>
        <title>Mahmoud AlSofyani | About Me</title>
        <meta name="title" content="Mahmoud AlSofyani | About Me" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mahmoudalsofyani.dev/about" />
        <meta property="og:title" content="Mahmoud AlSofyani | About Me" />
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
          content="https://mahmoudalsofyani.dev/about"
        />
        <meta property="twitter:title" content="Mahmoud AlSofyani | About Me" />
      </Head>
      <Navbar />
      <section className={css.aboutSection}>
        <div className={css.container}>
          <p>I'm a software developer based in Dubai.</p>
          <p>
            I have experience building <span>front-end</span>,{" "}
            <span>back-end</span> and <span>mobile apps</span>.
          </p>
          <p>
            I love spending my free time writing code, go for joy rides and
            discovering new music.
          </p>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default About;
