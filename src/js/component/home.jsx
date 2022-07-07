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

const deleteListItem = (indexV) => {
	console.log("detelet", indexV);
	<p>teste</p>
}

const removeProduct = (index) => {
	SetArrayoflist([
	  ...arrayoflist.slice(0, index),
	  ...arrayoflist.slice(index + 1, arrayoflist.length)
	]);
  }


const listoftasks = arrayoflist?.map((task, index) => {

    return (
		
			<li key={index}
			className="list-group-item d-flex justify-content-between" 
			style={{liststyle: "none", height: ""}}
			>
				<span className="p-2 text-left">{task}</span>
			<span 
				className="p-2 text-danger" 
				onClick={() => {
					removeProduct(index)
					// // SetArrayoflist(prev => prev.filter(arrayoflist => arrayoflist !== task ))
				}}
				style={{cursor: "pointer"}}> X
			</span>
			</li> 

	)
});



	return (
		<div className="container-fluid text-center"> 
		<h1 className="bg-light text-muted mt-5">TODO LIST</h1>
			<div className="row justify-content-md-center">
				<input 
					className="mt-5 border-1 col col-lg-6" 
					placeholder="Type here what needs to be done?"
					size="100"
					onKeyDown={catchInputValue}
					maxLength={50}
				/>
			</div>

			<div className="row justify-content-md-center">
				<ul 
					className="mt-5 border-0 col col-lg-6 list-group d-flex"
					size="100"				
				>
					{listoftasks}
				</ul>
			</div>
				
				
		</div>
	);
};

export default Home;
