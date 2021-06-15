class Employee {
    constructor(id, first_name, last_name, role_id, manager_id) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.role_id = manager_id;
        this.manager_id = manager_id;
    }

getId() {
    return this.id;
}
getName() {
    return this.first_name + ' ' + this.last_name;
}
getRole() {
return this.role_id
}
getManager() {
return this.manager_id;
}

module.exports = employee