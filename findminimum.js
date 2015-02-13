$(document).ready(function(){ 
$.getJSON("StudentInformation.json", function(happy){
	$('#gpa').mouseenter(function() {
      //  var minnum=Math.min(sad[1].GPA,sad[2].GPA,sad[3].GPA,sad[4].GPA,sad[5].GPA,sad[6].GPA,sad[7].GPA),sad[8].GPA,sad[9].GPA,sad[10].GPA);//
		minnum="<td id='change_color'>"
		})
		
	$('#grev').mouseenter(function() {
        $('#essay').hide(); })
	$('#greq').mouseenter(function() {
        $('#essay').hide(); })
	$('#essay').mouseenter(function() {
        $('#essay').hide(); })
	$('#recom').mouseenter(function() {
        $('#essay').hide(); })
}
)})