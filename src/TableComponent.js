import React from 'react';
import * as XLSX from 'xlsx';
import './index.css';

const TableComponent = () => {

// An array of object holding Data which can come from an API
  const sampleData = [
    { id: 1, name: "Chidi Confidence", email: "confy@example.com", age: 32, stack: 'Frontend' },
    { id: 2, name: "John Doe", email: "john.doe@example.com", age: 28, stack: 'Backend' },
    { id: 3, name: "Jane Smith", email: "jane.smith@example.com", age: 34, stack: 'Fullstack' },
    { id: 4, name: "Sam Brown", email: "sam.brown@example.com", age: 22, stack: 'Wordpress developer' }
  ];


// Function that will be triggered to export 
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(sampleData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    XLSX.writeFile(workbook, "sampleData.xlsx");
  };


 

  return (
    <div>

<button onClick={exportToExcel}>Export to Excel</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Stack</th>
          </tr>
        </thead>
        <tbody>
          {sampleData.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.age}</td>
              <td>{row.stack}</td>
            </tr>
          ))}
        </tbody>
      </table>
     
    </div>
  );
};

export default TableComponent;
