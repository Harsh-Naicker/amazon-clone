import React from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format"
import { SportsBasketball } from '@material-ui/icons'
import {useStateValue} from "./StateProvider"
import {useHistory} from 'react-router-dom'

function Subtotal() {
    const history = useHistory();
    const [{basket}, dispatch]=useStateValue();

    const getBasketTotal= (basket) => {
        var i;
        var sum=0;
        for(i=0; i<basket.length; i++){
            sum+=basket[i].price;
        }
        return sum
    }

    return (
        <div className="subtotal">
            <CurrencyFormat 
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({basket.length} items):
                            <strong>{` ${value}`}</strong>
                            {/* Subtotal ({0} items):
                            <strong>{0}</strong> */}
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox"/>This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                // value={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />
            <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
