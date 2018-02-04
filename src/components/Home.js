import React from 'react';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
import { Code } from '../styles/style';
import s from '../styles/home.style';

export default function Home() {
  const repoReadmeLink = text => (
    <Interactive
      as="a"
      {...s.link}
      href="https://github.com/rafrex/spa-github-pages#readme"
    >{text}</Interactive>
  );
  //<div style={s.pageLinkContainer}>
  //     <Interactive
  //       as={Link}
  //       {...s.link}
  //       to="/example"
  //     >Example page</Interactive>
  //   </div>
  //<div style={s.pageLinkContainer}>
  //     <Interactive
  //       as={Link}
  //       {...s.link}
  //       to="/example/two-deep?field1=foo&field2=bar#boom!"
  //     >Example two deep with query and hash</Interactive>
  //   </div>

  return (
    <div>
      <p style={s.p}>
        This is a boilerplate for the NOMADS
        (Neurodatai"s Opensource Method for Autonomous Detection of Synapses)
        website built with React and React&nbsp;Router using {' '}
        <Code>BrowserRouter</Code>.
      </p>
      <div style={s.pageLinkContainer}>
        <Interactive
          as={Link}
          {...s.link}
          to="/example/two-deep?field1=neurodataresource"
        >neurodataresource</Interactive>
      </div>
      <div style={s.pageLinkContainer}>
        <Interactive
          as={Link}
          {...s.link}
          to="/example/two-deep?field1=pymeda"
        >pymeda</Interactive>
      </div>
      <div style={s.pageLinkContainer}>
        <Interactive
          as={Link}
          {...s.link}
          to="/example/two-deep?field1=synaptomes"
        >synaptomes</Interactive>
      </div>
      <div style={s.pageLinkContainer}>
        <Interactive
          as={Link}
          {...s.link}
          to="/example/two-deep?field1=boss_annotator"
        >boss_annotator</Interactive>
      </div>
    </div>
  );
}
