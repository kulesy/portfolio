import axios from "axios";
import ApiConsts from "../consts/ApiConsts";

export const getCases = async () => {
  try {
    const response = await axios.get(`${ApiConsts.BaseUrl}/cases`);
    return response.data;
  } catch (error) {
    console.error("There was an error fetching the data", error);
    throw error;
  }
};

export const getCaseById = async (caseId) => {
  try {
    const response = await axios.get(`${ApiConsts.BaseUrl}/cases/${caseId}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("There was an error fetching the data", error);
    throw error;
  }
};
