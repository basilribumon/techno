export default function PersonalDetails({ formData, handleChange }) {
  return (
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
  );
}