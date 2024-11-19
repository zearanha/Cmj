// Aguarda o DOM ser totalmente carregado antes de executar o código JS
document.addEventListener("DOMContentLoaded", () => {
  // Anima a entrada do elemento com a classe "header"
  gsap.from(".header", { opacity: 0, y: -50, duration: 1 });

  // Anima as imagens dentro do carousel ao aparecerem na página
  gsap.from(".carousel-inner img", { opacity: 0, scale: 0.8, duration: 1, delay: 0.5 });

  // Anima a seção "about-us" quando ela entra na visualização do usuário
  gsap.from("#about-us", {
      opacity: 0, // Começa invisível
      y: 50,      // Deslocado 50px para baixo
      duration: 1, // Duração da animação de 1 segundo
      delay: 1,   // Inicia 1 segundo após o carregamento
      scrollTrigger: {
          trigger: "#about-us", // Inicia a animação quando "#about-us" entra na tela
          start: "top 80%",    // Define o ponto de início da animação (quando o topo de "#about-us" está a 80% da altura da tela)
      },
  });

  // Anima as cartas de serviços na seção "service-cards" quando entram na visualização
  gsap.from(".service-cards .card", {
      opacity: 0,      // Começa invisível
      scale: 0.8,      // Reduzido a 80% do tamanho
      duration: 1,     // Duração de 1 segundo
      delay: 1.5,      // Inicia 1,5 segundos após o carregamento
      stagger: 0.2,    // Aplica um atraso de 0,2 segundos entre cada carta
      scrollTrigger: {
          trigger: ".service-cards", // Inicia a animação quando ".service-cards" entra na tela
          start: "top 80%",         // Define o ponto de início da animação
      },
  });

  // Anima o rodapé quando ele entra na visualização
  gsap.from(".footer", { opacity: 0, y: 50, duration: 1, delay: 2 });
});

// Seleciona o botão principal (com a classe "main-button")
const button = document.querySelector(".main-button");

// Adiciona um efeito ao passar o mouse sobre o botão
button.addEventListener("mouseenter", () => {
  gsap.to(button, { scale: 1.1, duration: 0.3 }); // Aumenta o botão para 110% do tamanho
});

// Reverte o efeito ao tirar o mouse do botão
button.addEventListener("mouseleave", () => {
  gsap.to(button, { scale: 1, duration: 0.3 }); // Retorna ao tamanho original
});

// Função chamada ao clicar no botão de doação
function clickZap() {
  // Anima o botão reduzindo seu tamanho ao ser clicado
  gsap.to(button, { scale: 0.9, duration: 0.2 });

  // Após 200ms, abre o WhatsApp com uma mensagem predefinida
  setTimeout(() => {
      const numero = "5575982489610"; // Número de telefone para o WhatsApp
      const mensagem = "Olá, quero Fazer uma doação para a Casa Jesus Maria José"; // Mensagem a ser enviada
      const url = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(mensagem)}`; // URL formatada
      window.open(url, "_blank"); // Abre a URL em uma nova aba do navegador
  }, 200);
}
