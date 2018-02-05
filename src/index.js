import React, { Component } from 'react'
import { render } from 'react-dom'
import Person from './Person/Person'

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
}

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 28 }
    ],
    showPersons: false
  }

  switchNameHandler = newName => {
    // console.log("was clicked")
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  }

  nameChangedHandler = event => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    })
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({ showPersons: !doesShow })
  }

  render() {
    const style = {
      background: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map(person => {
            ;<Person name={person.name} age={person.age} />
          })}
        </div>
      )
    }

    return (
      <div style={styles}>
        <button style={style} onClick={this.togglePersonHandler}>
          Switch Name
        </button>
        {persons}
      </div>
    )
  }
}

render(<App />, document.getElementById('root'))
