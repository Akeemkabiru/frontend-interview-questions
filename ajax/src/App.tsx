// Question:

import { useEffect, useState } from "react";

// You are given the following api:
// https://example.com/api/v1/model?page=1&limit=10

// This API return the following:
// {
//   list: [{
//     id: 1,
//     title: 'title',
//     description: 'description'
//   }],
//   num_pages: 10,
//   page: 1,
//   limit: 10
// }

// Fill in the following TODO to make this work.

// If you don't answer this question fully, we will reject your candidacy.

// const TablePage = () => {
//   const [data, setData] = useState([]);
//   const [page, setPage] = useState(1);
//   const [limit, setLimit] = userState(10);
//   const [currentPage, setPage] = useState(0);
//   const [canPreviousPage, setCanPreviousPage] = useState(false);
//   const [canNextPage, setCanNextPage] = useState(false);
//   const [pageCount, setPageCount] = useState(0);

//   function previousPage() {
//     //TODO
//   }

//   function nextPage() {
//     //TODO
//   }

//   useEffect(() => {
//     //TODO
//     //Call Axios
//   }, []);

//   return (<div>
//   <table>
//   <thead>
//   <td>ID</td>
//   <td>title</td>
//   <td>description</td>
//   </thead>
//   <tbody>
//   {data.map((row, index) => {
//     return (<tr>
//     <td>{row.id}</td>
//     <td>{row.title}</td>
//     <td>{row.description}</td>
//     </tr>);
//   })}
//   </tbody>
//   </table>
//   <div>
//   <span>Page{" "}{page} of {pageCount}</span>
//   <select value={limit} onChange={(e) => {setLimit(Number(e.target.value)); }}>
//     {[5, 10, 20, 30, 40, 50].map((pageSize) => (
//       <option key={pageSize} value={pageSize}>
//         Show {pageSize}
//       </option>
//     ))}
//   </select>
//   <button onClick={previousPage} disabled={!canPreviousPage}>
//     &#x02190;
//   </button>
//   <button onClick={nextPage} disabled={!canNextPage}>
//     &#x02192;
//   </button>
//   </div>
//   </div>);
// });

export default function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const [canPreviousPage, setCanPreviousPage] = useState(false);
  const [canNextPage, setCanNextPage] = useState(false);
  const [pageCount, setPageCount] = useState(0);

  function previousPage() {
    //TODO
    if (currentPage >= limit) {
      setCurrentPage((currentPage) => currentPage - 1);
      setCanPreviousPage(true);
    }
  }

  function nextPage() {
    //TODO
    if (currentPage < limit) {
      setCurrentPage((currentPage) => currentPage + 1);
      setCanNextPage(true);
    }
  }

  useEffect(() => {
    //TODO
    //Call Axios
    async function getData() {
      try {
        const res = await fetch(
          "https://example.com/api/v1/model?page=1&limit=10"
        );
        if (!res.ok) throw new Error("couldnot fetch data from database");
        const response = await res.json();
        setData(response);
      } catch (error) {
        console.log(error.message);
      }
    }
    getData();
  }, []);

  return (
    <div>
      <table>
        <thead>
          <td>ID</td>
          <td>title</td>
          <td>description</td>
        </thead>
        <tbody>
          {data.map((row, index) => {
            return (
              <tr>
                <td>{row.id}</td>
                <td>{row.title}</td>
                <td>{row.description}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <span>
          Page {page} of {pageCount}
        </span>
        <select
          value={limit}
          onChange={(e) => {
            setLimit(Number(e.target.value));
          }}
        >
          {[5, 10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        <button onClick={previousPage} disabled={!canPreviousPage}>
          &#x02190;
        </button>
        <button onClick={nextPage} disabled={!canNextPage}>
          &#x02192;
        </button>
      </div>
    </div>
  );
}
