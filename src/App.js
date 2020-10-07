import React,{Component} from 'react';
import CardList from './CardList';
import { robots } from './robots';
import SearchBox from './SearchBox';
import './App.css'

class App extends Component {
	constructor(){
		super()
		this.state={
		robots:robots,
		searchfield:''
		}
	}
	onSearchChange = (event)=>{
		this.setState({searchfield:event.target.value})

		
	}
	render(){
		const filteredRobots = this.state.robots.filter(robots=>{
		return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		return(
			<div className = 'tc' >
				<h1 className='f1 w-100' ><img src='https://fontmeme.com/permalink/201005/91bfe6be8ff9b93c0da8dd02e42ef22c.png' alt='H1' /></h1>
				<SearchBox className='Big' searchChange={this.onSearchChange}/>
				<CardList robots= {filteredRobots} />
			</div>
		);}
	
}
export default App;