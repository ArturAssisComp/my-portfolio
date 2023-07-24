/*----------------------------------------------------------------------------*/
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

/*----------------------------------------------------------------------------*/
//Populate the profile section of the page with data
// Function to set the profile image and name
const setProfileDetails = (data) => {
    document.title = data.profile.title;
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
/*----------------------------------------------------------------------------*/
function monthsBetween(date1, date2) {
        if (date1 > date2) {
            throw new Error("First date must be earlier than the second date");
        }
    
        let months = (date2.getFullYear() - date1.getFullYear()) * 12;
        months -= date1.getMonth();
        months += date2.getMonth();
        return (months <= 0) ? 0 : months;
    }

// Helper function to calculate experience duration
function calculateExperienceDuration(experience) {
    let startDate, endDate;
    try {
        startDate = new Date(experience.startDate);
        if (isNaN(startDate.getTime())) {
            throw new Error("Invalid start date");
        }
    } catch (error) {
        console.error(error);
        return; 
    }

    try {
        if (experience.endDate) {
            endDate = new Date(experience.endDate);
            if (isNaN(endDate.getTime())) {
                throw new Error("Invalid end date");
            }
        } else {
            endDate = new Date();
        }
    } catch (error) {
        console.error(error);
        return; 
    }

    const totalDurationInMonths = monthsBetween(startDate, endDate);
    const durationInYears = Math.floor(totalDurationInMonths / 12);
    const durationInMonths = totalDurationInMonths % 12;

    return { durationInYears, durationInMonths, startDate, endDate };
}

// Helper function to create project list
function createProjectList(experience, experienceContainer) {
    const projectsTitle = document.createElement('h3');
    projectsTitle.textContent = "Projects";
    experienceContainer.appendChild(projectsTitle);

    experience.projects.forEach(project => {
        const projectContainer = document.createElement('div');
        projectContainer.classList.add("section-container");

        // Add project name
        const projectName = document.createElement('h4');
        projectName.textContent = project.name;
        projectContainer.appendChild(projectName);

        // Check if duration exists
        if (project.duration) {
            const projectDuration = document.createElement('p');
            projectDuration.textContent = "Duration: " + project.duration + " months";
            projectContainer.appendChild(projectDuration);
        }

        // Add project description
        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description;
        projectContainer.appendChild(projectDescription);

        // Check if responsibilities exist
        if (project.responsibilities && project.responsibilities.length > 0) {
            const responsibilitiesTitle = document.createElement('h5');
            responsibilitiesTitle.textContent = "Responsibilities";
            projectContainer.appendChild(responsibilitiesTitle);

            const responsibilitiesList = document.createElement('ul');
            project.responsibilities.forEach(responsibility => {
                const responsibilityItem = document.createElement('li');
                responsibilityItem.textContent = responsibility;
                responsibilitiesList.appendChild(responsibilityItem);
            });
            projectContainer.appendChild(responsibilitiesList);
        }

        // Check if achievements exist
        if (project.achievements && project.achievements.length > 0) {
            const achievementsTitle = document.createElement('h5');
            achievementsTitle.textContent = "Achievements";
            projectContainer.appendChild(achievementsTitle);

            const achievementsList = document.createElement('ul');
            project.achievements.forEach(achievement => {
                const achievementItem = document.createElement('li');
                achievementItem.textContent = achievement;
                achievementsList.appendChild(achievementItem);
            });
            projectContainer.appendChild(achievementsList);
        }

        // Check if skills used exist
        if (project.skillsUsed && project.skillsUsed.length > 0) {
            const skillsUsedTitle = document.createElement('h5');
            skillsUsedTitle.textContent = "Skills Used";
            projectContainer.appendChild(skillsUsedTitle);

            const skillsUsedList = document.createElement('ul');
            project.skillsUsed.forEach(skill => {
                const skillItem = document.createElement('li');
                skillItem.textContent = skill;
                skillsUsedList.appendChild(skillItem);
            });
            projectContainer.appendChild(skillsUsedList);
        }

        // Add project item to project list
        experienceContainer.appendChild(projectContainer);
    });
}


const populateProfessionalExperience = (data, curriculum) => {
    // Populate Professional Experience
    const professionalExperience = data.curricula[curriculum].professionalExperience;
    const professionalExperienceContainer = document.querySelector('#professional-experience');
    professionalExperienceContainer.innerHTML = '';
    if (professionalExperience && professionalExperience.length > 0) {
        // Add H1 for Professional Experience
        const professionalExperienceTitle = document.createElement('h1');
        professionalExperienceTitle.textContent = "Professional Experience";
        professionalExperienceContainer.appendChild(professionalExperienceTitle);

        // Add Professional Experience
        professionalExperience.forEach(experience => {
                const experienceContainer = document.createElement('div');
                experienceContainer.classList.add("section-container");
                experienceContainer.classList.add("experience");
                

                const experienceTitle = document.createElement('h2');

                const companyString = experience.company ? (" at " + experience.company) : "";


                const { durationInYears, durationInMonths, startDate, endDate } = calculateExperienceDuration(experience);

                const monthString = (durationInMonths > 0) ? ((durationInMonths + " ") + ((durationInMonths > 1) ? "months":"month")):"";
                const yearString = (durationInYears > 0) ? (durationInYears + " " + ((durationInYears>1)?"years":"year") + ((durationInMonths > 0)?" and ":"")):("");
                const durationString = " for " + yearString + monthString;


                // given the duration, calculate the number of years and months
                experienceTitle.textContent = (experience.seniority ? (experience.seniority + " "):"") + experience.role + companyString + durationString;
                experienceContainer.appendChild(experienceTitle);

                // Add the start and end dates
                const experienceDates = document.createElement('p');
                experienceDates.textContent = startDate.toLocaleDateString() + " - " + endDate.toLocaleDateString();
                experienceContainer.appendChild(experienceDates);


                // Add the description
                if (experience.description) {
                    const experienceDescription = document.createElement('p');
                    experienceDescription.textContent = experience.description;
                    experienceContainer.appendChild(experienceDescription);
                }

                // Add projects
                if (experience.projects && experience.projects.length > 0) {
                    createProjectList(experience, experienceContainer);
                }
                professionalExperienceContainer.appendChild(experienceContainer);
            }
        );
    }
};


function populatePapers(data, curriculum) {
    const papersContainer = document.querySelector('#papers');
    papersContainer.innerHTML = '';
    const papers = data.curricula[curriculum].papers;

    if (papers && papers.length > 0){
        const papersTitle = document.createElement('h1');
        papersTitle.textContent = "Papers";
        papersContainer.appendChild(papersTitle);

        papers.forEach((paper) => {
            if (!paper.title || !paper.authors) {
                throw new Error(`Missing mandatory fields in paper: ${paper.title || 'Unnamed Paper'}`);
            }

            const paperContainer = document.createElement('div');
            paperContainer.classList.add('section-container');

            // Mandatory fields
            const paperTitle = document.createElement('h2');
            paperTitle.textContent = paper.title;
            paperContainer.appendChild(paperTitle);

            if (paper.video_documentation_link) {
                const paperVideo = document.createElement('iframe');
                paperVideo.src = paper.video_documentation_link;
                paperVideo.setAttribute('width', '560');
                paperVideo.setAttribute('height', '315');
                paperVideo.setAttribute('title', 'YouTube video player');
                paperVideo.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
                paperVideo.setAttribute('frameborder', '0');
                paperVideo.setAttribute('allowfullscreen', '');
                paperContainer.appendChild(paperVideo);
            }

            if (paper.description) {
                const paperDescription = document.createElement('p');
                paperDescription.textContent = paper.description;
                paperContainer.appendChild(paperDescription);
            }

            const paperCitation = document.createElement('p');
            paperCitation.textContent = `${paper.authors.join(', ')} . ${paper.title}.`;

            if (paper.journal) paperCitation.textContent += ` ${paper.journal},`;
            if (paper.volume) paperCitation.textContent += ` v. ${paper.volume},`;
            if (paper.number) paperCitation.textContent += ` n. ${paper.number},`;
            if (paper.pages) paperCitation.textContent += ` p. ${paper.pages},`;
            if (paper.year) paperCitation.textContent += ` ${paper.year}.`;

            paperContainer.appendChild(paperCitation);

            if (paper.doi) {
                const paperDoi = document.createElement('a');
                paperDoi.href = paper.doi;
                paperDoi.textContent = "DOI";
                paperDoi.target = '_blank';
                paperDoi.classList.add('social-media-link');
                paperContainer.appendChild(paperDoi);
            }

            if (paper.download_link) {
                const paperDownloadLink = document.createElement('a');
                paperDownloadLink.href = paper.download_link;
                const img = document.createElement('img');
                img.src = "images/icons/download_icon.png";
                img.alt = "Download";
                img.id = `download-logo-${paper.title}`;
                img.classList.add("small-logo");
                paperDownloadLink.appendChild(img);
                paperDownloadLink.target = '_blank';
                paperDownloadLink.classList.add('social-media-link');
                paperContainer.appendChild(paperDownloadLink);
            }

            papersContainer.appendChild(paperContainer);
        });

    }
};


function populateEducation(data, curriculum) {
    const educationContainer = document.querySelector('#education');
    educationContainer.innerHTML = '';
    const educationAchievements = data.curricula[curriculum].education;

    if (educationAchievements && educationAchievements.length > 0){
        const educationTitle = document.createElement('h1');
        educationTitle.textContent = "Education";
        educationContainer.appendChild(educationTitle);
        educationAchievements.forEach((educationAchievement) => {
            if (!educationAchievement.level || !educationAchievement.startYear || !educationAchievement.institution || !educationAchievement.endYear) {
                throw new Error(`Missing mandatory fields in education: ${educationAchievement.level || 'Unnamed Level'} ${educationAchievement.startYear || 'Unnamed Start Year'} ${educationAchievement.institution || 'Unnamed Institution'} ${educationAchievement.endDate || 'Unnamed End Date'}`);
            }
            // Check if endYear is less than current year
            if (educationAchievement.endYear < educationAchievement.startYear) {
                throw new Error(`End year is less than start year in education: `);
            }

            const educationAchievementContainer = document.createElement('div');
            educationAchievementContainer.classList.add('section-container');


            var titleString = educationAchievement.level;
            if (educationAchievement.field) {
                titleString += ` in ${educationAchievement.field}`;
            }

            titleString += ` on ${educationAchievement.institution}`;

            const title = document.createElement('h2');
            title.textContent = titleString;
            educationAchievementContainer.appendChild(title);

            var startEndString = educationAchievement.startYear;
            // check if endYear is greater than current year
            if (educationAchievement.endYear > new Date().getFullYear()) {
                startEndString += ` - Not Completed Yet (Expected ${educationAchievement.endYear})` ;
            } else {
                startEndString += ` - ${educationAchievement.endYear}`;
            }

            const startEnd = document.createElement('p');
            startEnd.textContent = startEndString;
            educationAchievementContainer.appendChild(startEnd);

            const educationInstitution = document.createElement('p');
            educationInstitution.textContent = educationAchievement.institution;
            educationAchievementContainer.appendChild(educationInstitution);


            if (educationAchievement.major) {
                const major = document.createElement('p');
                major.textContent = `Major: ${educationAchievement.major}`;
                educationAchievementContainer.appendChild(major);
            }

            if (educationAchievement.minor) {
                const minor = document.createElement('p');
                minor.textContent = `Minor: ${educationAchievement.minor}`;
                educationAchievementContainer.appendChild(minor);
            }

            if (educationAchievement.relevant_courses) {
                const relevantCoursesTitle = document.createElement('h3');
                relevantCoursesTitle.textContent = 'Relevant Courses:';
                educationAchievementContainer.appendChild(relevantCoursesTitle);
                const relevantCourses = document.createElement('ul');
                educationAchievement.relevant_courses.forEach((course) => {
                    const li = document.createElement('li');
                    li.textContent = course;
                    relevantCourses.appendChild(li);
                });
                educationAchievementContainer.appendChild(relevantCourses);
            }

            if (educationAchievement.academic_achievements) {
                const academicAchievementsTitle = document.createElement('h3');
                academicAchievementsTitle.textContent = 'Academic Achievements:';
                educationAchievementContainer.appendChild(academicAchievementsTitle);
                const academicAchievements = document.createElement('ul');
                educationAchievement.academic_achievements.forEach((achievement) => {
                    const li = document.createElement('li');
                    li.textContent = achievement;
                    academicAchievements.appendChild(li);
                });
                educationAchievementContainer.appendChild(academicAchievements);
            }

            if (educationAchievement.link_for_institution) {
                const institutionLink = document.createElement('a');
                institutionLink.href = educationAchievement.link_for_institution;
                const img = document.createElement('img');
                img.src = "images/icons/university_icon.png";
                img.alt = "${educationAchievement.institution} Website";
                img.id = `institution-logo-${educationAchievement.institution}`;
                img.classList.add("small-logo");
                institutionLink.appendChild(img);
                institutionLink.target = '_blank';
                institutionLink.classList.add('social-media-link');
                educationAchievementContainer.appendChild(institutionLink);
            }

            educationContainer.appendChild(educationAchievementContainer);
        });
    }
}



const populateCurriculum = (data, curriculum) => {
    // Populate Curriculum
    document.querySelector('#presentation-title').textContent = data.curricula[curriculum].presentationText.title;
    document.querySelector('#presentation-text').textContent = data.curricula[curriculum].presentationText.text;
    const lastUpdated = new Date(data.curricula[curriculum].lastUpdated);
    document.querySelector('#last-updated').textContent = "Curriculum Last Updated on: " + lastUpdated.toLocaleDateString() + " " + lastUpdated.toLocaleTimeString();

    // Populate Professional Experience
    populateProfessionalExperience(data, curriculum);

    // Populate Education
    populateEducation(data, curriculum);

    // Populate Papers
    populatePapers(data, curriculum);

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
  


