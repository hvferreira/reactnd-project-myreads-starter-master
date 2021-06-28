import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import * as BooksAPI from './BooksAPI'
import Search from './Search'
import ListBooks from './ListBooks'

class BooksApp extends React.Component {
  state = {
    books: [],
    currentlyReading: [],
    wantToRead: [],
    read: [],
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({ books }))
      this.updateState();
    })
  }

  shiftBook = (book, event) => {

    this.setState((state) => ({
      books: this.state.books.filter((b) => b.id !== book.id).concat([book])
    }))

    BooksAPI.update(book, event);
    this.updateState();
  }

  updateState = () => {
    this.setState({ currentlyReading: (this.state.books.filter(bshelf => bshelf.shelf === 'currentlyReading')) })
    this.setState({ wantToRead: (this.state.books.filter(bshelf => bshelf.shelf === 'wantToRead')) })
    this.setState({ read: (this.state.books.filter(bshelf => bshelf.shelf === 'read')) })
    this.componentDidMount();
  }

  render() {

    return (
      <div>
        <Route exact path='/' render={() => (
          <ListBooks
            books={this.state.books}
            currentlyReading={this.state.currentlyReading}
            read={this.state.read}
            wantToRead={this.state.wantToRead}
            shiftBook={this.shiftBook}
          />
        )} />
        <Route path='/search' render={() => (

          <Search
            books={this.state.books}
            currentlyReading={this.state.currentlyReading}
            read={this.state.read}
            wantToRead={this.state.wantToRead}
            shiftBook={this.shiftBook}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp


