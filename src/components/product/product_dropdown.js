import React from 'react'
import PropTypes from 'prop-types'
import { Select } from 'antd'

const { Option } = Select

ProductDropdown.propTypes = {
  variations: PropTypes.array,
  handleClick: PropTypes.func
}

export default function ProductDropdown({variations, handleClick}) {
  const items = variations.map((variation, i) =>
    (<Option value={i} key={i}>
      {variation.color}
    </Option>)
  )

  const defaultColor = variations.find(variation => variation.default).color

  return (
    <Select defaultValue={defaultColor} style={{ width: 120 }} onChange={handleClick}>
      {items}
    </Select>
  )
}
