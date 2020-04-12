import React from 'react';
import ModalWindow from './ModalWindow/ModalWindow.js';
import Button from './Button/Button.js';
import Table from './Table/Table';

class App extends React.Component {
  state = {
    table: [],
    showModal: false,
    // task: [],
  };
  addDataHendler = (row) => {
    let oldStateTable = this.state.table;
    oldStateTable.push({
      lastName: row.lastName,
      firstName: row.firstName,
      age: row.age,
      speciality: row.speciality,
      hobby: row.hobby,
      date: new Date().toLocaleString()
    });
    this.setState({ table: oldStateTable, showModal: false});
  }

  // addDataHendler = (row) => {
  //   const { table } = this.state;
  //   this.setState({
  //     table: [...table, ...row],
  //     showModal: false,
  //   });
  // };
  // writeDate = (data) => {
  //   const { task } = this.state;
  //   this.setState({
  //     task: [...task, data],
  //   });
  // };
  
  closeModalHendler = (e) => {
    console.log('e.target');
    console.dir(e.target);
    if ('overlay' === e.target.className || 'cancel' === e.target.className || 'overlay' in e.target.classList) {//???
      this.setState({ showModal: false });
      e.stopPropagation();
    }
  };
  openModalHendler = () => {
    this.setState({ showModal: true });
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <Button label='Open modal' clickHandler={this.openModalHendler} />

        {this.state.showModal ? (
          <ModalWindow
            onClick={this.closeModalHendler}
            submit={this.addDataHendler}
            writeDate={this.writeDate}
            closeModalHendler={this.closeModalHendler}
          />
        ) : null}

        <Table
          caption='Survey list'
          title={{
            lastName: 'LastName',
            firstName: 'FirstName',
            age: 'Age',
            speciality: 'Speciality',
            hobby: 'Hobby',
            date: 'Date',
          }}
          table={this.state.table}
          task={this.state.task}
        />
      </div>
    );
  }
}

export default App;
