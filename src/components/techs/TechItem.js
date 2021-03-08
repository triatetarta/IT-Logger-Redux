import React from 'react';

const TechItem = ({ firstName, lastName }) => {
  return (
    <li className='colletion-item'>
      <div>
        {firstName}
        {lastName}
        <a href='#!' className='secondary-content'>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

export default TechItem;
