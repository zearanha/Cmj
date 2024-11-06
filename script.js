const button = document.querySelector('.main-button')

function clickZap(){
    const numero = "5575982489610"; // substitua pelo número desejado com código do país
            const mensagem = "Olá, De Fazer uma doação para a Casa Jesus Maria José"; // mensagem opcional
            const url = `https://api.whatsapp.com/send?phone=${numero}&text=${encodeURIComponent(mensagem)}`;
            window.open(url, '_blank'); // Abre em nova aba
}