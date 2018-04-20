


const hide = () => {
	var element = document.getElementById('main');
	element.style.display === "flex" ? element.style.display = "None" : element.style.display = "flex"
}



const uncheck = (elem) => {

		 var tableElem = document.getElementById(elem);
		 var elements = tableElem.getElementsByTagName('input');
		 // alert(elements.length);
		 for (var i = 0; i < elements.length; i++) {
		 	elements[i].checked = false
		 }
	
	}
