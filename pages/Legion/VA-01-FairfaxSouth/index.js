function init() {
Tabletop.init( { key: 'https://docs.google.com/spreadsheets/d/0AmYzu_s7QHsmdDNZUzRlYldnWTZCLXdrMXlYQzVxSFE/pubhtml',
callback: function(data, tabletop) { 
console.log(data)
},
simpleSheet: true } )
}

function showInfo(data, tabletop) {
console.log(data);


for (var i = 0; i < data.length; i++) {
	
	// Change this variable to switch the office!
	var currentOffice = "VA-01 Fairfax South Solar";

	document.getElementById("page-title").innerHTML = currentOffice;


	if (data[i].office == currentOffice) {
	$("#table-body").append(
		'<tr>' +
		'<td class="name-column">' + data[i].name + '</td>' +
		//'<td class="office-column">' + data[i].office + '</td>' +
		'<td class="WC-column needed">' + data[i].score_to_hit + '</td>' +
		'<td class="WC-column last">' + data[i].current_score + '</td>' +
		'</tr>'
		);
	}
	
}

}