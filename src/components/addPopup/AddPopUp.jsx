import React, { useState, useContext, useEffect } from "react";
import "./AddPopUp.css";
import { UserContext } from "../../context/app";
const AddPopUp = ({ isOpen, setIsOpen, itemId }) => {
  const { data } = useContext(UserContext);
  const [name, setName] = useState("");
  console.log("🚀 ~ file: AddPopUp.jsx ~ line 7 ~ AddPopUp ~ name", name);
  const [studentClass, setStudentClass] = useState("");
  const [score, setScore] = useState("");
  const [result, setResult] = useState("");
  const [grade, setGrade] = useState("");

  useEffect(() => {
    const fetchData = () => {
      const result = data.filter((item) => item.id === itemId);
      if (itemId) {
        setName(result[0].name);
        setStudentClass(result[0].class);
        setScore(result[0].score);
        calculateData();
      }
    };
    fetchData();
  }, [itemId, data]);

  const error = score > 100 || studentClass > 12 ? "error" : "";
  const disabledButton = name === "" || score === 0 || studentClass === 0;

  // for changing score input and calculate result and grade
  const inputChange = (e) => {
    let value = e.target.value;
    setScore(value);
    if (e.target.value === "") return;
    calculateData(value);
  };

  // calculating data as score field changes

  const calculateData = (args) => {
    let value = parseInt(args);

    if (value < 30) {
      setGrade("Poor");
      setResult("Failed");
    } else if (value > 30 && value <= 75) {
      setGrade("Average");
      setResult("Passed");
    } else if (value > 75 && value <= 100) {
      setGrade("Excellent");
      setResult("Passed");
    } else {
      setGrade("");
      setResult("");
    }
  };

  return (
    <section className="add">
      <section className="addInner">
        <div className="addTop">
          <h3>{itemId ? "Edit Student" : "Add Student"}</h3>
        </div>
        <div className="addMiddle">
          <form>
            <div className="formGroup">
              <label htmlFor="name">STUDENT NAME*</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={error && `inputRed`}
              />
              <p className={error ? "error" : ""}>
                {error && "Error "} Name filled can not be blank
              </p>
            </div>
            <div className="formGroup">
              <label htmlFor="class">CLASS*</label>
              <input
                type="number"
                id="class"
                value={studentClass}
                onChange={(e) => setStudentClass(e.target.value)}
              />
              <p className={error ? "error" : ""}>
                {error && "Error "} Please input values between 1&12
              </p>
            </div>
            <div className="formGroup">
              <label htmlFor="score">SCORE*</label>
              <input
                type="number"
                id="score"
                value={score}
                onChange={inputChange}
              />
              <p className={error ? "error" : ""}>
                {error && "Error "}Please input values between 0&100
              </p>
            </div>
            <p>RESULT </p>
            <p
              className={
                result === "Passed" ? "passed result" : "result failed "
              }
            >
              {result && result}
            </p>
            <p>GRADE</p>
            <p
              className={
                grade === "Excellent" ? "grade passed" : "grade failed"
              }
            >
              {grade && grade}
            </p>
          </form>
        </div>
        <div className="addBottom">
          {itemId ? (
            <>
              <button
                className="cancelButton"
                onClick={() => {
                  setIsOpen((open) => !open);
                }}
              >
                Cancel
              </button>
              <button
                type="button"
                className={disabledButton ? "disabledButton" : ""}
                disabled={disabledButton}
                onClick={() => {
                  alert("Updated student details successfully!! ");
                  setIsOpen((open) => !open);
                }}
              >
                Update
              </button>
            </>
          ) : (
            <>
              <button
                className="cancelButton"
                onClick={() => setIsOpen((open) => !open)}
              >
                Cancel
              </button>
              <button
                type="button"
                className={disabledButton ? "disabledButton" : ""}
                disabled={disabledButton}
                onClick={() => {
                  alert("Student Added Successfully!! ");
                  setIsOpen((open) => !open);
                }}
              >
                Confirm
              </button>
            </>
          )}
        </div>
      </section>
    </section>
  );
};
export default AddPopUp;
