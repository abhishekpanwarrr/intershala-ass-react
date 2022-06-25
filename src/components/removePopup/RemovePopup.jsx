import React, { useContext, useEffect, useState } from "react";
import "./RemovePopup.css";
import { UserContext } from "../../context/app";
const RemovePopup = ({ setIsOpenRemove, itemId }) => {
  const { data } = useContext(UserContext);
  const [name, setName] = useState("");
  const [studentClass, setStudentClass] = useState("");

  useEffect(() => {
    const fetchData = () => {
      const result = data.filter((item) => item.id === itemId);
      if (itemId) {
        setName(result[0].name);
        setStudentClass(result[0].class);
      }
    };
    fetchData();
  }, [itemId, data]);

  return (
    <div className="remove">
      <div className="removeInner">
        <div className="removeTop">
          <h3>Remove Student</h3>
        </div>
        <div className="removeMiddle">
          <p>
            Are you sure you want to remove the current student from the list?
          </p>
          <div className="studentDetails">
            <p>STUDENT NAME</p>
            <h3>{name}</h3>
          </div>
          <div className="studentDetails">
            <p>CLASS</p>
            <h3>{studentClass}th</h3>
          </div>
        </div>
        <div className="removeBottom">
          <button
            className="cancelButton"
            onClick={() => setIsOpenRemove((open) => !open)}
          >
            Cancel
          </button>
          <button>Remove</button>
        </div>
      </div>
    </div>
  );
};

export default RemovePopup;
