$(document).ready(function(){
  $.getJSON("StudentInformation.json", function(sad){
      var c=[];
        for (var i = 0; i < sad.length; i++) {
            c = $('<tr/>');
            c.append("<td>" + sad[i].Name + "</td>");
            c.append("<td>" + sad[i].GPA + "</td>");
            c.append("<td>" + sad[i].GRE_V + "</td>");
            c.append("<td>" + sad[i].GRE_Q + "</td>");
            c.append("<td>" + sad[i].Essay+ "</td>");
            c.append("<td>" + sad[i].Recom+ "</td>");
            $('#information_table').append(c); 
        }
        })
    })
