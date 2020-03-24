/**
 * 节点加减乘除
 */

import Const from "./const.js"
import Node from "./unit.js"

function plus(left, right) {
    if (!left.isNum() || !right.isNum()) {
        throw "不能对操作进行相加."
    }

    return new Node(Const.NodeType.NUMBER, String(left.getNum() + right.getNum()));
}

function sub(left, right) {
    if (!left.isNum() || !right.isNum()) {
        throw "不能对操作进行相减."
    }

    return new Node(Const.NodeType.NUMBER, String(left.getNum() - right.getNum()));
}

function times(left, right) {
    if (!left.isNum() || !right.isNum()) {
        throw "不能对操作进行相乘."
    }

    return new Node(Const.NodeType.NUMBER, String(left.getNum() * right.getNum()));
}

function divide(left, right) {
    if (!left.isNum() || !right.isNum()) {
        throw "不能对操作进行相除."
    }

    if (right.getNum() == 0) {
        throw "不能除以0.";
    }

    return new Node(Const.NodeType.NUMBER, String(left.getNum() / right.getNum()));
}

function opsMapping(ops) {
    switch(ops) {
        case Const.Ops.PLUS: {
            return "+";
        }
        case Const.Ops.SUB: {
            return "-";
        }
        case Const.Ops.TIMES: {
            return "x";
        }
        case Const.Ops.DIVIDE: {
            return "/"
        }
        default: return "";
    }
}

export default {
    plus: plus,
    sub: sub,
    times: times,
    divide: divide,
    opsMapping: opsMapping
}
