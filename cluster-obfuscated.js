var _0x4311=['fork','listening','destroy','../common.js','PORT','cluster','isMaster','createBenchmark','bytes','buffer','../fixtures/simple-http-server.js','env'];(function(_0x5e1d2c,_0x2ef1cf){var _0x56f71c=function(_0x3c7eb5){while(--_0x3c7eb5){_0x5e1d2c['push'](_0x5e1d2c['shift']());}};_0x56f71c(++_0x2ef1cf);}(_0x4311,0x9f));var _0x5a74=function(_0x2d8f05,_0x4b81bb){_0x2d8f05=_0x2d8f05-0x0;var _0x4d74cb=_0x4311[_0x2d8f05];return _0x4d74cb;};'use strict';const common=require(_0x5a74('0x0'));const PORT=common[_0x5a74('0x1')];const cluster=require(_0x5a74('0x2'));if(cluster[_0x5a74('0x3')]){var bench=common[_0x5a74('0x4')](main,{'type':[_0x5a74('0x5'),_0x5a74('0x6')],'len':[0x4,0x400,0x19000],'c':[0x32,0x1f4]});}else{const port=parseInt(process['env'][_0x5a74('0x1')]||PORT);require(_0x5a74('0x7'))['listen'](port);}function main({type,len,c}){process[_0x5a74('0x8')]['PORT']=PORT;var _0x58a5e2=0x0;const _0x1ffbbf=cluster[_0x5a74('0x9')]();const _0x26844b=cluster[_0x5a74('0x9')]();cluster['on'](_0x5a74('0xa'),()=>{_0x58a5e2++;if(_0x58a5e2<0x2)return;setImmediate(()=>{const _0x2ad237='/'+type+'/'+len;bench['http']({'path':_0x2ad237,'connections':c},()=>{_0x1ffbbf['destroy']();_0x26844b[_0x5a74('0xb')]();});});});}