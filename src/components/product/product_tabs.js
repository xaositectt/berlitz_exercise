import React from 'react'
import ContentBox from '../content_box'
import ProductDropdown from './product_dropdown'
import PropTypes from 'prop-types'
import { Tabs } from 'antd'
import style from '../../styles/modules/product_tabs.module.scss'

const { TabPane } = Tabs

ProductTabs.propTypes = {
  product: PropTypes.object,
  handleDropdownClick: PropTypes.func
}

export default function ProductTabs({product, handleDropdownClick}) {
  return (
    <Tabs className={'bg-white ' + style.tabs}>
      <TabPane tab="Description" key="1">
        <ContentBox>
          <div className={'f6 f5-xl mb2 mb3-m'}>
            {product.description}
          </div>
          <div className={'f3 fw7 mb3 mb5-xl'}>
            <span className={'pr4'}>{`$${product.actualPrice}`}</span>
            <span className={'light-gray2'} style={{textDecoration: 'line-through'}}>{`$${product.oldPrice}`}</span>
          </div>
          <div className={'f6 fw7 mb2'}>COLORS</div>
          <ProductDropdown handleDropdownClick={handleDropdownClick}/>
        </ContentBox>
      </TabPane>
      <TabPane tab="Details" key="2">
        <ContentBox>
          <div className={'f6 f5-xl'}>
            {product.details}
          </div>
        </ContentBox>
      </TabPane>
    </Tabs>
  )
}
