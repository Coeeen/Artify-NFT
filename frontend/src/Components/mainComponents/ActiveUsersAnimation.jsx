import React, { useState, useEffect, useMemo } from 'react'

const ActiveUsersAnimation = () => {
  const [activeUsers, setActiveUsers] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      const randomUsers = Math.floor(Math.random() * 100)
      setActiveUsers(randomUsers)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const animatedNumber = useMemo(
    () => <AnimatedNumber value={activeUsers} />,
    [activeUsers],
  )

  return (
    <div style={{ fontSize: '1em', textAlign: 'center', color: 'white' }}>
      {animatedNumber}
      <span> aktywnych użytkowników</span>
    </div>
  )
}

const AnimatedNumber = ({ value }) => {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    let startValue = displayValue
    let endValue = value
    let animationStep = 0

    const interval = setInterval(() => {
      animationStep++
      let newValue = Math.floor(
        startValue + ((endValue - startValue) / 10) * animationStep,
      )

      if (animationStep >= 10) {
        newValue = endValue
        clearInterval(interval)
      }

      setDisplayValue(newValue)
    }, 100)

    return () => clearInterval(interval)
  }, [value])

  return <span>{displayValue}</span>
}

export default ActiveUsersAnimation
