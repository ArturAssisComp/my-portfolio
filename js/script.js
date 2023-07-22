const populateSelectOptions = (data) => {
    const select = document.querySelector('#curriculum-select');
    
    // Clear any existing options
    select.innerHTML = '';
    
    Object.keys(data.curricula).forEach(curriculum => {
      const option = document.createElement('option');
      option.value = curriculum;
      option.textContent = curriculum;
      select.appendChild(option);
    });
 
  // Select the first curriculum by default
  if (Object.keys(data.curricula).length > 0) {
    populateCurriculum(data, Object.keys(data.curricula)[0]);
  }
};

// Function to set the profile image and name
const setProfileDetails = (data) => {
    document.querySelector('#profile-image').src = data.profile.image;
    document.querySelector('#name').textContent = data.profile.name;
};

// Function to set the email, or hide the email element if there's no email
const setEmail = (data) => {
    const emailElement = document.querySelector('#email');

    if (data.profile.email) {
        emailElement.href = "mailto:" + data.profile.email;
        emailElement.textContent = data.profile.email;
        emailElement.style.display = "";
        emailElement.classList.add("social-media-link");
    } else {
        emailElement.style.display = "none";
    }
};

// Function to create a social media link
const createSocialMediaLink = (sm, link) => {
    const anchor = document.createElement('a');
    const imgSrc = `images/logo/${sm}_logo.png`;

    // Check if the image exists
    fetch(imgSrc, { method: 'HEAD' })
        .then(res => {
            if (res.ok) {
                // If image exists, create an img element
                const img = document.createElement('img');
                img.src = imgSrc;
                img.alt = sm;
                img.id = `${sm}-logo`;
                img.classList.add("small-logo");

                anchor.appendChild(img);
            } else {
                anchor.textContent = sm;
            }

            anchor.classList.add("social-media-link");
            anchor.href = link;
            anchor.id = sm;
            anchor.target = "_blank";
        });

    return anchor;
};

// Function to add social media links to the profile
const addSocialMediaLinks = (data) => {
    const socialMediaContainer = document.querySelector('#social-media');

    // Clear the existing social media links
    socialMediaContainer.innerHTML = '';

    for (const sm in data.profile.socialMedia) {
        const link = data.profile.socialMedia[sm];
        const anchor = createSocialMediaLink(sm, link);

        // Add the anchor to the social media container
        socialMediaContainer.appendChild(anchor);
    }
};

/**
 * Populates the profile section of the page with data.
 *
 * This function calls several smaller functions to set the profile details,
 * set the email, and add the social media links. The smaller functions are
 * responsible for creating and adding the necessary elements to the DOM.
 *
 * @param {Object} data - The data to populate the profile with. This should
 *     be an object with properties for the profile image, name, email, and
 *     social media links.
 */
const populateProfile = (data) => {
    setProfileDetails(data);
    setEmail(data);
    addSocialMediaLinks(data);
};

const populateCurriculum = (data, curriculum) => {
    // Populate Curriculum
    document.querySelector('#presentation-title').textContent = data.curricula[curriculum].presentationText.title;
    document.querySelector('#presentation-text').textContent = data.curricula[curriculum].presentationText.text;
    const lastUpdated = new Date(data.curricula[curriculum].lastUpdated);
    document.querySelector('#last-updated').textContent = "Curriculum Last Updated on: " + lastUpdated.toLocaleDateString() + " " + lastUpdated.toLocaleTimeString();
  };


  fetch('data/content.json')
  .then(response => response.json())
  .then(data => {
    populateSelectOptions(data);
    populateProfile(data);
    document.querySelector('#curriculum-select').addEventListener('change', function() {
      populateCurriculum(data, this.value);
    });
  });
  