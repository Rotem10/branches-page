import axios from "axios";

const getData = async () => {
  return (await axios.get("http://localhost:9000/")).data;
};
export default getData;
