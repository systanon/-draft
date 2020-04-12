import React from 'react';
import TableRow from './TableRow';
import TableTitle from './TableTitle';
import './Table.scss';

// export default class Table extends React.Component {
//   render() {
//     const { task, table } = this.props;
//     const listRows = table.map((row, index) => {
//       return (
//         <div>
//           <TableTitle title={this.props.title} />
//           <tbody>{row.value}</tbody>
//         </div>
//       );
//     });

//     return (
//       // <div className="teste">{listRows}</div>
//       <table className='table'>
//         <caption>{this.props.caption}</caption>
//         {listRows}
//       </table>
//     );
//   }
// }

export default class Table extends React.Component {
  render() {
     const listRows = this.props.table.map((row, index) => (
        <TableRow key={index} row={row} />
      ));
    return (
      <table className="table">
        <caption>{this.props.caption}</caption>
        <TableTitle title={this.props.title} />
        <tbody>{listRows}</tbody>
      </table>
    );
  }
}
