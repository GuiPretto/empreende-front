import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css'; // Re-uses images from ~leaflet package
import 'leaflet-geosearch/dist/geosearch.css';
import 'leaflet-defaulticon-compatibility'
import { useEffect, useState } from "react";

const LocationMarker = ({ actualAdress }) => {
    const map = useMap()

    useEffect(() => {
        if (actualAdress) {
            map.flyToBounds([
                [
                    actualAdress.limites[0].coordenadas[0].longitude,
                    actualAdress.limites[0].coordenadas[0].latitude,
                ],
                [
                    actualAdress.limites[0].coordenadas[1].longitude,
                    actualAdress.limites[0].coordenadas[1].latitude,
                ]
            ])
        }
    }, [actualAdress])

    return !actualAdress ? null : (
        <Marker position={[actualAdress.latitude, actualAdress.longitude]}>
            <Popup>{actualAdress.nome}</Popup>
        </Marker>
    )
}

const Map = ({ actualAdress }) => {
    const [coordinates, setCoordinates] = useState([-3.7275128502502852, -38.59116275])
    const [isReady, setIsReady] = useState(false)

    useEffect(() => {
        setIsReady(true)
    }, [])


    return (
        <>
            {isReady && (
                <MapContainer
                    className="map"
                    center={actualAdress ? [actualAdress.latitude, actualAdress.longitude] : coordinates}
                    zoom={13}
                    scrollWheelZoom={false}
                >
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <LocationMarker actualAdress={actualAdress} />
                </MapContainer>
            )}
        </>
    )
}

export default Map