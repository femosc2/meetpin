<h1 align="center">MeetPin</h1>

## 1. Developers

<ul>
  <li> <a href="https://github.com/addicool">Adam Nilsson </a></li>
  <li> <a href="https://github.com/femosc2">Felix Morau </a></li>
  <li> <a href="https://github.com/VictorPersson ">Victor Persson </a></li>
</ul>

## 2. Requirements

<ul>
  <li> <a href="https://nodejs.org/en/download/">Node</a></li>
  <li> <a href="https://www.npmjs.com/get-npm">npm</a></li>
  <li> <a href="https://cloud.google.com/maps-platform/?__utma=102347093.92387519.1558278983.1559032155.1559032155.1&__utmb=102347093.0.10.1559032155&__utmc=102347093&__utmx=-&__utmz=102347093.1559032155.1.1.utmcsr=google|utmccn=(organic)|utmcmd=organic|utmctr=(not%20provided)&__utmv=-&__utmk=129617036&_ga=2.78148369.463654512.1559032149-92387519.1558278983#get-started">A Google Maps+Places API key.</a></li>
</ul>
  
  
## 3. Installation

<ol>
  <li> Clone / download the repo </li> 
  <li> Open the terminal/cmd and cd into the cloned repo. </li>
  <li>Create a file called config.js which includes the code

  ```javascript
const APIkeys = {
    googleMaps: "{{ YOUR GOOGLE MAPS + PLACES KEY HERE }}"
}
module.exports = APIkeys
```

</li>
  <li> write <code> npm install </code> </li>
</ol>

## 4. Run the application

<ol>
  <li> cd into the repo </li> 
  <li> write <code>$ npm start </code> </li>
</ol>

## Justification of React

React was chosen as the framework due to the single-page nature of the application. Reacts strenght lies in building applications where the page gets updated regulary without updating the page, therefore a framework such as Jquery was discarded in favor of React. [1]
React was chosen in favor of Angular as React is a more popular framework, it is more lightweight and the developers did not have to learn TypeScript (as they had no experience with typed languages). [2] React also have a much more active community which makes the process of fixing errors easier. [2]

## Sources.
[1]. Anton Tibblin, Malmö Universitet, Sweden, Föreläsning 10. JS-ramverk

[2] https://gist.github.com/tkrotoff/b1caa4c3a185629299ec234d2314e190 Github