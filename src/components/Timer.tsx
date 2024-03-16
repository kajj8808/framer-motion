import { useEffect, useState } from "react";
import styled from "styled-components";
import TimerCard from "./TimerCard";
import { useRecoilState } from "recoil";
import { goalAtom, roundAtom, workingAtom } from "../atom";

// 1500 <- 25분
const FIFTEEN_MINUTES = 1500;

const Container = styled.div`
  display: flex;
  align-items: center;
`;
const Colon = styled.p`
  color: ${(props) => props.theme.textColor};
  font-size: 50px;
  font-weight: bold;
  padding: 0 10px;
  padding-bottom: 20px;
  &::before {
    content: ":";
    color: rgba(255, 255, 255, 0.5);
  }
`;

function Timer() {
  const [time, setTime] = useState(FIFTEEN_MINUTES);
  const [minutes, setMinutes] = useState(25);
  const [second, setSecond] = useState(0);
  const [isWorking, setWorking] = useRecoilState(workingAtom);
  const [round, setRound] = useRecoilState(roundAtom);
  const [goal, setGoal] = useRecoilState(goalAtom);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isWorking) {
        setTime((currentTime) => (currentTime -= 1));
      }
    }, 1000);
    return () => clearInterval(interval); // clear timer...
  }, [isWorking]);

  useEffect(() => {
    if (isWorking) {
      // working...
      setMinutes(Math.floor(time / 60));
      setSecond(Math.floor(time % 60));
    }
  }, [time, isWorking]);

  useEffect(() => {
    if (minutes === 0 && second === 0) {
      // on step done!~
      setWorking(false);
      setTime(FIFTEEN_MINUTES);
      setMinutes(25);

      if (round < 4) {
        setRound((currentRound) => currentRound + 1);
      } else {
        setRound(0);
        goal < 12 ? setGoal((currentGoal) => currentGoal + 1) : setGoal(0);
      }
    }
  }, [hour, second]);

  return (
    <Container>
      <TimerCard time={minutes} />
      <Colon />
      <TimerCard time={second} />
    </Container>
  );
}

export default Timer;
