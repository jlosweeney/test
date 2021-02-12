$.ajax({
  url: 'https://randomuser.me/api/?nat=us,ca&results=20&noinfo',
  dataType: 'json',
  success: function(data) {
  	var theResults = data.results;
  	for(i=0; i < theResults.length; i++) {
		var thisResult = theResults[i];
		var thisRow = '<tr><td>' + thisResult.name.first + ' ' + thisResult.name.last + '</td><td>' + thisResult.gender + '</td><td>' + thisResult.location.city + ', ' + thisResult.location.state + '</td><td>' + thisResult.email + '</td><td>' + thisResult.phone + '</td></tr>';
		$('#randomTable').html($('#randomTable').html() + thisRow);
	}
  }
});