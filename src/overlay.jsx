import React from 'react'
import styled from 'styled-components'
import { a } from '@react-spring/web'

export default function Overlay({ fill }) {
  // Just a Figma export, the fill is animated
  const OverlayDiv = styled.div`
    position: absolute;
    left: 100px;
    top: 100px;
    width: 50%;
    h2{
      font-size: 3rem;
      margin:0;
    }
    p{
      font-size:3rem;
      margin:0;
    }
  `

  return (
    <OverlayDiv>

      <h2>Nairobi City</h2>
      <p>Gain exclusive access to be among the first to witness this remarkable project come to life.<br/> As a valued member of our community, you'll receive exciting updates, special offers, and early insights into the landmark's creation.</p>
      <div className='buttons'>
        <button>Join Our Mailing List</button>
        <button>Register for the Beta</button>
      </div>
    </OverlayDiv>
  )
}
