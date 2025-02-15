const pizzas = [
    { img: "images/pizza1.jpg", name: " Neapolitan Pizza", price: "₹410", discount: "50%" },
    { img: "images/pizza2.jpg", name: "Chicago Style Pizza", price: "₹433", discount: null },
    { img: "images/pizza3.jpg", name: "New York Style Pizza", price: "₹440", discount: "20%" },
    { img: "images/chicken1.jpg", name: "Tandoori Chicken", price: "₹290", discount: null },
    { img: "images/pizza5.jpg", name: "Marinara Pizza", price: "₹309", discount: "50%" },
    { img: "images/pizza6.jpg", name: "Wood-Fire Pizza", price: "₹590", discount: null },
    { img: "images/pizza7.jpg", name: "Vegeterian Pizza", price: "₹390", discount: "20%" },
    { img: "images/pizza8.jpg", name: "St.Louis Pizza", price: "₹530", discount: "50%" },
    { img: "images/pizza9.jpg", name: "New Haven Style Pizza", price: "₹490", discount: "50%" },
    { img: "images/pizza10.jpg", name: "Roman Style pizza", price: "₹360", discount: "50%" },
    { img: "images/chicken2.jpg", name: "Hot & Spicy Legs", price: "₹320", discount: "50%" },
    { img: "images/pavbhaji.jpg", name: "Pav Bhaji", price: "₹60", discount: "50%" },
]

const pizzaGrid = document.getElementById("pizzaGrid");

pizzas.forEach(pizza => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        ${pizza.discount ? `<div class="discount-badge">${pizza.discount}</div>` : ""}
        <img src="${pizza.img}" alt="${pizza.name}">
        <div class="card-content">
            <h3>${pizza.name}</h3>
            <p class="price">${pizza.price}</p>
            <div class="info">
                <span id="star">★ 4.7</span>
                <span id="time">⏳ 50-79 min</span>
                <button id="bs">+<button>
            </div>
        </div>
    `;

    pizzaGrid.appendChild(card);
});

const items = [
    {
        name: "Marinara Pizza",
        price: 309,
        rating: 4.7,
        time: '50-79 min',
        image: 'https://images.unsplash.com/photo-1571066811602-716837d681de'
    },
    {
        name: 'Pav Bhaji',
        price: 60,
        rating: 4.3,
        time: '15-29 min',
        image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84'
    },
    {
        name: 'Chilli Chicken',
        price: 250,
        rating: 4.1,
        time: '30-40 min',
        image: 'https://images.unsplash.com/photo-1562967914-608f82629710'
    },
    {
        name: 'Margherita Pizza',
        price: 310,
        rating: 4.8,
        time: '40-55 min',
        image: 'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94'
    },
    {
        name: 'Butter Chicken',
        price: 375,
        rating: 4.5,
        time: '25-35 min',
        image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398'
    },
    {
        name: 'Samosa',
        price: 50,
        rating: 4.6,
        time: '20-30 min',
        image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950'
    }
];

const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');


function initializeSlider() {
    slider.innerHTML = '';
    items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
                <div class="card-image" style="background-image: url('${item.image}')">
                    <button class="add-button">+</button>
                </div>
                <div class="card-content">
                    <h3 class="item-name">${item.name}</h3>
                    <div class="item-price">₹${item.price}</div>
                    <div class="item-info">
                        <span>★${item.rating}</span>
                        <span>⏳${item.time}</span>
                    </div>
                </div>
            `;
        slider.appendChild(card);
    });


    document.querySelectorAll('.add-button').forEach(button => {
        button.addEventListener('click', handleAddButtonClick);
    });


    const cardWidth = document.querySelector('.card').offsetWidth + 25;

    nextButton.addEventListener('click', () => {
        slider.scrollBy({ left: cardWidth, behavior: 'smooth' });
    });

    prevButton.addEventListener('click', () => {
        slider.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    });
}


function handleAddButtonClick(e) {
    e.stopPropagation();
    const card = e.target.closest('.card');
    const itemName = card.querySelector('.item-name').textContent;
    alert(`Added ${itemName} to cart!`);
}

window.addEventListener('DOMContentLoaded', initializeSlider);


document.addEventListener("DOMContentLoaded", function () {
    const video = document.querySelector("video");
    const playButton = document.getElementById("playButton");


    function togglePlay() {
        if (video.paused) {
            video.play();
            playButton.classList.add("hidden");
        } else {
            video.pause();
            playButton.classList.remove("hidden");
        }
    }


    playButton.addEventListener("click", togglePlay);

    video.addEventListener("click", function () {
        playButton.classList.toggle("hidden");
    });


    video.addEventListener("play", function () {
        playButton.classList.add("hidden");
    });

    video.addEventListener("pause", function () {
        playButton.classList.remove("hidden");
    });
});


document.getElementById("cart-icon").addEventListener("click", function () {
    document.getElementById("cart-modal").style.display = "flex";
});

document.getElementById("close-modal").addEventListener("click", function () {
    document.getElementById("cart-modal").style.display = "none";
});






const searchIcon = document.getElementById('search-icon');
const searchModal = document.getElementById('search-modals');
const cancelBtn = document.getElementById('cancel-btn');


searchIcon.addEventListener('click', () => {
    searchModal.style.display = 'flex';
});
cancelBtn.addEventListener('click', () => {
    searchModal.style.display = 'none';
});