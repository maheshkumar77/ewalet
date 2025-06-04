import React from 'react';
import PersonalInformation from './PersonalInformation';
import SkillsExpertise from './SkillsExpertise';
import Education from './Education';
import WorkExperience from './WorkExperience';
import PortfolioReferences from './PortfolioReferences';
import PreferredWorkTerms from './PreferredWorkTerms';
import LanguageProficiency from './LanguageProficiency';
import './MainContent.css';

function MainContent() {
  return (
    <div className="main-content">
      <PersonalInformation />
      <SkillsExpertise />
      <Education />
      <WorkExperience />
      <PortfolioReferences />
      <PreferredWorkTerms />
      <LanguageProficiency />
    </div>
  );
}

export default MainContent;