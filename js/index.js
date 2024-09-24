document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = './home.html';
})

document.getElementById('donate-logo').addEventListener('click', function(){
    window.location.href = './index.html';
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


document.getElementById('noakhali-btn').addEventListener('click', function(){
    const noakhaliValue = getInputElementById('noakhali-input')
    const balance = getTextElementById('current-balance')
    if(noakhaliValue >= 0 && noakhaliValue <= balance){
        const noakhaliBalance = getTextElementById('noakhali-balance');
        const numText = parseFloat(noakhaliBalance);
        const newBalance = noakhaliValue + numText;
        document.getElementById('noakhali-balance').innerText = newBalance;
        const currentBalance2 = balance - noakhaliValue;
        document.getElementById('current-balance').innerText = currentBalance2;
        document.getElementById('congrats-btn').classList.remove('hidden');
        const historyItem = document.createElement('div')
        historyItem.className = 'bg-gray-50 p-3 rounded-md border border-blue-300'
        historyItem.innerHTML = `
                    <p class="font-bold text-2xl text-orange-400">Thanks for Your Donation</p>
                    <p class="font-bold text-xl text-green-500">You Donated ${noakhaliValue} or Flood at Noakhali, Bangladesh</p>
                    <p class="font-bold text-lg text-gray-500">Previous Balance: ${balance}</p>
                    <p class="font-bold text-lg text-gray-500">Donation Amount : ${noakhaliValue}</p>
                    <p class="font-bold text-lg text-gray-500">Current Balance : ${currentBalance2}</p>
                    <p class="font-bold text-lg text-gray-500">Donation Time : ${new Date()}</p>
        `;
        const historyContainer = document.getElementById('transaction-container');
        historyContainer.insertBefore(historyItem, historyContainer.firstChild);
    }
    else{
        alert("Please enter correct amount.")
    }
})

document.getElementById('close-btn').addEventListener('click', function(){
    document.getElementById('congrats-btn').classList.add('hidden')
})

document.getElementById('feni-btn').addEventListener('click', function(){
    const feniValue = getInputElementById('feni-input')
    const balance2 = getTextElementById('current-balance')
    if(feniValue >= 0 && feniValue <= balance2){
        const feniBalance = getTextElementById('feni-balance');
        const numText2 = parseFloat(feniBalance);
        const newBalance2 = feniValue + numText2;
        document.getElementById('feni-balance').innerText = newBalance2;
        const currentBalance = balance2 - feniValue;
        document.getElementById('current-balance').innerText = currentBalance;
        document.getElementById('congrats-btn').classList.remove('hidden');
        const historyItem = document.createElement('div')
        historyItem.className = 'bg-gray-50 p-3 rounded-md border border-blue-300'
        historyItem.innerHTML = `
                    <p class="font-bold text-2xl text-orange-400">Thanks for Your Donation</p>
                    <p class="font-bold text-xl text-green-500">You Donated ${feniValue} or Flood Relief in Feni,Bangladesh</p>
                    <p class="font-bold text-lg text-gray-500">Previous Balance: ${balance2}</p>
                    <p class="font-bold text-lg text-gray-500">Donation Amount : ${feniValue}</p>
                    <p class="font-bold text-lg text-gray-500">Current Balance : ${currentBalance}</p>
                    <p class="font-bold text-lg text-gray-500">Donation Time : ${new Date()}</p>
        `;
        const historyContainer = document.getElementById('transaction-container');
        historyContainer.insertBefore(historyItem, historyContainer.firstChild);
        
    }
    else{
        alert("Please enter correct amount.")
    }
})


document.getElementById('quota-btn').addEventListener('click', function(){
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
        const historyItem = document.createElement('div')
        historyItem.className = 'bg-gray-50 p-3 rounded-md border border-blue-300'
        historyItem.innerHTML = `
                    <p class="font-bold text-2xl text-orange-400">Thanks for Your Donation</p>
                    <p class="font-bold text-xl text-green-500">You Donated ${quotaValue} or Injured in the Quota Movement</p>
                    <p class="font-bold text-lg text-gray-500">Previous Balance: ${balance3}</p>
                    <p class="font-bold text-lg text-gray-500">Donation Amount : ${quotaValue}</p>
                    <p class="font-bold text-lg text-gray-500">Current Balance : ${newCurrentBalance}</p>
                    <p class="font-bold text-lg text-gray-500">Donation Time : ${new Date()}</p>
        `;
        const historyContainer = document.getElementById('transaction-container');
        historyContainer.insertBefore(historyItem, historyContainer.firstChild);
        
    }
    else{
        alert("Please enter correct amount.")
    }
})