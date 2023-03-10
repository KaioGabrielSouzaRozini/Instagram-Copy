import styles from "../../../styles/main.module.scss";
import Postagens from "../postagens";

const PostagensSection = function () {
  return (
    <>
      <div className={styles.postDiv}>
        <Postagens
          picture="KimLip"
          idol="Kim Lip"
          horario={7}
          post="KimLipPost3"
          comentario="새로운 사진 ♥"
        />
      </div>
      <div className={styles.postDiv}>
        <Postagens
          picture="Choerry"
          idol="Choerry"
          horario={13}
          post="ChoerryPost"
          comentario="나"
        />
      </div>
      <div className={styles.postDiv}>
        <Postagens
          picture="Jinsoul"
          idol="Jinsoul"
          horario={22}
          post="JinsoulPost"
          comentario="이봐"
        />
      </div>
    </>
  );
};
export default PostagensSection;
