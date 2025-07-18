import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss']
})
export class FilterBarComponent {
  @Output() search = new EventEmitter<string>();
  @Output() importanceFilter = new EventEmitter<string>();
  @Output() categoryFilter = new EventEmitter<string>();

  onSearch(value: string) {
    this.search.emit(value);
  }

  onImportanceChange(value: string) {
    this.importanceFilter.emit(value);
  }

  onCategoryChange(value: string) {
    this.categoryFilter.emit(value);
  }
}
