import { Container } from "reactstrap";
import styles from "./styles.module.scss";

const Main3 = function () {
  return (
    <main className={styles.main3}>
      <Container>
        <div className={styles.myPhotoDiv}>
          <div className={styles.myPhoto}>
            <img src="/pictures/chuu.webp" alt="chuu" className={styles.chuu} />
            <div className={styles.myName}>
              <p className={styles.myName1}>Chuu</p>
              <p className={styles.myName2}>Kim Ji Woo</p>
            </div>
          </div>
          <div className={styles.mudarChuu}>
            <p>Mudar</p>
          </div>
        </div>
        <div className={styles.sugestoes}>
          <p className={styles.sugestoesPara}>Sugestões para você</p>
          <p className={styles.verTudo}>Ver tudo</p>
        </div>
        <div className={styles.outrasDiv}>
          <div>
            <div className={styles.myPhotoDiv}>
              <div className={styles.myPhotoOutras}>
                <img
                  src="/pictures/YeoJin.webp"
                  alt="jinsoul"
                  className={styles.outras}
                />
                <div className={styles.myName}>
                  <div className={styles.verificadoDiv}>
                    <p className={styles.name1}>Jinsoul</p>
                    <img
                      src="/icons/verificado.png"
                      alt="verificado"
                      className={styles.verificado}
                    />
                  </div>
                  <p className={styles.name2}>Recomendação do instagram</p>
                </div>
              </div>
              <div className={styles.mudar1}>
                <p>Seguir</p>
              </div>
            </div>
            <div className={styles.myPhotoDiv}>
              <div className={styles.myPhotoOutras}>
                <img
                  src="/pictures/YeoJin.webp"
                  alt="chuu"
                  className={styles.outras}
                />
                <div className={styles.myName}>
                  <div className={styles.verificadoDiv}>
                    <p className={styles.name1}>YeoJin</p>
                    <img
                      src="/icons/verificado.png"
                      alt="verificado"
                      className={styles.verificado}
                    />
                  </div>
                  <p className={styles.name2}>Recomendação do instagram</p>
                </div>
              </div>
              <div className={styles.mudar1}>
                <p>Seguir</p>
              </div>
            </div>
            <div className={styles.myPhotoDiv}>
              <div className={styles.myPhotoOutras}>
                <img
                  src="/pictures/KimLip.webp"
                  alt="chuu"
                  className={styles.outras}
                />
                <div className={styles.myName}>
                  <div className={styles.verificadoDiv}>
                    <p className={styles.name1}>Kim Lip</p>

                    <img
                      src="/icons/verificado.png"
                      alt="verificado"
                      className={styles.verificado}
                    />
                  </div>
                  <p className={styles.name2}>Recomendações do instagram</p>
                </div>
              </div>
              <div className={styles.mudar}>
                <p>Seguir</p>
              </div>
            </div>
            <div className={styles.myPhotoDiv}>
              <div className={styles.myPhotoOutras}>
                <img
                  src="/pictures/Choerry.webp"
                  alt="chuu"
                  className={styles.outras}
                />
                <div className={styles.myName}>
                  <div className={styles.verificadoDiv}>
                    <p className={styles.name1}>Choerry</p>
                    <img
                      src="/icons/verificado.png"
                      alt="verificado"
                      className={styles.verificado}
                    />
                  </div>
                  <p className={styles.name2}>Recomendações do instagram</p>
                </div>
              </div>
              <div className={styles.mudar}>
                <p>Seguir</p>
              </div>
            </div>
            <div className={styles.myPhotoDiv}>
              <div className={styles.myPhotoOutras}>
                <img
                  src="/pictures/HaSeul.webp"
                  alt="chuu"
                  className={styles.outras}
                />
                <div className={styles.myName}>
                  <div className={styles.verificadoDiv}>
                    <p className={styles.name1}>HaSeul</p>
                    <img
                      src="/icons/verificado.png"
                      alt="verificado"
                      className={styles.verificado}
                    />
                  </div>
                  <p className={styles.name2}>Recomendações do instagram</p>
                </div>
              </div>
              <div className={styles.mudar}>
                <p>Seguir</p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        <div className={styles.recomendacoes}>
          <p className={styles.recomendacoesP}>
            Sobre Ajuda Imprensa API Carreiras Privacidade
          </p>
          <p className={styles.recomendacoesP}>Termos Localizações Idioma</p>
          <p className={styles.recomendacoesP2}>© 2023 INSTAGRAM FROM META</p>
        </div>
      </Container>
    </main>
  );
};

export default Main3;
