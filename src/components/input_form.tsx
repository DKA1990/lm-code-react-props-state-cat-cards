import React, { useState } from "react";

interface InputFormProps {
    name: string;
    species: string;
    favFood: string;
    birthYear: number;
    updateState: Function;
}

const InputForm: React.FC<InputFormProps> = ({ name, species, favFood, birthYear, updateState }) => {
    const [nameValue, setNameValue] = useState<string>('');
    const [speciesValue, setSpeciesValue] = useState<string>('');
    const [foodValue, setFoodValue] = useState<string>('');
    const [birthValue, setBirthValue] = useState<number>(0);

    const addCat = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();     
        updateState(nameValue, speciesValue, foodValue, birthValue);
        setNameValue(name);
        setSpeciesValue(species);
        setFoodValue(favFood);
        setBirthValue(birthYear);
    }

    return (
        <form onSubmit={addCat}>
            <label>
                Name:
                <input type="text" id="name" value={nameValue} onChange={(event) => {
                    setNameValue(event.target.value);
                }}></input>
            </label>
            <label>
                Species:
                <input type="text" id="species" value={speciesValue} onChange={(event) => {
                    setSpeciesValue(event.target.value);
                }}></input>
            </label>
            <label>
                Favourite Food:
                <input type="text" id="favfoods" value={foodValue} onChange={(event) => {
                    setFoodValue(event.target.value);
                }}></input>
            </label>
            <label>
                Birth Year:
                <input type="number" id="birthyear" value={birthValue} onChange={(event) => {
                    setBirthValue(event.target.valueAsNumber);
                }}></input>
            </label>
            <button type="submit" id="submit">Submit</button>
        </form>
    );
};

export default InputForm;