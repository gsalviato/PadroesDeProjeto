// Sistema espera um plug de 3 pinos redondos (Padrão Brasileiro)
interface TomadaBrasileira {
  conectarTresPinos(): void;
}

// O equipamento é americano e tem um plug de 2 pinos chatos (Padrão EUA)
class TomadaAmericana {
  conectarDoisPinosChatos(): void {
    console.log("Energia fluindo pelos 2 pinos chatos (Padrão EUA)!");
  }
}
// O Adaptador que converte a interface americana para a brasileira
class AdaptadorEUAparaBrasil implements TomadaBrasileira {
  private tomadaAmericana: TomadaAmericana;

  constructor(tomada: TomadaAmericana) {
    this.tomadaAmericana = tomada;
  }
// O adaptador implementa a interface brasileira, mas internamente usa a americana
  conectarTresPinos(): void {
    console.log("Adaptador: Encaixando os 3 pinos redondos no adaptador...");
    this.tomadaAmericana.conectarDoisPinosChatos();
  }
}
// Função que espera uma tomada brasileira
function carregarNotebook(tomada: TomadaBrasileira) {
  tomada.conectarTresPinos();
  console.log("Notebook carregando...\n");
}

// Cenário: Temos uma tomada americana na parede
const tomadaParedeEUA = new TomadaAmericana();

// carregarNotebook(tomadaParedeEUA); // ERRO! Os pinos não encaixam.

// Usando o adaptador para resolver o problema
const meuAdaptador = new AdaptadorEUAparaBrasil(tomadaParedeEUA);
// Funciona perfeitamente! O adaptador converte a interface e o notebook carrega sem problemas.
carregarNotebook(meuAdaptador);

// -----------------

// Exemplo sem aplicação do Padrão Adapter, o cliente teria que lidar diretamente com a incompatibilidade:

class SistemaDeCarregamento {
  
  // O seu sistema agora precisa conhecer a estrutura de TODAS as tomadas do mundo, ficando cheio de if e else. 
  carregar(tomada: any, tipo: string): void {
    if (tipo === "BRASIL") {
      tomada.conectarTresPinos();
    } else if (tipo === "EUA") {
      tomada.conectarDoisPinosChatos();
    } else if (tipo === "EUROPA") {
      tomada.conectarPinosGrossos();
    }
  }
}