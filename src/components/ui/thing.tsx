import React, { CSSProperties } from 'react'

export interface ThingProps {
  name: string
}

const Thing: React.FC<ThingProps> = ({ name }) => {
  const style: CSSProperties = {
    color: 'red',
    backgroundColor: 'blue',
    padding: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.5)',
  }
  return <div style={style}>{name}</div>
}

export default Thing
