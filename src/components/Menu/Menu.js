import React from 'react';
import './Menu.css'

const Menu = (props) => {
  return (
    <aside>
      <button id="local" onClick={props.updateState}>Local News</button>
      <button id="entertainment" onClick={props.updateState}>Entertainment</button>
      <button id="health" onClick={props.updateState}>Health</button>
      <button id="science" onClick={props.updateState}>Science</button>
      <button id="technology" onClick={props.updateState}>Technology</button>
    </aside>
  )
}


export default Menu;