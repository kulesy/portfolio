import axios from 'axios';

const API_BASE_URL = 'https://localhost:3001/api';

export const getCases = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/cases`);
    return response.data;
  } catch (error) {
    console.error('There was an error fetching the data', error);
    throw error;
  }
};

export const getCaseById = async (caseId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/cases/${caseId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error('There was an error fetching the data', error);
    throw error;
  }
};