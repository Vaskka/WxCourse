import Const from "./const.js"
import tools from "./tools.js"
import Node from "./unit.js";

import LinkedList from "./../linkedlist/linkedlist.js"

/**
 * 计算器运算核心类
 */
export default class Calculator {
    constructor() {
        this.stack = new LinkedList();
    }

    /**
     * 在当前的表达式后面添加数字
     * @param {Number} num 添加数字 
     */
    addNum(num) {
        if (this.stack.empty()) {
            this.stack.addLast(new Node(Const.NodeType.NUMBER, String(num)));
            return;
        }

        let top = this.stack.getLast();
        
        if (top.isNum()) {
            top.appendNum(num);
        }
        else {
            this.stack.addLast(new Node(Const.NodeType.NUMBER, String(num)));
        }
    }

    /**
     * 当前表达式后面添加操作
     * @param {Ops} ops 操作数常量 
     */
    addOps(ops) {
        if (this.stack.empty()) {
            this.stack.addLast(new Node(Const.NodeType.NUMBER, String(0)));
            return;
        }

        let top = this.stack.getLast();

        if (!top.isNum()) {
            throw "操作不能在操作之后.";
        }

        if (ops == Const.Ops.SYMBOL) {
            top.convertSymbol();
            return;
        }

        if (ops == Const.Ops.POINT) {
            top.appendPoint();
            return;
        }

        this.stack.addLast(new Node(Const.NodeType.OPS, Number(ops)));
    }

    /**
     * 计算表达式结果，调用后不用清空，每次求知后都会将内部栈清空
     */
    getResult() {

        if (this.stack.empty()) {
            return "0";
        }

        if (!this.stack.getLast().isNum()) {
            this.stack.deleteLast();
        }

        let pureAddSubQueue = new LinkedList();
        
        // 优先处理乘除
        while (!this.stack.empty()) {
            let top = this.stack.deleteLast();

            let rawValue = Number(top.getRawValue());
            if (!top.isNum() && (rawValue == Const.Ops.TIMES || rawValue == Const.Ops.DIVIDE)) {

                let leftNumberNode = this.stack.deleteLast();
                let rightNumberNode = pureAddSubQueue.deleteFirst();
                let result = null;

                // 乘、除
                if (rawValue == Const.Ops.TIMES) {
                    result = tools.times(leftNumberNode, rightNumberNode);
                }
                else {
                    result = tools.divide(leftNumberNode, rightNumberNode);
                }

                pureAddSubQueue.addFirst(result);
            }
            else {
                pureAddSubQueue.addFirst(top);
            }
        }

        // 再处理加减
        let finalResult = null;
        while (!pureAddSubQueue.empty()) {
            let offer = pureAddSubQueue.deleteFirst();

            if (offer.isNum()) {
                if (finalResult == null) {
                    finalResult = offer.getNum();
                }
                else {
                    throw "数字无操作符连接.";
                }
            }
            else {
                let symbol = Number(offer.getRawValue());
                switch(symbol) {
                    case Const.Ops.PLUS: {
                        let leftNumberNode = new Node(Const.NodeType.NUMBER, String(finalResult));
                        let rightNumberNode = pureAddSubQueue.deleteFirst();

                        finalResult = tools.plus(leftNumberNode, rightNumberNode).getNum();
                        break;
                    }
                    case Const.Ops.SUB: {
                        let leftNumberNode = new Node(Const.NodeType.NUMBER, String(finalResult));
                        let rightNumberNode = pureAddSubQueue.deleteFirst();

                        finalResult = tools.sub(leftNumberNode, rightNumberNode).getNum();
                        break;
                    }
                    default:
                        throw "未知的操作符.";
                }
            }
        }

        return String(finalResult);
    }

    /**
     * 整理表达式用于显示
     */
    getExpr() {

        if (this.stack.empty()) {
            return "0";
        }

        let first = this.stack.head;
        let res = "";
        while (first != this.stack.tail) {
            if (!first.val.isNum()) {
                res += tools.opsMapping(first.val.getRawValue());
            }
            else {
                res += first.val.getRawValue();
            }

            first = first.next;
        }

        if (this.stack.tail.val.isNum()) {
            res += this.stack.tail.val.getRawValue();
        }
        else {
            res += tools.opsMapping(this.stack.tail.val.getRawValue());
        }

        return res;
    }

    /**
     * 手动清空复位当前计算器
     */
    clearCalculator() {
        this.stack.clear();
    }

    /**
     * 退格
     */
    backSpace() {
        this.stack.deleteLast();
    }

    /**
     * 计算结果并且拼接结果和表达式
     */
    getResultToString() {
        let res = "";
        
        res += this.getExpr();
        res += "=";
        res += this.getResult();

        return res;
    }

}