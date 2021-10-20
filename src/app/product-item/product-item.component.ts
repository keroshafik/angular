import { ThrowStmt } from '@angular/compiler';
import { EventEmitter ,Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input () productItem : any;
  @Output () sendDataItem = new EventEmitter();

  constructor() {}
  ngOnInit(): void {
  }

  selectedItem()
  {
    this.sendDataItem.emit(this.productItem)
  }

}
