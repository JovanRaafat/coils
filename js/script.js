const grid = document.getElementById("coils-grid");
const countEl = document.getElementById("count");

const show = (value) => value || "—";

function createCard(coil) {
	const message = `عايز أطلب: ${coil.name}`;
	const link = `https://wa.me/201226855792?text=${encodeURIComponent(message)}`;

	const imageHtml = coil.image
		? `<img src="${coil.image}" alt="${coil.name}">`
		: `<img src="media/logo.jpeg" alt="${coil.name}">`;

	return `
    <div class="card">
      <div class="card-img">${imageHtml}</div>
      <div class="card-body">
        <h3 class="card-name">${coil.name}</h3>
        <div class="card-price">${coil.price + 50} ج</div>
        <ul class="specs">
          <li><span>العرض</span><span>${show(coil.width)} سم</span></li>
          <li><span>الطول</span><span>${show(coil.length)} سم</span></li>
          <li><span>الارتفاع</span><span>${show(coil.height)} سم</span></li>
          <li><span>عدد الكوع</span><span>${show(coil.elbows)}</span></li>
        </ul>
        <a class="order" href="${link}" target="_blank" rel="noopener">اطلب عبر واتساب</a>
      </div>
    </div>`;
}

grid.innerHTML = coils.map(createCard).join("");
countEl.textContent = `عدد الكويلات: ${coils.length}`;
