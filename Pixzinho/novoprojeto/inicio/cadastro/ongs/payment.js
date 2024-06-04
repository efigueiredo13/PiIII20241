document.addEventListener('DOMContentLoaded', function () {
    const amountSelect = document.getElementById('amount');
    const otherAmountInput = document.getElementById('otherAmount');

    amountSelect.addEventListener('change', function () {
        if (amountSelect.value === 'other') {
            otherAmountInput.style.display = 'block';
            otherAmountInput.required = true;
        } else {
            otherAmountInput.style.display = 'none';
            otherAmountInput.required = false;
        }
    });

    document.getElementById('paymentForm').addEventListener('submit', function (event) {
        event.preventDefault();
        // Lógica para processar o pagamento pode ser adicionada aqui
        alert('Doação realizada com sucesso!');
    });
});
