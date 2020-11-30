import { NumberValueAccessor } from '@angular/forms';

export type priority = "high" | "medium" | "low";


export class Todo {
    id: number;
    text: string;
    priority: priority;
    dueDate: Date | null;
    complete: boolean;




    constructor(id: number, text: string, priority: priority , dueDate: Date | null, complete: boolean) {
        this.id= id;
        this.text =text;
        this.priority = priority;
        this.dueDate = dueDate;
        this.complete = complete;
    }
    

    public get Id() : number {
        return this.id
    }

    public get Text() : string {
        return this.text
    }

    public get Priority() : priority {
        return this.priority
    }

    public get DueDate() : Date|null {
        return this.dueDate
    }

    public get Complete() : boolean {
        return this.complete
    }

    
    public set Id(id : number) {
        this.id = id;
    }

    public set Text(text : string) {
        this.text = text;
    }

    public set Priority(priority : priority) {
        this.priority = priority;
    }

    public set DueDate(date : Date | null) {
        this.dueDate = date;
    }

    public set Complete(complete : boolean) {
        this.complete = complete;
    }

    

    

    
}
