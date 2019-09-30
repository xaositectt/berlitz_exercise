import React from 'react'
import ContentBox from '../content_box'
import ProductDropdown from './product_dropdown'
import PropTypes from 'prop-types'
import { Tabs } from 'antd'

const { TabPane } = Tabs

ProductTabs.propTypes = {
  product: PropTypes.object,
  handleDropdownClick: PropTypes.func
}

export default function ProductTabs({product, handleDropdownClick}) {
  return (
    <Tabs className={'bg-white '}>
      <TabPane tab="Description" key="1">
        <ContentBox>
          <div className={'f6 f5-xl mb3'}>
            {product.description}
          </div>
          <div className={'f3 fw7 mb5'}>
            <span className={'pr4'}>{`$${product.actualPrice}`}</span>
            <span className={'light-gray2'} style={{textDecoration: 'line-through'}}>{`$${product.oldPrice}`}</span>
          </div>
          <div className={'f6 fw7 mb2'}>COLORS</div>
          <ProductDropdown handleDropdownClick={handleDropdownClick}/>
        </ContentBox>
      </TabPane>
      <TabPane tab="Details" key="2">
        <ContentBox>
          <div className={'f5'}>
            {product.details}
          </div>
        </ContentBox>
      </TabPane>
    </Tabs>
  )
}
