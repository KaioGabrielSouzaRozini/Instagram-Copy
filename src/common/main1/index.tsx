import { Container } from "reactstrap";
import styles from "./styles.module.scss";

const Main1 = function () {
  return (
    <main className={styles.main}>
      <Container className={styles.barraLateral}>
        <img
          src="instagram-Logo.png"
          alt="InstagramLogo"
          className={styles.instagramLogo}
        />
        <div className={styles.iconDiv}>
          <img src="/icons/house.png" alt="house" className={styles.img} />
          <p className={styles.inicialPage}>Página inicial</p>
        </div>
        <div className={styles.iconDiv}>
          <img
            src="/icons/pesquisa.png"
            alt="pesquisa"
            className={styles.img}
          />
          <p className={styles.icon}>Pesquisa</p>
        </div>
        <div className={styles.iconDiv}>
          <img
            src="/icons/explorar.png"
            alt="explorar"
            className={styles.img}
          />
          <p className={styles.icon}>Explorar</p>
        </div>
        <div className={styles.iconDiv}>
          <img src="/icons/reels.png" alt="reels" className={styles.img} />
          <p className={styles.icon}>Reels</p>
        </div>
        <div className={styles.iconDiv}>
          <img
            src="/icons/mensagens.png"
            alt="mensagens"
            className={styles.img}
          />
          <p className={styles.icon}>Mensagens</p>
        </div>
        <div className={styles.iconDiv}>
          <img
            src="/icons/notificacoes.png"
            alt="notificacoes"
            className={styles.img}
          />
          <p className={styles.icon}>Notificações</p>
        </div>

        <div className={styles.iconDiv}>
          <img src="/icons/criar.png" alt="criar" className={styles.img} />
          <p className={styles.icon}>Criar</p>
        </div>
        <div className={styles.iconDiv}>
          <img
            src="/pictures/chuu.webp"
            alt="chuu"
            className={styles.profile}
          />
          <p className={styles.icon}>Perfil</p>
        </div>
        <div className={styles.iconDiv}>
          <p className={styles.icon}>Mais</p>
        </div>
      </Container>
    </main>
  );
};

export default Main1;
