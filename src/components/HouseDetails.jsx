export default function HouseDetails({ formData, handleChange }) {
  return (
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
  );
}