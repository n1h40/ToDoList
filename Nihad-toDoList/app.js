const input = document.querySelector("input");
const addBtn = document.getElementById("add-btn");
const clearBtn = document.getElementById("clear-icon");
const sortBtn = document.getElementById("sort-icon");
const notesContainer = document.querySelector(".notes");
let notes = [];
let sortedValue = false;

const renderNotes = () => {
  notesContainer.innerHTML = notes
    .map(
      (note, idx) => `
    <div class="note-item">
      <p>${idx + 1}) ${note}</p>
      <i class="ri-close-line" onclick="deleteNote(${idx})"></i>
    </div>`
    )
    .join("");
  notesContainer.style.borderColor = notes.length ? "#c4c4c4" : "transparent";
};

addBtn.addEventListener("click", () => {
  if (input.value) {
    notes.push(input.value);
    input.value = "";
    renderNotes();
  } else {
    alert("Note daxil edin");
  }
});

const deleteNote = (index) => {
  notes.splice(index, 1);
  renderNotes();
};

clearBtn.addEventListener("click", () => (input.value = ""));

sortBtn.addEventListener("click", () => {
  if (!notes.length) {
    alert("Note yoxdur");
    return;
  }
  notes.sort((a, b) => (sortedValue ? a.localeCompare(b) : b.localeCompare(a)));
  sortedValue = !sortedValue;
  renderNotes();
});
