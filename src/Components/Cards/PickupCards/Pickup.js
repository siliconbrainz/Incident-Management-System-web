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

    const { isAuthenticated, customerData, pickVehicle, pickUpCompleted } = props

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
    const { OdoMeter, FuelLevel,
    } = fromData
    const onChange = e => setFromData({ ...fromData, [e.target.name]: e.target.value });


    const onSubmit = e => {
        e.preventDefault();
        pickVehicle(OdoMeter, props.match.params.customer_token)

    };

    console.log(props.match.params.customer_token)
    const customer = customerData.find((item) => {
        let customerObj = new Object(item);
        if (customerObj.customer_token === Number(props.match.params.customer_token)) {
            return customerObj
        }
    })
    var customerObj = new Object(customer);
    // if (!isAuthenticated)  item.customer_token === props.match.params.customer_token
    //     return <Redirect to='/login' />;

    if (pickUpCompleted)
        return <Redirect to='/' />;
    return (
        <Fragment>

            <div className='generalContainer'>
                <h1 className='generalContainer__Title'>Call Assigned</h1>
                <div className='generalContainer__customerDetails'>
                    <CustomerDetails customer={customerObj} />
                </div>
                <div className='pickupForm'>
                    <div className='pickupForm__card'>
                        <h3 className='pickupForm__card__Title'> Pickup form</h3>
                        <form className='pickupForm__card__form' onSubmit={(e) => onSubmit(e)} action='/'>
                            <div className='pickupForm__card__form__Odometer'>
                                <label htmlFor="Odometer" className='pickupForm__card__form__label'>OdoMeter :</label>
                                <input className='pickupForm__card__form__Odometer__input' type="number" name='OdoMeter' placeholder='500000' id='Odometer' value={OdoMeter} onChange={e => onChange(e)}
                                    minLength='6' />
                            </div>
                            <div className='pickupForm__card__form__FuelLevel'>
                                <label htmlFor="FuelLevel" className='pickupForm__card__form__label'>FuelLevel :</label>
                                <select id="FuelLevel" name="FuelLevel" value={FuelLevel} onChange={e => onChange(e)} className='pickupForm__card__form__FuelLevel__select'>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                </select>
                            </div>

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
                    </div>
                </div>
            </div>

        </Fragment>
    )

}


Pickup.propTypes = {
    customerDetailsFetch: PropTypes.func.isRequired,
    pickVehicle: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    pickUpCompleted: PropTypes.bool,
};


const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    customerData: state.customer.customerData,
    pickUpCompleted: state.pending.pickUpCompleted,
});

export default connect(mapStateToProps, { customerDetailsFetch, pickVehicle })(Pickup);
