// ==UserScript==
// @name         Custom Webpage Script
// @namespace    my-custom-namespace
// @version      1
// @description  Adds buttons and a dropdown menu, and removes unwanted buttons from a custom webpage
// @match        http://localhost:7861/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  // Remove unwanted buttons
  const unwantedButtons = document.querySelectorAll('button');
  unwantedButtons.forEach(button => {
    console.log(button.textContent);
    if (button.textContent === 'txt2img' ||
        button.textContent === 'Extras' ||
        button.textContent === 'PNG Info' ||
        button.textContent === 'Checkpoint Merger' ||
        button.textContent === 'Settings' ||
        button.textContent === 'Extensions') {
      button.parent().remove();
    }
  });
  function replaceTextareaContent() {
      const textarea = document.querySelector('#component-187 textarea');
      if (textarea) {
            textarea.value = "abcdefg";
        }

  const tabArea = document.querySelector('tab-nav.scroll-hide.svelte-1g805jl.__web-inspector-hide-shortcut__');
  if (tabArea) {
    tabArea.style.display = 'none';
  }
  const footer = document.getElementById('footer');
  if (footer) {
    footer.style.display = 'none';
  }
  const side = document.getElementById('component-195');
  if (side) {
     side.style.display = 'none';
  }
    const ids2 = document.getElementById("quicksettings");
  if (ids2) {
     ids2.style.display = 'none';
  }
  const sideUpper = document.getElementById('resize-mode');
  if (sideUpper) {
     sideUpper.style.display = 'none';
  }
  const c307 = document.getElementById('component-307');
  if (c307) {
     c307.style.display = 'none';
  }
  const c310 = document.getElementById('component-310');
  if (c310) {
     c310.style.display = 'none';
  }
  const c336 = document.getElementById('component-336');
  if (c336) {
     c336.style.display = 'none';
  }
  const c463 = document.getElementById('component-463');
  if (c463) {
     c463.style.display = 'none';
  }
  const c281 = document.getElementById('component-281');
  if (c281) {
     c281.style.display = 'none';
  }
  const selection = document.getElementById('sampler_selection_img2img');
  if (selection) {
     selection.style.display = 'none';
  }
  const copyi = document.getElementById('img2img_copy_to_img2img');
  if (copyi) {
     copyi.style.display = 'none';
  }
  const negPrompt = document.getElementById('img2img_prompt_container');
  if (negPrompt){
     negPrompt.style.display = 'none';
  }
  const sideUpper2 = document.querySelector("block gradio-radio svelte-mppz8v padded");
  if (sideUpper2) {
      sideUpper2.style.display = 'none';
  }
  const seedRow = document.getElementById('img2img_seed_row');
  if (seedRow) {
     seedRow.style.display = 'none';
  }
    const img2img_override_settings_rows = document.getElementById('img2img_override_settings_rows');
  if (img2img_override_settings_rows) {
     img2img_override_settings_rows.style.display = 'none';
  }
        const img2img_script_container = document.getElementById('img2img_script_container');
  if (img2img_script_container) {
     img2img_script_container.style.display = 'none';
  }
  const tools = document.getElementById('img2img_tools');
  if (tools) {
     tools.style.display = 'none';
  }
  const sideBox = document.querySelector('form.svelte-b6y5bg');
  if (sideBox) {
     sideBox.style.display = 'none';
  }
  const styleRow = document.getElementById('img2img_styles_row');
  if (styleRow) {
     styleRow.style.display = 'none';
  }
  const quickSettings = document.querySelector("wrap.svelte-1p9xokt");
  if (quickSettings) {
      quickSettings.style.display = 'none';
  }
    };

   function replaceTextareaContentEarly() {
      const textarea = document.querySelector('#component-187 textarea');
      if (textarea) {
         textarea.value = "a photo of a person with xbvcewq, close-up";
      }
   }
   function replaceTextareaContentMiddle() {
      const textarea = document.querySelector('#component-187 textarea');
      if (textarea) {
         textarea.value = "a photo of a person with bfdsewf, close-up";
      }
   }
   function replaceTextareaContentLate() {
      const textarea = document.querySelector('#component-187 textarea');
      if (textarea) {
         textarea.value = "a photo of a person with exfxzjpe, close-up";
      }
   }


  const buttonContainer = document.createElement('div');
  buttonContainer.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; padding: 10px; display: flex; border-radius: 10px; background-color: white; z-index: 999;';
  const earlyButton = document.createElement('button');
  earlyButton.textContent = 'Early Acne';
  earlyButton.style.cssText = 'border-radius: 5px; padding: 10px; margin-right: 10px;';
  buttonContainer.appendChild(earlyButton);
  earlyButton.addEventListener('click', replaceTextareaContentEarly);
  const middleButton = document.createElement('button');
  middleButton.textContent = 'Late Acne';
  middleButton.style.cssText = 'border-radius: 5px; padding: 10px; margin-right: 10px;';
  middleButton.addEventListener('click', replaceTextareaContentMiddle);
  buttonContainer.appendChild(middleButton);
  const lateButton = document.createElement('button');
  lateButton.textContent = 'Lupus';
  lateButton.style.cssText = 'border-radius: 5px; padding: 10px;';
  lateButton.addEventListener('click', replaceTextareaContentLate);
  buttonContainer.appendChild(lateButton);
  const body = document.querySelector('body');
  body.insertBefore(buttonContainer, body.firstChild);

      // Create button element
    const button = document.createElement('button');
    button.textContent = 'Replace Textarea Content';
    button.style.position = 'fixed';
    button.style.bottom = '20px';
    button.style.right = '20px';
    button.style.zIndex = '10000';

    // Add click event listener to the button
    button.addEventListener('click', replaceTextareaContent);

    // Add button to the webpage
    document.body.appendChild(button);
})();
