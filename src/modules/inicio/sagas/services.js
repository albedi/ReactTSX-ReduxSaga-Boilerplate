import ax from "axios";

const URL = "http://api.exchangeratesapi.io/latest";
const PRM = "P2FjY2Vzc19rZXk9YWExNzUyODExMjAzZTczMzg2NjI1ZDViYmY2OTAxZjQ=";

export const currencyVal = async (query) => {
  const prmBase = Buffer.from(PRM, "base64").toString();
  const GET_URL = `${URL}${prmBase}&base=${query}`;
  // console.log("GET_URL", GET_URL);
  return await ax.get(GET_URL).catch((err) => {
    if (err.response) {
      // client received an error response (5xx, 4xx)
      const resErr = err.response.data.error;
      const code = resErr.code;
      const errMess = resErr.message;
      const message = `${code} : ${errMess}`;
      const error = { code, message };
      throw error;
    } else if (err.request) {
      // client never received a response, or request never left
    } else {
      throw err;
    }
  });
};
