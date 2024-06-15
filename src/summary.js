import React, { useState } from 'react';
import Education from './Education/education';
import ButtonEducation from './Education/buttonAddNewEducation';
import InfoEducation from './Education/showInfoEducation';
import ButtonAdditionInformation from './AdditionInformation/buttonAdditionalInformation';
import AdditionInformation from './AdditionInformation/additionInformationForm';
import ShowAdditionInfo from './AdditionInformation/showAdditionInformation';
import Experience from './Experience/addNewExperience';
import ButtonAddNewExperience from './Experience/buttonNewExperience';
import InfoExperience from './Experience/showExperienceInfotmation';
import NewInteres from './Interests/addNewInterests';
import ButtonNewInterests from './Interests/buttonNewInterests';
import ShowInterestsInformation from './Interests/showInterestsInformation';
import Skills from './Skills/skills';
import ButtonNewSkills from './Skills/buttonAddNewSkills';
import ShowInfoSkills from './Skills/showInfoSkills';
import Name from './Personal/Name/name';
import ShowName from './Personal/Name/showName';
import Photo from './Personal/Photo/photo';
import ShowPhoto from './Personal/Photo/showPhoto';
import Personal from './Personal/personalInfo/personal';
import ShowInfoPersonal from './Personal/personalInfo/showInfoPersonal';
import About from './Personal/About/about';
import ShowAbout from './Personal/About/showAbout';

function MySummary() {
  const [educations, setEducations] = useState([{
    educationLevel: '',
    city: '',
    university: '',
    startMonth: '',
    startYear: '',
    endMonth: '',
    endYear: ''
  }]);

  const addEducation = () => {
    setEducations([...educations, {
      educationLevel: '',
      city: '',
      university: '',
      startMonth: '',
      startYear: '',
      endMonth: '',
      endYear: ''
    }]);
  };

  const handleInputChange = (index, field, value) => {
    const newEducations = [...educations];
    newEducations[index][field] = value;
    setEducations(newEducations);
  };

  const [experience, setExperience] = useState([{
    position:'',
    city: '',
    employer: '',
    startMonth: '',
    startYear: '',
    endMonth: '',
    endYear: ''
  }]);

  const addExperience = () =>{
    setExperience([...experience, {
      position:'',
      city: '',
      employer: '',
      startMonth: '',
      startYear: '',
      endMonth: '',
      endYear: ''
    }])
  } 

  const handleInputChangeExperience = (index, field, value) => {
    const newExperience = [...experience];
    newExperience[index][field] = value;
    setExperience(newExperience);
  }

  const [interes, setInteres] = useState([{
    nameInteres: ''
  }])

  const addInterests = () =>{
    setInteres([...interes, {
      nameInteres: ''
    }])
  }

  const handleInputChangeInteres = (index, field, value) =>{
    const newInterests = [...interes];
    newInterests[index][field] = value;
    setInteres(newInterests);
  }

  const [skills, setSkills] = useState([{
    nameSkills: '',
    levelSkils: ''
  }])

  const addNewSkills = () =>{
    setSkills([...skills, {
      nameSkills: '',
      levelSkils: ''
    }]);
  }

  const handleInputChangeSkills = (index, field, value) => {
    const newSkills = [...skills];
    newSkills[index][field] = value;
    setSkills(newSkills);
  }

  const [showAdditionInfo, setShowAdditionInfo] = useState(false);

    const addAdditionalInfo = () => {
        setShowAdditionInfo(!showAdditionInfo);
    };

  const [additionInformation, setAdditionInformation] = useState([{
    sex: '',
    drivingLicense: '',
    nationality: '',
    maritalStatus: '',
    linkedIn:'',
    website: '',
  }])

  const handleInputChangeAddition = (field, value) => {
    setAdditionInformation({
      ...additionInformation,
      [field]: value
    });
  };

  const [name, setName] = useState('');

  const handleInputChangeName = (value) => {
    setName(value);
  };

  const [about, setAbout] = useState('');

  const handleInputChangeAbout = (value) =>{
    setAbout(value);
  }

  const [photoUrl, setPhotoUrl] = useState('');

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setPhotoUrl(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  
  const [personalInfo, setPersonalInfo] = useState({
    phone: '',
    email: '',
    addresHome: '',
    userLocation: ''
  });

  const handleInputChangePersonal = (field, value) => {
      setPersonalInfo(prevState => ({
          ...prevState,
          [field]: value
      }));
  };

  const hasInterests = interes.some((item) => item.nameInteres.trim() !== '');
  const hasSkills = skills.some((s) => s.nameSkills.trim() !== '');

  return (
    <div className='container'>
      <div className='left-content'>
        <div>
          <h1 className='main-title'>Особисте</h1>
          <div className="col">
            <Photo onInputChange={handleFileChange} />
          </div>
          <div className="col">
            <Name name={name} onInputChange={handleInputChangeName} />
          </div>
          <div className='col'>
            <About about={about} onInputChange={handleInputChangeAbout}/>
          </div>
        </div>
        <div className='newEducation'>
          {educations.map((education, index) => (
            <Education
              key={index}
              education={education}
              index={index}
              onInputChange={handleInputChange}
            />
          ))}
          <ButtonEducation className="add-new-education" onAddEducation={addEducation} />
        </div>
        <Personal personalInfo={personalInfo} onInputChange={handleInputChangePersonal} />

        <ButtonAdditionInformation className="add-addition-information" onAdditionInformation={addAdditionalInfo}/>
        <div className='addition-info'>
          {showAdditionInfo && (
                <div className='addition-info'>
                    <AdditionInformation additionInformation={additionInformation} onInputChange={handleInputChangeAddition} />
                </div>
          )}
        </div>
        <div className='experience-info'>
          {experience.map((experience, index) => (
            <Experience 
              key={index}
              experience={experience}
              index={index}
              onInputChange={handleInputChangeExperience}
            />
          ))}
          <ButtonAddNewExperience onExperienceInformation={addExperience}/>
        </div>
        <div className='interes-info'>
          {interes.map((interes, index)=>(
            <NewInteres key={index}
            interes={interes}
            index={index}
            onInputChange={handleInputChangeInteres}/>
          ))}
          <ButtonNewInterests buttonNewInteres={addInterests}/>
        </div>
        <div className='skills-info'>
        {skills.map((skill, index) => (
        <Skills 
          key={index}
          skills={skill}
          index={index}
          onInputChange={handleInputChangeSkills}
        />
      ))}
      <ButtonNewSkills onAddSkills={addNewSkills}/>
        </div>
      </div>

      <div className='right-content'>
        <div className='left-column-content'>
          {photoUrl && <ShowPhoto photoUrl={photoUrl} />}
          <div className='left-content-info'>
            <ShowInfoPersonal
                    phone={personalInfo.phone}
                    email={personalInfo.email}
                    addresHome={personalInfo.addresHome}
                    userLocation={personalInfo.userLocation}
              />
            <div className='show-addition'>
              <ShowAdditionInfo placeBirth={additionInformation.placeBirth}
               sex={additionInformation.sex}
               drivingLicense= {additionInformation.drivingLicense}
               nationality = {additionInformation.nationality}
               maritalStatus = {additionInformation.maritalStatus}
               linkedIn = {additionInformation.linkedIn}
               website = {additionInformation.website}
               />  
            </div>
            <div className='show-interes'>
              {hasInterests &&
               <div className='row'><div className='col title-interes'><b>Інтересы</b></div>
              </div>}
             
              {interes.map((interes, index)=>(
              <ShowInterestsInformation key={index}
              index={index}
              nameInteres={interes.nameInteres}
              />
              ))}
            </div>
            {hasSkills && (
        <div className='show-skills'>
          <div className='row'>
            <div className='col title-skills'><b>Навички</b></div>
          </div>
          {skills.map((skill, index) => (
            skill.nameSkills.trim() && (
              <ShowInfoSkills 
                key={index}
                nameSkills={skill.nameSkills}
                levelSkills={skill.levelSkills}
              />
            )
          ))}
        </div>
      )}
          </div>
        </div>
        <div className='right-column-content'>
          <ShowName name={name}/>

          <ShowAbout about={about}/>

          {educations.map((education, index) => (
            <InfoEducation
              key={index}
              educationLevel={education.educationLevel}
              startMonth={education.startMonth}
              startYear={education.startYear}
              endMonth={education.endMonth}
              endYear={education.endYear}
              university={education.university}
              city={education.city}
            />
          ))}
          {experience.map((experience,index)=>(
            <InfoExperience key={index}
            position={experience.position}
            city={experience.city}
            startMonth={experience.startMonth}
            endMonth={experience.endMonth}
            startYear={experience.startYear}
            endYear={experience.endYear}
            employer={experience.employer}
            />
          ))}
        </div>
      </div>
    </div>
  );
}


export default MySummary;
