import { computed, observable, action } from "mobx";
import TodoStore from "../infra/base/TodoStore";

class Contracts extends TodoStore {

  
    constructor() {
        
        super();
        this.resRoute = "/contracts.json";
        this.init();
    }
    
}

export default Contracts;
