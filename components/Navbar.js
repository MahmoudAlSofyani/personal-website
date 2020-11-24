import css from "../styles/navbar.module.css";
import { useRouter } from "next/router";
import Head from "next/head";

const Navbar = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={css.logoContainer}>
        <a onClick={() => router.push("/")}>
          <img src="./logo/white_full.png" />
        </a>
      </div>
      <nav className={css.navContainer}>
        <ul>
          <li className={css.links}>
            <a onClick={() => router.push("/about")}>About</a>
          </li>
          <li className={css.links}>
            <a onClick={() => router.push("/skills")}>Skills</a>
          </li>
          <li className={css.links}>
            <a onClick={() => router.push("/portfolio")}>Portfolio</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
