import { data } from "jquery";
import React from "react";
import DelUserBtn from "./DelUserBtn";
import EditUserbtn from "./EditUserbtn";
import Pagination from "./Pagination";

const Table = (props) => {
  return (
    <section>
      <table className="table table-dark mb-5">
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
          {props.userData.map((data) => (
            <tr>
              <th scope="row">{data.id}</th>
              <td>{data.email}</td>
              <td>{data.first_name}</td>
              <td>{data.last_name}</td>
              <td>
                <EditUserbtn /> &nbsp;
                <DelUserBtn id={data.id} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination />
    </section>
  );
};

export default Table;
