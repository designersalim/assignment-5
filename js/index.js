document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = './home.html';
})


document.getElementById('donate-btn').addEventListener('click', function(){
    document.getElementById('donate-btn').classList.remove('bg-lime-400');
    document.getElementById('history-btn').classList.remove('bg-lime-400');
    document.getElementById('donate-btn').classList.add('bg-lime-400')
    document.getElementById('donate-section').classList.add('hidden')
    document.getElementById('transaction-section').classList.add('hidden')
    document.getElementById('donate-section').classList.remove('hidden');    
})

document.getElementById('history-btn').addEventListener('click', function(){
    document.getElementById('donate-btn').classList.remove('bg-lime-400');
    document.getElementById('history-btn').classList.remove('bg-lime-400');
    document.getElementById('history-btn').classList.add('bg-lime-400')
    document.getElementById('donate-section').classList.add('hidden')
    document.getElementById('transaction-section').classList.add('hidden')
    document.getElementById('transaction-section').classList.remove('hidden');
})


document.getElementById('noakhali-btn').addEventListener('click', function(event){
    event.preventDefault();
    const noakhaliValue = getInputElementById('noakhali-input')
    const balance = getTextElementById('current-balance')
    if(noakhaliValue >= 0 && noakhaliValue <= balance){
        const noakhaliBalance = getTextElementById('noakhali-balance');
        const numText = parseFloat(noakhaliBalance);
        const newBalance = noakhaliValue + numText;
        document.getElementById('noakhali-balance').innerText = newBalance;
        document.getElementById('current-balance').innerText = balance - noakhaliValue;
        document.getElementById('congrats-btn').classList.remove('hidden');
        const p = document.createElement('p')
        p.innerText = `${noakhaliValue} Taka Donated for Flood at Noakhali, Bangladesh,
                        Current Balance is ${balance}`;
        document.getElementById('transaction-container').appendChild(p);
    }
    else{
        alert("Please enter correct amount.")
    }
})

document.getElementById('close-btn').addEventListener('click', function(){
    document.getElementById('congrats-btn').classList.add('hidden')
})

document.getElementById('feni-btn').addEventListener('click', function(event){
    event.preventDefault();
    const feniValue = getInputElementById('feni-input')
    const balance2 = getTextElementById('current-balance')
    if(feniValue >= 0 && feniValue <= balance2){
        const feniBalance = getTextElementById('feni-balance');
        const numText2 = parseFloat(feniBalance);
        const newBalance2 = feniValue + numText2;
        document.getElementById('feni-balance').innerText = newBalance2;
        document.getElementById('current-balance').innerText = balance2 - feniValue;
        document.getElementById('congrats-btn').classList.remove('hidden');
        const p = document.createElement('p')
        p.innerText = `${feniValue} Taka Donated for Flood Relief in Feni,Bangladesh,
                        Current Balance is ${balance2}`;
        document.getElementById('transaction-container').appendChild(p);
        
    }
    else{
        alert("Please enter correct amount.")
    }
})


document.getElementById('quota-btn').addEventListener('click', function(event){
    event.preventDefault();
    const quotaValue = getInputElementById('quota-input')
    const balance3 = getTextElementById('current-balance')
    if(quotaValue >= 0 && quotaValue <= balance3){
        const quotaBalance = getTextElementById('quota-balance');
        const numText3 = parseFloat(quotaBalance);
        const newBalance3 = quotaValue + numText3;
        document.getElementById('quota-balance').innerText = newBalance3;
        const newCurrentBalance = balance3-quotaValue;
        document.getElementById('current-balance').innerText = newCurrentBalance;
        document.getElementById('congrats-btn').classList.remove('hidden');
        const p = document.createElement('p')
        p.innerText = `${quotaValue} Taka Donated for Injured in the Quota Movement,
                        Current Balance is ${newCurrentBalance}`;
        document.getElementById('transaction-container').appendChild(p);
        
    }
    else{
        alert("Please enter correct amount.")
    }
})