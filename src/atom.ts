import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const workingAtom = atom<boolean>({
  key: "warking",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const roundAtom = atom<number>({
  key: "round",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});

export const goalAtom = atom<number>({
  key: "goal",
  default: 0,
  effects_UNSTABLE: [persistAtom],
});
