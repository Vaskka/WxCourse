/**
 * 计算器节点类
 */

import Const from "./const.js"

export default class Node {
    constructor(type, val) {
        this.type = type;
        this.val = val;
    }

    isNum() {
        return this.type == Const.NodeType.NUMBER;
    }

    getNum() {
        return Number(this.val);
    }

    getRawValue() {
        return this.val;
    }

    appendNum(num) {

        let realNum = Number(num);

        if (!this.isNum()) {
            throw "无法在操作符后面增长数字.";
        }

        if (realNum > 9 || realNum < 0) {
            throw "增长的数字不合理.";
        }

        this.val = String(this.val) + String(realNum);
    }

    convertSymbol() {
        if (!this.isNum()) {
            throw "无法为操作符更改符号.";
        }

        let realVal = String(this.val);

        let firstSymbol = realVal[0];
        if (firstSymbol == "-") {
            realVal = realVal.slice(1);
        }
        else {
            realVal = "-" + realVal;
        }

        this.val = realVal;
    }

    appendPoint() {
        this.val = this.val + ".";
    }

    
}

