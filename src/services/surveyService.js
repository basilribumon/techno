import axios from "axios";

const API = "http://localhost:3001/surveys";
const PANCHAYAT_API = "http://localhost:3001/panchayats";

// Save survey
export const saveSurvey = async (data) => {
  const response = await axios.post(API, data);
  return response.data;
};

// Get all surveys
export const getSurveys = async () => {
  const response = await axios.get(API);
  return response.data;
};

// Get Panchayats
export const getPanchayats = async () => {
  const response = await axios.get(PANCHAYAT_API);
  return response.data;
};