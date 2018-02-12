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
      { id: 'ak3eke', name: 'Max', age: 28 },
      { id: 'adrefe', name: 'Manu', age: 29 },
      { id: 'cvaree', name: 'Stephanie', age: 28 }
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({
      persons: persons
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
          {this.state.persons.map((person, index) => {
            return <Person 
            click={() => this.deletePersonHandler(index)}
            name={person.name} 
            age={person.age} 
            key={person.id}
            changed={(event) => this.nameChangedHandler(event, person.id)}/>
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
