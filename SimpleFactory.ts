// Aplicação do padrão de projeto Simple Factory

// Definindo a interface comum para os inimigos
interface Inimigo {
  atacar(): void;
}

// tipos de inimigos
class Zumbi implements Inimigo {
  atacar(): void {
    console.log("Zumbi morde lentamente... Dano: 10");
  }
}

class Vampiro implements Inimigo {
  atacar(): void {
    console.log("Vampiro suga seu sangue! Dano: 25");
  }
}

class Dragao implements Inimigo {
  atacar(): void {
    console.log("Dragão cospe fogo! Dano: 100");
  }
}

// Aplicando Simple Factory
class FabricaDeInimigos {
  static criar(dificuldade: string): Inimigo {
    switch (dificuldade) {
      case "facil":
        return new Zumbi();
      case "medio":
        return new Vampiro();
      case "chefe":
        return new Dragao();
      default:
        throw new Error("Dificuldade inválida.");
    }
  }
}


console.log("--- Fase 1: Floresta ---");
const monstroFase1 = FabricaDeInimigos.criar("facil");
monstroFase1.atacar(); 

console.log("\n--- Fase 2: Castelo ---");
const monstroFase2 = FabricaDeInimigos.criar("medio");
monstroFase2.atacar(); 

console.log("\n--- Fase 3: Caverna (Chefão) ---");
const monstroFase3 = FabricaDeInimigos.criar("chefe");
monstroFase3.atacar();

// -----------------

// Exemplo sem aplicação do Padrão Simple Factory

class ControladorDeFase {
  iniciarFase(fase: number): void {
    if (fase === 1) {
      // O controlador da fase agora depende diretamente da classe Zumbi
      const zumbi1 = new Zumbi(); 
      const zumbi2 = new Zumbi();
      zumbi1.atacar();
    } else if (fase === 3) {
      // E também precisa conhecer a classe Dragao
      const chefe = new Dragao(); 
      chefe.atacar();
    }
  }
}