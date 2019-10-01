import React from 'react'
import ContentBox from '../content_box'
import ProductDropdown from './product_dropdown'
import PropTypes from 'prop-types'
import { Tabs } from 'antd'
import style from '../../styles/modules/product_tabs.module.scss'

import labels from '../../dictionary/product_tabs.json'

const { TabPane } = Tabs

ProductTabs.propTypes = {
  product: PropTypes.object,
  handleDropdownClick: PropTypes.func
}

export default function ProductTabs({product, handleDropdownClick}) {
  return (
    <Tabs className={`bg-white ${style.tabs}`}>
      <TabPane tab={labels.tabOne} key="1">
        <ContentBox>
          <div className={'f7 f6-ns f5-xl mb2 mb4-xl lh-copy-ns'}>
            {product.description}
          </div>
          <div className={'f3 f2-l fw7 mb3 mb5-xl'}>
            <span className={'pr4'}>{`$${product.actualPrice}`}</span>
            <span className={'light-gray2 strike'}>{`$${product.oldPrice}`}</span>
          </div>
          <div className={'f6 fw7 mb2'}>{labels.dropdownLabel}</div>
          <ProductDropdown variations={product.variations} handleClick={handleDropdownClick}/>
        </ContentBox>
      </TabPane>
      <TabPane tab={labels.tabTwo} key="2">
        <ContentBox>
          <div className={'f7 f6-ns f5-xl'}>
            {product.details}
          </div>
        </ContentBox>
      </TabPane>
    </Tabs>
  )
}
