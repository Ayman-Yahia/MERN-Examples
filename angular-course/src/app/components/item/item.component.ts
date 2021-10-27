import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Task} from '../../Task'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  faTimes = faTimes;
  @Input() task!:Task;
  @Output() onDeleteTask:EventEmitter<Task>=new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onDelete(task:Task){
    this.onDeleteTask.emit(task);
    
  }

}
