export default function PalliativeCare() {
  return (
    <div className="box">

      <h3>4. Does the patient require palliative care?</h3>

      <div className="checkbox-grid">

        <label>
          <input type="checkbox" />
          Day Care
        </label>

        <label>
          <input type="checkbox" />
          Physiotherapy
        </label>

        <label>
          <input type="checkbox" />
          Home Care
        </label>

        <label>
          <input type="checkbox" />
          Medicine
        </label>

        <label>
          <input type="checkbox" />
          Counciling
        </label>

        <label>
          <input type="checkbox" />
          Financial assistance
        </label>

        <label>
          <input type="checkbox" />
          Others
        </label>

      </div>

    </div>
  );
}