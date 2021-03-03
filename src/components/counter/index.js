import React, { useState } from 'react'
import PropTypes from 'prop-types'

Counter.defaultProps = {
  initialCount: 0
}

Counter.propTypes = {
  initialCount: PropTypes.number
}

export default function Counter (props) {
  const [count, setCount] = useState(props.initialCount)

  function increment () {
    setCount(count + 1)
  }

  return <button onClick={increment}>
    Clicks {count}
  </button>
}