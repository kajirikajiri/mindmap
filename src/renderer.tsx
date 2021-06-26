import React from 'react';
import ReactDOM from 'react-dom';

const App: React.FC = () => <div>
  <h3>File Open/Save</h3>
  <button id="openFile">Open</button>
  <button id="saveFile">Save</button>
  <br/>
  <textarea id="preview"></textarea>
</div>

ReactDOM.render(<App />, document.getElementById('root'));
