import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";



export function capitalParamLetterValidator(count: number): ValidatorFn {
return(control:AbstractControl):ValidationErrors | null => {
    const value = control.value;

    const ascii: string [] = [];
   //verilen sayı kadar  harf büyük mü kontrole eden validator
    for(let n = 65 ; n <= 90 ; n++){
        ascii.push(String.fromCharCode(n))
    }
    let state : boolean=true;
    for(let c = 0 ; c < count; c++){
        if(ascii.indexOf(value[c])== -1){
            state=false;
            break;
        }      
    }
    if(!state){
        return {capitalLatter: true}
    }

   

    return null;
}
}
