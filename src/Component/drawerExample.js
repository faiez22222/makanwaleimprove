import './Accordion.css'

import React, { useState , useRef } from 'react';

const DrawerExample = () => {
  const [isActive, setIsActive] = useState(false);
  const [panelHeight, setPanelHeight] = useState('0px');
  const panelRef = useRef(null);
  const title = 'hey'
  const content = "{<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>}"

  const toggleAccordion = () => {
    setIsActive(!isActive);
    setPanelHeight(isActive ? '0px' : `${panelRef.current.scrollHeight}px`);
  };
  

  return (
    <div>
      <button className={`accordion ${isActive ? 'active' : ''}`} onClick={toggleAccordion}>
        {title}
      </button>
      <div className="panel" style={{ maxHeight: panelHeight }} ref={panelRef}>
        {content}
      </div>
    </div>
  );
};

export default DrawerExample;
