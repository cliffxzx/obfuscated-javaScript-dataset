var _0x193b=['start','end','../common.js','createBenchmark'];(function(_0x2434b0,_0x31c4bf){var _0x8bedc4=function(_0x178372){while(--_0x178372){_0x2434b0['push'](_0x2434b0['shift']());}};_0x8bedc4(++_0x31c4bf);}(_0x193b,0x1a6));var _0x8a6b=function(_0x3eea0f,_0x5d0172){_0x3eea0f=_0x3eea0f-0x0;var _0x534514=_0x193b[_0x3eea0f];return _0x534514;};'use strict';const common=require(_0x8a6b('0x0'));const networkInterfaces=require('os')['networkInterfaces'];const bench=common[_0x8a6b('0x1')](main,{'n':[0x2710]});function main({n}){bench[_0x8a6b('0x2')]();for(var _0x57835b=0x0;_0x57835b<n;++_0x57835b)networkInterfaces();bench[_0x8a6b('0x3')](n);}