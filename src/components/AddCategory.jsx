import { useState } from "react"

export const AddCategory = ( {onNewCategory} ) => {

    const [inputValue, setInputValue] = useState("");

    const onChaneInput = ({ target }) => {
        setInputValue( target.value )
    }

    const onSubmit = (event) => {
        event.preventDefault();

        const value = inputValue.trim();
        if (value.length <= 1) {
            return;
        }

        onNewCategory(value);
        setInputValue("")
        //setCategories(categories => [inputValue, ...categories])

        //props.addCategory(inputValue)
    }

    //props.addCategory

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text" 
                placeholder="Buscar gifs"
                value={ inputValue } 
                onChange={ onChaneInput }
            />
        </form>
    )
}
