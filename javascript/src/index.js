import React from 'react';
import ReactDOM from 'react-dom/client';
import TableComponent from './TableComponent';

import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
const courseList = [
  {id : 1,    courseName: 'Fourth',            prefix: 'FIR',  languages: '1',     grade: 'G'},
  {id : 2,    courseName: 'Second',           prefix: 'SEC',  languages: '2',     grade: 'G'},
  {id : 3,    courseName: 'Third',            prefix: 'THR',  languages: '3',     grade: 'G'},
  {id : 4,    courseName: 'First',           prefix: 'FOU',  languages: '4',     grade: 'G'},
]
export default courseList


root.render(
  <React.StrictMode>
      
    <TableComponent />
  </React.StrictMode>
);

