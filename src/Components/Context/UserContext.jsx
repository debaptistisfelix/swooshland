import axios from "axios";
import { useState, createContext, useEffect } from "react";


export const UserContext = createContext();

export function UserProvider(props) {
    const [user, setUser] = useState({});

    function calculateSubtotal() {
        if (user.cart) {
            let cartSubtotalArr = user.cart.map(item => {
                return item.price
            })
            let subtotalCount = cartSubtotalArr.reduce((a, b) => {
                return a + b;
            }, 0);
            /*  return (subtotalCount); */
            let shippingCost;
            subtotalCount > 200 ? shippingCost = 0 : shippingCost = 30;
            return {
                subtotal: subtotalCount,
                shippingCost: shippingCost
            }
        }
    }

    return (
        <UserContext.Provider value={{ user, setUser, calculateSubtotal }}>
            {props.children}
        </UserContext.Provider>
    )
};