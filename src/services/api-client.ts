import axios from "axios";

export interface FetchResonse<T> {
  count: number;
  results: T[];
}

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "b37b4862d4424d2cb414a15bacfcebc0",
  },
});
