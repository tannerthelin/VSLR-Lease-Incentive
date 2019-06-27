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
	
	$("#table-content").append(
		'<tr>' +
		'<td class="name-column">' + data[i].name + '</td>' +
		'<td class="office-column">' + data[i].office + '</td>' +
		'<td class="WC-column needed">' + data[i].wc_needed + '</td>' +
		'<td class="WC-column last">' + data[i].current_wc + '</td>' +
		'</tr>'
		);
	
}

}