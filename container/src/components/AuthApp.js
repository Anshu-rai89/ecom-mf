import React, { useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import { mount } from "auth/AuthApp";

export default ({ onSignedIn }) => {
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
      initialPath: history.location.pathname,
      onSignedIn
    });
    history.listen(handleNavigate);
  }, []);
  return <div ref={ref}></div>;
};
