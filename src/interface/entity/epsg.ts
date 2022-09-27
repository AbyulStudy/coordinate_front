type epsgioUrl = `https://epsg.io/${number}`;
type epsgioTitle =
    | "OGC Well Known Text"
    | "OGC Well Known Text 2 (2019)"
    | "ESRI Well Known Text"
    | "PROJ.4"
    | "JavaScript (Proj4js) "
    | "JSON"
    | "GeoServer"
    | "MapServer - MAPfile"
    | "Mapnik"
    | "SQL (PostGIS)";

export type epsgioUrlEntity = {
    url: epsgioUrl;
};
export type epsgioDataEntity = {
    title: epsgioTitle;
    code: string;
};

export interface epsgAPIEntity {
    success: boolean;
    data: [epsgioUrlEntity, ...epsgioDataEntity[]];
}
