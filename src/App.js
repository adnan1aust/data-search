import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component{
	constructor() {
		super();
		this.state = {
			monsters: [],
			searchTerm: ''
		}
	}

	render() {
		const { monsters, searchTerm } = this.state;
		const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchTerm.toLowerCase()));
		return (
			<div className="App">
				<SearchBox placeholder='Search Monsters'
				handleChange={e => this.setState({ searchTerm: e.target.value })}/>
				<CardList monsters = { filteredMonsters }/>
			</div>
		);
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ monsters: users }));
	}
}

export default App;
