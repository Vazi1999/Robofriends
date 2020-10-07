import React from 'react';

const SearchBox = ({searchfield,searchChange})=>{
	return(
		<input className='pa3 ba b--green bg-lightest-blue bw1 f3 w-30 mb3' 
		type='search' placeholder='Search for a robot' 
		onChange={searchChange}/>
		);

}
export default SearchBox;