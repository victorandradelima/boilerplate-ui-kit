import React, { CSSProperties } from 'react'

export interface Thing2Props {
  name: string
}

const Thing2: React.FC<Thing2Props> = ({ name }) => {
  const style: CSSProperties = {
    color: 'white',
    backgroundColor: 'gray',
    padding: '10px',
    fontSize: '2em',
    fontWeight: 'bold',
    boxShadow: '0 0 10px rgba(0,0,0,0.5)'
  }
  return <div style={style}>{name}</div>
}

export default Thing2
