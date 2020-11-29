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
}
