import { Config } from "src/config/Config";
import AxiosInstance from "src/config/CustomAxios";
import { coordinateSystemType, Proj4Entity, separator } from "src/interface/entity/proj4";

export class Proj4Service {
    static async coordinate(formData: any, separator: separator, coordinateSystemType: coordinateSystemType) {
        const { data } = await AxiosInstance.createNodeInstance().post<Proj4Entity>(`${Config.Node.pro4j}`, formData, {
            params: { separator: separator, coordinateSystemType: coordinateSystemType }
        });
        return data;
    }
}
