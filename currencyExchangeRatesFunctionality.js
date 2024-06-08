
document.addEventListener('DOMContentLoaded', ()=>{

    document.querySelector('form').onsubmit = () => {
        const currency = document.querySelector('#currency');
        let currencyValue = currency.value;
        currency.value = '';

        fetch("https://api.exchangeratesapi.io/latest?base=USD")
        .then( response => {
            return response.json();
        })
        .then( data => {
            document.querySelector('#rates').innerHTML = data;
        })
        .catch( error => {
            console.log("Error: ", error);
        });

        return false;
    };

});