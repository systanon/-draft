import React from 'react';

export default function TableRow(props) {
  // console.log(props)
  return (
    <tr >
      <td>{props.row.firstName}</td>
      <td>{props.row.lastName}</td>
      <td>{props.row.age}</td>
      <td>{props.row.speciality}</td>
      <td>{props.row.hobby}</td>
      <td>{props.row.date}</td>
    </tr>
  );
}
