import React from 'react';
import PropTypes from 'prop-types';
import Interactive from 'react-interactive';
import { Link } from 'react-router-dom';
import { Li } from '../styles/style';
import s from '../styles/exampleTwoDeepComponent.style';

const propTypes = {
  location: PropTypes.object.isRequired,
};

export default function ExampleTwoDeepComponent({ location }) {
  const queryPresent = location.search !== '';
  const hashPresent = location.hash !== '';

  function queryStringTitle() {
    if (queryPresent) return 'The query string field-value pairs are:';
    return 'No query string in the url';
  }

  function hashFragmentTitle() {
    if (hashPresent) return 'The hash fragment is:';
    return 'No hash fragment in the url';
  }

  function linkToShowQueryAndOrHash() {
    if (queryPresent && hashPresent) return null;

    const queryString = (queryPresent ? location.search : '?field1=foo&field2=bar');
    const hashFragment = (hashPresent ? location.hash : '#boom!');

    let linkText = '';
    if (queryPresent && !hashPresent) linkText = 'Show with hash fragment';
    if (!queryPresent && hashPresent) linkText = 'Show with query string';
    if (!queryPresent && !hashPresent) linkText = 'Show with query string and hash fragment';

    return (
      <div style={s.lineContainer}>
        <Interactive
          as={Link}
          to={`/example/two-deep${queryString}${hashFragment}`}
          {...s.link}
        >{linkText}</Interactive>
      </div>
    );
  }

  function parseQueryString() {
    if (!queryPresent) return [];
    return location.search
      .replace('?', '')
      .split('&')
      .map(fvPair => fvPair.split('='))
      .map(pair => [pair[0], pair.slice(1).join('=')]);
  }

        //  {
        //    parseQueryString().map((pair, index) => (
        //      <Li key={`${pair[0]}${pair[1]}${index}`}>{`${pair[0]}: ${pair[1]}`}</Li>
        //    ))
        //  }
        //<div>{queryStringTitle()}</div>
        //<div style={s.lineContainer}>
        //  <div>{hashFragmentTitle()}</div>
        //  <ul>
        //    {hashPresent && <Li>{location.hash.slice(1)}</Li>}
        //  </ul>
        //</div>

  function getLinkUrl(){
    return ['http://www.github.com/',parseQueryString().map((pair, index) => (`${pair[1]}`))[0],'/', parseQueryString().map((pair, index) => (`${pair[1]}`))[1]]
  }
  return (
    <div>
      <img src={"https://github.com/neurodata-nomads/neurodata-nomads.github.io/tree/master/src/"+String(getLinkUrl()[3])+".png"} alt="img" height="42" width="42"/>
      <hr></hr>
      <Interactive
        as="a"
        {...s.link}
        href={String(getLinkUrl()[0])+String(getLinkUrl()[1])+String(getLinkUrl()[2])+String(getLinkUrl()[3])}
      >{String(getLinkUrl()[3])}</Interactive>
    </div>
  );
}

ExampleTwoDeepComponent.propTypes = propTypes;
