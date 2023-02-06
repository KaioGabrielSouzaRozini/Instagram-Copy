import { Container } from "reactstrap";
import PostagensSection from "../../bloco2/postagensSection";
import StoryesSection from "../../bloco2/storyesSection";
import styles from "./styles.module.scss";

const Main2 = function () {
  return (
    <main className={styles.main2}>
      <Container className={styles.container}>
        <StoryesSection />
        <PostagensSection />
      </Container>
    </main>
  );
};

export default Main2;
