"use client";
import { useEffect, useRef } from 'react';
import 'maplibre-gl/dist/maplibre-gl.css';
import maplibregl from 'maplibre-gl';

const Mape = () => {
  const mapContainer = useRef(null);

  useEffect(() => {
    if (mapContainer.current) { 
      const map = new maplibregl.Map({
        container: mapContainer.current, 
        style: '/custom-style.json',
        center: [51.3890, 35.6892],
        zoom: 10
      });

      new maplibregl.Marker()
        .setLngLat([51.3890, 35.6892])
        .addTo(map);

      return () => map.remove();
    }
  }, []);

  return (
    <div ref={mapContainer} style={{ width: '100%', height: '276px' }} />
  );
};

export default Mape;
