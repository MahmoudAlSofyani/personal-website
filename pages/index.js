import Navbar from "../components/Navbar";
import Head from "next/head";
import Main from "../components/Main";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mahmoud AlSofyani | Software Developer</title>
        <meta name="title" content="Mahmoud AlSofyani | Software Developer" />
        <meta
          name="description"
          content="Freelance software developer based in Dubai. Contact me if you need any software development services such as websites, back-ends, & mobile applications."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mahmoudalsofyani.dev" />
        <meta
          property="og:title"
          content="Mahmoud AlSofyani | Software Developer"
        />
        <meta
          property="og:description"
          content="Freelance software developer based in Dubai. Contact me if you need any software development services such as websites, back-ends, & mobile applications."
        />
        <meta property="og:image" content="./logo/black_logo.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://mahmoudalsofyani.dev" />
        <meta
          property="twitter:title"
          content="Mahmoud AlSofyani | Software Developer"
        />
        <meta
          property="twitter:description"
          content="Freelance software developer based in Dubai. Contact me if you need any software development services such as websites, back-ends, & mobile applications."
        />
        <meta property="twitter:image" content="./logo/black_logo.png" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}
