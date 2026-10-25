import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Auto } from '../../interfaces/auto';


@Component({
  imports: [FontAwesomeModule],
  selector: 'app-search-bar',
  styleUrl: './search-bar.css',
  templateUrl: './search-bar.html',
})
export class SearchBar {
  magnifyingGlass = faMagnifyingGlass

  @Input() autos: Auto[] = []

  @Output() onSelectCar = new EventEmitter<Auto>()
  @Output() onSearch = new EventEmitter<void>()

  selectedAutos: Auto[] = []
  
  selectAutos(selectedBrand: string){
    this.onSearch.emit()
    
    if (selectedBrand) {
      this.selectedAutos = this.autos.filter(
       x => x.brand.toLowerCase().startsWith(selectedBrand.toLowerCase()))
    }
    else
      this.selectedAutos=this.autos


  }

  selectCar(auto: Auto){
    this.onSelectCar.emit(auto)

  }

  
}
