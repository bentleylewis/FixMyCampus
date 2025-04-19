import React from 'react';
import './SubmitReport.css';

function SubmitReport({ reports, setReports }) {
  return (
    <div className="report-box">
      <h2>Found something wrong with Campus?</h2>

      <form className="report-form">
        <select>
          <option>Select a classification</option>
          <option>Pothole</option>
          <option>Broken Light</option>
          <option>Trash Overflow</option>
          <option>Other</option>
        </select>

        <input type="text" placeholder="Describe the issue" />
        <input type="file" />
        <button type="submit">Submit</button>
      </form>

      <p className="thanks-message">Thanks for taking the time to get it noticed!</p>
    </div>
  );
}

export default SubmitReport;
