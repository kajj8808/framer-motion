import { Variants, motion } from "framer-motion";
import styled from "styled-components";

const MinutesBox = styled(motion.div)`
  width: 180px;
  height: 280px;
  background-color: ${(props) => props.theme.textColor};
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: tomato;
  font-weight: 600;
  font-size: 88px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

const boxVariants: Variants = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.25,
    },
  },
};

function TimerCard({ time }: { time: number }) {
  return (
    <MinutesBox
      key={time}
      variants={boxVariants}
      initial="initial"
      animate="animate"
    >
      <p>{time}</p>
    </MinutesBox>
  );
}
export default TimerCard;
