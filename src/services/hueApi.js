import axios from 'axios';


const BRIDGE_IP = process.env.REACT_APP_IP_ADDRESS;
const USERNAME = process.env.REACT_APP_USERNAME;

const basePath = `http://${BRIDGE_IP}/api/${USERNAME}`;

export const fetchLights = async () => {
  try {
    const response = await axios.get(`${basePath}/lights`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const toggleLight = async (lightId, isOn) => {
  try {
    await axios.put(`${basePath}/lights/${lightId}/state`, {
      on: isOn,
    });
  } catch (error) {
    console.error(error);
  }
};
