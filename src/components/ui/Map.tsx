import { FC, useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, Polygon } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'

const worldBounds = [
    [-90, -180], // Southwest
    [90, -180], // Northwest
    [90, 180], // Northeast
    [-90, 180], // Southeast
];

const Map: FC = () => {
    const [geoData, setGeoData] = useState<any>(null)

    useEffect(() => {
        fetch('/indonesia-prov.geojson')
            .then((response) => response.json())
            .then((data) => setGeoData(data));
    }, []);

    return (
        <MapContainer className='map z-50'
            center={[-3, 118]} zoom={5} minZoom={5} scrollWheelZoom={true}
            zoomControl={false}
            attributionControl={false}
        >
            <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png" />
            {geoData && <>
                <Polygon
                    positions={[worldBounds, ...geoData.features[0].geometry.coordinates]} // Area luar GeoJSON
                    pathOptions={{
                        fillColor: "#00217A",
                        fillOpacity: 0.4,
                        color: "transparent",
                    }}
                />
                <GeoJSON data={geoData} style={{
                    fillColor: "#00217A",
                    color: "#3FA0FF",
                    weight: 2,
                    opacity: 1,
                    fillOpacity: 1,
                }} />
            </>}

        </MapContainer>
    );
};

export default Map;