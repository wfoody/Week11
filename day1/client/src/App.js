import React, {useState, useEffect } from "react"
// import { NavLink } from 'react-router-dom'
import "./App.css"


function App() {

    const [books, setBooks] = useState([])

    useEffect(() => {
        fetch("http://localhost:8080/api/books")
        .then(response => response.json())
        .then(result => {
          setBooks(result)
        })
    }, [books])

    function handleDelete(id) {
        fetch(`http://localhost:8080/api/books/${id}`, {
            method: "DELETE", 
            }).then(response => response.json())
            .then(result => {
                if (result.success)
                console.log("success")
            })
    }

  //   function handleUpdate(id) {
  //     fetch(`http://localhost:8080/api/books/${id}`, {
  //         method: "PUT", 
  //         }).then(response => response.json())
  //         .then(result => {
  //             if (result.success)
  //             console.log("success")
  //         })
  // }

    const bookItems = books.map(book => {
        return <div key={book.id} className="bookItem">
          <img src={book.cover} className="cover"/>
          <label><b>{book.title}</b></label>
          <label>Author: {book.author}</label>
          <button onClick={() => handleDelete(book.id)}>Delete</button>
          
          {/*<NavLink to='/update-book'><button>Update</button></NavLink>
          {/* <button  onClick={() => handleUpdate(book.id)}>Update</button> */}
          {/* <NavLink to='/update-book'></NavLink>  */}
        </div>
    })
    return (
        <div className="booksContainer">
            {bookItems}
        
        </div>
    )
}
export default App;
