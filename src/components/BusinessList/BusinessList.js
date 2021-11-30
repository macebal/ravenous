import React from 'react';
import './BusinessList.css';
import Business from '../Bussiness/Business';

class BusinessList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="BusinessList">
                {this.props.businessess.map((elem, index) =>  <Business business = {elem} key={index}/>)}
            </div>
        );
    }
}

export default BusinessList;