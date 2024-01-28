var nota =parseFloa(prompt("Digite a nota entre 0 a 100:"));
var conceito;

switch (true) {
 	case nota >= 90 && nota <= 100:
   conceito = "A";
   break;
  case nota >= 80 && nota < 90:
   conceito = "B";
    break;
   case nota >= 60 && nota < 80:
    conceito ="D";
    break;
  default:
    conceito = "Nota invalida";
    }