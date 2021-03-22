import React, {useState} from 'react';
import marked from 'marked';
import './App.css';

export default function App() {
  const [markdown, setMarkdown] = useState(`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`);
  const updateMarkdown = (e) => {
    setMarkdown(e);
  };
  return (
    <body>
      <div>
        <h1 id="title">Markdown Previewer</h1>
        <div id="titlescontainer">
          <h1 id="editorTitle">Editor</h1>
          <h1 id="previewerTitle">Previewer</h1>
        </div>
        <div id="container">
          <textarea
            id="editor"
            onChange={(e) => {
              updateMarkdown(e.target.value);
            }}
          >
            {markdown}
          </textarea>
          <div
            id="preview"
            dangerouslySetInnerHTML={{ __html: marked(markdown) }}
          ></div>
        </div>
      </div>
    </body>
  );
}


