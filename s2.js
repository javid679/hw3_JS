/* 
const abc = () => {
    var text = document.getElementById("txt").value;
    var selectedDate = document.getElementById("start").value;
    if (text == "") {
      return;
    } else {
      if (selectedDate == "") {
        window.alert("Please select date");
      } else {
        const para = document.createElement("p"); // creating p
        const newList = document.createElement("li"); // creating new li
        const node = document.createTextNode(text); // creating new text and inserting it into the created text
        para.appendChild(node); //para <-- text
  
        // create delete button
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.onclick = function() {
          deleteEntry(this);
        };
        para.appendChild(deleteBtn); // add delete button to paragraph
  
        newList.appendChild(para); // list <-- para
        const element = document.getElementById("entryUL"); //getting the element unordered list
        // element <-- newList
        element.insertBefore(newList, element.firstChild);
        const c = document.createElement("span");
        c.setAttribute("id", "datePicker");
        para.append(c);
        //var selectedDate = document.getElementById("start").value;
        document.getElementById("datePicker").innerHTML = selectedDate;
  
        //image upload
        const fileInput = document.getElementById('avatar');
        const file = fileInput.files[0];
        if (file) {
          const img = document.createElement('img');
          img.src = URL.createObjectURL(file);
          para.appendChild(img);
        }
      }
    }
  };

  */

/*

   const fileInput = document.getElementById('avatar');
        const file = fileInput.files[0];
        if (file) {
          const img = document.createElement('img');
          img.src = URL.createObjectURL(file);
          para.appendChild(img);
        }
*/
