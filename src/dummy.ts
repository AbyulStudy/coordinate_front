export const epsgDummy = {
    success: true,
    data: [
        {
            url: "https://epsg.io/4019"
        },
        {
            title: "OGC Well Known Text",
            code: 'GEOGCS["Unknown datum based upon the GRS 1980 ellipsoid (deprecated)",\n    DATUM["Not_specified_based_on_GRS_1980_ellipsoid",\n        SPHEROID["GRS 1980",6378137,298.257222101,\n            AUTHORITY["EPSG","7019"]],\n        AUTHORITY["EPSG","6019"]],\n    PRIMEM["Greenwich",0,\n        AUTHORITY["EPSG","8901"]],\n    UNIT["degree",0.0174532925199433,\n        AUTHORITY["EPSG","9122"]],\n    AUTHORITY["EPSG","4019"]]\n'
        },
        {
            title: "OGC Well Known Text 2 (2019)",
            code: 'GEOGCRS["Unknown datum based upon the GRS 1980 ellipsoid",\n    DATUM["Not specified (based on GRS 1980 ellipsoid)",\n        ELLIPSOID["GRS 1980",6378137,298.257222101,\n            LENGTHUNIT["metre",1]]],\n    PRIMEM["Greenwich",0,\n        ANGLEUNIT["degree",0.0174532925199433]],\n    CS[ellipsoidal,2],\n        AXIS["geodetic latitude (Lat)",north,\n            ORDER[1],\n            ANGLEUNIT["degree",0.0174532925199433]],\n        AXIS["geodetic longitude (Lon)",east,\n            ORDER[2],\n            ANGLEUNIT["degree",0.0174532925199433]],\n    USAGE[\n        SCOPE["Not recommended."],\n        AREA["Not specified."],\n        BBOX[-90,-180,90,180]],\n    ID["EPSG",4019]]\n'
        },
        {
            title: "ESRI Well Known Text",
            code: 'GEOGCS["GCS_GRS_1980",\n    DATUM["D_GRS_1980",\n        SPHEROID["GRS_1980",6378137.0,298.257222101]],\n    PRIMEM["Greenwich",0.0],\n    UNIT["Degree",0.0174532925199433]]\n'
        },
        {
            title: "PROJ.4",
            code: "+proj=longlat +ellps=GRS80 +no_defs +type=crs"
        },
        {
            title: "JavaScript (Proj4js) ",
            code: 'proj4.defs("EPSG:4019","+proj=longlat +ellps=GRS80 +no_defs +type=crs");\n'
        },
        {
            title: "JSON",
            code: '{\n    "$schema": "https://proj.org/schemas/v0.5/projjson.schema.json",\n    "type": "GeographicCRS",\n    "name": "Unknown datum based upon the GRS 1980 ellipsoid",\n    "datum": {\n        "type": "GeodeticReferenceFrame",\n        "name": "Not specified (based on GRS 1980 ellipsoid)",\n        "ellipsoid": {\n            "name": "GRS 1980",\n            "semi_major_axis": 6378137,\n            "inverse_flattening": 298.257222101\n        }\n    },\n    "coordinate_system": {\n        "subtype": "ellipsoidal",\n        "axis": [\n            {\n                "name": "Geodetic latitude",\n                "abbreviation": "Lat",\n                "direction": "north",\n                "unit": "degree"\n            },\n            {\n                "name": "Geodetic longitude",\n                "abbreviation": "Lon",\n                "direction": "east",\n                "unit": "degree"\n            }\n        ]\n    },\n    "scope": "Not recommended.",\n    "area": "Not specified.",\n    "bbox": {\n        "south_latitude": -90,\n        "west_longitude": -180,\n        "north_latitude": 90,\n        "east_longitude": 180\n    },\n    "id": {\n        "authority": "EPSG",\n        "code": 4019\n    }\n}\n'
        },
        {
            title: "GeoServer",
            code: '4019=GEOGCS["Unknown datum based upon the GRS 1980 ellipsoid (deprecated)",DATUM["Not_specified_based_on_GRS_1980_ellipsoid",SPHEROID["GRS 1980",6378137,298.257222101,AUTHORITY["EPSG","7019"]],AUTHORITY["EPSG","6019"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AUTHORITY["EPSG","4019"]]'
        },
        {
            title: "MapServer - MAPfile",
            code: 'PROJECTION\n\t"proj=longlat"\n\t"ellps=GRS80"\n\t"no_defs"\n\t"type=crs"\nEND'
        },
        {
            title: "Mapnik",
            code: '<?xml version="1.0" encoding="utf-8"?>\n<Map srs="+proj=longlat +ellps=GRS80 +no_defs +type=crs">\n\t<Layer srs="+proj=longlat +ellps=GRS80 +no_defs +type=crs">\n\t</Layer>\n</Map>\n'
        },
        {
            title: "SQL (PostGIS)",
            code: 'INSERT into spatial_ref_sys (srid, auth_name, auth_srid, proj4text, srtext) values ( 4019, \'EPSG\', 4019, \'+proj=longlat +ellps=GRS80 +no_defs +type=crs\', \'GEOGCS["Unknown datum based upon the GRS 1980 ellipsoid (deprecated)",DATUM["Not_specified_based_on_GRS_1980_ellipsoid",SPHEROID["GRS 1980",6378137,298.257222101,AUTHORITY["EPSG","7019"]],AUTHORITY["EPSG","6019"]],PRIMEM["Greenwich",0,AUTHORITY["EPSG","8901"]],UNIT["degree",0.0174532925199433,AUTHORITY["EPSG","9122"]],AUTHORITY["EPSG","4019"]]\');\n'
        }
    ]
};
