export class FetchedUser{
    id:number | undefined;
    first_name:string = "";
    last_name:string = "";
    email:string = "";
    avatar:string="";

    constructor(init:any){
        if(!init) return;
        if(init.id) this.id = init.id;
        if(init.first_name) this.first_name = init.first_name;
        if(init.last_name) this.last_name = init.last_name;
        if(init.email) this.email = init.email;
        if(init.avatar) this.avatar = init.avatar;
    }
}