export {group as default, student}

class group {
    constructor(name){
        this.name = name
        this.elements = []
    }
    size(){
        return this.elements.length;
    }
    addElement(firstName,name,marker){
        let student = new Student(firstName,name,this,marker)
        this.elements.push(student)
    }
    removeElement(id){
        this.elements.splice(id,1)
    }
}

class Student {
    constructor(firstname, name, group, marker){
        this._firstName = firstname
        this._name = name
        this._groups = [group]
        this._marker = marker || 0
    }
    get firstName(){
        return this._firstName
    }
    set firstName(fname){
        this.firstName = fname
    }
    set name(name){
        this._name = name
    }
    get name(){
        return this._name
    }
    set marker(id){
        this._marker = id
    }
    get marker(){
        return this._marker
    }
    addToGroup(group){
        if(this._groups.indexOf(group)<0){
            this._groups.push(group)
        } else return false
    }
    removeFromGroup(group){
        let groupid = this._groups.indexOf(group)
        if(groupid>-1){
            this._groups.splice(groupid,1)
        } else return false
    }
}