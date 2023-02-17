import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Form, Button, Col } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import { useDispatch, useSelector } from "react-redux";
import { savePaymentMethod } from '../actions/cartActions'
import CheckoutSteps from '../components/CheckoutSteps'

function PaymentScreen() {
    const cart = useSelector(state=>state.cart)
    const {shippingAddress} = cart
  
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const [paymentMethod, setPaymentMethod] = useState('PayPal')

    if(!shippingAddress.address){
        navigate('/shipping')
    }

    const submitHundler = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        navigate('/placeorder')

    }

    return (
        <FormContainer>
            <CheckoutSteps step1 step2 step3 />

            <Form onSubmit={submitHundler}>

                <Form.Group>
                    <Form.Label as='legend'>
                        Select Method
                    </Form.Label>

                    <Col>
                        <Form.Check 
                        type="radio" 
                        label='PayPal or Credit Card' 
                        id='paypal' 
                        name='paymentMethod' 
                        checked onChange={(e)=> setPaymentMethod(e.target.value)}>

                        </Form.Check>
                    </Col>

                </Form.Group>

                <Button type="submit" variant='primary'>
                    Continue
                </Button>

            </Form>
      
        </FormContainer>
    )
}

export default PaymentScreen
