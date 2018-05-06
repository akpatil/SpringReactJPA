var EmployeeList = React.createClass({
	render: function() {
		var employeesMapped = this.props.employees.map(function(emp, index) {
			<Employee employee={emp} key={index} />
		});
		
		return (
			<div className="row">{employeesMapped}</div>
		);
	}
});