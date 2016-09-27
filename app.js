
$(document).ready(function() {
	// When document is ready, add list to tasks div
	$("#tasks").html("<ol id='task-list'>")

	$(document).on("submit", "form", function() {
		// On click store text from field in variable
		var task = $("#newtask").val();
		// Append task to task list
		$("#task-list").append("<li>"+task);
		// Clear text field for next task
		$("#newtask").val("");
	})
})