var _0x5514=['should\x20fill\x20with\x20null','groupByEveryN','toEqual'];(function(_0x690db2,_0x4e4980){var _0x5a5ce5=function(_0x276320){while(--_0x276320){_0x690db2['push'](_0x690db2['shift']());}};_0x5a5ce5(++_0x4e4980);}(_0x5514,0x1c3));var _0x424b=function(_0x3f9a28,_0x47dd6f){_0x3f9a28=_0x3f9a28-0x0;var _0x4556cd=_0x5514[_0x3f9a28];return _0x4556cd;};/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @emails oncall+react_native
 */
'use strict';describe(_0x424b('0x0'),()=>{const _0x3062ca=require(_0x424b('0x0'));it('should\x20group\x20by\x20with\x20different\x20n',()=>{expect(_0x3062ca([0x1,0x2,0x3,0x4,0x5,0x6,0x7,0x8,0x9],0x1))[_0x424b('0x1')]([[0x1],[0x2],[0x3],[0x4],[0x5],[0x6],[0x7],[0x8],[0x9]]);expect(_0x3062ca([0x1,0x2,0x3,0x4,0x5,0x6,0x7,0x8,0x9],0x2))[_0x424b('0x1')]([[0x1,0x2],[0x3,0x4],[0x5,0x6],[0x7,0x8],[0x9,null]]);expect(_0x3062ca([0x1,0x2,0x3,0x4,0x5,0x6,0x7,0x8,0x9],0x3))[_0x424b('0x1')]([[0x1,0x2,0x3],[0x4,0x5,0x6],[0x7,0x8,0x9]]);expect(_0x3062ca([0x1,0x2,0x3,0x4,0x5,0x6,0x7,0x8,0x9],0x4))[_0x424b('0x1')]([[0x1,0x2,0x3,0x4],[0x5,0x6,0x7,0x8],[0x9,null,null,null]]);});it(_0x424b('0x2'),()=>{expect(_0x3062ca([],0x4))[_0x424b('0x1')]([]);expect(_0x3062ca([0x1],0x4))[_0x424b('0x1')]([[0x1,null,null,null]]);expect(_0x3062ca([0x1,0x2],0x4))['toEqual']([[0x1,0x2,null,null]]);expect(_0x3062ca([0x1,0x2,0x3],0x4))[_0x424b('0x1')]([[0x1,0x2,0x3,null]]);expect(_0x3062ca([0x1,0x2,0x3,0x4],0x4))[_0x424b('0x1')]([[0x1,0x2,0x3,0x4]]);});});