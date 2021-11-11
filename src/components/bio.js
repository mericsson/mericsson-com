import React from "react"

function makeLink(project) {
  const { url, name, description } = project;
  return (
    <li key={name}>
      <a href={url} title={description} target="_blank" rel="noopener noreferrer">{name}</a> - {description}
    </li>
  );
}

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

const favorites = [{
  url: 'https://themanagershandbook.com/',
  name: 'The Manager\'s Handbook',
  description: 'Guide to engineering management from Clearbit\'s CEO'
}, {
  url: 'https://staffeng.com/book',
  name: 'Staff Engineer by Will Larson',
  description: 'Guide to understanding and being a great Staff+ engineer'
}]

function Bio() {

  const projectLinks = projects.map(makeLink)
  const favoriteLinks = favorites.map(makeLink)

  return (

    <div className="home">
      <div className="about">
        Software Engineer & Manager.
      </div>
      <h1 className="page-heading">Work</h1>
      <ul>
        {projectLinks}
      </ul>
      <h1 className="page-heading">Favorites</h1>
      <ul>
        {favoriteLinks}
      </ul>
    </div>
  )
}

export default Bio
