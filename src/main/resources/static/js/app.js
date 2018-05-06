var App = React.createClass({
	getInitialState: function() {
		return { 
			employees: []
		};
	},
	componentWillMount: function() {
		
	},
	componentDidMount: function() {
		fetch('/employees')
			.then(function(response) {
				return response.json();
			})
			.then(this.getProductSuccess);
	},
	componentWillUnmount: function() {
		
	},
	getProductSuccess: function(response) {
		this.setState({
			employees: response
		});
	},
	render: function() {
		return (
				<div className="container">
					<Header />
					<EmployeeList employees={this.state.employees} />
					<div>{this.state.employees}</div>
				</div>
		);
	}
});

ReactDOM.render(<App />, document.getElementById("app"));