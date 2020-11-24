import css from "../styles/main.module.css";

const Main = () => {
  return (
    <>
      <section className={css.mainSection}>
        <div className={css.container}>
          <div className={css.content}>
            <h1>
              Hi! I'm <span>Mahmoud</span>
            </h1>
            <h2>Code. Cars. Music</h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
