$(document).ready(function () {
  // Load existing data on page load
  loadData('course');
  loadData('dt');
});

function saveData(type) {
  const inputId = `#${type}Input`;
  const outputId = `#${type}Output`;
  const content = $(inputId).val().trim();

  if (content === "") {
    alert("Please enter some text before saving.");
    return;
  }

  // Save to localStorage
  localStorage.setItem(`${type}Project`, content);

  // Show confirmation
  $(outputId).html(`<strong>Saved ${type.toUpperCase()} Project:</strong><br>${content}`);
  $(inputId).val('');
}

function loadData(type) {
  const outputId = `#${type}Output`;
  const savedData = localStorage.getItem(`${type}Project`);
  if (savedData) {
    $(outputId).html(`<strong>Saved ${type.toUpperCase()} Project:</strong><br>${savedData}`);
  }
}
