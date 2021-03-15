// Add import react, react-router-dom, axios, 

import './App.css';
import React, { Component } from "react";
import { Route, Switch, Link } from 'react-router-dom';
import AllAuthors from '../AllAuthors/AllAuthors';
import axios from 'axios';
// import logo from './logo.svg';  

// Change from Function callout to Class Component

class App extends Component {
  constructor() {
    super();
    this.authorsBaseUrl =  'http://localhost:3000/api/authors';

    this.state = {
      authors: []
    }
  }

  async getAllAuthors() {
    const response = await axios.get(this.authorsBaseUrl);
    this.setState({ artists: response.data.authors });

    console.log(this.state.authors)
  }
  async componentDidMount() {
    await this.getAllAuthors()
  }

  addAuthors = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;

    await axios.post(this.authorsBaseUrl, { name });
    await this.getAllAuthors()
  }

  addBook = async (event, authors_id) => {
    event.preventDefault();
    const title = event.target.title.value
    const url = `${this.authorsBaseUrl}/${author_id}/newbook`;

    console.log(url, { title });

    await axios.post(url, { title });
    await this.getAllAuthors();
  }

  render() {
    return (
      <div className="App">
        <nav className='App-nav'>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/authors'>Author</Link></li>
          </ul>
        </nav>

        <Switch>
          <Route exact path='/'>
            <h1>Welcome to Book club!</h1>
            <p>Check out our Authors and their Books! Feel free to add your own!</p>
          </Route>

          <Route exact path='/authors'>
            <AllAuthors authors={this.state.authors} createAuthors={this.addAuthor} />
          </Route>

          <Route
            path='/author/:id'
            component={(routerProps) => (
              <AuthorDetail authors={this.state.authors} createBook={this.addBook} {...routerProps} />
            )}
          />
            
        </Switch>
      </div>
    );
  }
}

export default App;


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
