//your code here

let bandNames = ['The Beatles', 'Led Zeppelin', 'Pink Floyd', 'The Rolling Stones', 'U2'];

// Function to sort band names without articles
function sortBandNamesWithoutArticles(names) {
  // Articles to be excluded from sorting
  const articles = ['a', 'an', 'the'];

  // Sort band names in lexicographic order
  names.sort((a, b) => {
    // Remove articles from band names for comparison
    const bandNameA = a.replace(/^(a|an|the)\s+/i, '');
    const bandNameB = b.replace(/^(a|an|the)\s+/i, '');
    return bandNameA.localeCompare(bandNameB);
  });

  return names;
}

// Sort band names without articles
const sortedBandNames = sortBandNamesWithoutArticles(bandNames);

// Generate unordered list with sorted band names
const ul = document.createElement('ul');
ul.setAttribute('id', 'band');

sortedBandNames.forEach(bandName => {
  const li = document.createElement('li');
  li.textContent = bandName;
  ul.appendChild(li);
});

// Append unordered list to a container element
const container = document.getElementById('container');
container.appendChild(ul);
