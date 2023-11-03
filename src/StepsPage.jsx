import React from "react";

function StepsPage() {
  return (
    <div>
      <h2>Follow These Steps:</h2>
      <ol>
        <li>Click the button below to redirect to the GitHub repository.</li>
        <li>Download the "config.ts" file from this page and add it to your project's root folder.</li>
        <li>Run the following commands in your project directory:<br/>
          <code>npm install</code> <br/>
          <code>npm run apply</code>
        </li>
      </ol>
      <a href="https://github.com/joaosilvalopes/linkedin-easy-apply-bot" target="_blank" rel="noopener noreferrer">Go to GitHub Repository</a>
    </div>
  );
}

export default StepsPage;
