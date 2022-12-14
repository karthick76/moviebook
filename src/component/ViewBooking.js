import React, { Component } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';
import { Link } from 'react-router-dom';
export default class ViewBooking extends Component {
    state={
        movies:[],
        loadUsers:[],
        setData:[],
        errormessage:""
    };
    fetchMovies = () => {
      const devEnv = process.env.NODE_ENV !== "production";
      const {REACT_APP_DEV_URL, REACT_APP_PROD_URL } = process.env;
      const response = axios.get(`${devEnv ? REACT_APP_DEV_URL : REACT_APP_PROD_URL}`)
        .then((res)=>{
            this.setState({
                movies:res.data,
            });
        })
        .catch((err)=>{
            console.log("Error :",err);
        });
    };
    componentDidMount() {
        this.fetchMovies();
      }
  loadUsers = async () =>{
    const devEnv = process.env.NODE_ENV !== "production";
    const {REACT_APP_DEV_URL, REACT_APP_PROD_URL } = process.env;
    const response = axios.get(`${devEnv ? REACT_APP_DEV_URL : REACT_APP_PROD_URL}`);
    //setData(response.data);
  };
  render() {
    
    return (
        <>
        <div className="card text-white">
      <center>
  <img className="card-img" src="data:image/png;base64,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" alt="Card image"
  style={{"height" : "330px", "width" : "700px"}} />
  </center>
</div>
        <div className="container p-3">
          <div className="row">
          
            {this.state.movies.map((movie) => (
              <div className="col-md-3 col-sm-3 mb-1">
                <div className="card col">
                  <div className="card-header">
                    <h5 className='card-title'>{movie.movieName}</h5></div>
                  <div className="card-body">
                    <center><img src={movie.path} style={{"height" : "200px", "width" : "200px"}}/></center>
                    <br/>
                    <h5 className="card-title">
                      Movie Id : {movie.movieId}
                    </h5>
                    <p className="card-text">Cost : Rs. {movie.cost}</p>
                    <a href={movie.movieLink}><button className="btn btn-primary" style={{"width" : "220px"}}>
                    Movie Trailer
                    </button></a>
                    {/**/}
                  </div>
                </div>
              </div>
            ))}
          </div>
        <div align="center">
           {/* Display rror message as given in QP */}
        </div>
      </div>
      </>
    )
  }
}
