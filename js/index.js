document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = '/home.html';
})

document.getElementById('donate-logo').addEventListener('click', function(){
    window.location.href = './index.html';
})

document.getElementById('donate-btn').addEventListener('click', function(){
    document.getElementById('donate-btn').classList.remove('bg-lime-400');
    document.getElementById('history-btn').classList.remove('bg-lime-400');
    document.getElementById('donate-btn').classList.add('bg-lime-400')

})

document.getElementById('history-btn').addEventListener('click', function(){
    document.getElementById('donate-btn').classList.remove('bg-lime-400');
    document.getElementById('history-btn').classList.remove('bg-lime-400');
    document.getElementById('history-btn').classList.add('bg-lime-400')

})


document.getElementById('noakhali-btn').addEventListener('click', function(event){
    event.preventDefault();
    const noakhaliValue = getInputElementById('noakhali-input')
    const balance = getTextElementById('current-balance')
    if(noakhaliValue > 0 && noakhaliValue < balance){
        const noakhaliBalance = getTextElementById('noakhali-balance');
        const numText = parseFloat(noakhaliBalance);
        const newBalance = noakhaliValue + numText;
        document.getElementById('noakhali-balance').innerText = newBalance;
        document.getElementById('current-balance').innerText = balance - noakhaliValue;
        document.getElementById('congrats-btn').classList.remove('hidden');
        
    }
    else{
        alert("Please enter correct amount.")
    }
})

document.getElementById('close-btn').addEventListener('click', function(){
    document.getElementById('congrats-btn').classList.add('hidden')
})