import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css'
import Header from './components/Header'
import Main from './components/Main'
import Continue from './components/Continue'
import Footer from './components/Footer'


const authors = [
  {
    name: 'Mark Twain',
    imageUrl: 'images/authors/MarkTwain.jpg',
    imageSource:' Wikimedia Commons',
    books: [
    'Wonderland The Adventures of Sherlock Holmes',
    'The Call of the Wild',
    'Jack London',
    ]
  }
]



class AuthorQuiz extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header/>
        <Main authors ={authors} />
        <Continue/>
        <Footer/>
      </div>
    );
  }
}

export default AuthorQuiz;
