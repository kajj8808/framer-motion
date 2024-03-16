import { motion } from "framer-motion";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { workingAtom } from "../atom";

const Box = styled(motion.div)`
  width: 100px;
  height: 100px;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Svg = styled(motion.svg)`
  width: 50px;
  height: 50px;
  fill: ${(props) => props.theme.textColor};
`;

function PlayButton() {
  const [working, setWorking] = useRecoilState(workingAtom);

  const togglePlaying = () => {
    setWorking((prev) => !prev);
  };

  return (
    <Box
      onClick={togglePlaying}
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      {working ? (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path d="M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z" />
        </Svg>
      ) : (
        <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
          <path d="M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z" />
        </Svg>
      )}
    </Box>
  );
}

export default PlayButton;
