import React, { Component, Fragment } from 'react'
import CustomerDetails from '../CustomerCards/CustomerDetails'
import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import StatusCards from '../StatusCards'
import { customerDetailsFetch } from '../../../Actions/customer'
import { pickVehicle } from '../../../Actions/pending'
const Pickup = (props) => {

    const { isAuthenticated, customerData, pickVehicle } = props

    const [fromData, setFromData] = useState({
        OdoMeter: '',
        FuelLevel: '',
        CDPlayer: false,
        CigeretteCharger: false,
        ToolKit: false,
        ServiceBook: false,
        Clock: false,
        CarPerfume: false,
        Jack: false,
        SpareWheel: false,
        Mats: false,
        DickyMat: false,
        Antenna: false,
        Remote: false,
        customerRemarks: '',
    });
    // const { OdoMeter, FuelLevel, CDPlayer, CigeretteCharger, ToolKit,
    //     ServiceBook, Clock, CarPerfume, Jack,
    //     SpareWheel, Mats, DickyMat, Antenna, Remote, customerRemarks
    // } = fromData
    const { OdoMeter
    } = fromData
    const onChange = e => setFromData({ ...fromData, [e.target.name]: e.target.value });


    const onSubmit = e => {
        e.preventDefault();
        pickVehicle(OdoMeter, props.match.params.customer_token)

    };


    const customer = customerData.find((item) => item.customer_token === props.match.params.customer_token)
    var customerObj = new Object(customer);
    // if (!isAuthenticated)
    //     return <Redirect to='/login' />;

    return (
        <Fragment>
            <CustomerDetails customer={customerObj} />
            <form onSubmit={(e) => onSubmit(e)} action='/'>
                <input type="number" name='OdoMeter' placeholder='OdoMeter' value={OdoMeter} onChange={e => onChange(e)}
                    minLength='6' /><br />
                {/* <select id="FuelLevel" name="FuelLevel" value={FuelLevel} onChange={e => onChange(e)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select><br />
                <label htmlFor="CDPlayer">CDPlayer</label>
                <input type="checkbox" id="CDPlayer" name="CDPlayer" value={CDPlayer} onChange={e => onChange(e)} /><br />
                <label htmlFor="CigeretteCharger">CigeretteCharger</label>
                <input type="checkbox" id="CigeretteCharger" name="CigeretteCharger" value={CigeretteCharger} onChange={e => onChange(e)} /><br />

                <label htmlFor="ToolKit">ToolKit</label>
                <input type="checkbox" id="ToolKit" name="ToolKit" value={ToolKit} onChange={e => onChange(e)} /><br />

                <label htmlFor="ServiceBook">ServiceBook</label>
                <input type="checkbox" id="ServiceBook" name="ServiceBook" value={ServiceBook} onChange={e => onChange(e)} /><br />

                <label htmlFor="Clock">Clock</label>
                <input type="checkbox" id="Clock" name="Clock" value={Clock} /><br />

                <label htmlFor="CarPerfume">CarPerfume</label>
                <input type="checkbox" id="CarPerfume" name="CarPerfume" value={CarPerfume} onChange={e => onChange(e)} /><br />

                <label htmlFor="Jack">Jack</label>
                <input type="checkbox" id="Jack" name="Jack" value={Jack} /><br />

                <label htmlFor="SpareWheel">SpareWheel</label>
                <input type="checkbox" id="SpareWheel" name="SpareWheel" value={SpareWheel} onChange={e => onChange(e)} /><br />

                <label htmlFor="Mats">Mats</label>
                <input type="checkbox" id="Mats" name="Mats" value={Mats} onChange={e => onChange(e)} /><br />

                <label htmlFor="DickyMat">DickyMat</label>
                <input type="checkbox" id="DickyMat" name="DickyMat" value={DickyMat} onChange={e => onChange(e)} /><br />

                <label htmlFor="Antenna">Antenna</label>
                <input type="checkbox" id="Antenna" name="Antenna" value={Antenna} onChange={e => onChange(e)} /><br />

                <label htmlFor="Remote">Remote</label>
                <input type="checkbox" id="Remote" name="Remote" value={Remote} onChange={e => onChange(e)} /><br />

                <textarea name="customerRemarks" id="" cols="30" rows="10" value={customerRemarks} placeholder='customerRemarks' onChange={e => onChange(e)} /><br />
 */}

                <input type="submit" placeholder='Pick' />
            </form>
        </Fragment>
    )

}


Pickup.propTypes = {
    customerDetailsFetch: PropTypes.func.isRequired,
    pickVehicle: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
};


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    customerData: state.customer.customerData
});

export default connect(mapStateToProps, { customerDetailsFetch, pickVehicle })(Pickup);
