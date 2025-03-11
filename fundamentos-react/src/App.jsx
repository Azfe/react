import { Fragment } from 'react';

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
const pathImg = 'https://picsum.photos/200/300';
const user = true;

const App = () => {
  return (
    <Fragment>
      <h1 className={ classTitle }>{ title.toUpperCase() }</h1>
      <img src={ pathImg } alt={`imagen: ${title}`} />
      <MyButton />
      {
        user ? <OnlineText/> : <OfflineText/>
      }
    </Fragment>
  )
}

export default App;