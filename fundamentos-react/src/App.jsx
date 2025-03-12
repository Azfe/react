import { Fragment } from 'react';
import imgFakoly from './assets/images/folder.jpg';

const MyButton = ({ text }) => {

  const  handleClickButton = (title) => {
    console.log('Handle Clicked!' + title);
  }

  return (
    <button onClick={ () => handleClickButton(text) }>
      { text }
    </button>
  );
};

const OnlineText = () => {
  return (
    <p>Usuario logueado</p>    
  ) 
}

const OfflineText = () => {
  return (
    <p>Usuario no logueado</p>    
  ) 
};

const WelcomeText = ({user}) => (user ? <p>Bienvenido usuario</p> : <p>Offline</p>);

const ItemFruit = (props) => {
  return <li>{ props.fruit }</li>
};

const App = () => {
  const title = 'React is awesome!';
  const classTitle = 'text-center';
  //const pathImg = 'src/assets/images/folder.jpg';
  const user = true;

  const fruits = ['🍌', '🍏', '🍓', '🥝', '🍋', '🍐'];

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
          fruits.map((fruit, index) => (
            <ItemFruit key={ index } fruit = { fruit }/>
          ))
        }
      </ul>      
      
      <WelcomeText user={user}/>
      

    </Fragment>
  )
}

export default App;