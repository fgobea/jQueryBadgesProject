$(function () {
	//Defines Global variable for later use
	var el = 0;
	//using ajax method and defining data
	$.ajax({
		url: 'https://www.codeschool.com/users/fgobea.json',
		dataType: 'jsonp',
		success: function (response) {
			//handling success events
			//for each loop creted to see each course
			$.each(response.courses.completed, function (el) {
				//adds div to badges div
				$('#badges').append('<div class="course" id="' + el + '"><div>');
				//adds course data to div recently created
				$('#' + el).append('<h3>' + response.courses.completed[el].title + '</h3>');
				$('#' + el).append('<img src="' + response.courses.completed[el].badge + '"></h3>');
				$('#' + el).append('<a href="' + response.courses.completed[el].url + '" target="_blank" class="btn btn-primary">See Course</a>');
			}); //ends foreach
		}//ends success event handling
	}); //ends ajax
}); //ends jquery function