export class BNode<T> {

  public value: T;
  public left: BNode<T> | null;
  public right: BNode<T> | null;
  
  constructor(value: T) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  public preOrder(node: BNode<T>, f: (node: BNode<T>) => any) {
    f(node);
    if(node.left) this.preOrder(node.left, f);
    if(node.right) this.preOrder(node.right, f);
  }

  public inOrder(node: BNode<T>, f: (node: BNode<T>) => any) {
    if(node.left) this.inOrder(node.left, f);
    f(node);
    if(node.right) this.inOrder(node.right, f);
  }

  public postOrder(node: BNode<T>, f: (node: BNode<T>) => any) {
    if(node.left) this.postOrder(node.left, f);
    if(node.right) this.postOrder(node.right, f);
    f(node);
  }

}

export default class BinaryTree<T> {
  
  private root: BNode<T>;
  
  constructor(value: T) {
    this.root = new BNode(value); 
  }

  public getElementsPreorder(): T[] {
    const elements: T[] = []
    this.root.preOrder(this.root, (node: BNode<T>) => {
      elements.push(node.value);
    });
    return elements;
  }

  public getElementsInOrder(): T[] {
    const elements: T[] = []
    this.root.inOrder(this.root, (node: BNode<T>) => {
      elements.push(node.value);
    });
    return elements;
  }

  public getElementsPostOrder(): T[] {
    const elements: T[] = [];
    this.root.postOrder(this.root, (node: BNode<T>) => {
      elements.push(node.value);
    });
    return elements;
  }

  public search(value: T): BNode<T> | null {
    return this.rSearch(this.root, value);
  }

  private rSearch(node: BNode<T>, value: T): BNode<T> | null {
    
    if(node.value === value) {
      return node;
    }
    
    if(value < node.value) {
      if(node.left) this.rSearch(node.left, value);
    } else {
      if(node.right) this.rSearch(node.right, value);
    }

    return null;
  }

  public getHeight() {

  }
}