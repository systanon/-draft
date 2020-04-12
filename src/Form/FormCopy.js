import React from 'react';
import './Form.scss';

export default class FormCopy extends React.Component {
  componentDidMount() {
    const { writeDate } = this.props;
    writeDate(Date.now());
  }

  componentWillUnmount() {
    const { writeDate } = this.props;
    writeDate(Date.now());
  }

  state = {
    data: [
      { value: '', id: 1 },
      { value: '', id: 2 },
      { value: '', id: 3 },
      { value: '', id: 4 },
      { value: '', id: 5 },
    ],
  };
  

  fullValidation = () => {
    // throw new Error('I crashed!');
    let res = 1;
    Object.keys(this.state.inputs).forEach((key) => {
      this.state.inputs[key].length === 0 ? (res *= 0) : (res *= 1);
    });
    return !res ? true : false;
  };

  handleChange = (event, id) => {
    const { data } = this.state;
    this.setState({
      data: data.map((el) => (el.id === id ? { ...el, value: event } : el)),
    });
  };

  handleSubmit = (event) => {
    const { submit } = this.props;
    submit(event);
  };

  render() {
    const { data } = this.state;
    const label = data.map((el) => {
      return (
        <div key={el.id}>
          <label>
            Input:
            <input
              name='firstName'
              type='text'
              value={el.value}
              onChange={(e) => this.handleChange(e.target.value, el.id)}
            />
          </label>
        </div>
      );
    });

    return (
      <div className='form'>
        {label}

        {this.state.disabledSabmit ? (
          <p>Поля не должны быть пустыми.</p>
        ) : (
          <p>Поля заполнены.</p>
        )}
        <input
          type='submit'
          value='Send'
          onClick={() => this.handleSubmit(data)}
        />
        <input type='reset' value='Clear' />
        <input
        className='cancel'
          type='reset'
          value='Cancel'
          onClick={this.props.closeModalHendler}
        />
      </div>
    );
  }
}
