import ItemFruit from "./ItemFruit";

const ListFruits = ({fruits}) => {
    //const fruits = ['🍌', '🍏', '🍓', '🥝', '🍋', '🍐'];

    return( 
        <ul>
            {
            fruits.map((fruit, index) => (
                <ItemFruit key={ index } fruit = { fruit }/>
            ))
            }
        </ul> 
    );
};

export default ListFruits;