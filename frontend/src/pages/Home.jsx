
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "/home/harshita-verma/Documents/CODE_FOCUS/Real Estate Property Listing Portal/frontend/src/pages/Home.css"
import PropertyCard from "../components/PropertyCard";
import SearchFilter from "../components/SearchFilter";
import Pagination from "../components/Pagination";
import Loader from "../components/Loader";

import { getProperties, deleteProperty } from "../services/api";

function Home() {
    const [properties, setProperties] = useState([]);
    const [loading, setLoading] = useState(false);

    const [location, setLocation] = useState("");
    const [propertyType, setPropertyType] = useState("");
    const [sort, setSort] = useState("newest");

    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    // Fetch Properties
    const fetchProperties = async () => {
        try {
            setLoading(true);

            const res = await getProperties({
                location,
                propertyType,
                sort,
                page,
                limit: 6,
            });

            setProperties(res.data.properties);
            setTotalPages(res.data.totalPages);
        } catch (error) {
            console.log(error);
            toast.error("Failed to load properties");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProperties();
    }, [location, propertyType, sort, page]);

    // Delete Property
    const handleDelete = async (id) => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete this property?"
        );

        if (!confirmDelete) return;

        try {
            await deleteProperty(id);

            toast.success("Property Deleted Successfully");

            fetchProperties();
        } catch (error) {
            console.log(error);
            toast.error("Delete Failed");
        }
    };

    return (
        <div className="home-container">

            <h1 className="page-title">Property Listing</h1>

            <SearchFilter
                location={location}
                setLocation={setLocation}
                propertyType={propertyType}
                setPropertyType={setPropertyType}
                sort={sort}
                setSort={setSort}
            />

            {loading ? (
                <Loader />
            ) : (
                <>
                    <div className="property-grid">
                        {properties.length > 0 ? (
                            properties.map((property) => (
                                <PropertyCard
                                    key={property._id}
                                    property={property}
                                    onDelete={handleDelete}
                                />
                            ))
                        ) : (
                            <h2 className="empty-state">No Properties Found</h2>
                        )}
                    </div>

                    <Pagination
                        page={page}
                        totalPages={totalPages}
                        setPage={setPage}
                    />
                </>
            )}
        </div>
    );
}

export default Home;