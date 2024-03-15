import styled from "styled-components";
import {
  Variants,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";

const Wrapper = styled(motion.div)`
  height: 200vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: rgba(255, 255, 255);
  border-radius: 30px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants: Variants = {};

function App() {
  const x = useMotionValue(0);
  const rotateZ = useTransform(x, [-260, 260], [-360, 360]);
  const gradient = useTransform(
    x,
    [-260, 260],
    [
      "linear-gradient(135deg, rgb(0, 174, 238), rgb(16, 0, 238))",
      "linear-gradient(135deg, rgb(238, 159, 0), rgb(182, 238, 0))",
    ]
  );

  useMotionValueEvent(x, "change", (x) => {
    console.log(rotateZ.get());
  });

  const { scrollY, scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);

  useMotionValueEvent(scrollY, "change", (y) => {
    console.log(scrollYProgress.get());
  });

  return (
    <Wrapper style={{ background: gradient }}>
      <Box
        style={{ x, rotateZ: rotateZ, scale: scale }}
        drag="x"
        dragSnapToOrigin
      />
    </Wrapper>
  );
}

export default App;
