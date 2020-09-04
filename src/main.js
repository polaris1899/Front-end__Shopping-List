//Fetch the item from the JSON file
function loadItems() {
    return fetch('data/date.json')
        .then(response => response.json())
        .then(json => json.items);
}

// Update the list with the given items
function displayItems(items) {
    const container = document.querySelector('.items');
    //const html = items.map(item => createHTMLString(item)).join('');
    //console.log(html);
    container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

// Create HTML list item from the given data item
function createHTMLString(item) {
    return `
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item__thumbnail"/>
        <span class="item__description">${item.gender}, ${item.size}</span>
    </li>
    `;
}

// Handle button click
function onButtonClick(event, items) {
    //console.log(event.target.dataset.key);
    //console.log(event.target.dataset.value);
    const dataset = event.target.dataset;
    const key = dataset.key;
    const value = dataset.value;

    if (key == null || value == null) {
        return;
    }

    //1. const filtered = items.filter(item => item[key] === value);
    //1.console.log(filtered);
    displayItems(filtered);

    //2. 사용하자
    //updateItems(items, key, value);
}

// 1. 이렇경우, 계속 데이터 로드를 해야하는 상황 발생
function setEventListeners(items) {
    const logo = document.querySelector('.logo');
    const buttons = document.querySelector('.buttons');
    logo.addEventListener('click', () => displayItems(items));
    buttons.addEventListener('click', event => onButtonClick(event, items));
}

// 2. 데이터가 숨겼다가 나오게 함으로 더 효율적임
/*function updateItems(items, key, value) {
    const container = document.querySelector('.items');
    items.forEach(item => {
        if(items.dataset[key] === value){
            item.classList.remove('invisible');
        } else {
            item.classList.add('invisible');
        }
    });
    container.innerHTML = items.map(item => createHTMLString(item)).join('');
}*/

// main
loadItems()
    .then(items => {
        //console.log(items);
        displayItems(items);
        setEventListeners(items);
    })
    .catch(console.log);