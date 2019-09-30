import React, { useState } from 'react'
import ContentBox from '../components/content_box'
import ProductButton from '../components/product/product_button'
import ProductTabs from '../components/product/product_tabs'
import { Button, message } from 'antd'
import style from '../styles/modules/product_item.module.scss'

import product from '../services/product'
export default function ProductItem() {
  const defaultImg = product.variations.find(variation => variation.default).img
  const [image, setImage] = useState(defaultImg)
  const [buttonLabel, setButtonLabel] = useState('ADD TO CART')

  const handleBackButtonClick = () => {
    console.log('going back...')
  }

  const handleDropdownClick = e => {
    setImage(product.variations[e.key].img)
  }

  const clickAddToCart = () => {
    setButtonLabel('LOADING...')
    setTimeout(() => {
      message.info('Item added to cart!')
      setButtonLabel('VIEW CART')
    }, 2000)
  }

  return (
    <div>
      <div className={'flex flex-column flex-row-m vh-100-ns'}>
        <section className={'flex flex-column w-50-m p0 bn br-m b--light-gray'}>
          <ContentBox>
            <ProductButton onClick={handleBackButtonClick} label={'ALL PRODUCTS'} icon={'arrow-left'}/>
            <img src={image} className={'db mt3 dn-m ' + style.product_image}/>
            <br />
            <div className={'f4 f3-ns f2-l fw7 mt4-m mt5-xl'}>{product.name}</div>
            <div className={'light-gray2 f6 f5-ns fw5'}>{product.subTitle}</div>
          </ContentBox>

          <ProductTabs product={product} handleDropdownClick={handleDropdownClick} />

          <ContentBox innerClass={'bt b--light-gray mt-auto'}>
            <Button type="primary" className={'mv3 mv4-ns ' + style.product_button} onClick={clickAddToCart} style={{height: '50px'}}>
              <span className={'fw8'}>{buttonLabel}</span>
            </Button>
          </ContentBox>
        </section>

        <section className={'vh-100-m w-50-m dn flex-m items-center justify-center'}>
          <img src={image} className={'db ' + style.product_image}/>
        </section>
      </div>
    </div>
  )
}
