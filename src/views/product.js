import React from 'react'
import ContentBox from '../components/content_box'
import ProductButton from '../components/product/product_button'

import product from '../services/product'
export default function ProductItem() {
  const handleBackButtonClick = () => {
    console.log('going back...')
  }

  return (
    <div>
      <ContentBox>
        <ProductButton onClick={handleBackButtonClick} label={'ALL PRODUCTS'} icon={'arrow-left'}/>
        <br />
        <div className={'f4 f3-ns f2-l fw7 mt4-m mt5-xl'}>{product.name}</div>
        <div className={'light-gray2 f6 f5-ns fw5'}>{product.subTitle}</div>
      </ContentBox>
    </div>
  )
}
