let order = [];
let total = 0;

function addToOrder(item, price) {
    order.push({ item, price });
    total += price;
    updateOrderDisplay();
}

function updateOrderDisplay() {
    const orderList = document.getElementById('order-list');
    orderList.innerHTML = '';
    order.forEach((item, index) => {
        const li = document.createElement('li');
        li.textContent = `${item.item} - Rp ${item.price}`;
        orderList.appendChild(li);
    });
    document.getElementById('total').textContent = total;
}

document.getElementById('order-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const notes = document.getElementById('notes').value;
    
    // Simulasi pengiriman (dalam dunia nyata, kirim ke server)
    alert(`Pesanan dikirim!\nNama: ${name}\nTelepon: ${phone}\nCatatan: ${notes}\nTotal: Rp ${total}`);
    
    // Reset
    order = [];
    total = 0;
    updateOrderDisplay();
    this.reset();
});