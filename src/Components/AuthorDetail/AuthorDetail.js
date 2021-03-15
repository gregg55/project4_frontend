import './AuthorDetail.css';
import React from 'react';

export default function AuthorDetail(props) {
    const author_id = props.match.params.id;
    const author = props.author.find(author => author.id == author_id);

    let books = [];
    
    if(artist) {
       books = author.Book.map(book => <li key={book.id}>{book.title}</li>);
    }
    
    console.log(book, book_id);

    return (
        <section>
            <h1>{book.name}</h1>
            <h2>Book Titles</h2>
            
            <form onSubmit={(e) => props.createBook(e, author_id) }>
                <input name='title' placeholder='book title' />
                <input type='submit' value='create book' />
            </form>

            <ul>
                {books}
            </ul>

        </section>
    );
}