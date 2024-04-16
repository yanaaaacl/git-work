import "@babel/polyfill";
import './index.html';
import './index.scss';

class Node{
    constructor(key, value){
        this.key = key;
        this.value = value;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.data = null;
    }

    set(key, value){
        const node = new Node(key, value);
        if (this.root == null){
            this.root = node;
        } else {
            let root = this.root;
            while (root.next != null){
                if (root.key === key){
                    root.value = value;
                    return;
                }
                root = root.next;
            }
            root.next = node;
        }
    }

    get(key){
        let root = this.root;
        while (root != null){
            if (root.key === key){
                return root.value;
            }
            root = root.next;
        }
        return null;
    }
}

class HashMap{
    constructor(){
        this.store = [];
    }
    getHash(value){
        value = value.toString();
        let sum = 0;
        for (let i = 0, len = value.length; i < len; i++){
            sum += value.charCodeAt(i);
        }
        return sum;
    }
    set(key, value){
        const hashValue = this.getHash(key);
        if (this.store[hashValue] == null){
            this.store[hashValue] = new LinkedList();
        }
        this.store[hashValue].set(key, value);
    }
    get(key){
        const hashValue = this.getHash(key);
        if (this.store[hashValue]){
            return this.store[hashValue].get(key);
        }
        return null;
    }
    isExist(key){
        const hashValue = this.getHash(key);
        return this.store[hashValue] != null;
    }
    remove(key){
        const hashValue = this.getHash(key);
        this.store[hashValue] = null;
    }
}

const map = new HashMap();
map.set('lies', 100);
map.set('foes', 200);
console.log(map.get('lies'));




