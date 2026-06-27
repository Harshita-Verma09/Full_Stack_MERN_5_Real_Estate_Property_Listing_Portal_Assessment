
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getProperty } from "../services/api";

function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        const res = await getProperty(id);
        setProperty(res.data.property);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProperty();
  }, [id]);

  if (!property) {
    return (
      <div style={{ textAlign: "center", padding: "4rem", color: "#aaa", fontSize: "14px" }}>
        Loading...
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "860px", margin: "0 auto", padding: "2rem 1.5rem" }}>

      {/* Back button */}
      <button
        onClick={() => navigate("/")}
        style={{
          display: "inline-flex", alignItems: "center", gap: "6px",
          fontSize: "13px", color: "#666", background: "none",
          border: "none", cursor: "pointer", marginBottom: "1.25rem", padding: 0,
        }}
      >
        ← Back to listings
      </button>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "1.25rem", alignItems: "start" }}>

        {/* ── Left ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

          {/* Image */}
          <div style={{ borderRadius: "12px", overflow: "hidden", border: "0.5px solid #e8e8e8", height: "300px", background: "#f5f5f5" }}>
            <img
              src={property.imageUrl}
              alt={property.title}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>

          {/* Description */}
          <div style={{ background: "#fff", border: "0.5px solid #e8e8e8", borderRadius: "12px", overflow: "hidden" }}>
            <div style={{ padding: ".75rem 1.25rem", borderBottom: "0.5px solid #f0f0f0" }}>
              <span style={{ fontSize: "11px", fontWeight: 500, textTransform: "uppercase", letterSpacing: ".5px", color: "#aaa" }}>
                Description
              </span>
            </div>
            <div style={{ padding: "1.25rem", fontSize: "14px", color: "#555", lineHeight: 1.7 }}>
              {property.description || "No description provided."}
            </div>
          </div>

        </div>

        {/* ── Right Sidebar ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

          {/* Title + Price */}
          <div style={{ background: "#fff", border: "0.5px solid #e8e8e8", borderRadius: "12px", padding: "1.25rem" }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: ".5rem", marginBottom: ".5rem" }}>
              <h2 style={{ fontSize: "17px", fontWeight: 500, color: "#1a1a1a", lineHeight: 1.3 }}>
                {property.title}
              </h2>
              <span style={{
                background: "#eaf3de", color: "#3b6d11", border: "0.5px solid #c0dd97",
                borderRadius: "20px", padding: "3px 10px", fontSize: "11px",
                fontWeight: 500, whiteSpace: "nowrap",
              }}>
                For Sale
              </span>
            </div>
            <div style={{ fontSize: "22px", fontWeight: 500, color: "#185fa5", marginBottom: ".5rem" }}>
              ₹{Number(property.price).toLocaleString("en-IN")}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "13px", color: "#888" }}>
              📍 {property.location}
            </div>
          </div>

          {/* Details table */}
          <div style={{ background: "#fff", border: "0.5px solid #e8e8e8", borderRadius: "12px", overflow: "hidden" }}>
            <div style={{ padding: ".75rem 1.25rem", borderBottom: "0.5px solid #f0f0f0" }}>
              <span style={{ fontSize: "11px", fontWeight: 500, textTransform: "uppercase", letterSpacing: ".5px", color: "#aaa" }}>
                Property details
              </span>
            </div>
            <div style={{ padding: ".5rem 0" }}>
              {[
                { label: "Type",      value: property.propertyType },
                { label: "Area",      value: `${property.area} sq ft` },
                { label: "Bedrooms",  value: property.bedrooms },
                { label: "Bathrooms", value: property.bathrooms },
              ].map((row, i, arr) => (
                <div
                  key={i}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "space-between",
                    padding: ".6rem 1.25rem",
                    borderBottom: i < arr.length - 1 ? "0.5px solid #f9f9f9" : "none",
                  }}
                >
                  <span style={{ fontSize: "13px", color: "#888" }}>{row.label}</span>
                  <span style={{ fontSize: "13px", fontWeight: 500, color: "#1a1a1a" }}>{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div style={{ background: "#fff", border: "0.5px solid #e8e8e8", borderRadius: "12px", padding: "1.25rem", display: "flex", flexDirection: "column", gap: ".6rem" }}>
            <button
              onClick={() => navigate(`/edit/${property._id}`)}
              style={{
                width: "100%", padding: "10px", border: "none", borderRadius: "8px",
                background: "#378add", color: "#fff", fontSize: "14px",
                fontWeight: 500, cursor: "pointer",
              }}
            >
              Edit listing
            </button>
            <button
              style={{
                width: "100%", padding: "9px", border: "0.5px solid #f09595",
                borderRadius: "8px", background: "#fcebeb", color: "#a32d2d",
                fontSize: "13px", fontWeight: 500, cursor: "pointer",
              }}
            >
              Delete listing
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default PropertyDetails;