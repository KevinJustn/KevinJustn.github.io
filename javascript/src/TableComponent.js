import React, { Component } from "react";
import TableRowComponent from './TableRowComponent';
import courseList from './index.js';

export default class TableComponent extends Component { 
    render() { 
        const courses = courseList

        const rows = [];

        courses.forEach((course) => {
            rows.push(
                <TableRowComponent
                    course={course}
                    key={course.id}
                />
            );
        });

        return ( 
            <div>
                <div className="bg-primary text-white text-center p-2 m-4">
                    <h4>
                        Semesters and Courses
                    </h4>
                </div>
                <table className="w-auto mx-auto" style={{width: "200"}} bordered hover>
                    <thead>
                        <tr className="bg-white text-black text-left p-2 m-4 border-white fs-4 fw-bold border-bottom-0 border-3"> 
                            <th colSpan={2}>University Name </th> 
                            <th>Year</th> 
                            <th>Months</th> 
                        </tr>
                        <tr className="bg-white text-black text-left p-2 m-4 border-danger fs-5 fw-bold border border-3 text-center">
                            <th className="p-2 border-danger border border-3">Course Name</th>
                            <th className="p-2 border-danger border border-3">Course Prefix</th>
                            <th className="p-2 border-danger border border-3">Languages/Platforms</th>
                            <th className="p-2 border-danger border border-3">Grade</th>
                            
                        </tr>
                     </thead>
                    <tbody className="bg-white text-black text-left p-2 m-4 border-danger fs-6 fw-bold border border-3">
                        {rows}
                    </tbody>
                </table>
            </div>
        );
    }
}