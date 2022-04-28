const input = document.querySelector('.input');
const output = document.querySelector('.output');

function addHTML(string) {
  let afterH2 = false;
  let formatted = '';
  string.forEach((el) => {
    if (!el.toLowerCase().includes('klíčové vlastnosti') && !afterH2) {
      if (!el.toLowerCase().includes('klíčové funkce') && !afterH2) {
        if (el === '') {
          formatted += '';
        } else if (el === " ") {
          formatted += "";
        } else {
          formatted += `<p>${el}</p>`;
        }
      }
    }

    if (el.toLowerCase().indexOf('klíčové vlastnosti') !== -1 && !afterH2) {
      formatted += `<h2><span style="font-size: 18px;"><strong>${el}</strong></span></h2><ul>`;
      afterH2 = true;
    } else if (el.toLowerCase().indexOf('klíčové funkce') !== -1 && !afterH2) {
      formatted += `<h2><span style="font-size: 18px;"><strong>${el}</strong></span></h2><ul>`;
      afterH2 = true;
    }
    if (el === '' && afterH2) {
      formatted += '';
    } else if (el && afterH2) {
      formatted += `<li>${el}</li>`;
    }
  });
  if (formatted.indexOf('</li>') !== -1) {
    formatted += '</ul>';
  }
  return formatted;
}

input.addEventListener('input', (e) => {
  const str = e.target.value;
  const stringArray = str.split('\n');
  const pasteReadyHTML = addHTML(stringArray);
  output.value = pasteReadyHTML;
});
