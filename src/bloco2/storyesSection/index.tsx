import Storyes from "../storyes";
import styles from "./styles.module.scss";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

const StoryesSection = function () {
  return (
    <>
      <div className={styles.storyes}>
        <Splide className={styles.splide} aria-label="My Favorite Images">
          <SplideSlide>
            <Storyes />
          </SplideSlide>
          <SplideSlide>
            <Storyes />
          </SplideSlide>
          <SplideSlide>
            <Storyes />
          </SplideSlide>
          <SplideSlide>
            <Storyes />
          </SplideSlide>
          <SplideSlide>
            <Storyes />
          </SplideSlide>
        </Splide>
      </div>
    </>
  );
};

export default StoryesSection;
