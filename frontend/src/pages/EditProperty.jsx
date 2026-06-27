
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProperty, updateProperty } from "../services/api";
import "./EditProperty.css";

function EditProperty() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "", propertyType: "", price: "",
    location: "", area: "", bedrooms: "",
    bathrooms: "", description: "", imageUrl: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getProperty(id);
        setForm(res.data.property);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateProperty(id, form);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="edit-page">

      <button className="edit-back" onClick={() => navigate("/")}>
        ← Back to listings
      </button>

      <form onSubmit={handleSubmit}>
        <div className="edit-layout">

          {/* ── Left: Main form ── */}
          <div className="edit-main">

            <div className="section-card">
              <div className="section-card-header">
                <span>Basic info</span>
              </div>
              <div className="section-card-body single">
                <div className="fg">
                  <label>Property title <em>*</em></label>
                  <input name="title" value={form.title} onChange={handleChange}
                    placeholder="e.g. 3 BHK Apartment in Sector 62" />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.9rem" }}>
                  <div className="fg">
                    <label>Property type <em>*</em></label>
                    <select name="propertyType" value={form.propertyType} onChange={handleChange}>
                      <option value="">Select type</option>
                      <option value="Apartment">Apartment</option>
                      <option value="Villa">Villa</option>
                      <option value="Plot">Plot</option>
                      <option value="Commercial">Commercial</option>
                    </select>
                  </div>
                  <div className="fg">
                    <label>Price (₹) <em>*</em></label>
                    <input name="price" type="number" value={form.price}
                      onChange={handleChange} placeholder="e.g. 8500000" />
                  </div>
                </div>
                <div className="fg">
                  <label>Location <em>*</em></label>
                  <input name="location" value={form.location}
                    onChange={handleChange} placeholder="City, locality, or address" />
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
                  <input name="area" type="number" value={form.area}
                    onChange={handleChange} placeholder="e.g. 1450" />
                </div>
                <div className="fg">
                  <label>Bedrooms</label>
                  <input name="bedrooms" type="number" value={form.bedrooms}
                    onChange={handleChange} placeholder="e.g. 3" />
                </div>
                <div className="fg">
                  <label>Bathrooms</label>
                  <input name="bathrooms" type="number" value={form.bathrooms}
                    onChange={handleChange} placeholder="e.g. 2" />
                </div>
                <div className="fg">
                  <label>Image URL</label>
                  <input name="imageUrl" type="url" value={form.imageUrl}
                    onChange={handleChange} placeholder="https://..." />
                </div>
                <div className="fg full">
                  <label>Description</label>
                  <textarea name="description" value={form.description}
                    onChange={handleChange} placeholder="Describe the property..." />
                </div>
              </div>
            </div>

          </div>

          {/* ── Right: Sidebar ── */}
          <div className="edit-sidebar">

            <div className="img-preview-box">
              {form.imageUrl
                ? <img src={form.imageUrl} alt="preview" />
                : <span>Image preview</span>
              }
            </div>

            <div className="status-card">
              <p>Listing status</p>
              <div className="status-row">
                <span>Status</span>
                <span className="status-badge">Live</span>
              </div>
            </div>

            <div className="action-card">
              <button type="submit" className="btn-save">
                Save changes
              </button>
              <button type="button" className="btn-cancel-edit"
                onClick={() => navigate("/")}>
                Cancel
              </button>
              <hr className="action-divider" />
              <button type="button" className="btn-delete-listing">
                Delete listing
              </button>
            </div>

          </div>
        </div>
      </form>
    </div>
  );
}

export default EditProperty;