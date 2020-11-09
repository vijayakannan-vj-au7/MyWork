import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getUserData } from "../redux/actions/userActions";

//
const Pagination = () => {
  const dispatch = useDispatch();

  //using the page detail from the store
  const store = useSelector((store) => store.userRoot);

  //state
  const [totalPages, setTotalPages] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  //to load the page number
  useEffect(() => {
    const pages = [];
    let totalPage = store.totalPage;
    for (var i = 1; i <= totalPage; i++) {
      pages.push(i);
    }
    setTotalPages(pages);
    dispatch(getUserData());
  }, [store.totalPage]);

  //functon to handel the page selected
  const callThePage = (pno) => {
    if (pno >= 1 && store.totalPage >= pno) {
      setPageNo(pno);
      dispatch(getUserData(pno));
    }
  };

  //
  return (
    <>
      <div className="float-right">
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <Link
                className="page-link"
                onClick={() => callThePage(pageNo - 1)}
              >
                Previous
              </Link>
            </li>
            {totalPages.map((p) => (
              <li className="page-item">
                <Link className="page-link" onClick={() => callThePage(p)}>
                  {p}
                </Link>
              </li>
            ))}
            <li className="page-item">
              <Link
                className="page-link"
                onClick={() => callThePage(pageNo + 1)}
              >
                Next
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Pagination;
