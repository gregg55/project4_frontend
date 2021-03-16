import './AuthorDetail.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


    class AuthorDetail extends Component {
        render() {
          const authorDetail = this.props.author.find((author) => {
            return author.id == this.props.match.params.id;
          });
          const authorBooks = authorDetail.Books.map((book) => {
            return <li key={book.id}>{book.title}</li>;
          });

    return (
        <div>
        <h3>{AuthorDetail.name}</h3>
        <h5>Add a New Book</h5>
        <form onSubmit={this.props.addBook}>
          <input type="hidden" name="authorId" value={authorDetail.id} />
          <input type="text" name="title" />
          <input type="submit" value="Add Book" />
        </form>
        <ul>{authorBooks}</ul>
      </div>
    );
    }
}

export default AuthorDetail;