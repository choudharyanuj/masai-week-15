import React from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'
class Create extends React.Component {
    constructor() {
        super();
        this.state = {

        }
    }
    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        var updateStock = {
            img:this.state.img,
            name: this.state.name,
            price:this.state.price,
            quantity: this.state.quantity,

        }
        Axios.post("http://127.0.0.1:5000/create", updateStock)
            .then((response) => {
                alert("Created")
            })
            .catch((err) => alert(err))
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group w-50 container mt-2">
                        <lable>Enter Image Url</lable>
                        <input name="img" className="form-control" placeholder="Enter URL of image" onChange={this.handleChange}/>
                        <label>Item Name</label>
                        <input name="name" className="form-control" placeholder="Enter Item" onChange={this.handleChange} />
                        <lable>Enter Price</lable>
                        <input name="price" className="form-control" placeholder="Enter Price" onChange={this.handleChange}/>
                        <lable>Enter Quantity</lable>
                        <input name="quantity" className="form-control" placeholder="Enter Quantity" onChange={this.handleChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}
export default Create