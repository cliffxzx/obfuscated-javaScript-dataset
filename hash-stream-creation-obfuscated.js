var _0x2850=['sha256','asc','utf','hex','binary','buffer','legacy','stream','test','repeat','ascii','utf8','alloc','unknown\x20message\x20type:\x20','start','digest','from','setEncoding','write','end','../common.js','crypto','createBenchmark'];(function(_0x455bc9,_0x302c8c){var _0x25833c=function(_0x16a6a1){while(--_0x16a6a1){_0x455bc9['push'](_0x455bc9['shift']());}};_0x25833c(++_0x302c8c);}(_0x2850,0x184));var _0x50b8=function(_0x5ec0fb,_0x3d5032){_0x5ec0fb=_0x5ec0fb-0x0;var _0x25450a=_0x2850[_0x5ec0fb];return _0x25450a;};// throughput benchmark
// creates a single hasher, then pushes a bunch of data through it
'use strict';const common=require(_0x50b8('0x0'));const crypto=require(_0x50b8('0x1'));const bench=common[_0x50b8('0x2')](main,{'writes':[0x1f4],'algo':[_0x50b8('0x3'),'md5'],'type':[_0x50b8('0x4'),_0x50b8('0x5'),'buf'],'out':[_0x50b8('0x6'),_0x50b8('0x7'),_0x50b8('0x8')],'len':[0x2,0x400,0x19000,0x400*0x400],'api':[_0x50b8('0x9'),'stream']});function main({api,type,len,out,writes,algo}){if(api===_0x50b8('0xa')&&/^v0\.[0-8]\./[_0x50b8('0xb')](process['version'])){console['error']('Crypto\x20streams\x20not\x20available\x20until\x20v0.10');api=_0x50b8('0x9');}var _0x1721c6;var _0x1c2932;switch(type){case _0x50b8('0x4'):_0x1721c6='a'[_0x50b8('0xc')](len);_0x1c2932=_0x50b8('0xd');break;case'utf':_0x1721c6='ü'[_0x50b8('0xc')](len/0x2);_0x1c2932=_0x50b8('0xe');break;case'buf':_0x1721c6=Buffer[_0x50b8('0xf')](len,'b');break;default:throw new Error(_0x50b8('0x10')+type);}const _0x447344=api===_0x50b8('0xa')?streamWrite:legacyWrite;bench[_0x50b8('0x11')]();_0x447344(algo,_0x1721c6,_0x1c2932,writes,len,out);}function legacyWrite(_0x5aef8a,_0x89c630,_0x2ca96f,_0x32f0ec,_0x3e2c9a,_0xb7610b){const _0x188ad5=_0x32f0ec*_0x3e2c9a;const _0x17408b=_0x188ad5*0x8;const _0x483d77=_0x17408b/(0x400*0x400*0x400);while(_0x32f0ec-->0x0){const _0x4ec453=crypto['createHash'](_0x5aef8a);_0x4ec453['update'](_0x89c630,_0x2ca96f);var _0x4db68e=_0x4ec453[_0x50b8('0x12')](_0xb7610b);if(_0xb7610b==='buffer'&&typeof _0x4db68e==='string')_0x4db68e=Buffer[_0x50b8('0x13')](_0x4db68e,'binary');}bench['end'](_0x483d77);}function streamWrite(_0x32112b,_0x1b670e,_0x355f0a,_0x4a0c38,_0x86abd,_0x31cfd2){const _0xf12b68=_0x4a0c38*_0x86abd;const _0x2f7947=_0xf12b68*0x8;const _0x185011=_0x2f7947/(0x400*0x400*0x400);while(_0x4a0c38-->0x0){const _0x3df1f9=crypto['createHash'](_0x32112b);if(_0x31cfd2!==_0x50b8('0x8'))_0x3df1f9[_0x50b8('0x14')](_0x31cfd2);_0x3df1f9[_0x50b8('0x15')](_0x1b670e,_0x355f0a);_0x3df1f9['end']();_0x3df1f9['read']();}bench[_0x50b8('0x16')](_0x185011);}