import React, { useEffect, useState } from 'react';
import { fetchLights } from '../services/hueApi';
import LightControl from './LightControl';

const LightList = () => {
  const [lights, setLights] = useState({});

  useEffect(() => {
    const fetchAllLights = async () => {
      const data = await fetchLights();
      setLights(data);
    };
    fetchAllLights();
  }, []);

  return (
    <div>
      {Object.entries(lights).map(([lightId, lightDetails]) => {
        return <LightControl key={lightId} light={{ id: lightId, ...lightDetails }} />;
      })}
    </div>
  );
};

export default LightList;
