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
        NOMADS (Neurodata Opensource Method for Autonomous Detection of Synapses)
        website, containing links to relevant repositories.
      </p>
      <hr></hr>
      <img src="../nomads_classifier_img.png" alt="Smiley face" height="42" width="42"/>
      <div style={s.pageLinkContainer}>
        <Interactive
          as={Link}
          {...s.link}
          to="/example/two-deep?field1=neurodata-nomads&field2=neurodataresource"
        >neurodataresource</Interactive>
      </div>
      <p style={s.p}>
        This is a library which allows NOMADS to function with various neurodata tools
      </p>
      <hr></hr>

      <div style={s.pageLinkContainer}>
        <Interactive
          as={Link}
          {...s.link}
          to="/example/two-deep?field1=neurodata-nomads&field2=pymeda"
        >pymeda</Interactive>
      </div>
      <p style={s.p}>
        This is a tool which is able to output visualizations of synapse data.
      </p>
      <hr></hr>
      <div style={s.pageLinkContainer}>
        <Interactive
          as={Link}
          {...s.link}
          to="/example/two-deep?field1=neurodata-nomads&field2=boss_annotator"
        >boss_annotator</Interactive>
      </div>
      <p style={s.p}>
        This tool is used to generate manual annotations for synapse data in the BOSS, a neurodata database.
      </p>
      <hr></hr>

      <div style={s.pageLinkContainer}>
        <Interactive
          as={Link}
          {...s.link}
          to="/example/two-deep?field1=neurodata-nomads&field2=nomads_deploy"
        >nomads_deploy</Interactive>
      </div>
      <p style={s.p}>
        NOMADS pipeline which runs the unsupervised synapse detection algorithm.
      </p>
      <hr></hr>

      <div style={s.pageLinkContainer}>
        <Interactive
          as={Link}
          {...s.link}
          to="/example/two-deep?field1=neurodata-nomads&field2=nomads_classifier"
        >nomads_classifier</Interactive>
      </div>
      <p style={s.p}>
        This tool classifies synapse data outputted from nomads_deploy
      </p>
      <hr></hr>

      <div style={s.pageLinkContainer}>
        <Interactive
          as={Link}
          {...s.link}
          to="/example/two-deep?field1=neurodata-nomads&field2=nomads_cloud"
        >nomads_cloud</Interactive>
      </div>
      <p style={s.p}>
        This is the core cloud functionality which the NOMADS service runs on.
      </p>
    </div>
  );
}
