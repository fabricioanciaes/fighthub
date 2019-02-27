<template>
  <div class="about page">
    <div class="container">
      <img src="../assets/logo.svg" alt="" srcset="" style="margin-top:3rem" />
      <vue-markdown class="markdown">
        ### Sobre Fighthub tem como intuito reunir os eventos da Comunidade de
        jogos de luta Brasileira de maneira fácil e intuitiva. Infelizmente a
        divulgação dos eventos é feita por grupos de whatsapp e discord, entre
        os próprios jogadores. Isso impede que pessoas que não estejam nestes
        grupos de terem conhecimento dos eventos, aí entra o Fighthub. #### Como
        surgiu: Ideia original de Marcos "Mytzplik" Oliveira, fotógrafo e
        jogador de Street Fighter V. Originalmente surgiu como um calendário no
        google. Mais pra frente, fizemos uma interface para o calendário e agora
        estamos com nosso backend separado. Feito em [Vue.js](https://vuejs.org)
        e [Strapi](https://strapi.io) #### Open Source: Este projeto é open
        source, caso tenha interesse em olhar o código fonte cheque os seguintes
        repositórios no github: -
        [fighthub](https://github.com/fabricioanciaes/fighthub) -
        [fighthub-api](https://github.com/fabricioanciaes/fighthub-api)
      </vue-markdown>
    </div>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";

export default {
  name: "sobre",
  components: { VueMarkdown }
};
</script>
