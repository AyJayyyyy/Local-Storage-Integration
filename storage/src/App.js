// App.js

import React, { useState } from 'react';
import EmployeeForm from './Components/EmployeeForm';

function App() {
  const [employees, setEmployees] = useState([]);

  // Function to add a new employee to the state variable employees
  const addEmployee = (employee) => {
    setEmployees(prevEmployees => [...prevEmployees, employee]);
    saveData(); // Save data to local storage after adding employee
  };

  // Function to save the employees array in local storage
  const saveData = () => {
    localStorage.setItem('employees', JSON.stringify(employees));
  };

  return (
    <div className="App">
      <EmployeeForm addEmployee={addEmployee} />
    </div>
  );
}

export default App;
