import React, { useEffect, useRef, useState } from "react";
import { kakaoMapProps } from "src/interface/kakao/IKaKaoMap";
import { area, coordinate } from "src/interface/type";
import { SKaKaoMap } from "src/style/kakao/map";

/**
 * size 를 따로 명시 하지 않을 경우 부모의 크기를 따라갑니다.
 * 좌표값을 주지 않을 경우 삼성역 기준으로 표현됩니다.
 * @props {@link kakaoMapProps}
 * @param size {@link area}
 * @param coordinate {@link coordinate}
 * @returns kakaoMap
 */
export const KakaoMap = ({ size, coordinate }: kakaoMapProps) => {
    const [kakaoMap, setKakaoMap] = useState<any>(null);
    const [kakaoMapSize, setKakaoMapSize] = useState<area>(size);
    const container: any = useRef();

    const kakaoMapSetCenter = (coordinate: coordinate) => {
        if (kakaoMap === null) return false;
        const { latitude, longitude } = coordinate;
        kakaoMap.setCenter(new window.kakao.maps.LatLng(latitude, longitude));
    };

    useEffect(() => {
        if (kakaoMap === null) return;
        setKakaoMapSize(size);
    }, [size]);

    useEffect(() => {
        window.kakao.maps.load(() => {
            const center = new window.kakao.maps.LatLng(37.50802, 127.062835);
            const options = {
                center,
                level: 3
            };
            const map = new window.kakao.maps.Map(container.current, options);
            setKakaoMap(map);
        });
    }, []);

    useEffect(() => {
        if (kakaoMap === null) return;
        kakaoMapSetCenter(coordinate);
        const { latitude, longitude } = coordinate;
        const markerPoint = new window.kakao.maps.LatLng(latitude, longitude);
        new window.kakao.maps.Marker({ map: kakaoMap, position: markerPoint });
    }, [kakaoMap, coordinate]);

    return <SKaKaoMap ref={container} size={kakaoMapSize} />;
};
