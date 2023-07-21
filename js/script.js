const populateSelectOptions = (data) => {
    const select = document.querySelector('#curriculum-select');
    
    // Clear any existing options
    select.innerHTML = '';
    
    Object.keys(data).forEach(curriculum => {
      const option = document.createElement('option');
      option.value = curriculum;
      option.textContent = curriculum;
      select.appendChild(option);
    });
 
  // Select the first curriculum by default
  if (Object.keys(data).length > 0) {
    populateWebsite(data, Object.keys(data)[0]);
  }
};

const populateWebsite = (data, curriculum) => {
    document.querySelector('#profile-image').src = data[curriculum].profile.image;
    document.querySelector('#name').textContent = data[curriculum].profile.name;
    document.querySelector('#email').href = "mailto:" + data[curriculum].profile.email;
    document.querySelector('#email').textContent = data[curriculum].profile.email;
    document.querySelector('#presentation-title').textContent = data[curriculum].presentationText.title;
    document.querySelector('#presentation-text').textContent = data[curriculum].presentationText.text;

    const lastUpdated = new Date(data[curriculum].lastUpdated);
    document.querySelector('#last-updated').textContent = "Curriculum Last Updated on: " + lastUpdated.toLocaleDateString() + " " + lastUpdated.toLocaleTimeString();
  };


  fetch('data/content.json')
  .then(response => response.json())
  .then(data => {
    populateSelectOptions(data);
    document.querySelector('#curriculum-select').addEventListener('change', function() {
      populateWebsite(data, this.value);
    });
  });
  