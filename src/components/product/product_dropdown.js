import React from 'react'
import PropTypes from 'prop-types'
import { Button, Icon, Dropdown, Menu } from 'antd'

ProductDropdown.propTypes = {
  variations: PropTypes.array,
  handleClick: PropTypes.func
}

export default function ProductDropdown({variations, handleClick}) {
  const menuItems = (
    <Menu>
      {variations.map((variation, i) =>
        <Menu.Item key={i} onClick={handleClick}>
          {variation.color}
        </Menu.Item>
      )}
    </Menu>
  )

  return (
    <Dropdown overlay={menuItems}>
      <Button style={{width: '120px'}}>
        <Icon type="down" className={'fr'}/>
      </Button>
    </Dropdown>
  )
}
