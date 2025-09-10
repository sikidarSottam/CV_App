import { useState } from 'react';
import './App.css';

function App() {
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [experience, setExperience] = useState([
    {
      company: '',
      title: '',
      startDate: '',
      endDate: '',
    },
  ]);

  const [education, setEducation] = useState([
    {
      school: '',
      degree: '',
      gradDate: '',
    },
  ]);

  const handlePersonalInfoChange = (e) => {
    const { id, value } = e.target;
    setPersonalInfo({ ...personalInfo, [id]: value });
  };

  const handleExperienceChange = (e, index) => {
    const { id, value } = e.target;
    const newExperience = [...experience];
    newExperience[index][id] = value;
    setExperience(newExperience);
  };

  const handleEducationChange = (e, index) => {
    const { id, value } = e.target;
    const newEducation = [...education];
    newEducation[index][id] = value;
    setEducation(newEducation);
  };

  const addExperience = () => {
    setExperience([
      ...experience,
      {
        company: '',
        title: '',
        startDate: '',
        endDate: '',
      },
    ]);
  };

  const addEducation = () => {
    setEducation([
      ...education,
      {
        school: '',
        degree: '',
        gradDate: '',
      },
    ]);
  };

  const deleteExperience = (index) => {
    const newExperience = [...experience];
    newExperience.splice(index, 1);
    setExperience(newExperience);
  };

  const deleteEducation = (index) => {
    const newEducation = [...education];
    newEducation.splice(index, 1);
    setEducation(newEducation);
  };

  return (
    <div className="cv-app">
      <header>
        <h1>CV Application Maker</h1>
      </header>
      <main>
        <div className="cv-form">
          <section className="personal-info">
            <h2>Personal Information</h2>
            <form>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={personalInfo.name}
                onChange={handlePersonalInfoChange}
              />
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={personalInfo.email}
                onChange={handlePersonalInfoChange}
              />
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                value={personalInfo.phone}
                onChange={handlePersonalInfoChange}
              />
            </form>
          </section>
          <section className="experience">
            <h2>Experience</h2>
            {experience.map((exp, index) => (
              <div key={index}>
                <form>
                  <label htmlFor="company">Company:</label>
                  <input
                    type="text"
                    id="company"
                    value={exp.company}
                    onChange={(e) => handleExperienceChange(e, index)}
                  />
                  <label htmlFor="title">Title:</label>
                  <input
                    type="text"
                    id="title"
                    value={exp.title}
                    onChange={(e) => handleExperienceChange(e, index)}
                  />
                  <label htmlFor="startDate">Start Date:</label>
                  <input
                    type="date"
                    id="startDate"
                    value={exp.startDate}
                    onChange={(e) => handleExperienceChange(e, index)}
                  />
                  <label htmlFor="endDate">End Date:</label>
                  <input
                    type="date"
                    id="endDate"
                    value={exp.endDate}
                    onChange={(e) => handleExperienceChange(e, index)}
                  />
                </form>
                <button
                  className="delete-button"
                  onClick={() => deleteExperience(index)}
                >
                  Delete
                </button>
              </div>
            ))}
            <button onClick={addExperience}>Add Experience</button>
          </section>
          <section className="education">
            <h2>Education</h2>
            {education.map((edu, index) => (
              <div key={index}>
                <form>
                  <label htmlFor="school">School:</label>
                  <input
                    type="text"
                    id="school"
                    value={edu.school}
                    onChange={(e) => handleEducationChange(e, index)}
                  />
                  <label htmlFor="degree">Degree:</label>
                  <input
                    type="text"
                    id="degree"
                    value={edu.degree}
                    onChange={(e) => handleEducationChange(e, index)}
                  />
                  <label htmlFor="gradDate">Graduation Date:</label>
                  <input
                    type="date"
                    id="gradDate"
                    value={edu.gradDate}
                    onChange={(e) => handleEducationChange(e, index)}
                  />
                </form>
                <button
                  className="delete-button"
                  onClick={() => deleteEducation(index)}
                >
                  Delete
                </button>
              </div>
            ))}
            <button onClick={addEducation}>Add Education</button>
          </section>
        </div>
        <div className="cv-preview">
          <h2>CV Preview</h2>
          <div className="preview-content">
            <h3>Personal Information</h3>
            <p>Name: {personalInfo.name}</p>
            <p>Email: {personalInfo.email}</p>
            <p>Phone: {personalInfo.phone}</p>
            <h3>Experience</h3>
            {experience.map((exp, index) => (
              <div key={index}>
                <p>Company: {exp.company}</p>
                <p>Title: {exp.title}</p>
                <p>Start Date: {exp.startDate}</p>
                <p>End Date: {exp.endDate}</p>
              </div>
            ))}
            <h3>Education</h3>
            {education.map((edu, index) => (
              <div key={index}>
                <p>School: {edu.school}</p>
                <p>Degree: {edu.degree}</p>
                <p>Graduation Date: {edu.gradDate}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
