///this class is responsible for map the json data frpm backend technology
export class Product {
    constructor(
        public pid:number,
        public pname:string,
        public price:number,
        public url:string){}
}
