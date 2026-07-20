export default function PermanentPatients() {
  return (
    <div className="box">

      <h3>3. Is there any permanently ill patient at home?</h3>

      <div className="checkbox-grid">

        <label>
          <input type="checkbox" />
          Mental health condition
        </label>

        <label>
          <input type="checkbox" />
          Kidney disease
        </label>

        <label>
          <input type="checkbox" />
          Cancer
        </label>

        <label>
          <input type="checkbox" />
          Disability
        </label>

        <label>
          <input type="checkbox" />
          Patients with wounds
        </label>

        <label>
          <input type="checkbox" />
          Patients with a urinary catheter
        </label>

        <label>
          <input type="checkbox" />
          Others
        </label>

      </div>

    </div>
  );
}