import { Config } from "src/config/Config";
import AxiosInstance from "src/config/CustomAxios";
import { epsgAPIEntity } from "src/interface/entity/epsg";

export class EpsgService {
    static async code(code: number) {
        const { data } = await AxiosInstance.createNodeInstance().get<epsgAPIEntity>(`${Config.Node.epsg}`, { params: { epsg: code } });
        return data;
    }
}
