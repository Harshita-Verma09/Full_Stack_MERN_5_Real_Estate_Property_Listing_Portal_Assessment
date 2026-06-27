
import { Link } from "react-router-dom";
import "./PropertyCard.css";

function PropertyCard({ property, onDelete }) {
  return (
    <div className="card">

      <div className="card-img-wrap">
        <img src={property.imageUrl} alt={property.title} />
        <span className="card-badge sale">For Sale</span>
      </div>

      <div className="card-body">
        <div className="card-title">{property.title}</div>

        <div className="card-price">
          ₹{Number(property.price).toLocaleString("en-IN")}
        </div>

        <div className="card-meta">
          <div className="meta-row">🏷 {property.propertyType}</div>
          <div className="meta-row">📍 {property.location}</div>
          {property.area && (
            <div className="meta-row">📐 {property.area} sq ft
              {property.bedrooms && ` · 🛏 ${property.bedrooms} BHK`}
              {property.bathrooms && ` · 🚿 ${property.bathrooms} Bath`}
            </div>
          )}
        </div>
      </div>

      <div className="card-footer">
        <Link to={`/property/${property._id}`} className="btn-view">
          View
        </Link>
        <Link to={`/edit/${property._id}`}>
          Edit
        </Link>
        <button
          className="btn-delete"
          onClick={() => onDelete(property._id)}
        >
          Delete
        </button>
      </div>

    </div>
  );
}

export default PropertyCard;