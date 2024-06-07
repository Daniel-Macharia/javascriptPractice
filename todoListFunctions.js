
let tasks = 0;

document.addEventListener('DOMContentLoaded', ()=>{
    initializeTaskList(0);

    initializeTime();

    setInterval(count, 1000);
    //disable submit button by default
    disableSubmitButton(true);

    //when user begins typing into the input field, enable submit button
    document.querySelector('#task-item').onkeyup = ()=>{
        if( document.querySelector('#task-item').value.length > 0 )
        {
            disableSubmitButton(false);
        }
        else
        {
            disableSubmitButton(true);
        }
    };

    document.querySelector('form').onsubmit = function(){
        let task = document.querySelector('#task-item');
        //alert(`submitted ${value}`);

        const taskItem = document.createElement('li');
        taskItem.innerHTML = task.value;
        taskItem.style.color = 'blue';
        taskItem.style.fontFamily = "monospace";
        taskItem.style.fontStyle = 'Italics';

        document.querySelector('#task-list').append(taskItem);
        task.value = '';


        return false;
    };
});

function disableSubmitButton(value)
{
    document.querySelector('#submit-btn').disabled = value;
}


function initializeTime()
{
    //ensure the local storage has values
    let s = localStorage.getItem('second');
    let m = localStorage.getItem('minute');
    let h = localStorage.getItem('hour');

    let time = {second:s, minute:m, hour:h}

    if( time.second !== null && time.minute !== null && time.hour !== null )
    {
        //init here
        document.querySelector('#second').innerHTML = time.second;
        document.querySelector('#minute').innerHTML = time.minute;
        document.querySelector('#hour').innerHTML = time.hour;
    }
    else
    {
        //set default to zero
        let timeObject = {
            hour:0,
            minute:0,
            second:0
        };

        localStorage.setItem('second', timeObject['second'] );
        localStorage.setItem('minute', timeObject['minute']);
        localStorage.setItem('hour', timeObject['hour']);
    }
}


let s = localStorage.getItem('second');
let m = localStorage.getItem('minute');
let h = localStorage.getItem('hour');

s = ( s === null ) ? 0 : s;
m = ( m === null ) ? 0 : m;
h = ( h === null ) ? 0 : h;

function count()
{
    let time = {second:s, minute:m, hour:h};
    s++;
    localStorage.setItem('second', time['second']);

    if( s > 60)
    {
        s = 0;
        m++;
        localStorage.setItem('minute', time['minute']);
    }

    if( m > 60 )
    {
        m = 0;
        h++;
        localStorage.setItem('hour', time['hour']);
    }
    
    if( s < 10 )
    {
        document.querySelector('#second').innerHTML = ":0" + s;
    }
    else
    {
        document.querySelector('#second').innerHTML = ":" + s;
    }

    if( m < 10 )
    {
        document.querySelector('#minute').innerHTML = ":0" + m;
    }
    else
    {
        document.querySelector('#minute').innerHTML = ":" + m;
    }

    if( h < 10 )
    {
        document.querySelector('#hour').innerHTML = "0" + h;
    }
    else
    {
        document.querySelector('#hour').innerHTML = h;
    }
}


function initializeTaskList(number)
{
    if( number == 10 )
    {
        return;
    }

    //create a new list item
    let listItem = document.createElement('li');
    listItem.innerHTML = 'Item ' + (number + 1) ;
    listItem.style.color = 'blue';

    document.querySelector('#task-list').append(listItem);

    return initializeTaskList(number + 1);
}
