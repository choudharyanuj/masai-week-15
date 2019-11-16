import React from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            items:[]
        }
    }
    componentDidMount() {
        Axios.get("http://127.0.0.1:5000/home")
            .then((response) => {
                this.setState({
                    items:response.data
                })
            })
    }
    render() {
        return (
            <div>
               <div className="container bg-dark">
                    <div className="row justify-content-center">
                        <h2 className="text-white d-4">List of Items</h2>
                    </div>
                    <div className="row">
                        <table className="table table-dark">
                            <thead>
                                <tr>
                                    <th scope="col">Item no.</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Item</th>
                                    <th scope="col">Price</th>
                                    <th scope="col">Quantity</th>
                                </tr>   
                            </thead>
                            <tbody>
                                {
                                    this.state.items.data != undefined ?
                                        this.state.items.data.map((ele, index) => {
                                            return (
                                                <tr >
                                                    <th scope="col">{index + 1}</th>
                                                    <th scope="col"><img src ={ele.img} style={{height:"110px", width:"110px"}}></img></th>
                                                    <th scope="col">{ele.name}</th>
                                                    <th scope="col">{ele.price}</th>
                                                    <th scope="col">{ele.quantity}</th>
                                                    <th scope="col"><Link to={`/change/${index + 1}`}><button className="btn btn-primary">Edit</button></Link></th>
                                                    <th scope="col"><Link to={`/delete/${index + 1}`}><button className="btn btn-danger ml-4">Delete</button></Link></th>
                                                    {/* <th scope="col"><Link to={`/mark/${index + 1}`}><button className="btn btn-secondary ml-4">Mark</button></Link></th> */}
                                                </tr>
                                            )
                                        }) 
                                    : null
                                }
                            </tbody>
                        </table>
                        <Link to="/create"><button className="btn btn-primary btn-lg offset-5 mt-5">Create</button></Link>
                    </div>
                </div>
            </div>
        )
    }
}
export default Home