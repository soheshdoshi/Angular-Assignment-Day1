
export class Employee {
   
        public id: number;
        public firstname: string;
        public lastname: string;
        public email: string;
        public number: number;
        public address: string;
        public username: string;
        public password: string;
        public gender: string;
        public qualification: string;
        public experience: string;
        public languages: string[];

        constructor(){
            this.id = 0;
            this.firstname='';
            this.lastname='';
            this.email='';
            this.number=null;
            this.address='';
            this.username='';
            this.password='';
            this.gender='';
            this.qualification='';
            this.experience='';
            this.languages = [];
        }

        public add(languages: string): void{
            var x = <HTMLInputElement>document.getElementById(languages);
            if(x.checked){
                this.languages.push(languages);
            }
            else{
                const index: number = this.languages.indexOf(languages);
                if (index !== -1) {
                this.languages.splice(index, 1);
                }        
            }
        }

        public assign(object: any)
        {
            this.id = object.id;
            this.firstname= object.firstname;
            this.lastname= object.lastname;
            this.email= object.email;
            this.number= object.number;
            this.address= object.address;
            this.username= object.username;
            this.password= object.password;
            this.gender= object.gender;
            this.qualification= object.qualification;
            this.experience= object.experience;
            this.languages = object.languages;
        }
        
}