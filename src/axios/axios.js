import axios from "axios";

const instance = axios.create({
  baseURL: "https://disease.sh/",
});

instance.get();

export default instance;
