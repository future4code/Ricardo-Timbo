import { User } from "./User";
import * as moment from "moment"

export class Student implements User {
    constructor(
        public id: string,
        public name: string,
        public email: string,
        public birthDate: moment.Moment,
        public hobbies: []
    ) {}

    public getAge(): number {
        return moment().diff(this.birthDate, "years")
    }

    
}

