<template>
  <div class="about page">
    <div class="container">
      <!-- <img src="../assets/logo.svg" alt="" srcset=""> -->
<vue-markdown class="markdown">
### Colocando seu evento

Por enquanto estamos com um problema no admin que impede que os horários estejam corretos.

Para incluir seu evento basta entrar no nosso [Discord](http://discord.me/fighthub) e pedir a um dos editores que faça.

Esteja com as seguintes informações a mão:
- Nome do evento
- Estado
- Endereço
- Jogos que estarão presentes no evento
- Link de inscrição
- Links de informação (site do evento, mídias sociais)
- Links de transmissão ao vivo
- Texto introduzindo o evento
- Imagem do evento (Evite textos na imagem, tamanho recomendado é 1200x300)

### Você é organizador?

Se você é organizador entre em contato pelo discord e peça uma conta para que você possa incluir seus eventos.

</vue-markdown>
    </div>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";

export default {
  name: "Contribua",
  components: {VueMarkdown}
};
</script>
