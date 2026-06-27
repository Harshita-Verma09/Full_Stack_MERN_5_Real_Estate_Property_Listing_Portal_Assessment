// function Pagination({ page, totalPages, setPage }) {
//   return (
//     <div className="d-flex justify-content-center mt-4">

//       <button
//         className="btn btn-secondary me-2"
//         disabled={page === 1}
//         onClick={() => setPage(page - 1)}
//       >
//         Previous
//       </button>

//       <span className="mt-2">
//         {page} / {totalPages}
//       </span>

//       <button
//         className="btn btn-secondary ms-2"
//         disabled={page === totalPages}
//         onClick={() => setPage(page + 1)}
//       >
//         Next
//       </button>

//     </div>
//   );
// }

// export default Pagination;






import "./Pagination.css";

function Pagination({page,totalPages,setPage}){

    return(

        <div className="pagination">

            <button
            disabled={page===1}
            onClick={()=>setPage(page-1)}
            >
                Previous
            </button>

            <span>

                {page} / {totalPages}

            </span>

            <button
            disabled={page===totalPages}
            onClick={()=>setPage(page+1)}
            >
                Next
            </button>

        </div>

    )

}

export default Pagination;