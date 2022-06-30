import React, {useState, useEffect} from 'react'
import { Route } from 'react-router-dom'
import { projectFirestore } from './firebaseConfig';

import MyGuitars from './components/MyGuitars'
import WishList from './components/WishList'
import Header from './components/Header'
import AddGuitarForm from './components/AddGuitarForm'
import './App.css';


const App = () => {
  const [guitars,setGuitars]=useState(undefined)
  const [isPending, setIsPending] = useState(true);

  const fetchGuitars = async () => {
    setIsPending(true)
    projectFirestore
      .collection('guitars')
      .orderBy('brand')
      .get()
      .then((snapshot) => {
        let result = [];
        snapshot.docs.forEach((doc) => {
          result.push({ id: doc.id, ...doc.data() });
        });
        setGuitars(result)
        setIsPending(false)
      })
}

  useEffect(() => {
    fetchGuitars();
  }, [])

  return (
    <div>
      <Header></Header>
      {!isPending && <main>
        <Route path='/myguitars'>
          <MyGuitars guitars={guitars}></MyGuitars>
        </Route>
        <Route path='/wishlist'>
          <WishList guitars={guitars}></WishList>
        </Route>
        <Route path='/addguitar'>
          <AddGuitarForm></AddGuitarForm>
        </Route>
      </main>}
    </div>
  )
}
export default App
