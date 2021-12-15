import axios from "axios";
import { webDevDataMapper } from "../util/webDevDataMapper";

export const fetchService = url => {
  if (url === "web-dev") {
    return new Promise(async (resolve, reject) => {
      const response = await axios.get(
        "https://dev.sedc.mk/wp-json/wp/v2/pages/4167"
      );
      const mappedData = webDevDataMapper(response.data.ACF);
      resolve(mappedData);
    });
  } else {
    return new Promise((_, reject) => {
      reject({ message: "404 Not Found" });
    });
  }
};
