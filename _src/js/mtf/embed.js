
let tag = document.createElement('script');
tag.src = 'https://w3dom.com/assets/js/embed.js?' + Date.now();
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
