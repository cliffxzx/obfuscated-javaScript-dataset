var _0x2bc4=['../common.js','for-of','forEach','start','end','for','for-in','Unexpected\x20method\x20\x22'];(function(_0x3cf708,_0x49e60d){var _0x5819c4=function(_0x32c175){while(--_0x32c175){_0x3cf708['push'](_0x3cf708['shift']());}};_0x5819c4(++_0x49e60d);}(_0x2bc4,0x178));var _0x2b12=function(_0x5b335b,_0x327762){_0x5b335b=_0x5b335b-0x0;var _0x407fce=_0x2bc4[_0x5b335b];return _0x407fce;};'use strict';const common=require(_0x2b12('0x0'));const bench=common['createBenchmark'](main,{'method':['for',_0x2b12('0x1'),'for-in',_0x2b12('0x2')],'count':[0x5,0xa,0x14,0x64],'n':[0x4c4b40]});function useFor(_0x2b7ab5,_0x1e009a,_0x2f614a){bench[_0x2b12('0x3')]();for(var _0x5d8d50=0x0;_0x5d8d50<_0x2b7ab5;_0x5d8d50++){for(var _0x18470a=0x0;_0x18470a<_0x2f614a;_0x18470a++){const _0x53c11f=_0x1e009a[_0x18470a];}}bench[_0x2b12('0x4')](_0x2b7ab5);}function useForOf(_0x521669,_0x369b70){var _0x3c8169;bench[_0x2b12('0x3')]();for(var _0x59223a=0x0;_0x59223a<_0x521669;_0x59223a++){for(_0x3c8169 of _0x369b70){}}bench[_0x2b12('0x4')](_0x521669);}function useForIn(_0x5941a3,_0x35fa87){bench['start']();for(var _0x4c21ac=0x0;_0x4c21ac<_0x5941a3;_0x4c21ac++){for(var _0x5d0d6c in _0x35fa87){const _0x850d41=_0x35fa87[_0x5d0d6c];}}bench['end'](_0x5941a3);}function useForEach(_0x26ca54,_0x5eb55d){bench['start']();for(var _0x8c1a23=0x0;_0x8c1a23<_0x26ca54;_0x8c1a23++){_0x5eb55d[_0x2b12('0x2')](_0x3ee743=>{});}bench[_0x2b12('0x4')](_0x26ca54);}function main({n,count,method}){const _0x40ac5f=new Array(count);var _0x2f6f90;for(var _0x170699=0x0;_0x170699<count;_0x170699++)_0x40ac5f[_0x170699]=_0x170699;switch(method){case'':case _0x2b12('0x5'):_0x2f6f90=useFor;break;case _0x2b12('0x1'):_0x2f6f90=useForOf;break;case _0x2b12('0x6'):_0x2f6f90=useForIn;break;case _0x2b12('0x2'):_0x2f6f90=useForEach;break;default:throw new Error(_0x2b12('0x7')+method+'\x22');}_0x2f6f90(n,_0x40ac5f,count);}