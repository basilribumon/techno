import axios from "axios";

const API = "http://localhost:3001/surveys";

export const saveSurvey = async (data) => {
    const response = await axios.post(API, data);
    return response.data;
};

export const getSurveys = async () => {
    const response = await axios.get(API);
    return response.data;
};