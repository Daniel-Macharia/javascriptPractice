
let isPro = false;


document.addEventListener("DOMContentLoaded", function(){
    document.querySelector('#btn').addEventListener('click', greet );

    /*document.querySelector('form').onsubmit = function(){
        document.querySelector('p').innerHTML = "Form submitted!";
    };*/

    document.querySelector('#submit-form').addEventListener('click',
    function(){
        const nameValue = document.querySelector('#form-name');
        document.querySelector('#paragraph').innerHTML = nameValue.value;
        alert(`Hello ${nameValue.value}`);
    });

    document.querySelectorAll(".color-btn").forEach( function(button){
        
        button.addEventListener("click", () => {
            setParagraphColor( button.dataset.color );
            //document.querySelector('#paragraph').style.color = button.dataset.color;
            console.log(`Changing color to ${button.dataset.color}`);
        });
    });

    document.querySelector("#fruits").addEventListener('change', function(){
        //an arrow function does not work. It yields a value, 'undefined'.
        alert(`Selected ${this.value}`);
    });
});

function greet()
{
    let paragraph = document.querySelector("p");

    if( !isPro )
    {
        paragraph.innerHTML = "Becoming a pro";
    }
    else
    {
        paragraph.innerHTML = "Getting started with JS";
    }

    isPro = !isPro;

}

function setParagraphValue(value)
{
    document.querySelector('p').innerHTML = value;
}

function setParagraphColor(rgbColor)
{
    const nameValue = document.querySelector('#form-name');
    let paragraph = document.querySelector('#paragraph');
    paragraph.innerHTML = nameValue.value;
    paragraph.style.color = rgbColor;
}
