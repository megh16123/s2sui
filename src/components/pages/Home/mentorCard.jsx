import React from 'react'
// import styles from './Hero.module.scss'
import  './MentorCard.scss'
function MentorCard({name,qualification}) {
  return (
    <div className="mentor">
              <div className="img">
              </div>
              <h3>{name}</h3>
              <h4>{qualification}</h4>
            </div>
  )
}

export default MentorCard