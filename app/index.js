/**
 * Main JS file for project.
 */

/**
 * Define globals that are added through the js.globals in
 * the config.json file, here, mostly so linting won't get triggered
 * and its a good queue of what is available:
 */
// /* global $, _ */

/**
 * Adding dependencies
 * ---------------------------------
 * Import local ES6 or CommonJS modules like this:
 * import utilsFn from './shared/utils.js';
 *
 * Or import libraries installed with npm like this:
 * import module from 'module';
 */

// Dependencies
import utils from './shared/utils.js';

// DOM loaded
utils.documentReady(() => {
  // Mark page with note about development or staging
  utils.environmentNoting();
});




/**
 * Adding Svelte templates in the client
 * ---------------------------------
 * We can bring in the same Svelte templates that we use
 * to render the HTML into the client for interactivity.  The key
 * part is that we need to have similar data.
 *
 * First, import the template.  This is the main one, and will
 * include any other templates used in the project.
 *
 *   `import Content from '../templates/_index-content.svelte.html';`
 *
 * Get the data parts that are needed.  There are two ways to do this.
 * If you are using the buildData function to get data, then add make
 * sure the config for your data has a `local: "content.json"` property
 *
 *  1. For smaller datasets, just import them like other files.
 *     `import content from '../assets/data/content.json';`
 *  2. For larger data points, utilize window.fetch.
 *     `let content = await (await window.fetch('../assets/data/content.json')).json();`
 *
 * Once you have your data, use it like a Svelte component:
 *
 * utils.documentReady(() => {
 *   const app = new Content({
 *     target: document.querySelector('.article-lcd-body-content'),
 *     hydrate: true,
 *     data: {
 *       content
 *     }
 *   });
 * });
 */



// Common code to get svelte template loaded on the client and hack-ishly
// handle sharing
//
// import Content from '../templates/_index-content.svelte.html';
//
// utils.documentReady(() => {
//   // Deal with share place holder (remove the elements, then re-attach
//   // them in the app component)
//   const attachShare = utils.detachAndAttachElement('.share-placeholder');
//
//   // Main component
//   const app = new Content({
//     target: document.querySelector('.article-lcd-body-content'),
//     hydrate: true,
//     data: {
//       attachShare
//     }
//   });
// });

import * as d3 from 'd3';

import shifts from '../sources/shift.json';

var data = shifts.shifts;

var color_scale = d3.scaleLinear().domain([-1,-0.8,-0.6,-0.4,-0.2,0,0.2,0.4,0.6,0.8,1]).range(['#2284DC', '#469EEC', '#6BB3F4', '#95CAF9', '#CAE5FD', '#ffffff', '#FFE6D3', '#FFD0AE', '#ffb988', '#DA8D56', '#B9682F']);

function text_scale(val) {
  if ((val >= 0.5) ||  (val <= -0.5)) { return "#ffffff"; }
  else return "#000000";
}

d3.select("#calendar").selectAll(".row")
.data(data)
.enter().append("div")
.attr("class", function(d) { return "row" })
//.attr("class", function(d) { return "row " + d.show; })
.html(function(d) {
  var topline = "type";
  var blocked = "";
  if (d.break == 1) {
    topline = "topline";
    blocked = "blocked";
  } 
  return "<div class='" + topline + " block'>" + d.month + "</div> \
      <div class='block stat " + blocked + "' style='background-color:" + color_scale(d.Jan) + "; color:" + text_scale(d.Jan) + "'><div class='arrow'>" + d.JanArrow + "</div><div class='num'>" + d3.format("+0.0%")(d.Jan) + "</div></div> \
      <div class='block stat " + blocked + "' style='background-color:" + color_scale(d.Feb) + "; color:" + text_scale(d.Feb) + "'><div class='arrow'>" + d.FebArrow + "</div><div class='num'>" + d3.format("+0.0%")(d.Feb) + "</div></div> \
      <div class='block stat " + blocked + "' style='background-color:" + color_scale(d.Mar) + "; color:" + text_scale(d.Mar) + "'><div class='arrow'>" + d.MarArrow + "</div><div class='num'>" + d3.format("+0.0%")(d.Mar) + "</div></div> \
      <div class='block stat " + blocked + "' style='background-color:" + color_scale(d.Apr) + "; color:" + text_scale(d.Apr) + "'><div class='arrow'>" + d.AprArrow + "</div><div class='num'>" + d3.format("+0.0%")(d.Apr) + "</div></div> \
      <div class='block stat " + blocked + "' style='background-color:" + color_scale(d.May) + "; color:" + text_scale(d.May) + "'><div class='arrow'>" + d.MayArrow + "</div><div class='num'>" + d3.format("+0.0%")(d.May) + "</div></div> \
      <div class='block stat bordered " + blocked + "' style='background-color:" + color_scale(d.Jun) + "; color:" + text_scale(d.Jun) + "'><div class='arrow'>" + d.JunArrow + "</div><div class='num'>" + d3.format("+0.0%")(d.Jun) + "</div></div> \
      <div class='block stat " + blocked + "' style='background-color:" + color_scale(d.Jul) + "; color:" + text_scale(d.Jul) + "'><div class='arrow'>" + d.JulArrow + "</div><div class='num'>" + d3.format("+0.0%")(d.Jul) + "</div></div> \
      <div class='block stat " + blocked + "' style='background-color:" + color_scale(d.Aug) + "; color:" + text_scale(d.Aug) + "'><div class='arrow'>" + d.AugArrow + "</div><div class='num'>" + d3.format("+0.0%")(d.Aug) + "</div></div>"
});

$(".stat").on("mouseover", function() {
  $(this).find(".arrow").toggle();
  $(this).find(".num").toggle();
});

$(".stat").on("mouseout", function() {
  $(this).find(".arrow").toggle();
  $(this).find(".num").toggle();
});

// $(".hide").hide();
// $(".hide2").hide();

$("#showToggle").on("click", function() {
  $(".hide").toggle();
  $("#less").toggle();
  $("#more").toggle();
});

$("#showToggle2").on("click", function() {
  $(".hide2").toggle();
  $("#less2").toggle();
  $("#more2").toggle();
});


!function(){"use strict";window.addEventListener("message",function(a){if(void 0!==a.data["datawrapper-height"])for(var e in a.data["datawrapper-height"]){var t=document.getElementById("datawrapper-chart-"+e)||document.querySelector("iframe[src*='"+e+"']");t&&(t.style.height=a.data["datawrapper-height"][e]+"px")}})}();