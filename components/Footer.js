import { GoMarkGithub } from "react-icons/go";
import { GrLinkedin } from "react-icons/gr";

import css from "../styles/footer.module.css";

const Footer = () => {
  return (
    <>
      <div className={css.container}>
        <div className={css.socialIcons}>
          <a href="https://www.github.com/mahmoudalsofyani">
            <GoMarkGithub className={css.icon} />
          </a>
          <a href="https://www.linkedin.com/in/mahmoudalsofyani">
            <GrLinkedin className={css.icon} />
          </a>
        </div>
        <div className={css.email}>
          <a href="mailto:hello@mahmoudalsofyani.dev">
            hello@mahmoudalsofyani.dev
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
