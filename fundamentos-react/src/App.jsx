import { Fragment } from 'react';
import imgFakoly from './assets/images/folder.jpg';

const MyButton = () => {
  return <button>Click me!</button>
}

const OnlineText = () => {
  return (
    <p>Usuario logueado</p>    
  ) 
}

const OfflineText = () => {
  return (
    <p>Usuario no logueado</p>    
  ) 
}

const title = 'React is awesome!';
const classTitle = 'text-center';
//const pathImg = 'src/assets/images/folder.jpg';
const user = true;

const App = () => {
  return (
    <Fragment>
      <h1 className={ classTitle }>{ title.toUpperCase() }</h1>
      <img src={ imgFakoly } alt={`imagen: ${title}`} className="image"/>
      <MyButton />
      {
        user ? <OnlineText/> : <OfflineText/>
      }
      {
        user && <OnlineText/>
      }
    </Fragment>
  )
}

export default App;