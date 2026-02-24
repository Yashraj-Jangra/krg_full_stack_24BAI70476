const oList = document.getElementById("oList");
const oListBtn = document.getElementById("addItemBtn");
const newItemInput = document.getElementById("newItemInput");

oListBtn.addEventListener("click", () => {
    const newItemText = newItemInput.value;
    const newItem = document.createElement("li");
    newItem.textContent = newItemText;
    oList.appendChild(newItem);
});