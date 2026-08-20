const commandGroupNumbers = document.querySelectorAll('.command-group__number');

if (commandGroupNumbers.length > 0) {
  commandGroupNumbers.forEach((number, index) => {
    number.textContent = String(index + 1).padStart(2, '0');
  });
}
