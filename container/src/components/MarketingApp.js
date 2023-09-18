import React, {useEffect, useRef} from "react";
import {useHistory} from 'react-router-dom';
import { mount} from 'marketing/MarketingApp';

export default () => {
  const ref = useRef(null);
  const history = useHistory();
  function onNavigate({ pathname: nextPathname }) {
    if (history.location.pathname !== nextPathname) {
      history.push(nextPathname);
    }
  }
  useEffect(() => {
    const { handleNavigate } = mount(ref.current, {
      onNavigate,
      initialPath: history.location.pathname
    });
    history.listen(handleNavigate);
  }, []);
  return <div ref={ref}></div>;
};