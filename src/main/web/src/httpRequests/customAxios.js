import axios from "axios";

export default axios.create({
    baseURL: window.config.baseURL,
    timeout: 100000,
    responseType: "json"
});
