/*----------------------------------------------------------------------------*/
const populateSelectOptions = (data) => {
    const select = document.getElementById('curriculum-select');
    
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
    document.getElementById('profile-image').src = data.profile.image;
    document.getElementById('name').textContent = data.profile.name;
};

// Function to set the email, or hide the email element if there's no email
const setEmail = (data) => {
    const emailElement = document.getElementById('email');

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
    const socialMediaContainer = document.getElementById('social-media');

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

function _createTitleH1WithBackToTop(title){

    const container = document.createElement('div');
    const titleH1 = document.createElement('h1');
    const backToTop = document.createElement('a');
    backToTop.href = "#table-of-contents";
    const backToTopImg = document.createElement('img');
    backToTopImg.src = "images/icons/back_to_top_icon.png";
    backToTopImg.alt = "Back to Top";
    backToTopImg.id = "back-to-top-logo";
    backToTopImg.style.width = "25px";
    backToTopImg.style.marginLeft = "10px";

    backToTop.appendChild(backToTopImg);

    titleH1.textContent = title;
    container.appendChild(titleH1);
    container.appendChild(backToTop);
    container.style.display = "flex";
    container.style.alignItems = "center";

    return container;
}

const populateProfessionalExperience = (data, curriculum) => {
    // Populate Professional Experience
    const professionalExperience = data.curricula[curriculum].professionalExperience;
    const professionalExperienceContainer = document.getElementById('professional-experience');
    professionalExperienceContainer.innerHTML = '';
    if (professionalExperience && professionalExperience.length > 0) {
        // Add H1 for Professional Experience
        professionalExperienceContainer.appendChild(_createTitleH1WithBackToTop("Professional Experience"));

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
    const papersContainer = document.getElementById('papers');
    papersContainer.innerHTML = '';
    const papers = data.curricula[curriculum].papers;

    if (papers && papers.length > 0){
        papersContainer.appendChild(_createTitleH1WithBackToTop("Papers"));

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
    const educationContainer = document.getElementById('education');
    educationContainer.innerHTML = '';
    const educationAchievements = data.curricula[curriculum].education;

    if (educationAchievements && educationAchievements.length > 0){
        educationContainer.appendChild(_createTitleH1WithBackToTop("Education"));
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


function populateAchievementCourse(achievement, achievementsContainer) {
    const achievementContainer = document.createElement('div');
    achievementContainer.classList.add('section-container');

    // Check for the mandatory fields
    if (!achievement.title || !achievement.finishedDate || !achievement.description) {
        throw new Error(`Missing mandatory fields in course: ${achievement.title || 'Unnamed Course'} ${achievement.finishedDate || 'Unnamed Finished Date'} ${achievement.description || 'Unnamed Description'}`);
    }

    // Create the title
    const courseTitle = document.createElement('h2');
    // Title "Course: <course name> at <institution>"
    var titleString = "Course \"" + achievement.title + "\"";
    if (achievement.institution) {
        titleString += " at " + achievement.institution;
    }
    courseTitle.textContent = titleString;

    achievementContainer.appendChild(courseTitle);

    // Add the finished date and the duration
    const finishedDate = document.createElement('p');
    finishedDate.textContent = "Finished on " + new Date(achievement.finishedDate).toLocaleDateString();
    achievementContainer.appendChild(finishedDate);
    if (achievement.duration) {
        const duration = document.createElement('p');
        duration.textContent = "Duration: " + achievement.duration + " months";
        achievementContainer.appendChild(duration);
    }

    // Add description:
    const description = document.createElement('p');
    description.textContent = achievement.description;
    achievementContainer.appendChild(description);

    // Add skills learned:
    if (achievement.skillsLearned && achievement.skillsLearned.length > 0) {
        const skillsLearnedTitle = document.createElement('h3');
        skillsLearnedTitle.textContent = "Skills Learned";
        achievementContainer.appendChild(skillsLearnedTitle);

        const skillsLearnedList = document.createElement('ul');
        achievement.skillsLearned.forEach(skill => {
            const skillItem = document.createElement('li');
            skillItem.textContent = skill;
            skillsLearnedList.appendChild(skillItem);
        });
        achievementContainer.appendChild(skillsLearnedList);
    }

    // Add course link and project link:
    if(achievement.courseLink){
        const courseLink = document.createElement('a');
        courseLink.href = achievement.courseLink;
        courseLink.textContent = "Course";
        courseLink.target = '_blank';
        courseLink.classList.add('social-media-link');
        achievementContainer.appendChild(courseLink);
    }
    if (achievement.projectLink) {
        const projectLink = document.createElement('a');
        projectLink.href = achievement.projectLink;
        projectLink.textContent = "Project";
        projectLink.target = '_blank';
        projectLink.classList.add('social-media-link');
        achievementContainer.appendChild(projectLink);
    }
    achievementsContainer.appendChild(achievementContainer);
}

function populateAchievementProgrammingProject(achievement, achievementsContainer) {
    const achievementContainer = document.createElement('div');
    achievementContainer.classList.add('section-container');

    // Check for the mandatory fields
    if (!achievement.title || !achievement.finishedDate || !achievement.description) {
        throw new Error(`Missing mandatory fields in programming project: ${achievement.title || 'Unnamed Programming Project'} ${achievement.finishedDate || 'Unnamed Finished Date'} ${achievement.description || 'Unnamed Description'}`);
    }

    // Create the title
    const programmingProjectTitle = document.createElement('h2');
    programmingProjectTitle.textContent = "Programming Project \"" + achievement.title + "\"";

    achievementContainer.appendChild(programmingProjectTitle);

    // Add the emdedded video documentation
    if (achievement.videoDocumentationLink) {
        const videoDocumentation = document.createElement('iframe');
        videoDocumentation.src = achievement.videoDocumentationLink;
        videoDocumentation.setAttribute('width', '560');
        videoDocumentation.setAttribute('height', '315');
        videoDocumentation.setAttribute('title', 'YouTube video player');
        videoDocumentation.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
        videoDocumentation.setAttribute('frameborder', '0');
        videoDocumentation.setAttribute('allowfullscreen', '');
        achievementContainer.appendChild(videoDocumentation);
    }

    // Add the finished date and the duration
    const finishedDate = document.createElement('p');
    finishedDate.textContent = "Finished on " + new Date(achievement.finishedDate).toLocaleDateString();
    achievementContainer.appendChild(finishedDate);
    if (achievement.duration) {
        const duration = document.createElement('p');
        duration.textContent = "Duration: " + achievement.duration + " months";
        achievementContainer.appendChild(duration);
    }

    // Add description:
    const description = document.createElement('p');
    description.textContent = achievement.description;
    achievementContainer.appendChild(description);

    // Add skills used:
    if (achievement.skillsUsed && achievement.skillsUsed.length > 0) {
        const skillsUsedTitle = document.createElement('h3');
        skillsUsedTitle.textContent = "Skills Used";
        achievementContainer.appendChild(skillsUsedTitle);

        const skillsUsedList = document.createElement('ul');
        achievement.skillsUsed.forEach(skill => {
            const skillItem = document.createElement('li');
            skillItem.textContent = skill;
            skillsUsedList.appendChild(skillItem);
        });
        achievementContainer.appendChild(skillsUsedList);
    }

    // Add project link:
    if (achievement.workingProjectLink) {
        const projectLink = document.createElement('a');
        projectLink.href = achievement.workingProjectLink;
        projectLink.textContent = "Project";
        projectLink.target = '_blank';
        projectLink.classList.add('social-media-link');
        achievementContainer.appendChild(projectLink);
    }

    // Add repository link
    if (achievement.repositoryLink) {
        const repositoryLink = document.createElement('a');
        repositoryLink.href = achievement.repositoryLink;
        const repositoryLogo = document.createElement('img');
        repositoryLogo.src = "images/icons/github_icon.png";
        repositoryLogo.alt = "Repository";
        repositoryLogo.id = `repository-logo-${achievement.title}`;
        repositoryLogo.classList.add("small-logo");
        repositoryLink.appendChild(repositoryLogo);
        repositoryLink.target = '_blank';
        repositoryLink.classList.add('social-media-link');
        achievementContainer.appendChild(repositoryLink);
    }

    achievementsContainer.appendChild(achievementContainer);
}

function populateAchievementPersonalProject(achievement, achievementsContainer) {
    const achievementContainer = document.createElement('div');
    achievementContainer.classList.add('section-container');

    // Check for the mandatory fields
    if (!achievement.title || !achievement.finishedDate || !achievement.description) {
        throw new Error(`Missing mandatory fields in personal project: ${achievement.title || 'Unnamed personal Project'} ${achievement.finishedDate || 'Unnamed Finished Date'} ${achievement.description || 'Unnamed Description'}`);
    }

    // Create the title
    const personalProjectTitle = document.createElement('h2');
    personalProjectTitle.textContent = "Personal Project \"" + achievement.title + "\"";

    achievementContainer.appendChild(personalProjectTitle);

    // Add the emdedded video documentation
    if (achievement.videoDocumentationLink) {
        const videoDocumentation = document.createElement('iframe');
        videoDocumentation.src = achievement.videoDocumentationLink;
        videoDocumentation.setAttribute('width', '560');
        videoDocumentation.setAttribute('height', '315');
        videoDocumentation.setAttribute('title', 'YouTube video player');
        videoDocumentation.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
        videoDocumentation.setAttribute('frameborder', '0');
        videoDocumentation.setAttribute('allowfullscreen', '');
        achievementContainer.appendChild(videoDocumentation);
    }

    // Add the finished date and the duration
    const finishedDate = document.createElement('p');
    finishedDate.textContent = "Finished on " + new Date(achievement.finishedDate).toLocaleDateString();
    achievementContainer.appendChild(finishedDate);
    if (achievement.duration) {
        const duration = document.createElement('p');
        duration.textContent = "Duration: " + achievement.duration + " months";
        achievementContainer.appendChild(duration);
    }

    // Add description:
    const description = document.createElement('p');
    description.textContent = achievement.description;
    achievementContainer.appendChild(description);

    // Add skills used:
    if (achievement.skillsUsed && achievement.skillsUsed.length > 0) {
        const skillsUsedTitle = document.createElement('h3');
        skillsUsedTitle.textContent = "Skills Used";
        achievementContainer.appendChild(skillsUsedTitle);

        const skillsUsedList = document.createElement('ul');
        achievement.skillsUsed.forEach(skill => {
            const skillItem = document.createElement('li');
            skillItem.textContent = skill;
            skillsUsedList.appendChild(skillItem);
        });
        achievementContainer.appendChild(skillsUsedList);
    }

    // Add project link:
    if (achievement.workingProjectLink) {
        const projectLink = document.createElement('a');
        projectLink.href = achievement.workingProjectLink;
        projectLink.textContent = "Project";
        projectLink.target = '_blank';
        projectLink.classList.add('social-media-link');
        achievementContainer.appendChild(projectLink);
    }

    achievementsContainer.appendChild(achievementContainer);
}

function populateAchievementCertification(achievement, achievementsContainer) {
    const achievementContainer = document.createElement('div');
    achievementContainer.classList.add('section-container');

    // Check for the mandatory fields
    if (!achievement.title || !achievement.finishedDate || !achievement.description || !achievement.institution) {
        throw new Error(`Missing mandatory fields in certification: ${achievement.title || 'Unnamed Certification'} ${achievement.finishedDate || 'Unnamed Finished Date'} ${achievement.description || 'Unnamed Description'}`);
    }

    // Create the title
    const certificationTitle = document.createElement('h2');
    certificationTitle.textContent = "Certification \"" + achievement.title + "\" on " + achievement.institution;

    achievementContainer.appendChild(certificationTitle);

    // Add the finished date and the duration
    const finishedDate = document.createElement('p');
    finishedDate.textContent = "Finished on " + new Date(achievement.finishedDate).toLocaleDateString();
    achievementContainer.appendChild(finishedDate);
    if (achievement.duration) {
        const duration = document.createElement('p');
        duration.textContent = "Duration: " + achievement.duration + " months";
        achievementContainer.appendChild(duration);
    }

    // Add description:
    const description = document.createElement('p');
    description.textContent = achievement.description;
    achievementContainer.appendChild(description);

    // Add skills certified:
    if (achievement.skillsCertified && achievement.skillsCertified.length > 0) {
        const skillsCertifiedTitle = document.createElement('h3');
        skillsCertifiedTitle.textContent = "Skills Certified";
        achievementContainer.appendChild(skillsCertifiedTitle);

        const skillsCertifiedList = document.createElement('ul');
        achievement.skillsCertified.forEach(skill => {
            const skillItem = document.createElement('li');
            skillItem.textContent = skill;
            skillsCertifiedList.appendChild(skillItem);
        });
        achievementContainer.appendChild(skillsCertifiedList);
    }

    // Add certification link:
    if (achievement.certificationLink) {
        const certificationLink = document.createElement('a');
        certificationLink.href = achievement.certificationLink;
        certificationLink.textContent = "Certification";
        certificationLink.target = '_blank';
        certificationLink.classList.add('social-media-link');
        achievementContainer.appendChild(certificationLink);
    }

    achievementsContainer.appendChild(achievementContainer);
}




function populateAchievements(data, curriculum) {
    const achievementsContainer = document.getElementById('achievements');
    achievementsContainer.innerHTML = '';
    const achievements = data.curricula[curriculum].achievements;
    if (achievements && achievements.length > 0){
        achievementsContainer.appendChild(_createTitleH1WithBackToTop("Achievements"));
        achievements.forEach((achievement) => {
            switch (achievement.type) {
                case 'course':
                    populateAchievementCourse(achievement, achievementsContainer);
                    break;
                case 'programming-project':
                    populateAchievementProgrammingProject(achievement, achievementsContainer);
                    break;
                case 'personal-project':
                    populateAchievementPersonalProject(achievement, achievementsContainer);
                    break;
                case 'certification':
                    populateAchievementCertification(achievement, achievementsContainer);
                    break;
                default:
                    throw new Error(`Invalid achievement type: ${achievement.type}`);
            }
        });
    }
}

function createSkillElement(skillData, name) {
    const skillElement = document.createElement('li');
    const skillContainer = document.createElement('div');
    const skillName = document.createElement('span');
    skillName.textContent = `${name} (${skillData.level})`;
    skillContainer.appendChild(skillName);

    var containerTitleString = "";
    if (skillData.description) {
        containerTitleString += skillData.description;
    }
    if (skillData.keywords && skillData.keywords.length > 0) {
        containerTitleString += "\n\nKeywords: " + skillData.keywords.join(', ');
    } else if (skillData.frameworks && skillData.frameworks.length > 0){
        containerTitleString += "\n\nFrameworks: " + skillData.frameworks.join(', ');
    }
    skillContainer.title = containerTitleString;

    skillElement.appendChild(skillContainer);
    return skillElement;
}

function populateSkills(data, curriculum) {
    const skillsContainer = document.getElementById('skills');
    skillsContainer.innerHTML = '';
    const skills = data.curricula[curriculum].skills;
    if (skills && Object.keys(skills).length > 0){
        skillsContainer.appendChild(_createTitleH1WithBackToTop("Skills"));

        const technicalSkills = skills.technical;
        const softSkills = skills.soft;

        // create the technical skills section
        const flexContainer = document.createElement('div');
        flexContainer.classList.add('flex-container');
        if (technicalSkills && Object.keys(technicalSkills).length > 0){
            const technicalSkillsContainer = document.createElement('div');
            technicalSkillsContainer.classList.add('section-container');
            const technicalSkillsTitle = document.createElement('h2');
            technicalSkillsTitle.textContent = "Technical";
            technicalSkillsContainer.appendChild(technicalSkillsTitle);

            const list = document.createElement('ul');
            Object.keys(technicalSkills).forEach((name) => {
                // create en unordered list
                list.appendChild(createSkillElement(technicalSkills[name], name));
            });
            technicalSkillsContainer.appendChild(list);
            flexContainer.appendChild(technicalSkillsContainer);
        }

        // create the soft skills section
        if (softSkills && Object.keys(softSkills).length > 0){

            const softSkillsContainer = document.createElement('div');
            softSkillsContainer.classList.add('section-container');
            const softSkillsTitle = document.createElement('h2');
            softSkillsTitle.textContent = "Soft";
            softSkillsContainer.appendChild(softSkillsTitle);

            const list = document.createElement('ul');
            Object.keys(softSkills).forEach((name) => {
                list.appendChild(createSkillElement(softSkills[name], name));
            });
            softSkillsContainer.appendChild(list);
            flexContainer.appendChild(softSkillsContainer);
        }
        skillsContainer.appendChild(flexContainer);

    }
}



function createLanguageElement(languageData) {
    const languageElement = document.createElement('li');
    const languageContainer = document.createElement('div');
    const languageName = document.createElement('span');
    languageName.textContent = `${languageData.language} (${languageData.proficiency})`;
    languageContainer.appendChild(languageName);

    var containerTitleString = "Native: " + (languageData.native?"Yes":"No");
    if (languageData.writing) {
        containerTitleString += "\n\nWriting: " + languageData.writing;
    }
    if (languageData.reading) {
        containerTitleString += "\n\nReading: " + languageData.reading;
    }
    if (languageData.speaking) {
        containerTitleString += "\n\nSpeaking: " + languageData.speaking;
    }
    if (languageData.listening) {
        containerTitleString += "\n\nListening: " + languageData.listening;
    }
    if (languageData.certifications && languageData.certifications.length > 0) {
        containerTitleString += "\n\nCertifications: ";
        languageData.certifications.forEach((certification) => {
            containerTitleString += "\n" + certification.name + " - " + certification.score + " - " + certification.date_received;
        });
    }
    languageContainer.title = containerTitleString;

    languageElement.appendChild(languageContainer);
    return languageElement;
}
    

function populateLanguages(data, curriculum) {
    const languagesContainer = document.getElementById('languages');
    languagesContainer.innerHTML = '';
    const languages = data.curricula[curriculum].languages;

    if (languages && languages.length > 0){
        languagesContainer.appendChild(_createTitleH1WithBackToTop("Languages"));

        const list = document.createElement('ul');
        languages.forEach((language) => {
            if(!language.language || !language.proficiency){
                throw new Error(`Missing mandatory fields in language: ${language.language || 'Unnamed Language'} ${language.proficiency || 'Unnamed Proficiency'}`);
            }

            list.appendChild(createLanguageElement(language));



        });
        languagesContainer.appendChild(list);

    }
}

var _id = 0;
function _generateUniqueId(){
    return "__unique_preffix" + _id++;

}
function setSubItems(parentElement, currentTableItem, level) {
    const subItems = [];
    if (level > 3){
        return;
    }
    const children = parentElement.children;
    // check if it is a heading element
    const headingElement = 'h2';
    for (var i = 0; i < children.length; i++){
        if (children[i].tagName.toLowerCase() === 'div') {
            const childrenOfDiv = children[i].querySelectorAll(headingElement);
            
            childrenOfDiv.forEach(childOfDiv => {

                // Create an id for the sub-item:
                childOfDiv.id = _generateUniqueId();
                subItems.push({
                    title: childOfDiv.textContent,
                    id: childOfDiv.id
                });
            });
        }

    }

    if (subItems.length > 0) {
        const subItemList = document.createElement('ul');
        subItems.forEach(subItem => {
            const subListItem = document.createElement('li');
            const subItemLink = document.createElement('a');
            subItemLink.href = '#' + subItem.id;
            subItemLink.textContent = subItem.title;
            subListItem.appendChild(subItemLink);
            subItemList.appendChild(subListItem);
        });
        currentTableItem.appendChild(subItemList);
    }
}
        
// Function to create table of contents
function populateTableOfContents() {
    // Define the sections that will appear in the table of contents.
    const sections = [
        {id: 'professional-experience', name: 'Professional Experience'},
        {id: 'skills', name: 'Skills'},
        {id: 'education', name: 'Education'},
        {id: 'languages', name: 'Languages'},
        {id: 'papers', name: 'Papers'},
        {id: 'achievements', name: 'Achievements'}
    ];

    // Get the list element that will contain the table of contents.
    const tableOfContentsList = document.getElementById('table-of-contents-list');
    tableOfContentsList.innerHTML = '';

    // For each section, create a list item with a link to the section.
    sections.forEach(section => {
        // check if the section.id is empty:
        const sectionElement = document.getElementById(section.id);
        if (sectionElement.textContent.trim() !== '') {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = '#' + section.id;
            link.textContent = section.name;
            listItem.appendChild(link);
            tableOfContentsList.appendChild(listItem);

            setSubItems(sectionElement, listItem, 2);
        }
    });
}



const populateCurriculum = (data, curriculum) => {
    // Populate Curriculum
    document.getElementById('presentation-title').textContent = data.curricula[curriculum].presentationText.title;
    document.getElementById('presentation-text').textContent = data.curricula[curriculum].presentationText.text;
    const lastUpdated = new Date(data.curricula[curriculum].lastUpdated);
    document.getElementById('last-updated').textContent = "Curriculum Last Updated on: " + lastUpdated.toLocaleDateString() + " " + lastUpdated.toLocaleTimeString();

    // Populate Professional Experience
    populateProfessionalExperience(data, curriculum);

    // Populate Skills
    populateSkills(data, curriculum);

    // Populate Education
    populateEducation(data, curriculum);

    // Populate Languages
    populateLanguages(data, curriculum);

    // Populate Papers
    populatePapers(data, curriculum);

    // Populate Achievements
    populateAchievements(data, curriculum);

    // Populate table of contents
    populateTableOfContents();

  };


  fetch('data/content.json')
  .then(response => response.json())
  .then(data => {
    populateSelectOptions(data);
    populateProfile(data);
    document.getElementById('curriculum-select').addEventListener('change', function() {
      populateCurriculum(data, this.value);
    });
  });
  


