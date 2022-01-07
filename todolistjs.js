var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Add a "checked" symbol when clicking on a list item
/*var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);*/

function add() {
  var li = document.createElement("li");
  li.className='doli';
  var inputValue = document.getElementById("title").value;
  var t = document.createTextNode(inputValue);
  //console.log(t);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("dolist").appendChild(li);
  }
  document.getElementById("title").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

	
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  
   var doli = document.getElementsByClassName("doli");
   for (j = 0; j < doli.length; j++) {
   const str1 = doli[j].textContent;
   const str = str1.replace("\u00D7","");
   const strcont = doli[j];
   const li2 = document.createElement("li");
   const t2 = document.createTextNode(str);
   const donel = document.getElementById("donelist");
    doli[j].onclick = function(){
      strcont.style.setProperty("text-decoration", "line-through");
      li2.appendChild(t2);
      donel.appendChild(li2);
      
      
    }
   }
  
}
function fun(){
  var close = document.getElementsByClassName("close");
  var i;
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}