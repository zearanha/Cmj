document.addEventListener("DOMContentLoaded", () => {
  gsap.from(".header", { opacity: 0, y: -50, duration: 1 });
  gsap.from(".carousel-inner img", { opacity: 0, scale: 0.8, duration: 1, delay: 0.5 });
  gsap.from("#about-us", {
      opacity: 0,
      y: 50,
      duration: 1,
      delay: 1,
      scrollTrigger: {
          trigger: "#about-us",
          start: "top 80%",
      },
  });
  gsap.from(".service-cards .card", {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      delay: 1.5,
      stagger: 0.2,
      scrollTrigger: {
          trigger: ".service-cards",
          start: "top 80%",
      },
  });
  gsap.from(".footer", { opacity: 0, y: 50, duration: 1, delay: 2 });
});

const button = document.querySelector(".main-button");

button.addEventListener("mouseenter", () => {
  gsap.to(button, { scale: 1.1, duration: 0.3 });
});

button.addEventListener("mouseleave", () => {
  gsap.to(button, { scale: 1, duration: 0.3 });
});

function clickZap() {
  gsap.to(button, { scale: 0.9, duration: 0.2 });

  setTimeout(() => {
      const numero = "5575981576802";
      const mensagem = "Olá, quero Fazer uma doação para a Casa Jesus Maria José";
      const url = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(mensagem)}`;
      window.open(url, "_blank");
  }, 200);
}
