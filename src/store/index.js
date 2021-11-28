import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    foods: [
      {
        name: "Big Mac",
        image: "bigMac.png",
        lanche: true,
        bebida: false,
        maisPedido: true,
        description: "Não existe nada igual! Dois hambúrgueres, alface, queijo e molho especial, cebola e picles num pão com gergelim. O sabor de McDonald’s duplamente delicioso. Com dois hambúrgueres de carne 100% bovina, queijo cheddar derretido, cebola, picles e o incrível molho Big Mac."
      },
      {
        name: "Quarterão com Queijo",
        image: "quarteirao.png",
        lanche: true,
        bebida: false,
        maisPedido: false,
        description: "Inigualável. Perfeito. Um hambúrguer feito com pura carne bovina, envolvida por duas fatias de queijo cheddar, cebola, picles e molhos ketchup e mostarda."
      },
      {
        name: "Big Tasty",
        image: "bigTasty.png",
        lanche: true,
        bebida: false,
        maisPedido: true,
        description: "O maior sanduíche de carne 100% bovina do McDonald’s. 3 deliciosas fatias de queijo, tomate, alface crocante, cebola e o dobro de molho Tasty."
      },
      {
        name: "McChicken",
        image: "mcChicken.png",
        lanche: true,
        bebida: false,
        maisPedido: true,
        description: "O sabor que você adora. Frango empanado e dourado com molho suave e cremoso, acompanhado de alface crocante num pão com gergelim."
      },
      {
        name: "McChicken Bacon",
        image: "mcChickenBacon.png",
        lanche: true,
        bebida: false,
        maisPedido: false,
        description: "Frango empanado e dourado com molho suave e cremoso, acompanhado de alface crocante, num pão com gergelim e uma deliciosa fatia de bacon."
      },
      {
        name: "Coca-Cola 300mL",
        image: "coca300.png",
        lanche: false,
        bebida: true,
        maisPedido: true,
        description: "Refrescante e geladinho. Uma bebida assim refresca a vida. Você pode escolher entre Coca-Cola, Coca-Cola Zero, Fanta Guaraná e Fanta Laranja."
      },
      {
        name: "Top Sundae Chocolate",
        image: "topSundae.png",
        lanche: false,
        bebida: true,
        maisPedido: false,
        description: "Massa gelada de baunilha com uma supercamada de cobertura de chocolate e ainda por cima com farofa de paçoca. O canudo completa a tentação."
      },
      {
        name: "Casquinha Mista",
        image: "casquinha.png",
        lanche: false,
        bebida: true,
        maisPedido: true,
        description: "A sobremesa que o Brasil todo adora. Uma casquinha supercrocante, com massa gelada de mista que vai bem a qualquer hora."
      },
    ]
  },
})
