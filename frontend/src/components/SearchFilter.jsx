// function SearchFilter({
//   location,
//   setLocation,
//   propertyType,
//   setPropertyType,
// }) {
//   return (
//     <div className="row mb-4">

//       <div className="col-md-6">

//         <input
//           type="text"
//           className="form-control"
//           placeholder="Search by Location"
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//         />

//       </div>

//       <div className="col-md-6">

//         <select
//           className="form-select"
//           value={propertyType}
//           onChange={(e) => setPropertyType(e.target.value)}
//         >

//           <option value="">All Types</option>
//           <option value="Apartment">Apartment</option>
//           <option value="Villa">Villa</option>
//           <option value="Plot">Plot</option>
//           <option value="Commercial">Commercial</option>

//         </select>

//       </div>

//     </div>
//   );
// }

// export default SearchFilter;





import "./SearchFilter.css";

function SearchFilter({
  location,
  setLocation,
  propertyType,
  setPropertyType,
  sort,
  setSort
}) {

  return (

    <div className="search-box">

      <input
        type="text"
        placeholder="Search Location"
        value={location}
        onChange={(e)=>setLocation(e.target.value)}
      />

      <select
      value={propertyType}
      onChange={(e)=>setPropertyType(e.target.value)}
      >

        <option value="">All Types</option>
        <option>Apartment</option>
        <option>Villa</option>
        <option>Plot</option>
        <option>Commercial</option>

      </select>

      <select
      value={sort}
      onChange={(e)=>setSort(e.target.value)}
      >

        <option value="newest">Newest</option>
        <option value="low">Price Low</option>
        <option value="high">Price High</option>

      </select>

    </div>

  );

}

export default SearchFilter;