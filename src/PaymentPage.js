import React from 'react'
import StripContainer from './component/strip/StripContainer';
import { useDataLayerValue } from './MockData/DataLayer/DataLayer';

const PaymentPage = () => {
  const { productState: {carts}, dispatch } = useDataLayerValue();
  const amount =   carts && carts.reduce((acc, curr) => parseInt(acc) + parseInt(curr.price)* parseInt(curr.qty), 0)
  return (
    <div>
      <StripContainer amount ={amount} description = "Ready Made Product" customerName = "Rahul" />
    </div>
  )
}

export default PaymentPage
