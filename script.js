document.getElementById('ringForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get the values from the form
    const goldType = document.getElementById('goldType').value;
    const carat = document.getElementById('carat').value;
    const cut = document.getElementById('cut').value;
    const clarity = document.getElementById('clarity').value;
    const diamondType = document.getElementById('diamondType').value;

    // Construct the image path and description based on user selection
    let imageName = `${goldType}-${cut}-${diamondType}-${clarity}-${carat}`;
    let imageSrc = `images/${imageName}.jpg`; // Assuming you have images named according to the specifications

    let description = `A luxurious ring made from ${goldType} gold, featuring a ${cut} cut diamond of ${carat} carats, clarity ${clarity}, and ${diamondType === 'lab' ? 'lab-grown' : 'natural'} diamond.`;

    // Update the displayed image and description
    const jewelryImage = document.getElementById('jewelryImage');
    const jewelryDescription = document.getElementById('jewelryDescription');

    jewelryImage.innerHTML = `<img src="${imageSrc}" alt="Selected Jewelry" />`;
    jewelryDescription.textContent = description;
});