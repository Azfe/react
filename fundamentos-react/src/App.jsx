import { Fragment } from 'react';
import imgFakoly from './assets/images/folder.jpg';

const MyButton = ({text}) => {
  return <button>{ text }</button>
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

const fruits = ['🍌', '🍏', '🍓', '🥝', '🍋', '🍐'];

const App = () => {
  return (
    <Fragment>
      <h1 className={ classTitle }>{ title.toUpperCase() }</h1>
      <img src={ imgFakoly } alt={`imagen: ${title}`} className="image"/>
      <MyButton text="Click me! 1" />
      <MyButton text="Click me! 2"/>
      {
        user ? <OnlineText/> : <OfflineText/>
      }
      {
        user && <OnlineText/>
      }
      <ul>
        {
          fruits.map((fruit, index) => {
            return <li key={ index }>{ index + 1 } - { fruit }</li>
          })
        }
      </ul>

    </Fragment>
  )
}

export default App;