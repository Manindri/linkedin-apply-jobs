import './ConfigGenerator.css';
import React, { useState } from "react";
import linkedinLogo from "./linkedin-logo.jpeg";
import StepsPage from "./StepsPage";


function ConfigGenerator() {
  const [formData, setFormData] = useState({
    LINKEDIN_EMAIL: "",
    LINKEDIN_PASSWORD: "",
    KEYWORDS: "",
    LOCATION: "",
    WORKPLACE: {
      REMOTE: true,
      ON_SITE: true,
      HYBRID: true,
    },
    JOB_TITLE: "",
    JOB_DESCRIPTION: "",
    PHONE: "",
    CV_PATH: "",
    COVER_LETTER_PATH: "",
    HOME_CITY: "",
    YEARS_OF_EXPERIENCE: {
      "angular": 5,
      "react.js": 6,
    },
    LANGUAGE_PROFICIENCY: {
      "english": "professional",
      "spanish": "native",
      "french": "professional",
    },
    REQUIRES_VISA_SPONSORSHIP: false,
    TEXT_FIELDS: {
      "salary": "60k",
    },
    BOOLEANS: {
      "bachelhor|bacharelado": true,
      "authorized": true,
    },
    MULTIPLE_CHOICE_FIELDS: {
      "pronouns": "They/them",
    },
    SINGLE_PAGE: false,
  });

  const [isButtonClicked, setButtonClicked] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked,
    });
  };

  const generateConfigFile = () => {
    const fileContent = `export default ${JSON.stringify(formData, null, 2)};`;
    const blob = new Blob([fileContent], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "config.ts";
    a.click();
    URL.revokeObjectURL(url);

    // const githubRepoLink = "https://github.com/joaosilvalopes/linkedin-easy-apply-bot";
    // window.open(githubRepoLink, "_blank");

    setButtonClicked(true);
  };

  return (
    <div className='full'>
      <div className="linkedin-logo">
        <img src={linkedinLogo} alt="LinkedIn Logo" />
      </div>
      <h2>Auto Apply for LinkedIn Jobs</h2>
      <form className='config-form'>
        <label>
          LinkedIn Email:
          <input
            type="text"
            name="LINKEDIN_EMAIL"
            value={formData.LINKEDIN_EMAIL}
            onChange={handleInputChange}
          />
        </label>
        <label>
          LinkedIn Password:
          <input
            type="password"
            name="LINKEDIN_PASSWORD"
            value={formData.LINKEDIN_PASSWORD}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Job Search Keywords:
          <input
            type="text"
            name="KEYWORDS"
            value={formData.KEYWORDS}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Job Search Location:
          <input
            type="text"
            name="LOCATION"
            value={formData.LOCATION}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Remote Jobs:
          <input
            type="checkbox"
            name="WORKPLACE.REMOTE"
            checked={formData.WORKPLACE.REMOTE}
            onChange={handleCheckboxChange}
          />
        </label>
        <label>
          On-Site Jobs:
          <input
            type="checkbox"
            name="WORKPLACE.ON_SITE"
            checked={formData.WORKPLACE.ON_SITE}
            onChange={handleCheckboxChange}
          />
        </label>
        <label>
          Hybrid Jobs:
          <input
            type="checkbox"
            name="WORKPLACE.HYBRID"
            checked={formData.WORKPLACE.HYBRID}
            onChange={handleCheckboxChange}
          />
        </label>
        <label>
          Job Title Regex:
          <input
            type="text"
            name="JOB_TITLE"
            value={formData.JOB_TITLE}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Job Description Regex:
          <input
            type="text"
            name="JOB_DESCRIPTION"
            value={formData.JOB_DESCRIPTION}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Phone:
          <input
            type="text"
            name="PHONE"
            value={formData.PHONE}
            onChange={handleInputChange}
          />
        </label>
        <label>
          CV Path:
          <input
            type="text"
            name="CV_PATH"
            value={formData.CV_PATH}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Cover Letter Path:
          <input
            type="text"
            name="COVER_LETTER_PATH"
            value={formData.COVER_LETTER_PATH}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Home City:
          <input
            type="text"
            name="HOME_CITY"
            value={formData.HOME_CITY}
            onChange={handleInputChange}
          />
        </label>
        {/* Add similar input fields for other form data */}
        {isButtonClicked ? (
            <StepsPage />
        ):(
            <button type="button" onClick={generateConfigFile}>
            Apply
            </button>
        )}
      </form>
    </div>
  );
}

export default ConfigGenerator;
