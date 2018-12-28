import React from 'react';

const Scrollable = (props) => {
  return (
      <div style={{overflow: 'scroll', height: '800px'}}>
        {props.children}
      </div>
  )
};

export default Scrollable;