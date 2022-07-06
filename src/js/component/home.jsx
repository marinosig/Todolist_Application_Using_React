import React, {useState} from "react";


//create your first component
const Home = () => {

const [arrayoflist, SetArrayoflist] = useState([]);
const [inputvalue, SetInputvalue] = useState();

const catchInputValue = (event) => {
	if (event.keyCode === 13) {
		SetInputvalue(event.target.value);
		SetArrayoflist([...arrayoflist, event.target.value]);
		event.target.value = "";
	}
};
console.log(inputvalue)
console.log(arrayoflist)

const deleteListItem = () => {
	return (<span>X</span>)
}


const listoftasks = arrayoflist?.map((task, index) => {

    return (

		<li key={index}
		className="list-group-item " 
		style={{liststyle: "none"}}
		onMouseOver={deleteListItem}
		>
			{task}
		</li> 


)
});



	return (
		<div className="container-fluid text-center">
			<div className="row justify-content-md-center">
				<input 
					className="mt-5 border-0 col col-lg-4" 
					placeholder="What needs to be done?"
					size="50"
					onKeyDown={catchInputValue}
				/>
			</div>

			<div className="row justify-content-md-center">
				<ul 
					className="mt-5 border-0 col col-lg-4 list-group "
					size="50"
					
				>
					{listoftasks}
				</ul>
			</div>
				
				
		</div>
	);
};

export default Home;
