import { useState, useRef } from 'react';

function SubmitReport({ reports, setReports }) {
  const [description, setDescription] = useState('');
  const [classification, setClassification] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const fileInputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();

    if (description === '' || classification === '' || imageFile === null) {
      alert('Please complete all fields!');
      return;
    }

    const newReport = {
      description: description,
      classification: classification,
      image: imageFile,
      timestamp: new Date().toLocaleString(),
    };

    setReports([...reports, newReport]);

    // Reset form
    setDescription('');
    setClassification('');
    setImageFile(null);
    fileInputRef.current.value = null;
  }

  return (
    <form onSubmit={handleSubmit} className="report-form">
      <h2>Found something wrong with campus?</h2>
      <p>
        Help keep OSU beautiful by reporting issues like potholes, broken lights, or trash. Just fill out this quick form and attach a photo.
      </p>

      <select
        value={classification}
        onChange={(e) => setClassification(e.target.value)}
      >
        <option value="" disabled>Select a classification</option>
        <option value="trash">Trash</option>
        <option value="pothole">Pothole</option>
        <option value="light">Broken Light</option>
        <option value="other">Other</option>
      </select>

      <input
        type="text"
        placeholder="Brief description of the issue"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        type="file"
        accept="image/*"
        onChange={(e) => setImageFile(e.target.files[0])}
        ref={fileInputRef}
      />

      {imageFile && (
        <img
          className="image-preview"
          src={URL.createObjectURL(imageFile)}
          alt="Preview"
        />
      )}

      <button type="submit">Submit</button>

      <p className="thanks-message">
        Thanks for taking the time to get it noticed!
      </p>
    </form>
  );
}

export default SubmitReport;
