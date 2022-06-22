import React from 'react'
import '../Price/Price.css'
import { PricingTable, PricingSlot, PricingDetail } from "react-pricing-table";

const Price = () => {
  return (
    <div>
        {/* <col> */}
    <PricingTable highlightColor="#1976D2">
      <PricingSlot buttonText="TRY IT NOW" title="STANDARD" priceText="150.000,00Rp/month">
        <PricingDetail> Watch Free Content </PricingDetail>
        <PricingDetail> Hundreds of Episodes from our Library</PricingDetail>
        <PricingDetail> Hundres of Short Form Pieces</PricingDetail>
      </PricingSlot>
      </PricingTable>
      <PricingTable highlightColor="#1976D2">
      <PricingSlot buttonText="TRY IT NOW" title="PROFESSIONAL" priceText="$27/month">
        <PricingDetail> Watch Free Content </PricingDetail>
        <PricingDetail> Hundreds of Episodes from our Library</PricingDetail>
        <PricingDetail> Hundres of Short Form Pieces</PricingDetail>
      </PricingSlot>
      </PricingTable>
      <PricingTable highlightColor="#1976D2">
      <PricingSlot buttonText="TRY IT NOW" title="PREMIUM" priceText="$66/month">
        <PricingDetail> Watch Free Content </PricingDetail>
        <PricingDetail> Hundreds of Episodes from our Library</PricingDetail>
        <PricingDetail> Hundres of Short Form Pieces</PricingDetail>
      </PricingSlot>
      </PricingTable>
        {/* </col> */}
    </div>
  )
}

export default Price;