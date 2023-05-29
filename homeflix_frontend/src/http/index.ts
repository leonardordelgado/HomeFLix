import axios, {AxiosInstance} from "axios";

const clienthttp: AxiosInstance = axios.create({
    baseURL: "http://192.168.0.251:3001/"
})
export default clienthttp