import React, {useState,} from 'react'
import {  useHistory } from 'react-router-dom'
import classes from './AddGuitarForm.module.css'
import { projectFirestore } from '../firebaseConfig';

const AddGuitar = () => {
  const [brand, setBrand]  = useState('');
  const [series, setSeries]  = useState('');
  const [shape, setShape]  = useState('');
  const [pickup, setPickup]  = useState('');
  const [material, setMaterial]  = useState('');
  const [neckFretboard, setNeckFretboard]  = useState('');
  const [neckFinish, setNeckFinish]  = useState('');
  const [color, setColor] = useState('')
  const [owned, setOwned] = useState('')
  const [picture, setPicture] = useState('')
  const history = useHistory()

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    let newGuitar = {
      'brand': brand,
      'series': series,
      'shape': shape,
      'pickup': pickup,
      'material': material,
      'neckFretboard': neckFretboard,
      'neckFinish': neckFinish,
      'color': color,
      'owned': owned,
      'picture': picture
    }
    console.log(newGuitar);
    try {
      await projectFirestore
        .collection('guitars')
        .doc()
        .set(newGuitar)
      if (parseInt(owned)) {
        history.push('/myguitars')
      } else {
        history.push('/wishlist')
      }
    } catch(err) {

    }
  }
  return (
    <div className={classes['wrapper']} onSubmit={onSubmitHandler}>
      <form>
        <label>
          <span>Brand:</span>
          <input 
            type='text' 
            onChange={(e) => setBrand(e.target.value)}
            value={brand}
            required/>
        </label>

        <label>
          <span>Series:</span>
          <input 
            type='text' 
            onChange={(e) => setSeries(e.target.value)}
            value={series}
            required/>
        </label>

        <label>
          <span>Shape:</span>
          <input 
            type='text' 
            onChange={(e) => setShape(e.target.value)}
            value={shape}
            required/>
        </label>

        <label>
          <span>Pickup:</span>
          <select onChange={(e) => setPickup(e.target.value)}>
            <option value="">--Choose an option--</option>
            <option value="HH">HH</option>
            <option value="HSS">HSS</option>
            <option value="SSS">SSS</option>
          </select>
        </label>

        <label>
          <span>Body  material:</span>
          <input 
            type='text' 
            onChange={(e) => setMaterial(e.target.value)}
            value={material}
            required/>
        </label>

        <label>
          <span>Neck & fretboard:</span>
          <input 
            type='text' 
            onChange={(e) => setNeckFretboard(e.target.value)}
            value={neckFretboard}
            required/>
        </label>

        <label>
          <span>Neck finish:</span>
          <select  onChange={(e) => setNeckFinish(e.target.value)}>
            <option value="">--Choose an option--</option>
            <option value="Gloss">Gloss</option>
            <option value="Satin">Satin</option>
          </select>
        </label>

        <label>
          <span>Color:</span>
          <input 
            type='text' 
            onChange={(e) => setColor(e.target.value)}
            value={color}
            required/>
        </label>

        <label>
          <span>Owned:</span>
          <select  onChange={(e) => setOwned(e.target.value)}>
            <option value="">--Choose an option--</option>
            <option value="1">Yes</option>
            <option value="0">No</option>
          </select>
        </label>

        <label>
          <span>Picture:</span>
          <input 
            type='text' 
            onChange={(e) => setPicture(e.target.value)}
            value={picture}
            required/>
        </label>

        <input type='submit' value='Add'/>
      </form>
    </div>
  )
}

export default AddGuitar
