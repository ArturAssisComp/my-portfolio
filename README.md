
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->

<a id="readme-top"></a>

<br />
<div align="center">
  <a href="https://github.com/ArturAssisComp/my-portfolio.git">
  </a>

  <h3 align="center">My Portfolio</h3>

  <p align="center">
    A template for a resume parsed from JSON.
    <br />
    <a href="#documentation"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/ArturAssisComp/my-portfolio/issues">Report Bug</a>
    ·
    <a href="https://github.com/ArturAssisComp/my-portfolio/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#description">Description</a></li>
    <li><a href="#how-is-a-contribution-made">How to contribute</a></li>
    <li><a href="#requirements">Requirements</a></li>
    <li>
      <a href="#how-to-use-my-portfolio">Using my-portfolio</a>
      <ul>
        <li><a href="#example-of-usage">Example</a></li>
      </ul>
    </li>
    <li>
      <a href="#documentation">Documentation</a>
      <ul>
	<details>
          <summary>index</summary>
          <li><a href="#overview">Overview</a></li>
          <li><a href="#resume-json-structure">JSON Structure</a>
            <ul>
                <li><a href="#profile">Profile</a></li>
                <li>
                    <a href="#curricula">Curricula</a>
                    <ul>
                        <li><a href="#professional-experience">Professional Experience</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#education">Education</a></li>
                        <li><a href="#languages">Languages</a></li>
                        <li><a href="#papers">Papers</a></li>
                        <li>
                            <a href="#achievements">Achievements</a>
                            <ul>
                                <li><a href="#course">Course</a></li>
                                <li><a href="#programming-project">Programming Project</a></li>
                                <li><a href="#personal-project">Personal Project</a></li>
                                <li><a href="#certification">Certification</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
          </li>
	</details>
      </ul>
    </li>
  </ol>
</details>



<p align="right">(<a href="#readme-top">back to top</a>)</p>






# Description 

This project helps to solve the problems that come with dealing with many different 
resumes and the trouble with storing and showing them. We use a JSON format for 
the resume data, making it simple to handle and change while offering a clear 
and effective way to show the resume in an HTML format.

Key Features:

1. **Simplicity**: Our design focuses on simplicity and easy use. You can quickly 
set up the project using GitHub, which means you can start using it with no trouble.

2. **Customizability**: Our template lets you create a unique resume by just 
editing a JSON file. This approach makes it quick and easy to make changes, 
getting rid of the hard work usually linked with resume creation.

3. **Structured Data**: The project encourages the use of a JSON structured file 
for showing curricula. This makes the data easier to read and helps with managing 
and combining data.

4. **Decoupling of Storage and Visualization**: We separate storing the resume 
data from showing it. This split offers a flexible solution that can be changed 
to meet different user needs.

5. **User-friendly Visualization**: We change JSON data into a nice looking and 
easy-to-read HTML webpage. This change makes it better for the user, offering a 
more easy to understand and attractive way to show the resume.



<p align="right">(<a href="#readme-top">back to top</a>)</p>

# How is a contribution made?

1. Create a branch from an issue;
2. Clone the repository: 
```bash
git clone  https://github.com/ArturAssisComp/my-portfolio.git
```
3. Change to the desired branch: 
```bash
cd my-portfolio 
git checkout <branch-name>
```
4. For each meaningful change, make a commit;

-> Fist, add the files that were changed: 
```bash
git add <filename1> <filename2> ... <filenameN>
```
-> Commit the changes: 
```bash
git commit -m "Implemented function foo()"
```
5. Push the changes: 
```bash
git push origin <name-of-the-branch>
```
6. If more changes are necessary, go to 4. Else,
   go to 7;
7. Create a pull request and assign someone to review the changes
   that were made in the branch;

=> Other useful commands:

Check the history of commits
```bash
git log
```
Check the status of the repository
```bash
git status
```
Get changes from remote repository from branch master
```bash
git pull origin <master-branch-name>
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

# Requirements


In order to use this portfolio template project, you will need:

1. **Web Browser**: A modern web browser (tested on Google Chrome and Microsoft 
Edge) that is capable of displaying HTML, CSS, and JavaScript properly.

2. **JSON Resume Data**: You will need to provide your resume data in JSON format. 
This data will be used to dynamically populate your portfolio page. Please adhere 
to the structure specified in the 'documentation' section.

3. **Server (Optional)**: Although not strictly required for local use, if you 
want to host your portfolio online, you'll need a server. This could be a 
traditional web server, a serverless platform, or a hosting service like GitHub 
Pages. This readme will teach you how to host your portfolio on GitHub Pages and
locally using python.

4. **Basic knowledge of HTML/CSS/JavaScript (optional) **: This is not required 
for basic usage, but if you want to customize the template beyond changing the 
JSON data, some understanding of these technologies will be needed.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

# How to use my portfolio


Follow these simple steps to use this portfolio:

1. **Clone or Download the Repository**: The first step is to get a copy of the 
project. You can do this by cloning the repository using Git or downloading it 
directly from GitHub.

```bash
git clone https://github.com/ArturAssisComp/my-portfolio.git
```

2. **Provide Your Resume Data**: Navigate to the `templates` directory in the project 
structure. You will find a `template.json` file. Make a copy of this file and 
rename it to `content.json`. This file will contain your resume data. Edit the
file and replace the sample data/content.json with your own templates/content.json.
The following commands may help you to do this:

```bash
cd my-portfolio/templates
cp template.json content.json
```
Now, edit the content.json that you already copied.

```bash
cp content.json ../data/content.json
```

3. **Customize the Styles (Optional)**: If you want to change the look and feel 
of the portfolio, you can edit the `styles.css` file located in the `css` directory.

4. **Open the HTML File**: Navigate back to the root directory of the project, 
and open the `index.html` file in your web browser. You should be able to see 
your portfolio with the data you provided.

5. **Upload to a Server (Optional)**: If you want to host your portfolio online, 
upload the entire project directory to your server. If you're using GitHub Pages, 
you can simply push the project to a suitable GitHub repository.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Example of usage

For this example, we will use the python server. Copy the content of the following
JSON file to the file `content.json` in the directory `data`:

```json
{
    "profile": {
        "title": "Simple Example - Resume",
        "name": "John",
        "email": "your.email@example.com",
        "image": "images/profile_photo.png",
        "socialMedia":{
            "facebook": "https://www.facebook.com/"
        }
    },
    "curricula":{
        "Main Curriculum":{
            "lastUpdated": "2023-07-25T07:58:00Z",
            "presentationText": {
                "title": "Main Curriculum",
                "text": "This is the main curriculum of John."
            },
            "professionalExperience": [
                {
                    "role": "Junior Developer",
                    "company": "Company ABC",
                    "startDate": "2016-01-01",
                    "endDate": "2018-06-30",
                    "description": "Assisted in building and testing new features for the company's web application."
                }
            ],
            "languages": [
                {
                  "language": "English",
                  "proficiency": "Native or bilingual proficiency",
                  "certifications": [
                    {
                      "name": "TOEFL iBT",
                      "score": "114",
                      "date_received": "2018",
                      "link": "http://example-link-to-certification.com"
                    }
                  ],
                  "native": true,
                  "writing": "Fluent",
                  "reading": "Fluent",
                  "speaking": "Fluent",
                  "listening": "Fluent"
                },
                {
                  "language": "German",
                  "proficiency": "Elementary proficiency",
                  "native": false,
                  "writing": "Basic",
                  "reading": "Basic",
                  "speaking": "Basic",
                  "listening": "Basic"
                }
              ]
        }
    }
}

```

Now, run the following command in the root directory of the project:

```bash
python -m http.server
```

Open the browser and go to the address `localhost:8000`. You should see the
curriculum with the information specified in the JSON file.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



# Documentation

## Overview

The main goal of this project is to make the process of creating a resume or 
curriculum vitae (CV) simple and easy. Instead of manually creating a resume or 
using a template that needs to be filled out, we use JSON (JavaScript Object 
Notation) as the basis for the data structure, and then use JavaScript to 
dynamically generate the HTML structure of the resume.

This document outlines the structure of the JSON data that our portfolio template 
accepts, and details the specific fields and requirements for each section of 
the resume.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Resume JSON Structure

The resume data is structured in JSON format. The main object contains several 
key-value pairs, each corresponding to a section of the resume. The keys are the 
section names, and the values are arrays of objects, each representing a unique 
item or event in that section.

Here's the general structure of the JSON file:

```json
{
    "profile": {...},
    "curricula":{...},
}
```

Each section has a specific format and requirements for its items. On the following
sections, each field of the JSON file will be described using the following structure:
- `key-name` (mandatory or optional, type of the value): Description of the field.
- The field (...) indicates that the field can be repeated.
- When the field should be filled with an arbitrary name, the field is represented
  as `<field-name>`.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Profile

The profile stores data that does not change across different curricula. This
data is used to create the header of the curriculum. The profile is an object
with the following fields:
- `profile` (mandatory, dictionary): The profile of the person.
    - `title` (mandatory, string): The title of the curriculum.
    - `name`  (mandatory, string): The name of the person.
    - `email` (optional, string): The email of the person.
    - `image` (optional, string): The path to the image of the person.
    - `socialMedia` (optional, dictionary): The social media of the person.
        - `<social-media-name>` (optional, string): The link to the social media.	
        - (...)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Curricula

The curricula stores the data of the curricula. The curricula is an object
with the following fields:
- `curricula` (mandatory, dictionary): The set of curricula of the user.
    - `<curriculum-name>` (mandatory, dictionary): The object with information
    related to the specific curriculum.
        - `lastUpdated` (mandatory, string): The date of the last update of the
        curriculum. The format is `YYYY-MM-DDThh:mm:ssZ`.
        - `presentationText` (mandatory, dictionary): The presentation text of
        the curriculum.
            - `title` (mandatory, string): The title of the presentation text.
            - `text` (mandatory, string): The text of the presentation text.
        - `professionalExperience` (optional, list): The list of professional
        experiences of the curriculum.
        - `skills` (optional, list): The list of skills of the curriculum.
        - `education` (optional, list): The list of education of the curriculum.
        - `languages` (optional, list): The list of languages of the curriculum.
        - `papers` (optional, list): The list of papers of the curriculum.
        - `achievements` (optional, list): The list of achievements of the curriculum.
    - (...)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

#### Professional Experience

The "Professional Experience" section should include all relevant professional 
experiences. A professional experience may be defined as any kind of experience
on products or services that are useful for real clients. Each experience is an 
object with the following fields:

- `professionalExperience` (optional, list): The list of professional experiences
    - `role` (mandatory, string): The job title or role.
    - `seniority` (optional, string): The seniority of the job (e.g., Junior, Senior).
    - `company` (optional, string): The name of the company.
    - `startDate` (mandatory, string): The start date of the job. The date format
    must be `YYYY-MM-DD`.
    - `endDate` (optional, string): The end date of the job. The date format
    must be `YYYY-MM-DD`.

    - `description` (optional, string): A short description of the job and responsibilities.
    - `projects` (optional, list): An array of projects completed during this job.
        - (dictionary): The project.
            - `name` (mandatory, string): The name of the project.
            - `duration` (optional, int): The duration of the project in months.
            - `description` (mandatory, string): A short description of the project.
            - `responsibilities` (optional, list): An array of responsibilities for this project.
                - (string): The responsibility.
                - (...)
            - `achievements` (optional, list): An array of achievements for this project.
                - (string): The achievement.
                - (...)
            - `skillsUsed` (optional, list): An array of skills used for this project.
                - (string): The skill.
                - (...)
        - (...)

Example:

```json
{
  "professionalExperience": [
    {
      "role": "Software Engineer",
      "company": "Tech Company Inc",
      "startDate": "2017-05-01",
      "endDate": "2019-06-01",
      "description": "Developed multiple web applications using React.js",
      "projects": [
        {
          "name": "Project 1",
          "duration": 18,
          "description": "Developed a customer facing application.",
          "responsibilities": [
            "Frontend development",
            "Backend API integration"
          ],
          "achievements": [
            "Improved page load times by 20%"
          ],
          "skillsUsed": [
            "React.js",
            "JavaScript"
          ]
        },
        {
          "name": "Project 2",
          "duration": 8,
          "description": "Developed an internal tool for project management.",
          "responsibilities": [
            "Full stack development"
          ],
          "achievements": [
            "Reduced project management overhead by 15%"
          ],
          "skillsUsed": [
            "React.js",
            "Node.js"
          ]
        }
      ]
    }
  ]
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


#### Skills

The "Skills" section should include all relevant skills. Each skill is either 
technical or soft. The technical skills are related to the technical knowledge
like programming languages, frameworks, and tools. The soft skills are related
to the personal skills like communication, leadership, and teamwork. Each skill
is an object with the following fields:

- `skills` (optional, dictionary): The skills of the person.
    - `technical` (optional, list): The list of technical skills.
        - `<skill-name>` (mandatory, dictionary): The skill.
            - `level` (mandatory, string): The level of the skill (e.g., Beginner, Intermediate, Advanced).
            - `description` (optional, string): A short description of the skill.
            - `frameworks` (optional, list): An array of frameworks related to the
            skill.
                - (string): The framework.
                - (...)
        - (...)
    - `soft` (optional, list): The list of soft skills.
        - `<skill-name>` (mandatory, dictionary): The skill.
            - `level` (mandatory, string): The level of the skill (e.g., Beginner, Intermediate, Advanced).
            - `description` (optional, string): A short description of the skill.
            - `keywords` (optional, list): An array of keywords related to the
            skill.
                - (string): The keyword.
                - (...)
        - (...)


Example:

```json
{
  "skills": {
    "technical": [
      {
        "JavaScript": {
          "level": "Advanced",
          "description": "Proficient in ES6 and TypeScript",
          "frameworks": [
            "React.js",
            "Node.js"
          ]
        }
      },
      {
        "Python": {
          "level": "Intermediate",
          "description": "Proficient in Python 3",
          "frameworks": [
            "Django"
          ]
        }
      }
    ],
    "soft": [
      {
        "Communication": {
          "level": "Advanced",
          "description": "Excellent written and verbal communication skills",
          "keywords": [
            "Public Speaking",
            "Technical Writing"
          ]
        }
      },
      {
        "Leadership": {
          "level": "Advanced",
          "description": "Experience leading teams of 5+ people",
          "keywords": [
            "Team Management",
            "Project Management"
          ]
        }
      }
    ]
  }
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



#### Education

The "Education" section should include all formal education processes like 
college, high school, and formal courses. Each education item  
is an object with the following fields:

- `education` (optional, list): The list of education achievements.
    - (dictionary): The education achievement.
        - `level` (mandatory, string): The level of education (e.g., Bachelor's, Master's,
        High School).
        - `field` (optional, string): The field of study (e.g., Computer Science,
        Electrical Engineering).
        - `institution` (mandatory, string): The name of the institution.
        - `startYear` (mandatory, int): The start year of the education. The date format
        must be `YYYY`.
        - `endYear` (mandatory, int): The end year of the education. The date format
        must be `YYYY` and must be greater than `startYear`.
        - `major` (optional, string): The major of the education.
        - `minor` (optional, string): The minor of the education.
        - `relevant_courses` (optional, list): The list of relevant courses of the education.
            - (string): The course.
            - (...)
        - `academic_achievements` (optional, list): The list of academic achievements.
            - (string): The achievement.
            - (...)
        - `link_for_institution` (optional, string): The link for the website of the 
        institution.
    - (...)

Example:

```json
{
  "education": [
    {
      "level": "Bachelor's",
      "field": "Computer Science",
      "institution": "University of ABC",
      "startYear": 2015,
      "endYear": 2019,
      "major": "Computer Science",
      "minor": "Mathematics",
      "relevant_courses": [
        "Data Structures",
        "Algorithms",
        "Operating Systems"
      ],
      "academic_achievements": [
        "Dean's List",
        "Graduated with Honors"
      ],
      "link_for_institution": "http://example-link-to-institution.com"
    }
  ]
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


#### Languages

The "Languages" section should include all languages you speak. Each language 
item is an object with the following fields:
- `languages` (optional, list): The list of languages that the person speaks.
    - (dictionary): The language.
        - `language` (mandatory, string): The name of the language.
        - `proficiency` (mandatory, string): Your proficiency level in the language (e.g., Beginner, Intermediate, Advanced, Native).
        - `certifications` (optional, list): The list of certifications of the language.
            - (dictionary): The certification.
                - `name` (mandatory, string): The name of the certification.
                - `score` (optional, string): The score of the certification.
                - `date_received` (optional, string): The date that the certification was received.
                - `link` (optional, string): The link for the website of the certification.
            - (...)
        - `native` (optional, boolean): Whether the language is your native language.
        - `writing` (optional, string): Your proficiency level in writing in the language (e.g., Beginner, Intermediate, Advanced, Native).
        - `reading` (optional, string): Your proficiency level in reading in the language (e.g., Beginner, Intermediate, Advanced, Native).
        - `speaking` (optional, string): Your proficiency level in speaking in the language (e.g., Beginner, Intermediate, Advanced, Native).
        - `listening` (optional, string): Your proficiency level in listening in the language (e.g., Beginner, Intermediate, Advanced, Native).
    - (...)


Example:

```json
{
    "languages":[
        {
            "language": "English",
            "proficiency": "Native or bilingual proficiency",
            "certifications": [
                {
                    "name": "TOEFL iBT",
                    "score": "114",
                    "date_received": "2018",
                    "link": "http://example-link-to-certification.com"
                }
            ],
            "native": true,
            "writing": "Fluent",
            "reading": "Fluent",
            "speaking": "Fluent",
            "listening": "Fluent"
        }
    ]
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

#### Papers

The "Papers" section should include all published papers or articles. Each paper is an object with the following fields:

- `papers` (optional, list): The list of papers.
    - (dictionary): The paper.
        - `title` (mandatory, string): The title of the paper.
        - `authors` (mandatory, list): The authors of the paper.
            - (string): The author.
            - (...)
        - `journal` (optional, string): The journal of the paper.
        - `volume` (optional, string): The volume of the paper.
        - `number` (optional, string): The number of the paper.
        - `pages` (optional, string): The pages of the paper.
        - `conference` (optional, string): The conference of the paper.
        - `year` (optional, string): The year of the paper.
        - `doi` (optional, string): The DOI of the paper. It is a unique identifier of the paper.
        - `description` (optional, string): A short description of the paper.
        - `keywords` (optional, list): The list of keywords of the paper.
            - (string): The keyword.
            - (...)
        - `download_link` (optional, string): The link to download the paper.
        - `video_documentation_link` (optional, string): The link to the video documentation of the paper. It must be an emded youtube link: https://www.youtube.com/embed/<video-id>.
    - (...)

Example:

```json
{
    "papers":[
        {
            "title": "Paper 1",
            "authors": [
                "John Doe",
                "Jane Doe"
            ],
            "journal": "Journal of ABC",
            "volume": "1",
            "number": "1",
            "pages": "1-10",
            "conference": "Conference 1",
            "year": "2021",
            "doi": "10.0000/0000000000000000",
            "description": "This is the description of the paper.",
            "keywords": [
                "Keyword 1",
                "Keyword 2"
            ],
            "download_link": "http://example-link-to-download.com",
            "video_documentation_link": "https://www.youtube.com/embed/<video-id>"
        }
    ]
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

#### Achievements

The "Achievements" section should include all relevant achievements. Until now,
there are 4 types of achievements: course, programming-project, personal-project,
and certification.

- `achievements` (optional, list): The list of achievements.
    - (dictionary): the achievement.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

##### Course

The course achievement is related to a course that you completed. Those courses
are less formal than the education courses. Each course achievement is an object
with the following fields:

- (dictionary): the achievement.
    - `type` (mandatory, string): The type of the achievement. It must be `course`.
    - `title` (mandatory, string): The title of the achievement.
    - `description` (mandatory, string): A short description of the achievement.
    - `finishedDate` (mandatory, string): The date that the course was finished. The date format must be `YYYY-MM-DD`.
    - `institution` (optional, string) The name of the institution.
    - `duration` (optional, int): The duration of the course in months.
    - `courseLink` (optional, string): The link for the website of the course.
    - `projectLink` (optional, string): The link for the website of the project created during the course.
    - `skillsLearned` (optional, list): The list of skills learned during the course.
        - (string): The skill.
        - (...)


Example

```json
{
    "achievements":[
        {
            "type": "course",
            "title": "Course 1",
            "description": "This is the description of the course.",
            "finishedDate": "2021-01-01",
            "institution": "Institution 1",
            "duration": 6,
            "courseLink": "http://example-link-to-course.com",
            "projectLink": "http://example-link-to-project.com",
            "skillsLearned": [
                "Skill 1",
                "Skill 2"
            ]
        }
    ]
}
```


<p align="right">(<a href="#readme-top">back to top</a>)</p>

##### Programming Project

The programming project achievement is related to a programming project that you
completed. Each programming project achievement is an object with the following
fields:

- (dictionary): the achievement.
    - `type` (mandatory, string): The type of the achievement. It must be `programming-project`.
    - `title` (mandatory, string): The title of the achievement.
    - `description` (mandatory, string): A short description of the achievement.
    - `finishedDate` (mandatory, string): The end date of the project. The date format must be `YYYY-MM-DD`.
    - `duration` (optional, int): The duration of the project in months.
    - `repositoryLink` (optional, string): The link for the repository of the project.
    - `workingProjectLink` (optional, string): The link for the website of the working project.
    - `videoDocumentationLink` (optional, string): The link for the video documentation of the project. It must be an emded youtube link: https://www.youtube.com/embed/<video-id>.
    - `skillsUsed` (optional, list): The list of skills used during the project.
        - (string): The skill.
        - (...)

Example

```json
{
    "achievements":[
        {
            "type": "programming-project",
            "title": "Project 1",
            "description": "This is the description of the project.",
            "finishedDate": "2021-01-01",
            "duration": 6,
            "repositoryLink": "http://example-link-to-repository.com",
            "workingProjectLink": "http://example-link-to-working-project.com",
            "videoDocumentationLink": "https://www.youtube.com/embed/<video-id>",
            "skillsUsed": [
                "Skill 1",
                "Skill 2"
            ]
        }
    ]
}
```


<p align="right">(<a href="#readme-top">back to top</a>)</p>

##### Personal Project

The personal project achievement is related to a personal project that you
completed. Each personal project achievement is an object with the following
fields:

- (dictionary): the achievement.
    - `type` (mandatory, string): The type of the achievement. It must be `personal-project`.
    - `title` (mandatory, string): The title of the achievement.
    - `description` (mandatory, string): A short description of the achievement.
    - `finishedDate` (mandatory, string): The end date of the project. The date format must be `YYYY-MM-DD`.
    - `duration` (optional, int): The duration of the project in months.
    - `workingProjectLink` (optional, string): The link for the website of the working project.
    - `videoDocumentationLink` (optional, string): The link for the video documentation of the project. It must be an emded youtube link: https://www.youtube.com/embed/<video-id>.
    - `skillsUsed` (optional, list): The list of skills used during the project.
        - (string): The skill.
        - (...)
    
Example

```json
{
    "achievements":[
        {
            "type": "personal-project",
            "title": "Project 1",
            "description": "This is the description of the project.",
            "finishedDate": "2021-01-01",
            "duration": 6,
            "workingProjectLink": "http://example-link-to-working-project.com",
            "videoDocumentationLink": "https://www.youtube.com/embed/<video-id>",
            "skillsUsed": [
                "Skill 1",
                "Skill 2"
            ]
        }
    ]
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

##### Certification

The certification achievement is related to a certification that you
completed. Each certification achievement is an object with the following
fields:

- (dictionary): the achievement.
    - `type` (mandatory, string): The type of the achievement. It must be `certification`.
    - `title` (mandatory, string): The title of the achievement.
    - `description` (mandatory, string): A short description of the achievement.
    - `finishedDate` (mandatory, string): The date that the certification was received. The date format must be `YYYY-MM-DD`.
    - `institution` (mandatory, string) The name of the institution.
    - `duration` (optional, int): The duration of the certification in months.
    - `certificationLink` (optional, string): The link for the website of the certification.
    - `skillsCertified` (optional, list): The list of skills certified during the certification.
        - (string): The skill.
        - (...)

Example

```json
{
    "achievements":[
        {
            "type": "certification",
            "title": "Certification 1",
            "description": "This is the description of the certification.",
            "finishedDate": "2021-01-01",
            "institution": "Institution 1",
            "duration": 6,
            "certificationLink": "http://example-link-to-certification.com",
            "skillsCertified": [
                "Skill 1",
                "Skill 2"
            ]
        }
    ]
}
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->

[issues-shield]: https://img.shields.io/github/issues/ArturAssisComp/my-portfolio?logo=github&style=for-the-badge
[issues-url]: https://github.com/ArturAssisComp/my-portfolio/issues

[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/ArturAssisComp/my-portfolio/blob/master/LICENSE