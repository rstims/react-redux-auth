import React from 'react';
import { connect } from 'react-redux';
import TextFieldGroup from '../common/TextFieldGroup';
import { createEvent } from '../../actions/eventActions';

class EventForm extends React.Component {
	
	constructor(props){
		super(props);
		this.state = {
			title: '', 
			errors: {},
			isLoading: false
		}

		this.onChange = this.onChange.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}

	onChange(e){
		this.setState({
			[e.target.name]: e.target.value
		});
	}

	onSubmit(e){
		e.preventDefault();
		this.props.createEvent(this.state);
	}

	render(){
		const { title, errors, isLoading } = this.state;

		return (
			<form onSubmit={this.onSubmit}>
				<h1>Create New Game Event</h1>

				<TextFieldGroup 
					error={errors.title}
					onChange={this.onChange}
					value={title}
					field="title"
					label="Event Title"
				/>
				<button type="submit" disabled={isLoading} className="btn btn-primary">
					Create
				</button>
			</form>
		);
	}
}

EventForm.propTypes = {
	createEvent: React.PropTypes.func.isRequired
}

export default connect(null, { createEvent })(EventForm);

