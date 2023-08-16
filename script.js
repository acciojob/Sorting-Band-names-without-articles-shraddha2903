let bandNames = ['The Beatles', 'Led Zeppelin', 'Pink Floyd', 'The Rolling Stones', 'Queen', 'Aerosmith'];

function stripArticles(name) {
  return name.replace(/^(a|an|the)\s+/i, '');
}

// Sort the band names while ignoring articles
bandNames.sort((a, b) => stripArticles(a).localeCompare(stripArticles(b)));

// Generate the HTML list
const ulElement = document.getElementById('band');
bandNames.forEach(name => {
  const liElement = document.createElement('li');
  liElement.textContent = name;
  ulElement.appendChild(liElement);
});
