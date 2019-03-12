// ;(()=>{
// 	"use strict";

// 	$("#btnClick").on("click", function() {
// 		$(this).fadeOut();
// 	});
// })()
//------------------------------------------
// ;(()=>{
// 	"use strict";

// 	$("#actionForm").on("submit", function(event) {
// 		event.preventDefault();

// 		console.log(this);
// 	});
// })()
//---------------------------------------
// ;(()=>{
// 	"use strict";

// 	$("#actionForm").on("submit", function(event) {
// 		event.preventDefault();
// 		console.log(this);
// 	});
// 	$("#dynamicInput").on("click", function(event) {
// 		event.preventDefault();
		
// 		let $input = $('actionForm[name=password]');
// 		if(!$input.val()) return;
// 			let type= $input.attr("type");

// 		switch(type) {
// 			case "password": 
// 				$input.attr("type", "text");
// 				$(this).text('Hide');
// 				break;
// 			case "text": 
// 				$input.attr("type", "password");
// 				$(this).text('Show');
// 				break;	
// 		}
// 	});


// })()
//-----------------------------------------------------------------------------------------------------------


// function cat(rows, cols) {
//     var $table = $('<table>').appendTo($('#content'));
 
//     for (var i = 0; i < rows; i++) {
//         var $tr = $('<tr>').appendTo($table);

//         for (var j = 0; j < cols; j++) {
//             var $td = $('<td>').appendTo($tr);

//         }

//     }

// }

// cat(10, 10); 

// $('td').on('click',function bgColor(){
//         $(this).css('background', '#000');

//     });

 

 

// $('#clr').on('click',function(){
//         $('td').css('background', 'none');

//     });

 

 

$('rest').on('click',function(){

//     });