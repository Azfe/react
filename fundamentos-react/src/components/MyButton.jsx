const MyButton = ({ text }) => {
  const handleClickButton = (title) => {
    console.log('Handle Clicked!' + title);
  }

  return (
    <button onClick={ () => handleClickButton(text) }>
      { text }
    </button>
  );
};

export default MyButton;