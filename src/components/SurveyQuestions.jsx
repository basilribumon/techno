export default function SurveyQuestions() {
  return (
    <div className="box">
      <h3>8. Patient's Monthly Medication Expense:</h3>

      <input type="text" required />

      <hr />

      <h3>
        9. Is the patient receiving any financial or other assistance for
        medicines or treatment?
      </h3>

      <div className="yesno">
        <label>
          <input type="radio" name="q9" />
          Yes
        </label>

        <label>
          <input type="radio" name="q9" />
          No
        </label>
      </div>

      <hr />

      <h3>10. do you know about our palliative?</h3>

      <div className="yesno">
        <label>
          <input type="radio" name="q10" />
          Yes
        </label>

        <label>
          <input type="radio" name="q10" />
          No
        </label>
      </div>

      <hr />

      <h3>
        11. Are there any medical aids or assistive devices at home that could
        be useful for needy patients?
      </h3>

      <div className="yesno">
        <label>
          <input type="radio" name="q11" />
          Yes
        </label>

        <label>
          <input type="radio" name="q11" />
          No
        </label>
      </div>
      <h3>12. Are you willing to support palliative care activities?</h3>

      <div className="yesno">
        <label>
          <input type="radio" name="q11" />
          Yes
        </label>

        <label>
          <input type="radio" name="q11" />
          No
        </label>
      </div>
      <h3>13. Are you willing to Donate Blood?</h3>

      <div className="yesno">
        <label>
          <input type="radio" name="q11" />
          Yes
        </label>

        <label>
          <input type="radio" name="q11" />
          No
        </label>
        <label>
          Blood Group
          <select>
            <option value="">-- Select Blood Group --</option>
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
      </div>
    </div>
  );
}
