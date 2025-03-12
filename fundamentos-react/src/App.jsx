import { Fragment } from 'react';
import imgFakoly from './assets/images/folder.jpg';
import MyButton from './components/MyButton';
import WelcomeText from './components/WelcomeText';
import ItemFruit from './components/ItemFruit';
import OnlineText from './components/OnlineText';
import OfflineText from './components/OfflineText';

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