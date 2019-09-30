import React from 'react'
import PropTypes from 'prop-types'
import { Button, Icon, Dropdown, Menu } from 'antd'

ProductDropdown.propTypes = {
  variations: PropTypes.array,
  handleDropdownClick: PropTypes.func
}

export default function ProductDropdown({handleDropdownClick}) {
  const menuItems = (
    <Menu onClick={handleDropdownClick}>
      <Menu.Item key="1">
        Black
      </Menu.Item>
      <Menu.Item key="2">
        Brown
      </Menu.Item>
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
