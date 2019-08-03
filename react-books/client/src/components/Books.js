import React from 'react';
import Card from './Card';
import Jumbotron from './Jumbotron';
import API from '../utils/API'

class Books extends React.Component {

    state = {
        books: []
    }


    // When the component mounts, load all books and save them to this.state.books
    componentDidMount() {
        this.loadBooks();
    }

    // Loads all books  and sets them to this.state.books
    loadBooks = () => {
        API.getBooks()
            .then(res =>
                this.setState({ books: res.data })
            )
            .catch(err => console.log(err));
    };





    render() {
        return (
            <div>
                {this.state.books.map(books => {
                    return (
                        <Card title={books.title} body={books.description} image={books.image}></Card>)
                })}
                {console.log(this.state)}
            </div>
        )
    }

}

export default Books;