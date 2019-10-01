import React from 'react'
import PropTypes from 'prop-types'

ContentBox.propTypes = {
  children: PropTypes.any,
  innerClass: PropTypes.string
}

export default function ContentBox({children, innerClass}) {
  return (
    <section className={`dark-gray pa2 ph3 pa3-ns ph4-ns pa4-xl pl5-xl ${innerClass}`}>
      {children}
    </section>
  )
}
