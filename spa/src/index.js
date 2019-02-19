import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import { subscribeToTimer } from './api';
//import socketIOClient from 'socket.io-client'
import io from 'socket.io-client';

class Square extends React.Component {
	render() {
		return (
			<button className="square">
			{/* TODO */}
			</button>
		);
	}
}
class ShowEditButton extends React.Component {
	render() {
//<button id="myBtn">Open Modal</button>
//{this.props.onClickHandler}
		return (<button onClick={() => this.props.onClickHandler(this.props.dateId)}>Add text</button>);
	}
}
function ShowText(props){
	return (<p>{props.text}</p>)
}
class DateComponent extends React.Component {
	render() {
		let text;
		let editButton;
		if (this.props.value.text!==''){
			text=<ShowText text={this.props.value.text} />;
		}else{
			text=''
		}
		if (this.props.value.isEditable===true){
			editButton=<ShowEditButton onClickHandler={this.props.showEditButtonClickHandler} dateId={this.props.value.dateId} />;
		}else{
			editButton=''
		}
		//console.log(this.props.value);
		return (
			<div className={"date-component-container " + (this.props.value.isHighlighted ? 'highlighted' : '')}>
				<b>{this.props.value.dateText}</b>
				{text}
				{editButton}
			</div>
		);
	}
}
 

class Board extends React.Component {
	constructor(props) {
	super(props);
	this.changeStateFromServer=this.changeStateFromServer.bind(this);
	this.testhandleClick = this.testhandleClick.bind(this);
	this.showPopup = this.showPopup.bind(this);
	this.closeEditPopup=this.closeEditPopup.bind(this);
	this.handleTextareaChange=this.handleTextareaChange.bind(this);
	this.saveStateToServer=this.saveStateToServer.bind(this);

	this.socket=io('localhost:3300', {query: 'userId=1'});
	this.socket.on('changeState', this.changeStateFromServer);
	var i;
	var dates=[];
	var currentDate=new Date();
	var auxDate;
	for (i = 0; i < 10; i++) {
		auxDate=addDays(i);
		if (currentDate.setHours(0,0,0,0)===auxDate.setHours(0,0,0,0)){
			dates[i]={'dateId':i,'isEditable':true,'text':'aaa '+i,'isHighlighted':true,'dateText':addDays(i).toString()};
		}else if (currentDate>auxDate){
			dates[i]={'dateId':i,'isEditable':true,'text':'aaa '+i,'isHighlighted':false,'dateText':addDays(i).toString()};
		}else{
			dates[i]={'dateId':i,'isEditable':false,'text':'','isHighlighted':false,'dateText':addDays(i).toString()};
		}
	}

	this.state = {
		dateComponentData: dates,
		dateCurrentlyBeingEdited:null,
		//showPopup:this.showPopup
	};
}
  
  
	testhandleClick() {
		console.log('testClick happened on parent');
		console.log(this.state.dateComponentData);
		console.log(this.state.dateCurrentlyBeingEdited);
	}
	renderSquare(i) {
		return <Square />;
	}

	renderDateElement(dateId){
		console.log('this.state.dateComponentData[dateId]:',dateId);
		console.log(this.state.dateComponentData[dateId]);
		return <DateComponent value={this.state.dateComponentData[dateId]} showEditButtonClickHandler={this.showPopup}  />;
	}

	setDateCurrentlyBeingEdited(value){
		this.setState({dateCurrentlyBeingEdited:value});
	}

	showPopup(dateId){
		document.getElementById('myModal').style.display = "block";
		this.setState({dateCurrentlyBeingEdited:dateId});
		console.log('se afiseaza popupul din parinte:'+dateId+' this.state.dateCurrentlyBeingEdited:'+this.state.dateCurrentlyBeingEdited);
	}

	closeEditPopup() {
		console.log('Click happened on close modal span');
		document.getElementById('myModal').style.display = "none";
		this.setState({dateCurrentlyBeingEdited:null});
		console.log('CloseEditPopup dateCurrentlyBeingEdited:'+this.state.dateCurrentlyBeingEdited);
	}


	handleTextareaChange(event) {
		var dateText=event.target.value;
		if (dateText!=='' && this.state.dateCurrentlyBeingEdited!==null){
			var aux=this.state.dateComponentData;
			if (aux[this.state.dateCurrentlyBeingEdited].isEditable===true){
				aux[this.state.dateCurrentlyBeingEdited].text=dateText;
				this.setState({dateComponentData:aux});
				this.saveStateToServer(aux, this.socket);
			}
		}
	}

	getCurrentlyBeingEditedDateText(){
		if(this.state.dateCurrentlyBeingEdited!==null){
			return this.state.dateComponentData[this.state.dateCurrentlyBeingEdited].text;
		}
	}
	changeStateFromServer(data){
/*
		console.log('changeStateFromServer');
		console.log(JSON.stringify(this.state.dateComponentData));
		console.log(data);
*/
		if (JSON.stringify(this.state.dateComponentData)!==data){
			this.setState({dateComponentData:JSON.parse(data)});
			console.log('changeStateFromServer data:'+data);
		}else{
			console.log('changeStateFromServer nu se schimba nimic');
		}
	}
	
	saveStateToServer(dateComponentData, socket){
		socket.emit('saveState', JSON.stringify(dateComponentData));
		console.log('saveState to server');
	}
	
	render() {
		var i;
		var dateElements=[];
		for (i = 0; i < 10; i++) {
			dateElements[i]=this.renderDateElement(i);
		} 

		return (
			<div>
			<span onClick={this.testhandleClick}>testhandleClick</span>
				<div id="myModal" className="modal">
					<div className="modal-content">
						<span className="close" onClick={this.closeEditPopup}>&times;</span>
						<textarea onChange={this.handleTextareaChange} value={this.getCurrentlyBeingEditedDateText()}></textarea>
						<span onClick={this.testhandleClick}>testhandleClick</span>
					</div>
				</div>
				<h1>Munca mea</h1>
				<div>{dateElements}</div>
			</div>
		);
	}
}

class Game extends React.Component {
	render() {
		return (
			<div className="game">
				<div className="game-board">
					<Board />
				</div>
				<div className="game-info">
					<div>{/* status */}</div>
					<ol>{/* TODO */}</ol>
				</div>
			</div>
		);
	}
}
/*
var socket_connect = function (room) {
	return io('localhost:3300', {
		query: 'userId='+room
	});
}
*/
function addDays(days) {
	var result = new Date(2018,10,5);
	result.setDate(result.getDate() + days);
	return result;
}


// ========================================

ReactDOM.render(
	<Game />,
	document.getElementById('root')
);
