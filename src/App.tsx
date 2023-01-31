import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import CatCard from './components/cat_card';
import Cat from './data/cat';
import catData from './data/cat-data';
import Dog from './data/dog';
import dogData from './data/dog-data';
import DogCard from './components/dog_card';
import InputForm from './components/input_form';

function App(): JSX.Element {

	// JavaScript/TypeScript code can be inserted here!
	const [ cats, setCats ] = useState<Array<Cat>>(catData);
	const [ dogs ] = useState<Array<Dog>>(dogData);

	const catCount = cats.length;
	const dogCount = dogs.length;

	const updateCats = (nameInput: string, speciesInput: string, foodInput: string, birthInput: number) => {
		const newCat = {name: nameInput, id: uuidv4(), species: speciesInput, favFoods: [foodInput], birthYear: birthInput};
		setCats(cats => [...cats, newCat]);
		console.log(cats);
	}

	return (
		<>
			<Navbar />
			<Header 
				catCount = {catCount}
				dogCount = {dogCount}
			/>

			<main>
				<div className='cards__wrapper'>
					{ cats.map((cat, index) => (
						<CatCard 
							key={cat.id}
							name={cat.name}
							species={cat.species}
							favFoods={cat.favFoods}
							birthYear={cat.birthYear}
							catIndex={index}
						/>
					)) }
					{ dogs.map((dog, index) => (
						<DogCard
							key={dog.id}
							name={dog.name}
							species={dog.species}
							favFoods={dog.favFoods}
							birthYear={dog.birthYear}
							dogIndex={index}
						/>
					))}
				</div>
				<div className="input-form">
					<InputForm
						name=''
						species=''
						favFood=''
						birthYear={0}
						updateState={ updateCats }
					/>					
				</div>
			</main>

			<Footer />
		</>
	);
}

export default App;
