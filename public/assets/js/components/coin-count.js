function createCoinCount(count) {
    const coinCount = document.createElement('div');
    coinCount.classList.add('coin-count', 'd-flex', 'justify-content-evenly', 'align-items-center', 'py-1', 'px-2', 'bg-third', 'rounded-pill');
    coinCount.style.minWidth = '100px';
    coinCount.style.width = '0';
    coinCount.style.height = "35px"; // Set height to the value of the height parameter
  
    const coinIcon = document.createElement('h3');
    coinIcon.style.fontSize = "1.4rem";
    const coinIconSymbol = document.createElement('i');
    coinIconSymbol.classList.add('fa-solid', 'fa-coins');
    coinIcon.appendChild(coinIconSymbol);
  
    const coinValue = document.createElement('h3');
    coinValue.style.fontSize = "1.4rem";
    coinValue.textContent = count;
  
    coinCount.appendChild(coinIcon);
    coinCount.appendChild(coinValue);
  
    return coinCount;
  }
  
  document.querySelector('.total-coin-count').appendChild(createCoinCount(0));
  
  document.querySelector('.timeframe-coin-count').appendChild(createCoinCount(15));
  
  
