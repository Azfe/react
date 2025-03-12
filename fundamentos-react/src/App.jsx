import { Fragment } from 'react';
import imgFakoly from './assets/images/folder.jpg';

import MyButton from './components/MyButton';
import WelcomeText from './components/WelcomeText';
import OnlineText from './components/OnlineText';
import OfflineText from './components/OfflineText';
import ListFruits from './components/fruits/ListFruits';

const App = () => {
  const title = 'React is awesome!';
  const classTitle = 'text-center';
  //const pathImg = 'src/assets/images/folder.jpg';
  const fruits = ['🍌', '🍏', '🍓', '🥝', '🍋', '🍐'];
  const fruits2 = ['🍊', '🥑', '🍒', '🍎', '🍍'];
  const user = true;

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

      <ListFruits fruits={ fruits }/>           
      <ListFruits fruits={ fruits2 }/>  
      
      <WelcomeText user={user}/>
      

    </Fragment>
  )
}

export default App;