import React from "react";
import DelUserBtn from "./DelUserBtn";
import EditUserbtn from "./EditUserbtn";
import Pagination from "./Pagination";

const Table = (props) => {
  return (
    <>
      <section>
        <table className="table border shadow table-dark mb-3">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Email</th>
              <th scope="col">Firstname</th>
              <th scope="col">Lastname</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {props.userData.map((data, index) => (
              <tr key={index}>
                <th scope={"row"}>{data.id}</th>
                <td>{data.email}</td>
                <td>{data.first_name}</td>
                <td>{data.last_name}</td>
                <td>
                  <div className="container">
                    <div className="row">
                      <div className="col">
                        <EditUserbtn id={data.id} />
                      </div>
                      <div className="col">
                        <DelUserBtn id={data.id} />
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <Pagination />
    </>
  );
};

export default Table;
