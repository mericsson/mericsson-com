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
  name: 'Twilio Segment',
  description: 'Director - Data Collection & Activation'
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
  description: 'Guide to engineering management from Clearbit\'s CEO.'
}, {
  url: 'https://staffeng.com/book',
  name: 'Staff Engineer by Will Larson',
  description: 'Guide to understanding and being a great Staff+ engineer.'
}, {
  url: 'https://www.oreilly.com/library/view/the-managers-path/9781491973882/',
  name: 'The Manager\'s Path by Camille Fournier',
  description: 'Prescriptive guide to all roles from intern to VP Eng.'
}, {
  url: 'https://randsinrepose.com/archives/category/management/',
  name: 'Rands in Repose - Management',
  description: 'Entertaining and enlightening stories from the trenches. Also in book form: Managing Humans and The Art of Leadership - Small Things Done Well.'
}]

function Bio() {

  const projectLinks = projects.map(makeLink)
  const favoriteLinks = favorites.map(makeLink)

  return (

    <div className="home">
      <div className="about">
        Software Engineer & People Leader.
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
