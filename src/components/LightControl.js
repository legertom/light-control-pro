import React, { useState } from 'react';
import { toggleLight } from '../services/hueApi';

const LightControl = ({ light }) => {
    const [isOn, setIsOn] = useState(light.state.on);

  const handleLightToggle = async() => {
    const newState = !isOn;
    setIsOn(newState);
    await toggleLight(light.id, newState);
  };

  return (
    <div>
      <h3>Light {light.id} - {light.name}</h3>
      <button onClick={handleLightToggle}>
        {isOn ? 'Turn off' : 'Turn on'}
      </button>
    </div>
  );
};

export default LightControl;
