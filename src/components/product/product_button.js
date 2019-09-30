import React from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'antd'
import style from '../../styles/modules/product_button.module.scss'

ProductButton.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string,
  icon: PropTypes.string
}

export default function ProductButton({label, icon, onClick}) {
  return (
    <div className={'flex items-center ' + style.link} onClick={onClick}>
      <Icon type={icon} className={'pr3 f4'} />
      <span className={'f5'}>{label}</span>
    </div>
  )
}
