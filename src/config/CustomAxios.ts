import axios from "axios";
import { Config } from "./Config";

class AxiosInstance {
    private static nodeURL = Config.NODE_MODE === "development" ? Config.Local.node : Config.Server.node;
    private static javaURL = Config.NODE_MODE === "development" ? Config.Local.java : Config.Server.java;
    private static TIME_OUT = Config.Server.time;

    static createNodeInstance() {
        return axios.create({
            baseURL: this.nodeURL,
            timeout: this.TIME_OUT
        });
    }

    static createJavaInstance() {
        return axios.create({
            baseURL: this.javaURL,
            timeout: this.TIME_OUT
        });
    }
}

export default AxiosInstance;
