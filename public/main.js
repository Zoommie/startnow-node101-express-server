$(document).ready(function() {
// write your code here


$.getJSON('data.json', function(data){
    var peoples_data = '';

$.each(data, function(index, value ){
    peoples_data +="<tr>";
    peoples_data += "<td>"+ value.name + '</td>';
    peoples_data += "<td>"+ value.description + '</td>';
    peoples_data += "<td>"+ '<a href="https://www.google.com/maps?q=' +value.location+'">'+ "Map</a>" + "</td>";
    peoples_data +="</tr>";
    $('tbody').append(peoples_data);


});

});

});


