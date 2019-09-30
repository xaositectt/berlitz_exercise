import React from 'react'
import ContentBox from '../components/content_box'
import ProductButton from '../components/product/product_button'
import ProductTabs from '../components/product/product_tabs'
import { Button } from 'antd'

import product from '../services/product'
export default function ProductItem() {
  const handleBackButtonClick = () => {
    console.log('going back...')
  }

  const handleDropdownClick = () => {
    console.log('product is changing...')
  }

  const clickAddToCart = () => {
    console.log('adding to cart...')
  }

  return (
    <div>
      <ContentBox>
        <ProductButton onClick={handleBackButtonClick} label={'ALL PRODUCTS'} icon={'arrow-left'}/>
        <br />
        <div className={'f4 f3-ns f2-l fw7 mt4-m mt5-xl'}>{product.name}</div>
        <div className={'light-gray2 f6 f5-ns fw5'}>{product.subTitle}</div>
      </ContentBox>

      <ProductTabs product={product} handleDropdownClick={handleDropdownClick} />

      <ContentBox innerClass={'bt b--light-gray mt-auto'}>
        <Button type="primary" className={'mv4 '} onClick={clickAddToCart} style={{height: '50px'}}>
          <span className={'fw8'}>ADD TO CART</span>
        </Button>
      </ContentBox>
    </div>
  )
}
