// Add import react, react-router-dom, axios, 

import './App.css';
import React, { Component } from "react";
import { Route, Switch, Link } from 'react-router-dom';
import AllAuthors from '../AllAuthors/AllAuthors';
import AuthorDetail from '../AuthorDetail/AuthorDetail';
import axios from 'axios';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Home from '../Home/Home';

// import logo from './logo.svg';  

// Change from Function callout to Class Component

class App extends Component {
  constructor() {
    super();
    this.authorsBaseUrl =  'http://localhost:3000/api/authors';
    this.authorsBaseUrl1 =  'http://localhost:3000/api/authors/1';
    this.booksBaseUrl = 'http://localhost:3000/api/authors/profile/';
    this.state = {
      authors: []
    }
  }

  // READ All Authors 
  async getAllAuthors () {
    const response = await axios.get(this.authorsBaseUrl);
    console.log(response)
 
    this.setState({ authors: response.data.author });

    console.log(this.state.authors)

  }
  //  pull Book information such as title into booksBaseURL
    async getAllBooks () {
    const response = await axios.get(this.booksBaseUrl);
    console.log(response)
 
    this.setState({ authors: response.data.author });
    console.log(this.state.authors)

  }

// Component Did Mount 
  async componentDidMount () {
    await this.getAllAuthors()
    console.log(this.componentDidMount)
  }

// CRUD - CREATE NEW AUTHOR:   - This Works
    addAuthor = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    console.log(name)
    await axios.post(this.authorsBaseUrl, { name });
    await this.getAllAuthors()
    console.log(this.authorsBaseUrl, { name })

  }


// CRUD - DELETE an author Feature to authorsBaseUrl & remove it 
  deleteAuthors = async (event) => {
  event.preventDefault();
  const name = event.target.name.value;
  console.log(event.target)
  console.log(name)
  await axios.delete(this.authorsBaseUrl+name, { name });
  await this.getAllAuthors()
  console.log(this.authorsBaseUrl, { name })

}

// CRUD - UPDATE an author Feature to authorsBaseUrl to change
  updateAuthors = async (event) => {
  event.preventDefault();
  const name = event.target.name.value;
  console.log(name)
  await axios.post(this.authorsBaseUrl, { name });
  await this.getAllAuthors()
  console.log(this.authorsBaseUrl, { name })

  }

  // Add a Book title Feature to authorsBaseUrl & post it 
    addBook = async (event, authors_id) => {
    event.preventDefault();
    const title = event.target.title.value
    console.log(title)
    const url = `${this.authorsBaseUrl}/${authors_id}/newbook`;

    console.log(url, { title });

    await axios.post(url, { title });
    await this.getAllAuthors();
  }

  render() {

    return (
// Added Header Feature - see Header.js and Header.css
      <div>
        <header>
          <Header/>
        </header> 

        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
  
      <div className="App">
        <nav className='App-nav'>
          <ul>
          <li><a href="" class="current">"Menu Links"</a></li>
            <li><Link to='/'>Home Page</Link></li>
            <li><Link to='/authors'>Authors Club </Link></li>
          </ul>
        </nav>
        <nav>
				<ul>
					<li><a href="" class="current">"Quick Links"</a></li>
					<li><a href="https://www.amazon.com/They-Call-Coach-John-Wooden/dp/0071424911">My Favorite Book</a></li>
					<li><a href="https://www.jgrisham.com/">My Favorite Author</a></li>
					<li><a href="https://www.amazon.com/Marco-Lemessi/e/B08B58H43Z%3Fref=dbs_a_mng_rwt_scns_share">My Favorite New Author</a></li>
					<li><a href="https://www.google.com/search?client=firefox-b-1-d&q=top+book+sellers+2021">Top 2021 Book Sellers</a></li>
				</ul>
			</nav>

      </div>
        <Switch>
          <Route exact path='/'>
            <h1>Welcome to the Famous Authors Club!</h1>
            <p>Check out our Authors and their Books! Feel free to add your own!</p>

            <div className="homeImg" ><img className="img1" src ="/images/Book-Club.jpg" alt="Book"/></div>

            {/* <p> <img src ="/images/Book-Club.jpg" alt="Book"  width ="100" height ="100" align ="right"/>
            Check out our Authors and their Books! Feel free to add your own!
            </p> */}

          </Route>

          <Route exact path='/authors'>
            <AllAuthors authors={this.state.authors} createAuthors={this.addAuthor} deleteAuthors={this.deleteAuthors} updateAuthors={this.updateAuthors}/>
          </Route>

          <Route
            path='/AuthorDetail/:id'
            component={(routerProps) => (
              <AuthorDetail authors={this.state.authors} createBook={this.addBook} {...routerProps} />
            )}
          />
            
        </Switch>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        
        <footer>
          <Footer />
        </footer>

      </div>
    );
  }
}

export default App;
