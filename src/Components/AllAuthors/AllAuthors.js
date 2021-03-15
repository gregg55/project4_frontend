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
        
            <form onSubmit={(e) => props.createAuthors(e)}>
                <input placeholder='name' name='name' />
                <input type='submit' value='Create a New Author' />
            </form>
            
            <ul>{authors}</ul>
        </section>
    );
}

