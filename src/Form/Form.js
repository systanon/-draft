import React from 'react';
import './Form.scss';

export default class Form extends React.Component {
  
  state = {inputs: {
      firstName: '',
      lastName: '',
      age: '',
      speciality: '',
      hobby: '',
    },
    disabledSabmit : true
  };
  
  createLabelStr(str){
    let res = str;//дописать регулярку (Большие буквы убрать, на их место вставить пробел и маленькую букву).
    res = res[0].toUpperCase() + res.slice(1)+ ': '
    return res;
  }
  fullValidation = () => {
    // throw new Error('I crashed!');
    let res = 1;
    Object.keys(this.state.inputs).forEach((key) => {
      this.state.inputs[key].length === 0 ? (res *= 0) : (res *= 1);
    });
    return !res ? true : false;
  };

  handleChange = (event) => {
    let oldInputs = this.state.inputs;
    oldInputs[event.target.name] = event.target.value;

    this.setState({ inputs: oldInputs, disabledSabmit: this.fullValidation() });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.submit(this.state.inputs);
    event.stopPropagation();
  };


  render() {
    const  keys  = Object.keys(this.state.inputs) 
    const labels = keys.map((el, index) => {
      return (
          <label key={index}>
            {this.createLabelStr(el)}
            <input
              name={el}
              type='text'
              value={this.state.inputs[el]}
              onChange={this.handleChange}
            />
          </label>
      );
    });

    return (
      <form onSubmit={this.handleSubmit} className='form'>
        {labels}
        {/* <label>
          Name:
          <input
            name='firstName'
            type='text'
            value={this.state.inputs.firstName}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Last name:
          <input
            name='lastName'
            type='text'
            value={this.state.inputs.lastName}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Age:
          <input
            name='age'
            type='text'
            value={this.state.inputs.age}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Speciality:
          <input
            name='speciality'
            type='text'
            value={this.state.inputs.speciality}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Hobby:
          <input
            name='hobby'
            type='text'
            value={this.state.inputs.hobby}
            onChange={this.handleChange}
          />
        </label> */}
        {this.state.disabledSabmit ? (
          <p>Поля не должны быть пустыми.</p>
        ) : (
          <p>Поля заполнены.</p>
        )}
        <input
          type='submit'
          value='Send'
          disabled={this.state.disabledSabmit}
        />
        <input type='reset' value='Clear' />
        <input
          type='reset'
          value='Cancel'
          onClick={this.props.closeModalHendler}
        />
      </form>
    );
  }
}
