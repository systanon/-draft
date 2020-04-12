import React from 'react';

export default function TableTitle(props) {
  return (
    <thead>
      <tr>
        <th>{props.title.firstName}</th>
        <th>{props.title.lastName}</th>
        <th>{props.title.age}</th>
        <th>{props.title.speciality}</th>
        <th>{props.title.hobby}</th>
        <th>{props.title.date}</th>
      </tr>
    </thead>
  );
}
