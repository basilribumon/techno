export default function FamilyMembers({ formData, handleChange }) {
  return (
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
  );
}