/* =====================================================
Copyright (c) 2012 Satoshi Takano (ikke.co)

The MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
===================================================== */

var namespace_lib_core = "jp.co.imgsrc";
var namespace_lib_app = "jp.co.imgsrc.application";
var namespace_lib_geom = "jp.co.imgsrc.geom";
var namespace_lib_events = "jp.co.imgsrc.events";
var namespace_lib_tween = "jp.co.imgsrc.tween";
var namespace_lib_net = "jp.co.imgsrc.net";
var namespace_lib_display = "jp.co.imgsrc.display";
var namespace_lib_ui = "jp.co.imgsrc.ui";

/* simple logger */
function trace() {for(var i=0;i<arguments.length;i++)if(window.console){console.log(arguments[i]);}}
function warn(message) {alert("Warning : " + message);}