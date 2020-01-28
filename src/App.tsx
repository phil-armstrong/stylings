import React from 'react';
import { Normalize } from 'styled-normalize';
import { Navbar, Container } from './navbar/navbar';
import { Angry } from 'styled-icons/fa-regular';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as icons from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

interface ButProp {
  icon?: IconDefinition;
}

const Button: React.FC<ButProp> = ({children, icon}) => {
 return <button>
   {icon && <FontAwesomeIcon icon={icon} />}
   {children}
 </button> 
}

const App: React.FC = () => {
  return (
    <>
    <Normalize />

    <Navbar>
      <Container>Cheese</Container>
    </Navbar>

    <Angry size="1em" />
    <FontAwesomeIcon icon={icons.faArrowDown} />
    
    <div className="typography">
      <h1>Header 1</h1>
      <h2>Header 2</h2>
      <h3>Header 3</h3>
      <h4>Header 4</h4>
      <h5>Header 5</h5>
      <h6>Header 6</h6>
      <p>This is a very long paragraph. This is a very long paragraph. This is a very long paragraph. This is a very long paragraph. This is a very long paragraph. This is a very long paragraph. This is a very long paragraph. This is a very long paragraph. This is a very long paragraph. This is a very long paragraph. This is a very long paragraph. This is a very long paragraph. This is a very long paragraph. This is a very long paragraph. This is a very long paragraph. This is a very long paragraph. This is a very long paragraph. This is a very long paragraph. This is a very long paragraph. </p>
      <a href="#">Link</a>
    </div>

    <hr />

    <ul>
      <li>Unordered list item 1</li>
      <li>Unordered list item 2</li>
      <li>Unordered list item 3</li>
    </ul>

    <ol>
      <li>Unordered list item 1</li>
      <li>Unordered list item 2</li>
      <li>Unordered list item 3</li>
    </ol>

    <dl>
      <dt>Title 1</dt>
      <dd>Value 1</dd>
      <dt>Title 2</dt>
      <dd>Value 2</dd>
      <dt>Title 3</dt>
      <dd>Value 3</dd>
    </dl>

    <Button>
      <span>Submit</span>
      <FontAwesomeIcon icon={icons.faArrowRight} />
    </Button>
    <Button icon={icons.faArrowLeft}>
      <span>Submit</span>
    </Button>
    <button type="reset">Reset</button>
    <button type="button">Submit</button>

    <input type="text" />
    <textarea>textarea</textarea>

    <label>
      <input type="checkbox" />
      Checkbox
    </label>

    <select>
      <option>Cheese</option>
      <option>Petrol</option>
    </select>
    </>
  );
}

export default App;
