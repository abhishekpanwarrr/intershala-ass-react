import React, { useContext, useState } from "react";
import { UserContext } from "../../context/app";
import "./MainBody.css";

import AddPopUp from "../addPopup/AddPopUp";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import RemovePopup from "../removePopup/RemovePopup";
const MainBody = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenRemove, setIsOpenRemove] = useState(false);
  const [itemId, setItemId] = useState("");
  const { data } = useContext(UserContext);

  const togglePopup = (itemId) => {
    setIsOpen(true);
    itemId ? setItemId(itemId) : setItemId("");
  };
  return (
    <section className="mainBodyWrapper">
      <section className="bodyTop">
        <h3>Students</h3>
        <button onClick={() => togglePopup()}>+ Add</button>
      </section>
      <section className="bodyBottom">
        <div className="tableWrapper">
          <table className="users">
            <tr>
              <th>No.</th>
              <th>Student Name</th>
              <th>Class</th>
              <th>Result</th>
              <th>Score</th>
              <th>Grade</th>
            </tr>
            {data.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.class}th</td>
                  <td>
                    <p
                      className={item.result === "Passed" ? "passed" : "failed"}
                    >
                      {item.result}
                    </p>
                  </td>
                  <td>{item.score}</td>
                  <td
                    className={
                      item.grade === "Excellent" ? "gradeBlue" : "gradeRed"
                    }
                  >
                    {item.grade}
                    <i>
                      <FaEdit onClick={() => togglePopup(item.id)} />
                    </i>
                    <i>
                      <FaTrashAlt
                        onClick={() => {
                          setIsOpenRemove(!isOpenRemove);
                          setItemId(item.id);
                        }}
                      />
                    </i>
                  </td>
                </tr>
              );
            })}
          </table>
        </div>
      </section>

      {/* Add AddPopUp */}
      {isOpen && (
        <AddPopUp
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          // isOpenEdit={isOpenEdit}
          // setIsOpenEdit={setIsOpenEdit}
          itemId={itemId}
          setItemId={setItemId}
        />
      )}
      {isOpenRemove && (
        <RemovePopup itemId={itemId} setIsOpenRemove={setIsOpenRemove} />
      )}
    </section>
  );
};

export default MainBody;
