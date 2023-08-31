import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../css/Button.css'

const Button = () => {
  return (
    <button className='button'>Button</button>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Button/>);

//rafce to create component

//npm run storybook

//react fragment can be useful for returning one parent element