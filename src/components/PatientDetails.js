import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';

function PatientDetails() {
    const { id } = useParams();
  const [patient, setPatient] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5000/patients/${id}`)
      .then((res) => res.json())
      .then((res) => setPatient(res));
  });

  if (patient) {
    return (
      <div>
        <NavBar/>
        <div style={{ padding: '20px' }}>
            <h3>{patient.name}</h3>
            <p><strong>Patient ID:</strong> {patient.patient_id}</p>
            <p><strong>Age:</strong> {patient.age}</p>
            <p><strong>Gender:</strong> {patient.gender}</p>
            <p><strong>Blood Group:</strong> {patient.bloodgroup}</p>
            <p><strong>Date of Birth:</strong> {new Date(patient.dob).toLocaleDateString()}</p>
            <p><strong>Severity:</strong> {patient.severity}</p>
            <p><strong>Address:</strong> {patient.address}</p>
        </div>
      </div>
    );
  }
}

export default PatientDetails;
