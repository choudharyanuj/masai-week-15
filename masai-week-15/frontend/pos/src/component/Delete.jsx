import React from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'
class Delete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stockData: []

        }
    }
    componentDidMount() {
        Axios.get("http://127.0.0.1:5000/home")
            .then((response) => {
                this.setState({
                    stockData: response.data
                })
            })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        var items = {
            id: this.props.match.params.id
        }
        Axios
            .post(`http://127.0.0.1:5000/delete/`+ this.props.match.params.id, items)
            .then((response) => {
                alert("Deleted")
            })
            .catch((err) => alert(err))
    }
    render() {
        return (
            <div>
                <Link to="/home"><button className="btn btn-secondary offset-5 mt-4">Go To Home</button></Link>
                {
                    this.state.stockData.data != undefined ?
                        this.state.stockData.data.map((ele, index) => {
                            if (index + 1 == this.props.match.params.id)
                                return (
                                    <div className="offset-5 mt-5">
                                        <div>Item: {ele.name}</div>
                                        <div>Quantity: {ele.quantity}</div>
                                    </div>
                                )
                        }) 
                    : null
                }
                <form onSubmit={this.handleSubmit}>
                    <button className="btn btn-danger offset-5 mt-3" >Delete</button>
                </form>
            </div>
        )
    }
}
export default Delete