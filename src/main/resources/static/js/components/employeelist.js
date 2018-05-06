var EmployeeList = React.createClass({
	render: function() {
		var employeesMapped = this.props.employees.map(function(emp, index) {
			console.log("From EmployeeList: " + emp.fullName);
			return <Employee employee={emp} key={index} />
		});
		
		return (
			<div className="row">{employeesMapped}</div>
		);
	}
});