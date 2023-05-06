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
      newList.classList.add("entrylist");
      const node = document.createTextNode(text); // creating new text and inserting it into the created text
      para.appendChild(node); //para <-- text

      // add delete button to paragraph

      newList.appendChild(para); // list <-- para
      const element = document.getElementById("entryUL"); //getting the element unordered list
      // element <-- newList
      element.insertBefore(newList, element.firstChild);
      const c = document.createElement("span");
      c.setAttribute("id", "datePicker");
      para.append(c);
      //var selectedDate = document.getElementById("start").value;
      document.getElementById("datePicker").innerHTML = selectedDate;
      del(newList);
      pic(newList);
      handleDrop(newList);
    }
  }
};

const del = (para) => {
  // create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "Delete";
  deleteBtn.onclick = function () {
    deleteEntry(this);
  };
  para.appendChild(deleteBtn);

  function deleteEntry(button) {
    button.parentElement.parentElement.remove();
  }
};

const pic = (para) => {
  const fileInput = document.getElementById("avatar");
  const file = fileInput.files[0];
  if (file) {
    const img = document.createElement("img");
    img.src = URL.createObjectURL(file);
    img.setAttribute("draggable", true); // make the image draggable
    para.appendChild(img);
  }
};

function handleDrop(para) {
  const fileInput = document.getElementById("avatar");
  para.addEventListener("dragover", function (e) {
    e.preventDefault();
  });
  para.addEventListener("drop", function (e) {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      fileInput.files = files;
      pic(para);
    }
  });
}
