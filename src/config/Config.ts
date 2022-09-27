export const Config = {
    NODE_MODE: process.env.NODE_ENV,
    Server: {
        node: "",
        java: "",
        time: 3000
    },
    Local: {
        node: process.env.REACT_APP_NODE_LOCAL,
        java: process.env.REACT_APP_JAVA_LOCAL
    },

    Node: {
        epsg: process.env.REACT_APP_NODE_EPSG,
        pro4j: process.env.REACT_APP_NODE_PRO4J
    },
    Java: { address: "" },
    kakao: {
        api: process.env.REACT_APP_KAKAO_KEY
    }
};
