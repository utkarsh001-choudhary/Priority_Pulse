import React, { useEffect, useState } from 'react';
import axios from 'axios';
import _ from 'lodash';
const pagesize = ;
function Table() {

  const [hospitals, setHospital] = useState();
  const [paginatedPosts, setpaginatedPosts] = useState();
  const [currentPage, setcurrentPage] = useState(1);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      console.log(res.data);
      setHospital(res.data);
      setpaginatedPosts(_(res.data).slice(0).take(pagesize).value())
    });
  }, []);
  const pageCount = hospitals ? Math.ceil(hospitals.length / pagesize) : 0;
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);
  const pagination = (pageNo) => {
    setcurrentPage(pageNo);
    const startIndex = (pageNo - 1) * pagesize;
    const paginatedPosts = _(hospitals).slice(startIndex).take(pagesize).value();
    setpaginatedPosts(paginatedPosts);
  }
  return (
    <div calssName="table" >
      { !paginatedPosts ? ("No data found") : (
        <table style={{textAlign:"center", margin:"auto"}} >
          <thead>
            <tr>
              <th className="hh"><h3>Hospital Name</h3></th>
            </tr>
          </thead>
          <tbody className="hospital-list">
            {paginatedPosts.map((hospital, index) => (
              <tr className="hh" key={index}>
                <td className="hospital-name" ><h5>{hospital.name}</h5>
                  <p>500m</p>
                </td>

              </tr>
            ))
            }
          </tbody>
        </table>
      )}
      <nav className="pagenumber">
        <ul className="pagination">
          {pages.map((page) => (
            <li className={page === currentPage ? 'page-item active ' : "page-item"}>
              <p className="page-link" onClick={() => pagination(page)}>{page}</p>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

export default Table;
