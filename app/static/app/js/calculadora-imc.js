document.addEventListener('DOMContentLoaded', function () {
    const alturaInput = document.getElementById('altura')
    const pesoInput = document.getElementById('peso')

    alturaInput.addEventListener('input', function () {
        let valor = this.value.replace(/\D/g, '')
        if (valor.length > 2) {
            this.value = (valor.slice(0, 1) + ',' + valor.slice(1, 3).replace(/,(?=\d)/, ',0'))
        } else {
            this.value = this.value.replace(/\D/g, '')
        }
    })

    pesoInput.addEventListener('input', function () {
        let valor = this.value.replace(/\D/g, '')
        if (valor.length >= 3) {
            if (valor.length === 3) {
                this.value = (valor.slice(0, 1) + ',' + valor.slice(1, 3))
            } else if (valor.length === 4) {
                this.value = (valor.slice(0, 2) + ',' + valor.slice(2, 4))
            } else if (valor.length >= 5) {
                this.value = (valor.slice(0, 3) + ',' + valor.slice(3, 5))
            }
        } else {
            this.value = this.value.replace(/\D/g, '')
        }
    })
})

function calcularIMC() {
    const alturaInput = document.getElementById('altura');
    const pesoInput = document.getElementById('peso');

    let altura = parseFloat(alturaInput.value.replace(",", "."));
    let peso = parseFloat(pesoInput.value.replace(",", "."));

    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        document.getElementById('resultado').innerHTML = "Por favor, insira valores válidos para peso e altura.";
        return;
    }

    const imc = peso / (altura * altura);
    let categoria = '';

    if (imc < 18.5) {
        categoria = 'Baixo peso';
    } else if (imc >= 18.5 && imc < 24.9) {
        categoria = 'Peso normal';
    } else if (imc >= 25 && imc < 29.9) {
        categoria = 'Sobrepeso';
    } else {
        categoria = 'Obesidade';
    }

    document.getElementById('resultado').innerHTML = `<span>Resultado: </span> Seu IMC é ${imc.toFixed(2)} KG/M² - Categoria: ${categoria}`;
}