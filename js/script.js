const populateWebsite = (data) => {
    document.querySelector('#name').textContent = data.profile.name;
    document.querySelector('#email').href = "mailto:" + data.profile.email;
    document.querySelector('#email').textContent = data.profile.email;
    document.querySelector('#presentation-title').textContent = data.presentationText.title;
    document.querySelector('#presentation-text').textContent = data.presentationText.text;
  };
  
  fetch('data/content.json')
    .then(response => response.json())
    .then(data => populateWebsite(data));
  