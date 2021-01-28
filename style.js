var onay = document.querySelectorAll(".tablo input[type=checkbox]");
var sıra = document.querySelectorAll("#mysıra");
var buttonCTA = document.getElementById("button");
var tr = document.querySelectorAll("table tbody tr");
var a = document.querySelectorAll(".tablo input[type=text]");
var tr = document.querySelectorAll("table tbody tr");


onay.forEach((checkbox,i) => {
checkbox.addEventListener("change", function() {
    if(checkbox.checked == true) {
        sıra[i].removeAttribute("disabled");
    }
    else{

        sıra[i].disabled = "false";
        
    }
});
 });   


 buttonCTA.addEventListener("click", function() {
    console.clear();
    console.log("isim ", "Sıra Numarası");
    a.forEach((e,i) => {
    	if(a.value !=="" ) {
			console.log(a[i].value , sıra[i].value);
			buttonCTA.innerText = "Sıra kaydedildi";
    	}
		else{
			 if(a.value =="" )
			alert("İsim Boş Bırakılamaz!");
		}
    	
});
});



var result = [];

tr.forEach(e => {
    console.dir(e)
    var id = e.children[0].innerText;
    var sıra = e.children[3].children.value;

    result.push({ "id": id , "sıra numarası": sıra ,});
    console.log(result)
});
