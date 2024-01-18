import React from 'react'

function Education() {

  const educationDetails = [
    {
      school: 'KIET Group of Institutions,Ghaziabad',
      course: 'Bachelor of Technology - BTech, Computer Science and Engineering',
      grade: '8.5',
      date: 'Nov 2020-July 2024',
      description:`I am currently pursuing a Bachelor's degree in Computer 
      Science and Engineering at KIET Group of Institutions. I have a CGPA of 8.5 till date.`

    },
    {
      school: 'Lucknow Public School,Lucknow',
      course: 'CBSE(XII) Physics, Chemistry, Maths',
      grade: '91',
      date: '2018-2019',
      description:`Completed my class 12 from L.P.S ,Gomti Nagar Lucknow with overall percentage of 91.`
    },
    
  ];

  return (
    <div className="education-section">
      <h2>Education</h2>
      <div className="education-container">
        {educationDetails.map((education, index) => (
          <div key={index} className="education-item">
            <div className="school large-font">{education.school}</div>
            <div className="course">{education.course}</div>
            <div className="grade">Grade: {education.grade}</div>
            <div className="date">{education.date}</div>
            <p>
             {education.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Education