document.getElementById('reservationForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Obtenha os valores do formulário
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const partySize = document.getElementById('partySize').value;

    // Você pode fazer algo com esses valores aqui, como enviá-los para o servidor

    // Exemplo de saída dos valores no console
    console.log('Nome:', name);
    console.log('Telefone:', phone);
    console.log('Data da Reserva:', date);
    console.log('Hora da Reserva:', time);
    console.log('Número de Pessoas:', partySize);

    // Limpar o formulário
    document.getElementById('reservationForm').reset();
});