
import { useState, useRef } from 'react';

function SubmitReport( { reports, setReports}) {
    const [description, setDescription] = useState('');
    const [classification, setClassification] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const fileInputRef = useRef(null);

    function handleSubmit(e) {
        e.preventDefault();
        if (description === "" || classification === "" || imageFile === null) {
            alert("Please complete all fields!");
            return;
        }

        const newReport = {
            description: description,
            classification: classification,
            image: imageFile,
            timestamp: new Date().toLocaleString(),
        }

        setReports([...reports, newReport]);

        setDescription('');
        setClassification('');
        setImageFile(null);
        fileInputRef.current.value = null;
    }
    return (
        <form onSubmit={handleSubmit}>
            <h1> Found something wrong with Campus? Report it here!</h1>
            <select
            value = {classification}
            onChange = { (e) => setClassification(e.target.value)}
            >
            <option value="" disabled>Select a classification</option>
            <option value="trash">Trash</option>
            <option value="pothole">Pothole</option>
            <option value="light">Broken Light</option>
            <option value="other">Other</option>
            </select>


            <input 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            
            <input 
                type= "file" 
                accept="image/*"
                onChange = {(e) => setImageFile(e.target.files[0])}
                ref={fileInputRef}
            />
            {imageFile && (
                <img className='image-preview' src={URL.createObjectURL(imageFile)} 
                alt='Preview'
                />
            )}

            <button type='submit'>Submit</button>
            <p> Thanks for keeping OSU safe!</p>
        </form>
    );
}

export default SubmitReport;