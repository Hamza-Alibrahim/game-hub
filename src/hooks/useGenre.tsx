import gernres from "../data/gernres";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenre = () => ({ data: gernres });
export default useGenre;
