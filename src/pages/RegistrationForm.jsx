import { useState } from "react";

import Header from "../components/Header";
import PersonalDetails from "../components/PersonalDetails";
import HouseDetails from "../components/HouseDetails";
import FamilyMembers from "../components/FamilyMembers";
import PermanentPatients from "../components/PermanentPatients";
import PalliativeCare from "../components/PalliativeCare";
import DiseaseReason from "../components/DiseaseReason";
import Remarks from "../components/Remarks";
import SurveyQuestions from "../components/SurveyQuestions";
import SubmitButton from "../components/SubmitButton";

import { saveSurvey } from "../services/surveyService";

import "../styles/RegistrationForm.css";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    fatherName: "",
    address: "",
    ward: "",
    phone: "",

    house: "",

    employers: "",
    students: "",

    mental: false,
    kidney: false,
    cancer: false,
    bedridden: false,
    disability: false,
    others: false,

    dayCare: false,
    physiotherapy: false,
    homeCare: false,
    medicine: false,
    counselling: false,
    financialAssistance: false,

    diseaseReason: "",

    remarks: "",

    monthlyExpense: "",

    financialSupport: "",

    knowPalliative: "",

    medicalAid: "",

    donateBlood: "",

    bloodGroup: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await saveSurvey(formData);

      alert("Survey Saved Successfully");

      console.log(formData);
    } catch (error) {
      console.error(error);

      alert("Error Saving Survey");
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <Header />

        <PersonalDetails formData={formData} handleChange={handleChange} />

        <HouseDetails formData={formData} handleChange={handleChange} />

        <FamilyMembers formData={formData} handleChange={handleChange} />

        <PermanentPatients formData={formData} handleChange={handleChange} />

        <PalliativeCare formData={formData} handleChange={handleChange} />

        <DiseaseReason formData={formData} handleChange={handleChange} />

        <Remarks formData={formData} handleChange={handleChange} />

        <SurveyQuestions formData={formData} handleChange={handleChange} />

        <SubmitButton />
      </form>
    </div>
  );
}
