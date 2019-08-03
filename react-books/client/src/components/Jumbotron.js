import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      className="jumbotron"
    >
      <h1>Your personal reading list.</h1>


      <form>
        <div className="form-group">
          <label>Book Title</label>
          <input type="" className="form-control" id="" aria-describedby="" placeholder="Enter name"></input>
        </div>
        <div className="form-group">
          <label >Book Author</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter author"></input>
        </div>
        <div className="form-group form-check">
        </div>
        <button type="submit" className="btn btn-primary">Search</button>
      </form>

      {children}
    </div>
  );
}

export default Jumbotron;