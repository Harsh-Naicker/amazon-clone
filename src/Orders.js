import React, { useEffect, useState } from 'react'
import { db } from './firebase'
import './Orders.css'
import { useStateValue } from "./StateProvider"
import Order from './Order'

function Orders() {
    const [{basket, user}, dispatch] = useStateValue();
    const [orders, setOrders] = useState([])

    useEffect(() => {
        let isMounted = true;
        if (user) {
            console.log('The user is:',user)
            db.collection('users').doc(user?.uid).collection('orders').orderBy('created','desc').onSnapshot(snapshot => (
                isMounted? setOrders(snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                }))) : setOrders([])
            ))
            console.log('Orders are:', orders)
        } else {
            console.log("No user fetched")
            setOrders([])
        }
        return () => { isMounted = false }
        
    }, [user])

    return (
        <div className="orders">
            <h1>Your orders</h1>
            <div className='orders__order'>
                {orders?.map(order => (
                    <Order order={order} />
                ))}
            </div>
        </div>
    )
}

export default Orders