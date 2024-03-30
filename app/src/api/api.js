import axios from "axios";

const URL = "http://localhost:9000/";

const getData = async () => {
  return (await axios.get(URL)).data;
};
export default getData;
