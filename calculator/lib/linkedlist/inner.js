/**
 * 链表内部节点
 */
export default class InnerNode {

    /**
     * 构造携带innerValue数据的链表节点
     * @param {Any} innerValue 内部元素
     * @param {InnerNode} prePointer 前指针 
     * @param {InnerNode} nextPointer 后指针
     */
    constructor(innerValue, prePointer, nextPointer) {
        this.val = innerValue;

        // 前后指针
        this.pre = prePointer;
        this.next = nextPointer;
    }

}
