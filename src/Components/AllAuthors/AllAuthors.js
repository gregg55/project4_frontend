// Set up imports from react, react-router-dom and authors.css

import './AllAuthors.css';
import React from 'react';
import { Link } from 'react-router-dom';

export default function AllAuthors(props) {
    const authors = props.authors.map(author => {
        return <li key={author.id}><Link to={`/authors/${author.id}`}>{author.name}</Link></li>
    });

    return (

        <section className='AllAuthors'>
            <h1>Listing of all Authors</h1>
         
            <h3> < img className="homeImg2" src ="/images/Book-Club.jpg" alt="Book" align ="right"/><u>CREATE:</u> Would you like to ADD another Author? (CRUD)</h3>
            <form onSubmit={(e) => props.createAuthors(e)}>
                <input id ="form1" placeholder='Type Name Here' name='name' />
                <input id= "form2" type='submit'value='CREATE' />
            </form>
        
            <h3> <img className="homeImg2"src ="/images/Book-Club.jpg" alt="Book" align ="right"/><u>DELETE:</u> Would you like to DELETE an Existing Author? (CRUD)</h3>
            <form onSubmit={(e) => props.deleteAuthors(e)}>
                <input id ="form1" placeholder='Type Name Here' name='name' />
                <input id= "form2" type='submit'value='DELETE' />
            </form>

            <h3> <img className="homeImg2" src ="/images/Book-Club.jpg" alt="Book"  align ="right"/><u>UPDATE:</u> Would you like to UPDATE an Existing Author? (CRUD)</h3>
            <form onSubmit={(e) => props.updateAuthors(e)}>
                <input id ="form1" placeholder='Type Name Here' name='name' />
                <input id= "form2" type='submit'value='UPDATE' />
            </form>
            <h3> <u>READ:</u>  Author Listing shown below (CRUD)</h3>
            <ul>{authors}</ul> 

           {/* <ul> <img src ="/images/Book-Club.jpg" alt="Book"  width ="250" height ="250" align ="right"/> {authors}</ul> */}
{/* Added IMAGE - BOOK CLUB  */}
            {/* <div className="homeImg2" ><img className="img2" src ="/images/Book_Club_logo1.jpg" alt="Book"/></div> */}
  {/* <p> <img src ="/images/Book-Club.jpg" alt="Book"  width ="100" height ="100" align ="right"/>
            Check out our Authors and their Books! Feel free to add your own!
            </p> */}
        </section>
    
   
    );

    
              
}

