function dark(){
	let myScreen = document.body;
	myScreen.classList.toggle("dark-mode");
	let x = document.getElementById("btn");
	if (x.innerHTML === "DARK"){
	x.innerHTML = "LIGHT";
	console.log("hey")
}else{
	x.innerHTML = "DARK";
	}
}
$(function(){
$('a[href*=#]').on('click', function(e) {
	e.preventDefault();
	$('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top},500, 'linear');
});
});