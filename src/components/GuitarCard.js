import React from 'react'
import classes from './GuitarCard.module.css'

const GuitarCard = ({guitars}) => {
  return (
    <div className={classes['wrapper']}>
        {guitars.map((guitar) => (
        <div key={guitar.id} className={classes['guitar-card']}>
            <div className={classes['img-container']}><img src={guitar.picture} alt=""/></div>
            <div>
            <div className={classes['flex']}>
                <p className={classes['brand']}>{guitar.brand}</p>
                <p className={classes['type']}>{guitar.series}</p>
            </div>
            <div className={classes['details']}>
                <p>Shape: {guitar.shape}</p>
                <p>Pickup: {guitar.pickup}</p>
                <p>Body material: {guitar.material}</p>
                <p>Neck & fretboard: {guitar.neckFretboard}</p>
                <p>Neck finish: {guitar.neckFinish}</p>
                <p>Color: {guitar.color}</p>
            </div>
            </div>
        </div>
        ))}
    </div>
  )
}

export default GuitarCard
