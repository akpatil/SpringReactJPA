var Employee = React.createClass({
	render: function() {
		var empName = this.props.employee.fullName;
		var empHireDate = this.props.employee.hireDate;
		
		console.log("From Employee: " + empName);
		console.log("From Employee: " + empHireDate);
		
		return (
			<div className="col-sm-3">
				<div className="col-item">
					<div className="info">
						<div className="row">
							<h5>{empName}</h5>
						</div>
					</div>
				</div>
			</div>
		);
	}
});