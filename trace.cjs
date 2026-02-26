const Jimp = require('jimp');
const potrace = require('potrace');
const fs = require('fs');

async function processImage() {
  const image = await Jimp.read('public/copes-vulcan-header.png');

  // Invert image so white logo becomes black (which potrace traces)
  image.invert();
  image.greyscale();
  // Boost contrast significantly to ensure pure black and pure white
  image.contrast(1);

  const tempFile = 'temp_inverted.png';
  await image.writeAsync(tempFile);

  potrace.trace(tempFile, { color: 'currentColor' }, function (err, svg) {
    if (err) throw err;

    // Convert SVGs standard attributes to React-compatible JSX (camelCase)
    // and inject props
    let jsxSvg = svg
      .replace(/<svg\s+([^>]+)>/, '<svg {...props} $1>')
      .replace(/xmlns:xml/g, 'xmlnsXlink')
      .replace(/xml:space/g, 'xmlSpace')
      .replace(/<g[^>]*>/g, '<g fill="currentColor">');

    const reactComponent = `
import React from 'react';

export default function CopesVulcanIcon(props) {
  return (
    ${jsxSvg}
  );
}
    `.trim();

    fs.writeFileSync('src/components/CopesVulcanIcon.jsx', reactComponent);
    fs.unlinkSync(tempFile);
    console.log('SVG component generated!');
  });
}

processImage().catch(console.error);
