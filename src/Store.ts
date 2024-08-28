import { create } from "zustand";
import Order from "./entities/Order";
import Genre from "./entities/Genre";
import Platform from "./entities/Platform";

interface GameQueryStore {
  title?: string;
  setTitle: (val: string) => void;
  selectedGenre?: Genre | null;
  setGenre: (val: Genre) => void;
  curPlatform?: Platform | null;
  setCurPlatform: (val: Platform) => void;
  order?: Order | null;
  setOrder: (val: Order) => void;
}

const useGameQuery = create<GameQueryStore>((set) => ({
  setTitle: (val: string) => set(() => ({ title: val })),
  setGenre: (val: Genre) => set(() => ({ selectedGenre: val })),
  setCurPlatform: (val: Platform) => set(() => ({ curPlatform: val })),
  setOrder: (val: Order) => set(() => ({ order: val })),
}));

export default useGameQuery;
