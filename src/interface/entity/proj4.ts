export type separator = "," | "|";
export type coordinateSystemType = "wgs84" | "utmk";

export interface Proj4Entity {
    success: boolean;
    data: [...string[]];
}
