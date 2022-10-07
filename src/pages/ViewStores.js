import React from "react";
import StoreService from "../service/StoreService";
import AddStore from "../pages/AddStore";
import 'bootstrap/dist/css/bootstrap.min.css';
import image from "../img/shopping.jpg"
import Footer from './Footer';

class ViewStores extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            stores: [],
            searchstore: ''
        }
    }

    componentDidMount() {
        StoreService.getAllStores()
            .then((res) => {
                console.log("Store Details are" + JSON.stringify(res.data))
                this.setState({ stores: res.data })
            }).catch(console.log)
    }

    addingNewStore = (event) => {
        this.Component(AddStore);
    }

    storeSearchBtn = (event) => {
        let keyword = this.state.searchstore;
        StoreService.searchStore(keyword)
            .then(res => {
                console.log("Res data is " + JSON.stringify(res.data));
                this.setState({ stores: res.data })
            })
            .catch(console.log)
    }

    searchStoreChange = (event) => {
        console.log(event.target.value);
        this.setState({ searchstore: event.target.value })
    }

    render() {
        return (
            <div className='container'>
                <div className="col-md-12">
                    <h1 className="text-center col-md-6" style={{ color: '#3081e5', display: 'inline-block' }}>VIEW ALL STORES</h1>
                    <div className="col-md-6" style={{ display: 'inline-block' }}>
                        <form>
                            <div class="input-group">
                                <div id="search-autocomplete" class="form-outline">
                                    <input type="search" id="form1" onChange={this.searchStoreChange}
                                        class="form-control" placeholder="Type Storename or Storetype"
                                        style={{ width: "300px" }} />
                                </div>
                                <button type="button" class="btn btn-primary ml-3" onClick={this.storeSearchBtn}
                                    style={{ height: '38px' }}>Search
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                {this.state.stores.map((store) => (
                    <div class="card mb-3" style={{ maxWidth: "540px" }}>
                        <div class="row g-0">
                            <div class="col-md-4">
                                <img src={image} class="img-fluid rounded-start p-3" alt="Image" style={{}} />
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title">Store Name: {store.storename}</h5>
                                    <p class="card-text">Address: {store.storeaddress}</p>
                                    <span class="card-title">Store Type <h5>{store.storetype}</h5></span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                <div style={{ width:'100%' }}>
                    <Footer></Footer>
                </div>
            </div >
        )
    }
}

export default ViewStores