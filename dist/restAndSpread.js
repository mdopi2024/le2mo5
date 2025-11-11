"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var frieds = ['rahim', 'karim'];
var schoolFds = ['kashem', 'mithu', 'hridoy', 'tonmoy'];
var collageFds = ['rayhan', 'assadul'];
// frieds.push(schoolFds)
var allFds = __spreadArray(__spreadArray(__spreadArray([], frieds, true), schoolFds, true), collageFds, true);
/**
 * rest oparatiors
 */
var invitation = function () {
    var friends = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        friends[_i] = arguments[_i];
    }
    friends.map(function (friend) { return console.log("".concat(friend, " i am inviting you")); });
};
invitation('rohim', 'korim');
//# sourceMappingURL=restAndSpread.js.map