import { useState } from "react";
import { saveSurvey } from "../services/surveyService";

import "../styles/RegistrationForm.css";

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    // Personal Details
    fatherName: "",
    address: "",
    ward: "",
    phone: "",

    // House
    house: "",

    // Family Members
    employers: "",
    students: "",

    // Permanent Patients
    mental: false,
    kidney: false,
    cancer: false,
    disability: false,
    wounds: false,
    urinaryCatheter: false,
    permanentOthers: false,

    // Palliative Care
    dayCare: false,
    physiotherapy: false,
    homeCare: false,
    medicine: false,
    counselling: false,
    financialAssistance: false,
    foodkit: false,
    palliativeOthers: false,

    // Disease Reason
    smoking: false,
    drinking: false,
    diabetes: false,
    accident: false,
    genetic: false,
    workingAbroad: false,
    oldAge: false,
    diseaseOthers: false,

    // Help

    governmentSupport: false,
    palliativeSupport: false,
    otherSupport: false,
    // Remarks
    healthcareProblems: "",
    currentTreatment: "",

    // Survey Questions
    monthlyExpense: "",
    knowPalliative: "",
    medicalAid: "",
    supportPalliative: "",

    supportFinancial: false,
    supportHelping: false,
    supportOthers: false,
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
        <div className="header">
          <h2>Thalakkadathur Grace Palliative Care Centre</h2>
          <h4>Cherumundam Grama Panchayat Survey</h4>
          <p>Reg.No : MPM/CA/389/2015</p>
        </div>

        <div className="box">
          <div className="row">
            <label>Guardian's Name</label>
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="row">
            <label>Address</label>
            <textarea
              rows="3"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="two-column">
            <div>
              <label>Ward</label>
              <input
                type="text"
                name="ward"
                value={formData.ward}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label>Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="box">
          <h3>1. House</h3>

          <div className="checkbox-row">
            <label>
              <input
                type="radio"
                name="house"
                value="Own House"
                checked={formData.house === "Own House"}
                onChange={handleChange}
                required
              />
              Own House
            </label>

            <label>
              <input
                type="radio"
                name="house"
                value="Rent House"
                checked={formData.house === "Rent House"}
                onChange={handleChange}
                required
              />
              Rent House
            </label>
          </div>
        </div>

        <div className="box">
          <h3>2. Family Members</h3>

          <div className="family-grid">
            <div>
              <label>Employers</label>
              <input
                type="number"
                name="employers"
                value={formData.employers}
                onChange={handleChange}
                placeholder="0"
                required
              />
            </div>

            <div>
              <label>Students</label>
              <input
                type="number"
                name="students"
                value={formData.students}
                onChange={handleChange}
                placeholder="0"
                required
              />
            </div>
          </div>
        </div>

        <div className="box">
          <h3>3. Is there any permanently ill patient at home?</h3>

          <div className="checkbox-grid">
            <label>
              <input
                type="checkbox"
                name="mental"
                checked={formData.mental}
                onChange={handleChange}
              />
              Mental health condition
            </label>

            <label>
              <input
                type="checkbox"
                name="kidney"
                checked={formData.kidney}
                onChange={handleChange}
              />
              Kidney disease
            </label>

            <label>
              <input
                type="checkbox"
                name="cancer"
                checked={formData.cancer}
                onChange={handleChange}
              />
              Cancer
            </label>

            <label>
              <input
                type="checkbox"
                name="disability"
                checked={formData.disability}
                onChange={handleChange}
              />
              Disability
            </label>

            <label>
              <input
                type="checkbox"
                name="wounds"
                checked={formData.bedridden}
                onChange={handleChange}
              />
              Patients with wounds
            </label>

            <label>
              <input
                type="checkbox"
                name="urinaryCatheter"
                checked={formData.bedridden}
                onChange={handleChange}
              />
              Patients with a urinary catheter
            </label>

            <label>
              <input
                type="checkbox"
                name="permanentOthers"
                checked={formData.others}
                onChange={handleChange}
              />
              Others
            </label>
          </div>
        </div>

        <div className="box">
          <h3>4. Does the patient require palliative care?</h3>

          <div className="checkbox-grid">
            <label>
              <input
                type="checkbox"
                name="dayCare"
                checked={formData.dayCare}
                onChange={handleChange}
              />
              Day Care
            </label>

            <label>
              <input
                type="checkbox"
                name="physiotherapy"
                checked={formData.physiotherapy}
                onChange={handleChange}
              />
              Physiotherapy
            </label>

            <label>
              <input
                type="checkbox"
                name="homeCare"
                checked={formData.homeCare}
                onChange={handleChange}
              />
              Home Care
            </label>

            <label>
              <input
                type="checkbox"
                name="medicine"
                checked={formData.medicine}
                onChange={handleChange}
              />
              Medicine
            </label>

            <label>
              <input
                type="checkbox"
                name="counselling"
                checked={formData.counselling}
                onChange={handleChange}
              />
              Counselling
            </label>

            <label>
              <input
                type="checkbox"
                name="financialAssistance"
                checked={formData.financialAssistance}
                onChange={handleChange}
              />
              Financial assistance
            </label>
            <label>
              <input
                type="checkbox"
                name="foodkit"
                checked={formData.financialAssistance}
                onChange={handleChange}
              />
              Food kit
            </label>

            <label>
              <input
                type="checkbox"
                name="palliativeOthers"
                checked={formData.others}
                onChange={handleChange}
              />
              Others
            </label>
          </div>
        </div>

        <div className="box">
          <h3>5. Is there any specific cause for the illness?</h3>

          <div className="checkbox-grid">
            <label>
              <input
                type="checkbox"
                name="smoking"
                checked={formData.smoking}
                onChange={handleChange}
              />
              Smoking
            </label>

            <label>
              <input
                type="checkbox"
                name="drinking"
                checked={formData.drinking}
                onChange={handleChange}
              />
              Drinking
            </label>

            <label>
              <input
                type="checkbox"
                name="diabetes"
                checked={formData.diabetes}
                onChange={handleChange}
              />
              Diabetes
            </label>

            <label>
              <input
                type="checkbox"
                name="accident"
                checked={formData.accident}
                onChange={handleChange}
              />
              Accident
            </label>

            <label>
              <input
                type="checkbox"
                name="genetic"
                checked={formData.genetic}
                onChange={handleChange}
              />
              Genetic
            </label>

            <label>
              <input
                type="checkbox"
                name="workingAbroad"
                checked={formData.workingAbroad}
                onChange={handleChange}
              />
              Working abroad
            </label>

            <label>
              <input
                type="checkbox"
                name="oldAge"
                checked={formData.oldAge}
                onChange={handleChange}
              />
              Old age
            </label>

            <label>
              <input
                type="checkbox"
                name="diseaseOthers"
                checked={formData.diseaseOthers}
                onChange={handleChange}
              />
              Others
            </label>
          </div>
        </div>

        <div className="box">
          <h3>6. Problems faced in accessing healthcare?</h3>

          <textarea
            rows="4"
            name="healthcareProblems"
            value={formData.healthcareProblems}
            onChange={handleChange}
            placeholder="..."
          ></textarea>

          <br />
          <br />

          <h3>7. Where is the patient currently receiving treatment?</h3>

          <textarea
            rows="4"
            name="currentTreatment"
            value={formData.currentTreatment}
            onChange={handleChange}
            placeholder="..."
          ></textarea>
        </div>

        <div className="box">
          <h3>8. Patient's Monthly Medication Expense:</h3>

          <input
            type="text"
            name="monthlyExpense"
            value={formData.monthlyExpense}
            onChange={handleChange}
            required
          />

          <hr />

          <h3>
            9. Is the patient receiving any financial or other assistance for
            medicines or treatment?
          </h3>

          <div className="checkbox-grid">
            <label>
              <input
                type="checkbox"
                name="governmentSupport"
                checked={formData.governmentSupport}
                onChange={handleChange}
              />
              Government
            </label>

            <label>
              <input
                type="checkbox"
                name="palliativeSupport"
                checked={formData.palliativeSupport}
                onChange={handleChange}
              />
              Palliative
            </label>

            <label>
              <input
                type="checkbox"
                name="otherSupport"
                checked={formData.otherSupport}
                onChange={handleChange}
              />
              Others
            </label>
          </div>

          <hr />

          <h3>10. Do you know about Cherumundam Grama Panchayat palliative?</h3>

          <div className="yesno">
            <label>
              <input
                type="radio"
                name="knowPalliative"
                value="Yes"
                checked={formData.knowPalliative === "Yes"}
                onChange={handleChange}
              />
              Yes
            </label>

            <label>
              <input
                type="radio"
                name="knowPalliative"
                value="No"
                checked={formData.knowPalliative === "No"}
                onChange={handleChange}
              />
              No
            </label>
          </div>

          <hr />

          <h3>
            11. Are there any medical aids or assistive devices at home that
            could be useful for needy patients?
          </h3>

          <div className="yesno">
            <label>
              <input
                type="radio"
                name="medicalAid"
                value="Yes"
                checked={formData.medicalAid === "Yes"}
                onChange={handleChange}
              />
              Yes
            </label>

            <label>
              <input
                type="radio"
                name="medicalAid"
                value="No"
                checked={formData.medicalAid === "No"}
                onChange={handleChange}
              />
              No
            </label>
          </div>

          <hr />

          <h3>12. Are you willing to support palliative care activities?</h3>

          <div className="yesno">
            <label>
              <input
                type="radio"
                name="supportPalliative"
                value="Yes"
                checked={formData.supportPalliative === "Yes"}
                onChange={handleChange}
              />
              Yes
            </label>

            <label>
              <input
                type="radio"
                name="supportPalliative"
                value="No"
                checked={formData.supportPalliative === "No"}
                onChange={handleChange}
              />
              No
            </label>
          </div>

          {formData.supportPalliative === "Yes" && (
            <div className="checkbox-grid">
              <label>
                <input
                  type="checkbox"
                  name="supportFinancial"
                  checked={formData.supportFinancial}
                  onChange={handleChange}
                />
                Financial
              </label>

              <label>
                <input
                  type="checkbox"
                  name="supportHelping"
                  checked={formData.supportHelping}
                  onChange={handleChange}
                />
                Helping
              </label>

              <label>
                <input
                  type="checkbox"
                  name="supportOthers"
                  checked={formData.supportOthers}
                  onChange={handleChange}
                />
                Others
              </label>
            </div>
          )}
          <hr />

<h3>13. Are you willing to Donate Blood?</h3>

<div className="yesno">
  <label>
    <input
      type="radio"
      name="donateBlood"
      value="Yes"
      checked={formData.donateBlood === "Yes"}
      onChange={handleChange}
    />
    Yes
  </label>

  <label>
    <input
      type="radio"
      name="donateBlood"
      value="No"
      checked={formData.donateBlood === "No"}
      onChange={handleChange}
    />
    No
  </label>

  {formData.donateBlood === "Yes" && (
    <label className="blood-group">
      Blood Group
      <select
        name="bloodGroup"
        value={formData.bloodGroup}
        onChange={handleChange}
      >
        <option value="">Select</option>
        <option value="A+">A+</option>
        <option value="A-">A-</option>
        <option value="B+">B+</option>
        <option value="B-">B-</option>
        <option value="AB+">AB+</option>
        <option value="AB-">AB-</option>
        <option value="O+">O+</option>
        <option value="O-">O-</option>
      </select>
    </label>
  )}
</div>
        </div>

        <div className="submit-box">
          <button type="submit" className="btn">
            Submit Form
          </button>
        </div>
      </form>
    </div>
  );
}
