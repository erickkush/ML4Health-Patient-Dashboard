// src/components/PatientList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PatientList = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get('/api/patients/');
        setPatients(response.data);
      } catch (error) {
        console.error('Error fetching patient data:', error);
      }
    };

    fetchPatients();
  }, []);

  return (
    <div>
      <h2>Patient List</h2>
      <ul>
        {patients.map(patient => (
          <li key={patient.id}>
            <strong>Name:</strong> {patient.name}, <strong>Age:</strong> {patient.age}, <strong>Result:</strong> {patient.result}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PatientList;
