import { computed, observable, action } from "mobx";
import TodoStore from "../infra/base/TodoStore";

class Contractors extends TodoStore {
  
    constructor() {
        
        super();
        this.resRoute = "/contractors.json";
        this.init();
    
    }
    
}

export default Contractors;
