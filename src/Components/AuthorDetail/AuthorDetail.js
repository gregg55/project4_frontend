import './AuthorDetail.css';
import React from 'react';

export default function AuthorDetail(props) {

    console.log(props);
    const author_id = props.match.params.id;
    const author = props.authors.find(author => author.id == author_id);

    let books = [];
    console.log(author.book)

    if(author) {
       books = author.Books.map(book => <li key={books.id}>{book.title}</li>);
       
    }
    
    console.log(books, books.id);

    return (
        <section>
            <h1>{books.name}</h1>
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