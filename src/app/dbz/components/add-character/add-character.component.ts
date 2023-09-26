
import { Output, EventEmitter,Component } from '@angular/core';
import { Character } from '../../interfaces/character.interface';
import { NodeStyleEventEmitter } from 'rxjs/internal/observable/fromEvent';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {


  @Output()
public onNewCharacter: EventEmitter<Character>= new EventEmitter();//emisor de eventos

public character:Character={
  name:'',
  power:0
};
emitCharacter():void{
// debugger
console.log(this.character);

if(this.character.name.length===0)return;
this.onNewCharacter.emit(this.character);

//this.character.name='';
//this.character.power=0;
//reemplaza
this.character={name:'',power:0}
};
}