

    // JavaScript code here
    // Get the ul element
    const ulElement = document.querySelector('ul');

    // Define the array of band names
    let bandNames = ['The Beatles', 'Pink Floyd', 'Led Zeppelin', 'Aerosmith', 'The Rolling Stones'];

    // Sort the band names in lexicographic order excluding articles
    bandNames.sort(function(a, b) {
      const firstWordA = a.replace(/^(a |an |the )/i, '').trim();
      const firstWordB = b.replace(/^(a |an |the )/i, '').trim();
      return firstWordA.localeCompare(firstWordB);
    });

    // Append the sorted band names to the ul element as list items
    bandNames.forEach(bandName => {
      const liElement = document.createElement('li');
      liElement.textContent = bandName;
      ulElement.appendChild(liElement);
    });