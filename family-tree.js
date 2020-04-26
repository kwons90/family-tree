class FamilyTree {
  constructor (value) {
    if (value == undefined) {
      throw 'value undefined'
    }
    if (typeof(value) != 'string') {
      throw 'value not string'
    }
    this.value = value;
    this.children = []
    this.count = ''
  }
  insert(name){
    this.child = new FamilyTree(name)
    this.children.push(this.child);
  }
  familySize() {
    return this.children.length+1
  }
  findMember(name) {
    this.namesL = this.children.map(currV => currV.value);
    return this.children[this.namesL.indexOf(name)]
  }

  logB() {
    this.count = this.count + '--'
    this.treeList =[]
    console.log('count is ' + this.count)
    for (let i=0;i<this.children.length;i++) {
        // console.log('i in children in for loop is '+i)
        if(this.children[i].children.length >0) {
          console.log('log of ' +this.children[i].value +' is '+ this.children[i].logB())
          console.log('treeList is ' +this.treeList)
          this.treeList = [...this.treeList,this.count + " "+this.children[i].value,...this.children[i].logB().slice(0)]
        }
        else {
          this.treeList.push(this.count + " " + this.children[i].value) 
        } 
    }
    return this.treeList
  }
  log() {
    this.returnL = ['-- '+this.value,...this.logB().map(currV => '--'+currV)]
    return this.returnL.join("\n")
  }
}

module.exports = FamilyTree;
