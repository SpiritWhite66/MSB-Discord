class Command {

    constructor(){
        this.config = {};
        this.config.name = [];
        this.config.authorized = [];
        this.config.activated = false;
        this.config.channel = [];
    }

    constructor(name, roleAuthorized, activated, channel){
        this.config = {};
        this.config.name = name;
        this.config.authorized = roleAuthorized;
        this.config.activated = activated;
        this.config.channel = [];
    }

    getConfig() {
        return this.config;
    }

    getStatus() {
        return this.config.activated
    }

    activated() {
        this.config.activated = true;
    }

    disable() {
        this.config.activated = false;
    }

    addAlias(alias) {
        this.config.name.push(alias);
    }

    deleteAlias(alias) {
        index = this.config.name.indexOf(alias);
        this.config.name.slice(1,index);
    }

    addRole(role) {
        this.config.authorized.push(alias);
    }
    
    deleteRole(role) {
        index = this.config.authorized.indexOf(role);
        this.config.authorized.slice(1,index);
    }

}

module.exports = Command;