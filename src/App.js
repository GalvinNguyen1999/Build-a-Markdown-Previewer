import './App.css';
import { marked } from 'marked';
import Prism from 'prismjs';
import React from 'react';

marked.setOptions({
  breaks: true,
  highlight: function (code) {
    return Prism.highlight(code, Prism.languages.javascript, "javascript");
  }
});
 
const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}</a>`;
};

const defaultContent = `
![Galgin Logo](https://scontent.fbmv1-1.fna.fbcdn.net/v/t39.30808-6/294296417_118109570950405_3209061799603199781_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=4mhyMYaTMFMAX8SQ1uN&_nc_ht=scontent.fbmv1-1.fna&oh=00_AfCWx4VJSkQFdtaTjqbjBPwhhIBJ9Lhs6t7TG4wAu0kKWg&oe=64764373)

# Hello, 
## You'r welcom at
### Đình Cường (Gavin)


\`<div>Inline code</div>\`

\`\`\`
const multipleLineCode = (param) => {
    if(param) {
        return param
    }
}
\`\`\`

**Some bold text**

[Visit My Channel](https://github.com/GalvinNguyen1999)

> Block Quot

1. First list item
2. Second list item
`;


const Editor = ({ content, handleTextareaChange }) => (
  <textarea id="editor" value={content} onChange={handleTextareaChange} />
);

const Preview = ({ content }) => (
  <div
    id="preview"
    dangerouslySetInnerHTML={{
      __html: marked.parse(content, { renderer: renderer })
    }}
  />
);

function App() {
  const [content, setContent] = React.useState(defaultContent);
  const handleTextareaChange = (event) => {
    setContent(event.target.value);
  };
  return (
    <div className="main">
      <Editor content={content} handleTextareaChange={handleTextareaChange} />
      <Preview content={content} />
    </div>
  );
}

export default App;
