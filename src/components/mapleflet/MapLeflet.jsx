// import "./style.css";

import React from "react";
import { useTranslation } from 'react-i18next';
import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from 'leaflet/src/images/marker.svg';
import "./style.css";

const markerIkon = new L.Icon({
    iconUrl: icon,
    iconSize: [35, 45],
});

const MapLeflet = () => {
    const { t } = useTranslation();
    return (
        <MapContainer
            center={[54.85801000034233, 83.10459723672483]}
            zoom={13}
            scrollWheelZoom={false}
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker
                position={[54.85801000034233, 83.10459723672483]}
                icon={markerIkon}
            >
                <Popup>
                    {/* ООО НПО "БиоТест Новосибирск <br /> ул. Кутателадзе д. 4А,
                    офис 101. */}
                    {t('mapleflet.city')} <br/> {t('mapleflet.street')}
                </Popup>
            </Marker>
        </MapContainer>
    );
};

export default MapLeflet;
