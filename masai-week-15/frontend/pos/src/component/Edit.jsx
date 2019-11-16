import React from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'
class Edit extends React.Component {
    constructor(props) {
        super(props);
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
        var editItemDetails = {
            price: this.state.price,
            quantity: this.state.quantity

        }
        console.log(JSON.stringify(editItemDetails))
        Axios.post(`http://127.0.0.1:5000/edit/` + this.props.match.params.id, editItemDetails)
            .then((response) => {
                alert("Edit Successfully")
            })
            .catch((err) => alert(err))
    }
    render() {
        return (
            <>
                {/* <Link to="/home"><button className="btn btn-secondary offset-5 mt-4">Go To Home</button></Link> */}
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group w-50 offset-2 mt-2">
                        <label>Update Price</label>
                        <input name="price" className="form-control" placeholder="Update Price" onChange={this.handleChange} />
                        <label>Update quantity</label>
                        <input name="quantity" className="form-control" placeholder="Update quantity" onChange={this.handleChange} ></input>
                    </div>
                    <button type="submit" className="btn btn-primary offset-2" >Submit</button>
                </form>
            </>
        )
    }

}
export default Edit