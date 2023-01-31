import { useState } from 'react';
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

function App(): JSX.Element {

	// JavaScript/TypeScript code can be inserted here!
	//const [ cats, setCats ] = useState<Array<Cat>>(catData);
	const [ cats ] = useState<Array<Cat>>(catData);
	const [ dogs ] = useState<Array<Dog>>(dogData);

	const catCount = cats.length;
	const dogCount = dogs.length;

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
			</main>

			<Footer />
		</>
	);
}

export default App;
