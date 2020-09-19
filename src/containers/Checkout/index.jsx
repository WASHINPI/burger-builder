import React, {Fragment} from "react";
import {connect} from 'react-redux';
import Burger from "../../components/Burger";
import CheckoutForm from "../../components/CheckoutForm";
import {Route, Switch } from "react-router-dom";
import {Button, Modal} from "react-bootstrap";

const Checkout = props => {
    const checkoutContinuedHandler = () => {
        props.history.replace('/checkout/contact-data');
    }
    return (
        <Fragment>
            <Burger ingredients={ props.ingredients }/>
            <div style={{display:"flex",alignItems: 'center',justifyContent: 'center'}}>
                <Button variant="secondary" onClick={()  => console.log("hello")}>Cancle</Button>
                <Button variant="primary" onClick={checkoutContinuedHandler}>Continue</Button>
            </div>

            <Route
                path={props.match.path + "/contact-data"}
                component={CheckoutForm}
            />

        </Fragment>
    )
}

const mapStateToProps = state => ({
    ingredients: state.ingredients
})

export default connect(mapStateToProps)(Checkout);