/**
 * 双链表实现
 * 支持API：
 * 前插入、删除、获取；
 * 后插入、删除、获取；
 * 判断空、返回size
 */

import InnerNode from "./inner.js";

export default class LinkedList {

    constructor() {
        // 头尾指针
        this.head = null;
        this.tail = null;

        // 链表容量
        this.size = 0;

    }

    /**
     * 前插入
     * @param {Any} ele 要插入的元素 
     */
    addFirst(ele) {

        // 创建包装Node
        let node = new InnerNode(ele, null, null);

        if (this.head == null && this.tail == null) {
            this.head = this.tail = node;
        }
        else {
            this.head.pre = node;
            node.next = this.head;
            this.head = node;
        }

        this.size++;
    }

    /**
     * 前删除
     * @returns {Any} 返回删除那个元素的引用
     */
    deleteFirst() {
        // 为空退出
        if (this.head == null && this.tail == null) {
            return null;
        }

        let first = null;
        if (this.head == this.tail) {
            // 只有一个元素
            first = this.head;
            this.head = this.tail = null;

            this.size--;
            return first.val;
        }
        else {
            // 两个以上元素
            first = this.head;
            this.head = this.head.next;
            this.head.pre = null;
        }

        this.size--;
        return first.val;
    }

    /**
     * 前获取
     * @returns {Any} 返回First元素的引用
     */
    getFirst() {
        return this.head.val;
    }

    /**
     * 后插入
     * @param {Any} ele 要插入的元素 
     */
    addLast(ele) {
        // 创建包装Node
        let node = new InnerNode(ele, null, null);

        if (this.head == null && this.tail == null) {
            this.head = this.tail = node;
        }
        else {
            this.tail.next = node;
            node.pre = this.tail;
            this.tail = node;
        }

        this.size++;
    }

    /**
     * 后删除
     * @returns {Any} 返回删除那个元素的引用
     */
    deleteLast() {
        // 为空退出
        if (this.head == null && this.tail == null) {
            return null;
        }

        let last = null;
        if (this.head == this.tail) {
            // 只有一个元素
            last = this.tail;
            this.head = this.tail = null;

            this.size--;
            return last.val;
        }
        else {
            // 两个以上元素
            last = this.tail;
            this.tail = this.tail.pre;
            this.tail.next = null;
        }

        this.size--;
        return last.val;
    }

    /**
     * 后获取
     * @returns {Any} 返回First元素的引用
     * @returns {Any} 返回删除那个元素的引用
     */
    getLast() {
        return this.tail.val;
    }

    /**
     * 返回是否为空链表
     * @returns {bool} 链表是否为空
     */
    empty() {
        return this.size === 0;
    }

    /**
     * 返回链表目前的size
     * @returns {Number} size
     */
    size() {
        return this.size;
    }

    /**
     * 清空链表
     */
    clear() {
        while (!this.empty()) {
            this.deleteFirst();
        }
    }
}

 