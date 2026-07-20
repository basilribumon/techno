export default function DiseaseReason() {
  return (
    <div className="box">

      <h3>5. Is there any specific cause for the illness?</h3>

      <div className="checkbox-grid">

        <label>
          <input type="checkbox" />
          Smoking
        </label>

        <label>
          <input type="checkbox" />
          Drinking
        </label>

        <label>
          <input type="checkbox" />
          Diabetes
        </label>

        <label>
          <input type="checkbox" />
          Accident
        </label>

        <label>
          <input type="checkbox" />
          Genetic
        </label>

        <label>
          <input type="checkbox" />
          Working abroad
        </label>
        <label>
          <input type="checkbox" />
          Old age
        </label>

        <label>
          <input type="checkbox" />
          Others
        </label>

      </div>

    </div>
  );
}