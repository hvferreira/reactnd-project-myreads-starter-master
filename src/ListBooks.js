import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class ListBooks extends React.Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        currentlyReading: PropTypes.array.isRequired,
        read: PropTypes.array.isRequired,
        wantToRead: PropTypes.array.isRequired,
        shiftBook: PropTypes.func.isRequired
    }

    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {this.props.currentlyReading.map((book) => (
                                        <li key={book.id} className='book-authors'>
                                            <div className="book">
                                                <div className="book-top">
                                                    <div className="book-cover" style={{
                                                        width: 128, height: 193, backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail
                                                            ? book.imageLinks.thumbnail
                                                            : "https://shop.googlemerchandisestore.com/store/20160512512/assets/items/small/GGOEGOLC014299-2.jpg"
                                                            })`
                                                    }}><div className="book-shelf-changer">
                                                            <select onChange={event => this.props.shiftBook(book, event.target.value)}  >
                                                                <option value="none">None</option>
                                                                <option value="move" disabled>Move to...</option>
                                                                <option value="currentlyReading">Currently Reading</option>
                                                                <option value="wantToRead">Want to Read</option>
                                                                <option value="read">Read</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="book-title">{book.title}</div>
                                                <div className="book-authors">{book.authors ? book.authors : 'No authors available'}</div>
                                            </div>
                                        </li>
                                    ))}

                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {this.props.wantToRead.map((book) => (
                                        <li key={book.id} className='book-authors'>
                                            <div className="book">
                                                <div className="book-top">
                                                    <div className="book-cover" style={{
                                                        width: 128, height: 193, backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail
                                                            ? book.imageLinks.thumbnail
                                                            : "https://shop.googlemerchandisestore.com/store/20160512512/assets/items/small/GGOEGOLC014299-2.jpg"
                                                            })`
                                                    }}><div className="book-shelf-changer">
                                                            <select onChange={event => this.props.shiftBook(book, event.target.value)}  >
                                                                <option value="none">None</option>
                                                                <option value="move" disabled>Move to...</option>
                                                                <option value="currentlyReading">Currently Reading</option>
                                                                <option value="wantToRead">Want to Read</option>
                                                                <option value="read">Read</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="book-title">{book.title}</div>
                                                <div className="book-authors">{book.authors ? book.authors : 'No authors available'}</div>
                                            </div>
                                        </li>
                                    ))}

                                </ol>
                            </div>
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                            <div className="bookshelf-books">
                                <ol className="books-grid">
                                    {this.props.read.map((book) => (
                                        <li key={book.id} className='book-authors'>
                                            <div className="book">
                                                <div className="book-top">
                                                    <div className="book-cover" style={{
                                                        width: 128, height: 193, backgroundImage: `url(${book.imageLinks && book.imageLinks.thumbnail
                                                            ? book.imageLinks.thumbnail
                                                            : "https://shop.googlemerchandisestore.com/store/20160512512/assets/items/small/GGOEGOLC014299-2.jpg"
                                                            })`
                                                    }}><div className="book-shelf-changer">
                                                            <select onChange={event => this.props.shiftBook(book, event.target.value)}  >
                                                                <option value="none">None</option>
                                                                <option value="move" disabled>Move to...</option>
                                                                <option value="currentlyReading">Currently Reading</option>
                                                                <option value="wantToRead">Want to Read</option>
                                                                <option value="read">Read</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="book-title">{book.title}</div>
                                                <div className="book-authors">{book.authors ? book.authors : 'No authors available'}</div>
                                            </div>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="open-search">
                    <Link to="search">
                        <button>Add a Book</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default ListBooks