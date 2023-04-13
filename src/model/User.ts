export class User{
    id:number | undefined;
    name:string = "";
    email:string = "";
    isActive:boolean=false;

    constructor(init:any){
        if(!init) return;
        if(init.id) this.id = init.id;
        if(init.name) this.name = init.name;
        if(init.email) this.email = init.email;
        if(init.isActive) this.isActive = init.isActive;
    }
}