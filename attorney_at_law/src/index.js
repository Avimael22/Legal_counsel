import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Thumbnail from './components/thumbnail/index';
import { ThumbnailWithHeading } from './components/thumbnail/index';
import './components/thumbnail/styles.css';


const thumbnailRoot = ReactDOM.createRoot(document.getElementById("thumbnail-container"));
thumbnailRoot.render(
  <React.StrictMode>
    <Thumbnail className={"thumbnail-container"} icon={"fa-solid fa-bolt thumbnail-icon"} content={"Instant productivity"}/>
    <Thumbnail className={"thumbnail-container"} icon={"fa-solid fa-list-check thumbnail-icon"} content={"Expense Management"}/>
    <Thumbnail className={"thumbnail-container"} icon={"fa-solid fa-shield thumbnail-icon"} content={"Advanced Technology"}/>
  </React.StrictMode>
)

const smallThumbnailRoot = ReactDOM.createRoot(document.getElementById("small-thumbnail-container"));
smallThumbnailRoot.render(
  <React.StrictMode>
    <Thumbnail className={"small-thumbnail-container"} icon={"fa-solid fa-blog brand-icons"} content={"Blooming"} />
    <Thumbnail className={"small-thumbnail-container"} icon={"fa-solid fa-baht-sign brand-icons"} content={"BuildRight"} /> 
    <Thumbnail className={"small-thumbnail-container"} icon={"fa-solid fa-florin-sign brand-icons"} content={"Flowbot"} />
    <Thumbnail className={"small-thumbnail-container"} icon ={"fa-brands fa-evernote brand-icons"} content={"Expor"} />
    <Thumbnail className={"small-thumbnail-container"} icon={"fa-solid fa-rotate-right brand-icons"} content={"Redo"} />
  </React.StrictMode>
  
)

const headingThumbnail = ReactDOM.createRoot(document.getElementById("heading-thumbnail-container"));
headingThumbnail.render(
  <React.StrictMode>
    <ThumbnailWithHeading headingContent={"Get More Done In A Week"} className={"no-background content-thumbnail"} paragraphContent={"Design your productiity with smarter tools designed to streamline your workflow to automate tasks, stay organized."} />
    <ThumbnailWithHeading headingContent={"2X"} className={"blue-background content-thumbnail"} paragraphContent={"Double Productivity"} />
    <Thumbnail className={"blue-background content-thumbnail"} icon={"fa-solid fa-chart-line"} content={"Efficiency Increase Per Transfer"} />
    <Thumbnail className={"blue-background content-thumbnail"} icon={"fa-solid fa-arrow-right-arrow-left"} content={"Centralize Your Fincnaces"} />
    <ThumbnailWithHeading headingContent={"130%"} className={"blue-background content-thumbnail"} paragraphContent={"More Activity"} />

  </React.StrictMode>
)

const coloredIcons = ReactDOM.createRoot(document.getElementById("colored-icons"));
coloredIcons.render(
  <React.StrictMode>
    <ThumbnailWithHeading headingContent={"First Class Software"} paragraphContent={"set real-time insights, seamless transactions, and advanced tools to manage your wealth effortlessly"} className={"no-background content-thumbnail"}/>
    <Thumbnail className={"icon-background content-thumbnail"} icon={"fa-solid fa-wallet"} content={"Safe Storage"} />
    <Thumbnail className={"icon-background content-thumbnail"} icon={"fa-solid fa-fingerprint"} content={"Secure"}/>
    <Thumbnail className={"icon-background content-thumbnail"} icon={"fa-solid fa-comment-dollar"} content={"Earn Interest"} />
    <Thumbnail className={"icon-background content-thumbnail"} icon={"fa solid fa-people-group"} content={"Family Plans"} />
  </React.StrictMode>
)

const footerThumbnail = ReactDOM.createRoot(document.getElementById("footer-thumbnail-container"));
footerThumbnail.render(
  <React.StrictMode>
    <Thumbnail icon={"fa-solid fa-money-bill-transfer"} className={"footer-thumbnail"} content={<div class="footer-content"><p>contact</p><p>hello@etran.com</p><p>Instagram</p><p>X</p><p>LinkedIn</p></div>}/>
    <ThumbnailWithHeading className={"footer-thumbnail"} headingContent={"Etran"} paragraphContent={<div class="footer-content"><span>Terms and Conditions</span><span>Privacy</span></div>}/>
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
