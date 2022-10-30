import React, { useState } from "react";
import { useNavigate } from "react-router";

export default function Create() {
  const [form, setForm] = useState({
    name: "",
    address: "",
    category: "",
    business_details: "",
  });
  const navigate = useNavigate();

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newBusiness = { ...form };

    await fetch("http://localhost:3000/record/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBusiness),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setForm({
      name: "",
      address: "",
      category: "",
      business_details: "",
    });
    navigate("/");
  }

  // displays the form that takes the input from the user.
  return (
    <div>
      <h3>Create New Record</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">Address</label>
          <input
            type="text"
            className="form-control"
            id="address"
            value={form.address}
            onChange={(e) => updateForm({ address: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">Category</label>
          <input
            type="text"
            className="form-control"
            id="category"
            value={form.category}
            onChange={(e) => updateForm({ category: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label htmlFor="position">Business Details</label>
          <input
            type="text"
            className="form-control"
            id="business_details"
            value={form.business_details}
            onChange={(e) => updateForm({ business_details: e.target.value })}
          />
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Add a business"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
