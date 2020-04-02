// Selection ----------------------------------- //

let mod = $('div.module');
console.log('mod :', mod);

let li1 = $('#myListItem');
console.log('li1 :', li1);

let li2 = $('#myList').children();
console.log('li2 :', li2);

let li3 = $('#myList').find('li').eq(2);
console.log('li3 :', li3);

let hid =  $(":hidden");
console.log('hid :', hid.length);

let alt = $("img[alt]");
console.log('alt :', alt.length);

let tb = $('tr:odd')
console.log('tb :', tb);

let ip = $("input.input_text")[0].name;
let lb = $( `label[for=${ip}`)
console.log('ip :', lb[0]);

// Traversal ----------------------------------- //

$('img').each(function() {
  console.log( this.alt );
});

$("input.input_text").parent().addClass("myClass");

$("#myList").find(".current").removeClass("current").next().addClass("current");

console.log($("select[name=day]").parent().next().find("input.input_submit") );

$('#slideshow').children().eq(0).addClass("current").siblings().addClass("disabled");

// Manipulation ----------------------------------- //

for ( let i=0; i<5; i++) {
	$(`<li>New list item ${i} </li>`).appendTo($('#myList'));
}

$('#myList').find("li:odd").remove();

$("<h2> Another heading </h2> <p> Another paragraph</p>").appendTo($("div.module").last());

$("<option value=\"wednesday\">Wednesday</option>").appendTo($("select[name=day]"));

$('<div class="module">').append($('img').last().clone()).appendTo('div.module').last();
