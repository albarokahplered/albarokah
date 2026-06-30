const fs = require('fs');

let html = fs.readFileSync('original-website/index.html', 'utf8');

// Extract body content between Topbar End and Footer Start
const start = html.indexOf('<!-- Hero Start -->');
const end = html.indexOf('<!-- Footer Start -->');

let content = html.substring(start, end);

// Convert class to className
content = content.replace(/class="/g, 'className="');

// Fix unclosed tags
content = content.replace(/<img(.*?)>/g, (match, p1) => {
    if (p1.endsWith('/')) return match;
    return `<img${p1} />`;
});
content = content.replace(/<input(.*?)>/g, (match, p1) => {
    if (p1.endsWith('/')) return match;
    return `<input${p1} />`;
});
content = content.replace(/<hr(.*?)>/g, (match, p1) => {
    if (p1.endsWith('/')) return match;
    return `<hr${p1} />`;
});
content = content.replace(/<br(.*?)>/g, (match, p1) => {
    if (p1.endsWith('/')) return match;
    return `<br${p1} />`;
});

// Any style attributes?
content = content.replace(/style="([^"]*)"/g, (match, p1) => {
    // Basic conversion for style="width: 100%;" etc. Not perfect but often enough for templates.
    // If it's too complex, manual fix needed.
    return match; // We will leave style as is and manually fix if React complains, or try a simple regex if simple.
});
// Let's just fix the style="background: ..." manually if there is any.
// Actually, let's check if there are style attributes.
const styleMatches = content.match(/style="([^"]*)"/g);
if (styleMatches) {
    console.log("Found style attributes, please fix manually:", styleMatches);
}

const component = `import React from 'react';

function Home() {
  return (
    <>
      ${content}
    </>
  );
}

export default Home;
`;

fs.mkdirSync('src/pages', { recursive: true });
fs.writeFileSync('src/pages/Home.jsx', component);
console.log('Home.jsx created successfully.');
