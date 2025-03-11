import { Fragment } from 'react';

const title = 'React is awesome!';
const classTitle = 'text-center';
const pathImg = 'https://picsum.photos/200/300';

const App = () => {
  return (
    <Fragment>
      <h1 className={ classTitle }>{ title.toUpperCase() }</h1>
      <img src={ pathImg } alt={`imagen: ${title}`} />      
    </Fragment>
  )
}

export default App;