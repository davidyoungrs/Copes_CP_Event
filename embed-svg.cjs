const fs = require('fs');

const buffer = fs.readFileSync('public/copes-vulcan-header.png');
const base64 = buffer.toString('base64');

const svgCode = `<svg viewBox="0 0 1528 239" xmlns="http://www.w3.org/2000/svg" {...props}>
  <image href={"data:image/png;base64," + "${base64}"} width="1528" height="239" />
</svg>`;

const jsxCode = `import React from 'react';\n\nexport default function CopesVulcanIcon(props) {\n  return (\n    ${svgCode}\n  );\n}\n`;

fs.writeFileSync('src/components/CopesVulcanIcon.jsx', jsxCode);
console.log("Created CopesVulcanIcon.jsx");
