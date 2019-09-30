import React from 'react'
import ContentBox from '../components/content_box'
import ProductButton from '../components/product/product_button'
import ProductTabs from '../components/product/product_tabs'
import { Button } from 'antd'
import style from '../styles/modules/product_item.module.scss'
import imageBlack from '../assets/black.jpg'

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
      <div className={'flex flex-column flex-row-m vh-100-ns'}>
        <section className={'flex flex-column w-50-m p0 bn br-m b--light-gray'}>
          <ContentBox>
            <ProductButton onClick={handleBackButtonClick} label={'ALL PRODUCTS'} icon={'arrow-left'}/>
            <img src={imageBlack} className={'db mt3 dn-m ' + style.product_image}/>
            <br />
            <div className={'f4 f3-ns f2-l fw7 mt4-m mt5-xl'}>{product.name}</div>
            <div className={'light-gray2 f6 f5-ns fw5'}>{product.subTitle}</div>
          </ContentBox>

          <ProductTabs product={product} handleDropdownClick={handleDropdownClick} />

          <ContentBox innerClass={'bt b--light-gray mt-auto'}>
            <Button type="primary" className={'mv3 mv4-ns ' + style.product_button} onClick={clickAddToCart} style={{height: '50px'}}>
              <span className={'fw8'}>ADD TO CART</span>
            </Button>
          </ContentBox>
        </section>

        <section className={'vh-100-m w-50-m dn flex-m items-center justify-center'}>
          <img src={imageBlack} className={'db ' + style.product_image}/>
        </section>
      </div>
    </div>
  )
}
