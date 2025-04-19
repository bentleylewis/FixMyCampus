import { useEffect, useState } from 'react';

function ReportCard({ report }) {
  const [imageURL, setImageURL] = useState('');

  useEffect(() => {
    const url = URL.createObjectURL(report.image);
    setImageURL(url);

    return () => {
      URL.revokeObjectURL(url); // 🧼 Clean up the preview URL
    };
  }, [report.image]);

  return (
    <div className="report-card">
      <h3>{report.classification.toUpperCase()}</h3>
      <p><strong>Description:</strong> {report.description}</p>
      <p><strong>Reported:</strong> {report.timestamp}</p>
      {imageURL && (
        <img
          src={imageURL}
          alt="Report"
          className="image-preview"
        />
      )}
    </div>
  );
}

function ViewReports({ reports }) {
  return (
    <div className="report-list">
      <h2>Submitted Reports</h2>
      {reports.length === 0 ? (
        <p>No reports submitted yet.</p>
      ) : (
        reports.map((report, index) => (
          <ReportCard key={index} report={report} />
        ))
      )}
    </div>
  );
}

export default ViewReports;
