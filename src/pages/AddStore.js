import React from "react"
import StoreService from '../service/StoreService'
import login_background from '../img/login_background.jpg';
import Footer from './Footer';

class AddStore extends React.Component {

    constructor(props) {
        super(props)
        this.State = {
            storeName: '',
            storeAddress: '',
            storeType: ''
        }
    }

    changeStoreName = (event) => {
        this.setState({ storeName: event.target.value });
    }
    changeStoreAddress = (event) => {
        this.setState({ storeAddress: event.target.value });
    }
    changeStoreType = (event) => {
        this.setState({ storeType: event.target.value });
    }


    addNewStore = (event) => {
        let stores = {
            "storename": this.state.storeName,
            "storeaddress": this.state.storeAddress,
            "storetype": this.state.storeType
        }

        StoreService.addStores(stores).then(
            res => {
                console.log("New Store is added" + JSON.stringify(res.data));
            }
        ).catch(console.log)
    }


    render() {
        return (
            <div class="col-md-12" style={{ backgroundImage: "linear-gradient()" }}>
                <div className='row'>
                    <div className="col-md-5">
                        <img src={login_background} />
                    </div>

                    <div className='col-lg-7' style={{ padding: "15px" }}>
                        <form>
                            <div className="form-group">
                                <label for="inputEmail3" >Store Name</label>
                                <div class="col-md-10">
                                    <input type="text" className="form-control" onChange={this.changeStoreName} />
                                </div>
                            </div>

                            <div class="form-group">
                                <label for="inputPassword3">Store Address</label>
                                <div class="col-md-10">
                                    <input type="text" class="form-control" onChange={this.changeStoreAddress} />
                                </div>
                            </div>

                            <div className="form-group">
                                <label for="inputEmail3">Store Type</label>
                                <div class="col-md-10">
                                    <input type="text" className="form-control" onChange={this.changeStoreType} />
                                </div>
                            </div>
                            <br />
                            <div class="form-group">
                                <div class="col-md-10">
                                    <button type="button" class="btn btn-primary" onClick={this.addNewStore}>Save New Store </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }
}

export default AddStore