import React from "react"

function Bio() {

  const projects = [{
    url: 'https://segment.com',
    name: 'Segment',
    description: 'Eng Manager - Integrations.'
  },{
    url: 'https://mixmax.com',
    name: 'Mixmax',
    description: 'Tech lead for Integrations team.'
  }, {
    url: 'https://salesforce.com',
    name: 'Salesforce',
    description: 'Lead engineer on Community Cloud, Chatter.'
  }];
  const projectLinks = projects
    .map(project => {
      const { url, name, description } = project;
      return (
        <li key={name}>
          <a href={url} title={description} target="_blank" rel="noopener noreferrer">{name}</a> - {description}
        </li>
      );
    });

  return (

    <div className="home">
      <div className="about">
        Software Engineer & Manager.
      </div>
      <h1 className="page-heading">Work</h1>
      <ul>
        {projectLinks}
      </ul>
    </div>
  )
}

export default Bio
