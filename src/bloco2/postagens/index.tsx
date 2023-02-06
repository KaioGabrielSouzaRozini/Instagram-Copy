import styles from "./styles.module.scss";

interface props {
  picture: string;
  idol: string;
  horario: number;
  post: string;
  comentario: string;
}

const Postagens = function ({
  picture,
  idol,
  horario,
  post,
  comentario,
}: props) {
  return (
    <>
      <div className={styles.postDivAll}>
        <div className={styles.postDiv}>
          <div className={styles.postPerfil}>
            <img
              src={`/pictures/${picture}.webp`}
              alt={picture}
              className={styles.perfilImg}
            />
            <div className={styles.postNames}>
              <div className={styles.horario}>
                <p className={styles.postNamePerfil}>{idol}</p>
                <p className={styles.horas}>• {horario} h</p>
              </div>
              <p>Korea</p>
            </div>
          </div>
          <p className={styles.pontos}>...</p>
        </div>
        <div className={styles.posts}>
          <img
            src={`/posts/${post}.jpg`}
            alt="KimLipPost"
            className={styles.kimLipPost}
          />
        </div>
        <div className={styles.baseItens}>
          <div className={styles.baseItens1}>
            <img
              src="/icons/notificacoes.png"
              alt="notificacoes"
              className={styles.baseImg}
            />
            <img
              src="/icons/balao.png"
              alt="balao"
              className={styles.baseImg}
            />
            <img
              src="/icons/mensagens.png"
              alt="notificacoes"
              className={styles.baseImg}
            />
          </div>
          <div className={styles.baseItens2}>
            <img src="/icons/salvar.png" alt="salvar" />
          </div>
        </div>
        <div className={styles.comentario}>
          <p>
            curtido por <strong>Chuu</strong> e <strong>outras pessoas</strong>
          </p>
          <p className={styles.comentarioDono}>
            <strong>{idol}</strong> {comentario}
          </p>
          <p className={styles.comentarioTraducao}>Ver tradução</p>
          <p className={styles.comentarios}>ver todos os 94378 comentários</p>
          <p className={styles.comentarioFinal}>Adicione um comentário...</p>
        </div>
        <hr />
      </div>
    </>
  );
};
export default Postagens;
