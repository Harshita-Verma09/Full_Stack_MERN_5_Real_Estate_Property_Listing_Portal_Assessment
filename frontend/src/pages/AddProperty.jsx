import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addProperty } from "../services/api";
import { toast } from "react-toastify";
import "./EditProperty.css";

function AddProperty() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "", propertyType: "", price: "",
    location: "", area: "", bedrooms: "",
    bathrooms: "", description: "", imageUrl: "",
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await addProperty(form);
      toast.success(res.data.message || "Property Added Successfully");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Failed to add property");
    }
  };

  return (
    <div className="edit-page">

      <button className="edit-back" onClick={() => navigate("/")}>
        ← Back to listings
      </button>

      <form onSubmit={handleSubmit}>
        <div className="edit-layout">

          {/* ── Left ── */}
          <div className="edit-main">

            <div className="section-card">
              <div className="section-card-header">
                <span>Basic info</span>
              </div>
              <div className="section-card-body single">

                <div className="fg">
                  <label>Property title <em>*</em></label>
                  <input name="title" onChange={handleChange}
                    placeholder="e.g. 3 BHK Apartment in Sector 62" />
                </div>

                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:"0.9rem" }}>
                  <div className="fg">
                    <label>Property type <em>*</em></label>
                    <select name="propertyType" onChange={handleChange}>
                      <option value="">Select type</option>
                      <option value="Apartment">Apartment</option>
                      <option value="Villa">Villa</option>
                      <option value="Plot">Plot</option>
                      <option value="Commercial">Commercial</option>
                    </select>
                  </div>
                  <div className="fg">
                    <label>Price (₹) <em>*</em></label>
                    <input name="price" type="number" onChange={handleChange}
                      placeholder="e.g. 8500000" />
                  </div>
                </div>

                <div className="fg">
                  <label>Location <em>*</em></label>
                  <input name="location" onChange={handleChange}
                    placeholder="City, locality, or address" />
                </div>

              </div>
            </div>

            <div className="section-card">
              <div className="section-card-header">
                <span>Property details</span>
              </div>
              <div className="section-card-body">

                <div className="fg">
                  <label>Area (sq ft)</label>
                  <input name="area" type="number" onChange={handleChange}
                    placeholder="e.g. 1450" />
                </div>
                <div className="fg">
                  <label>Bedrooms</label>
                  <input name="bedrooms" type="number" onChange={handleChange}
                    placeholder="e.g. 3" />
                </div>
                <div className="fg">
                  <label>Bathrooms</label>
                  <input name="bathrooms" type="number" onChange={handleChange}
                    placeholder="e.g. 2" />
                </div>
                <div className="fg">
                  <label>Image URL</label>
                  <input name="imageUrl" type="url" onChange={handleChange}
                    placeholder="https://..." />
                </div>
                <div className="fg full">
                  <label>Description</label>
                  <textarea name="description" onChange={handleChange}
                    placeholder="Describe the property — amenities, surroundings, highlights..." />
                </div>

              </div>
            </div>

          </div>

          {/* ── Right: Sidebar ── */}
          <div className="edit-sidebar">

            <div className="img-preview-box">
              {form.imageUrl
                ? <img src={form.imageUrl} alt="preview"
                    style={{ width:"100%", height:"100%", objectFit:"cover", borderRadius:"10px" }} />
                : <span>Image preview</span>
              }
            </div>

            <div className="tips-card">
              <p>Tips</p>
              {[
                "Title mein location zaroor likho",
                "Sahi price se jaldi buyers milte hain",
                "Achhi image se listing attractive lagti hai",
              ].map((tip, i) => (
                <div key={i} className="tip-row">
                  <span style={{ color: "#378add" }}>✓</span> {tip}
                </div>
              ))}
            </div>

            <div className="action-card">
              <button type="submit" className="btn-save">
                + Add property
              </button>
              <button type="button" className="btn-cancel-edit"
                onClick={() => navigate("/")}>
                Cancel
              </button>
            </div>

          </div>
        </div>
      </form>
    </div>
  );
}

export default AddProperty;