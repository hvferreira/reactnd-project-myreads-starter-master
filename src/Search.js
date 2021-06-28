import React from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom';

class Search extends React.Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        shiftBook: PropTypes.func.isRequired
    }


    state = {
        query: '',
        searchBooks: [],
        shelf: 'none'
    }

    updateQuery = (query) => {
        this.setState(() => ({
            query: query,
        }))
        this.searchBook(query)
    }

    clearQuery = () => {
        this.updateQuery('')
    }

    searchBook = (query) => {

        BooksAPI.search(query).then(resp => {
            if (resp !== undefined && resp.error !== "empty query") {
                this.setState({ searchBooks: resp })
            }
            else if (query.length < 1) {
                this.setState({ searchBooks: [] })
            }
        })
    }

    updateShelf = (book, event) => {
        this.props.shiftBook(book, event);
    }


    render() {
        const { query, searchBooks } = this.state

        const showingBooks = query === ''
            ? searchBooks
            : searchBooks.filter((b) => (
                b.title.toLowerCase().includes(query.toLowerCase())
            ))


        return (
            <div className="search-books" >
                <div className="search-books-bar">
                    <Link className="close-search" to="/">Close</Link>
                    <div className="search-books-input-wrapper">

                        <input type="text" placeholder="Search by title" value={query}
                            onChange={(event) => this.updateQuery(event.target.value)} />

                    </div>
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {showingBooks.map((book) => (
                            <li key={book.id} className='book-authors'>
                                <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover" style={{
                                            width: 128, height: 193, backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail
                                                ? book.imageLinks.thumbnail
                                                : "https://shop.googlemerchandisestore.com/store/20160512512/assets/items/small/GGOEGOLC014299-2.jpg"
                                                })`
                                        }}></div>
                                        <div className="book-shelf-changer">
                                            <select onChange={event => this.updateShelf(book, event.target.value)} value={this.state.shelf} >
                                                <option value="none">None</option>
                                                <option value="move" disabled>Move to...</option>
                                                <option value="currentlyReading">Currently Reading</option>
                                                <option value="wantToRead">Want to Read</option>
                                                <option value="read">Read</option>

                                            </select>
                                        </div>
                                    </div>
                                    <div className="book-title">{book.title}</div>
                                    <div className="book-authors">{book.authors ? book.authors : 'No authors available'}</div>

                                </div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div >

        )
    }
}
export default Search