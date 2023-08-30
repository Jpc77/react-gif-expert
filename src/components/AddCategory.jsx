import { useState } from 'react';


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) => {
        // recordar que lo que recibe viene del onchange y es el evento
        setInputValue(target.value);
    }

    const onSubmit = ( event ) => {

        event.preventDefault();
        if( inputValue.trim().length <= 1) return;
        // setCategories(categories => [inputValue, ...categories]);
        onNewCategory( inputValue.trim() );
        setInputValue(''); //para resetear el estado
    }

    return (
        <form action="" onSubmit={ onSubmit }>
            <input
                type="text"
                placeholder="Buscar Gif"
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    );
}