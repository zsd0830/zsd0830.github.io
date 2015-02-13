$(document).ready(function(){ 
$.getJSON("StudentInformation.json", function(sad){
	$('#GPA').mouseenter(function() {
      	//var minnum=Math.min.apply(happy[1].GPA,happy[2].GPA,happy[3].GPA,happy[4].GPA,happy[5].GPA,happy[6].GPA,happy[7].GPA,happy[8].GPA,happy[9].GPA,happy[10].GPA);
		//for (var i = 0; i < happy.length; i++) {
			//if (happy[i].GPA = minnum){
				/*	yohe="<td id='change_color'>";}
			else {  yohe="<td>";}
					tr.append(yohe+ happy[i].GPA+ "</td>");
					$('#information_table').append("tr"); 
			 
			}
		})*/
		var arr = [happy[1].GPA,happy[2].GPA,happy[3].GPA,happy[4].GPA,happy[5].GPA,happy[6].GPA,happy[7].GPA,happy[8].GPA,happy[9].GPA,happy[0].GPA];
//定义最大值变量：从数组中指定一个，充当最大值
var min =arr[0];//假设最小值
var minIndex = 0;

for(var i=0;i<arr.length;i++)
{ if(min > arr[i])
   {
     min = arr[i];
     minIdex = i;  }
}

var c=[];
for (var i = 0; i < sad.length; i++) {
      	c = $("<tr>");
      	c.append("<td>" + sad[i].GPA + "</td>");
		c.append("<td id='change_color'>" + sad[minIdex].GPA + "</td>")          
      	$('#information_table').append(c); 
}
})

	$('#GRE_V').mouseenter(function() {
        $('#GRE_V').hide(); })
	$('#GRE_Q').mouseenter(function() {
        $('#GRE_Q').hide(); })
	$('#Essay').mouseenter(function() {
        $('#Essay').hide(); })
	$('#Recom').mouseenter(function() {
        $('#Recom').hide(); })
}
)
}
)