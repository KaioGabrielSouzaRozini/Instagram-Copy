import styles from "./styles.module.scss";

const Storyes = function () {
  return (
    <>
      <div className={styles.splideReact}>
        <div className={styles.splide}>
          <img
            src={`/pictures/Choerry.webp`}
            alt="Choerry"
            className={styles.picture}
          />
          <p>Choerry</p>
        </div>
        <div className={styles.splide}>
          <img
            src={`/pictures/Jinsoul.webp`}
            alt="Jinsoul"
            className={styles.picture}
          />
          <p>Jinsoul</p>
        </div>
        <div className={styles.splide}>
          <img
            src={`/pictures/KimLip.webp`}
            alt="KimLip"
            className={styles.picture}
          />
          <p>Kim Lip</p>
        </div>
        <div className={styles.splide}>
          <img
            src={`/pictures/HaSeul.webp`}
            alt="HaSeul"
            className={styles.picture}
          />
          <p>HaSeul</p>
        </div>
        <div className={styles.splide}>
          <img
            src={`/pictures/YeoJin.webp`}
            alt="YeoJin"
            className={styles.picture}
          />
          <p>YeoJin</p>
        </div>
        <div className={styles.splide}>
          <img
            src={`/pictures/OliviaHye.webp`}
            alt="OliviaHye"
            className={styles.picture}
          />
          <p>Olivia Hye</p>
        </div>
      </div>
    </>
  );
};

export default Storyes;
