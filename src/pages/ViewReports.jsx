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
          <p>{report.classification}</p>
          <p>{report.description}</p>
          <p>{report.timestamp}</p>
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
        <div>
            {reports.map((report, index) => (
  <ReportCard key={index} report={report} />
))}
        </div>
    );
}

export default ViewReports;