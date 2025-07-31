import React, { useEffect, useState } from "react";

const progressImg =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvy_xlDf_9BYXqEZNFkNzT_5qOPOvm5zwhansGTOe_owNZl7cEfK5Jj_8AI2-Gq6cKNGg&usqp=CAU";

const Progress = () => {
  const [progressList, setProgressList] = useState([]);
  const [bmi, setBmi] = useState("");

  useEffect(() => {
    const savedProgress = JSON.parse(localStorage.getItem("bmiProgress")) || [];
    setProgressList(savedProgress);
  }, []);

  const getStatusFromBMI = (bmi) => {
    const numericBmi = parseFloat(bmi);
    if (numericBmi < 18.5) return "Underweight";
    if (numericBmi < 25) return "Normal";
    if (numericBmi < 30) return "Overweight";
    return "Obese";
  };

  const handleAddProgress = (e) => {
    e.preventDefault();
    if (!bmi) return;

    const newStatus = getStatusFromBMI(bmi);
    const newEntry = {
      date: new Date().toLocaleDateString(),
      bmi: parseFloat(bmi).toFixed(2),
      status: newStatus,
    };

    const updatedProgress = [newEntry, ...progressList];
    setProgressList(updatedProgress);
    localStorage.setItem("bmiProgress", JSON.stringify(updatedProgress));
    setBmi("");
  };

  const handleDelete = (indexToDelete) => {
    const updatedProgress = progressList.filter((_, idx) => idx !== indexToDelete);
    setProgressList(updatedProgress);
    localStorage.setItem("bmiProgress", JSON.stringify(updatedProgress));
  };

  const handleClearAll = () => {
    if (window.confirm("Are you sure you want to delete all progress?")) {
      setProgressList([]);
      localStorage.removeItem("bmiProgress");
    }
  };

  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Left Column: Form + Progress */}
        <div className="col-md-6">
          <h2 className="mb-4">Progress Tracker</h2>

          <form onSubmit={handleAddProgress} className="mb-4">
            <div className="input-group">
              <input
                type="number"
                step="0.01"
                className="form-control"
                placeholder="Enter your BMI"
                value={bmi}
                onChange={(e) => setBmi(e.target.value)}
                required
              />
              <button className="btn btn-success" type="submit">
                Add Progress
              </button>
            </div>
          </form>

          {progressList.length > 0 ? (
            <>
              <ul className="list-group mb-3">
                {progressList.map((entry, idx) => (
                  <li
                    className="list-group-item d-flex justify-content-between align-items-center"
                    key={idx}
                  >
                    <span>
                      <strong>Date:</strong> {entry.date} | <strong>BMI:</strong>{" "}
                      {entry.bmi} | <strong>Status:</strong> {entry.status}
                    </span>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(idx)}
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
              <button className="btn btn-outline-danger mb-3" onClick={handleClearAll}>
                Clear All Progress
              </button>
            </>
          ) : (
            <p>No progress data yet.</p>
          )}
        </div>

        {/* Right Column: Centered Image */}
        <div className="col-md-6 d-flex justify-content-center align-items-center">
          <img
            src={progressImg}
            alt="Fitness Progress"
            className="img-fluid rounded shadow"
            style={{
              maxHeight: "400px",
              width: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Progress;
