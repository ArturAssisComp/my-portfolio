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
    document.querySelector('#name').textContent = data[curriculum].profile.name;
    document.querySelector('#email').href = "mailto:" + data[curriculum].profile.email;
    document.querySelector('#email').textContent = data[curriculum].profile.email;
    document.querySelector('#presentation-title').textContent = data[curriculum].presentationText.title;
    document.querySelector('#presentation-text').textContent = data[curriculum].presentationText.text;
  };


  fetch('data/content.json')
  .then(response => response.json())
  .then(data => {
    populateSelectOptions(data);
    document.querySelector('#curriculum-select').addEventListener('change', function() {
      populateWebsite(data, this.value);
    });
  });
  