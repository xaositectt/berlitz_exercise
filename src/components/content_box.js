import React from 'react'
import PropTypes from 'prop-types'

ContentBox.propTypes = {
  children: PropTypes.any,
  innerClass: PropTypes.string
}

export default function ContentBox({children, innerClass}) {
  return (
    <section className={'dark-gray pa4 pl5' + innerClass}>
      {children}
    </section>
  )
}
