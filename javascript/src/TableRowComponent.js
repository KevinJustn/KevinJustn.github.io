import React, { Component } from "react";

export default class TableRowComponent extends Component { 
    render() { 
        const course = this.props.course;

        return ( 
            <tr className="border-danger border border-3"> 
                <td className="text-left p-2 m-4 border-danger border border-3">      {course.courseName}</td>
                <td className="text-left p-2 m-4 border-danger border border-3">      {course.prefix}   </td>
                <td className="text-left p-2 m-4 border-danger border border-3">      {course.languages}     </td>
                <td className="text-left p-2 m-4 border-danger border border-3">      {course.grade}     </td>
            </tr>
        );
    }
}