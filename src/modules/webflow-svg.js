
/*
 * webflow-svg
 * 
 * Sygnal Technology Group
 * http://sygnal.com
 * 
 * CSS Utilities
 */

import { generateHtmlId } from '/src/modules/webflow-id.js';
import { getColor, getBgColor } from '/src/modules/webflow-css.js';

// Gets the computed style for a particular element
// Including classes, styles, and locally-applied styles 
// https://stackoverflow.com/a/16591432/1849956
// TODO: TEST cross-browser?

export var inlineAllTaggedSvgs = function () {

    // Select all tagged SVGs
    // TODO: restrict to img elems?
    // Background-image elems?
    var svgs = $(".wfu-svg");

    console.log(`svgs = ${svgs.length}`);

    //    console.log(`svgs = ${svgs.map().length}`);

    console.log(svgs.constructor.name);
    console.log(typeof (svgs));

    //    console.log(svgs.constructor.name);
    //    console.log(typeof (svgs[0]));

    svgs.each(function (index) {

        console.log(typeof (svgs[index]));
        console.log(typeof (this));

        console.log(svgs[index].constructor.name);
        console.log(this.constructor.name);

        inlineSvg(this);

    });

}

export var inlineSvg = function (el) {

    var svg1 = el; // svgs[index];

    var color = getColor(svg1);
    var bgColor = getBgColor(svg1);
    var src = svg1.src;

    // Match image size
    var width = svg1.width;
    var height = svg1.height;
    if (height == 0) height = width;

    // Generate unique ID
    var id = generateHtmlId();
    console.log(id);

    // Get SVG file content
    $.get(src, function (data) {
        //$(".result").html(data);
        //alert("Load was performed.");

        //        <style>
        //            .wfu-svg {
        //                visibility: hidden;
        //}
        //</style>

        // Prepare SVG content
        var svgElem = new XMLSerializer().serializeToString(data.documentElement);

        // Prepare CSS style
        var style = `
            <style>
                #${id} {
                    width: ${width}px;
                    height: ${height}px;
                    display: inline-block;
                    vertical-align: middle;
                }
                #${id} svg {
                    width: ${width}px;
                    height: ${height}px;
                    display: inline-block;
                }
                #${id} svg path {
                    fill: ${color};
                }
            </style>`;

        // Prepare DIV wrapper
        var div = `
            <div id='${id}'>
                ${svgElem}
            </div>`;

        // Emit
        // HACK: Separate these, push CSS to head
        $(svg1).replaceWith(
            style + div
        );

    });

}


