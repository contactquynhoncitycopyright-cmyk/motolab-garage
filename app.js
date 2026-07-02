"use strict";

const CONFIG = window.MOTOLAB_CONFIG || {};
const money = new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND", maximumFractionDigits: 0 });

const products = [
  { id: 1, name: "Pô thể thao R9 Carbon", category: "Hiệu năng", price: 2890000, oldPrice: 3290000, rating: 4.9, reviews: 86, badge: "BÁN CHẠY", image: "assets/products/exhaust.svg", meta: ["Inox 304", "Bass theo xe"], warranty: "12 tháng", fit: "Exciter / Winner / Raider", origin: "Thái Lan", desc: "Thiết kế gọn, âm trầm vừa phải và trọng lượng nhẹ. Bộ sản phẩm có cổ pô, pát và phụ kiện lắp đặt theo từng dòng xe." },
  { id: 2, name: "Đèn bi LED Projector X3", category: "Điện & đèn", price: 1850000, oldPrice: 2150000, rating: 4.8, reviews: 124, badge: "-14%", image: "assets/products/led.svg", meta: ["Ánh sáng bám đường", "Chống nước"], warranty: "18 tháng", fit: "Nhiều dòng xe", origin: "Công nghệ LED", desc: "Cụm bi LED gom sáng tốt, có cos/pha rõ ràng, hỗ trợ đi đêm an toàn khi được căn chỉnh đúng tiêu chuẩn." },
  { id: 3, name: "Heo dầu 4 piston Street Pro", category: "Phanh", price: 2450000, oldPrice: 2790000, rating: 4.9, reviews: 53, badge: "MỚI", image: "assets/products/brake.svg", meta: ["4 piston", "Nhôm CNC"], warranty: "12 tháng", fit: "Pát theo từng xe", origin: "Đài Loan", desc: "Lực phanh tuyến tính, thân nhôm gia công CNC và gioăng chịu nhiệt. Nên kết hợp dây dầu và bố phù hợp." },
  { id: 4, name: "Phuộc sau bình dầu R-Series", category: "Phuộc", price: 3190000, oldPrice: 3550000, rating: 4.8, reviews: 67, badge: "ƯA CHUỘNG", image: "assets/products/shock.svg", meta: ["Chỉnh tải", "Bình dầu rời"], warranty: "24 tháng", fit: "Air Blade / Vario / NVX", origin: "Malaysia", desc: "Cải thiện độ ổn định khi vào cua và chở hai người. Có thể tùy chỉnh tải lò xo theo cân nặng và nhu cầu." },
  { id: 5, name: "Mâm hợp kim 5 chấu Aero", category: "Ngoại hình", price: 4690000, oldPrice: 5150000, rating: 4.7, reviews: 39, badge: "CAO CẤP", image: "assets/products/wheel.svg", meta: ["Hợp kim nhẹ", "Sơn tĩnh điện"], warranty: "12 tháng", fit: "Kích thước theo xe", origin: "Việt Nam", desc: "Kiểu dáng thể thao, thiết kế cân bằng giữa thẩm mỹ và độ cứng. Sản phẩm cần kiểm tra đúng kích thước trục và đĩa." },
  { id: 6, name: "Lốp touring GripMax T2", category: "Lốp", price: 1290000, oldPrice: 1450000, rating: 4.8, reviews: 112, badge: "AN TOÀN", image: "assets/products/tire.svg", meta: ["Bám ướt", "Đi phố/touring"], warranty: "Theo NSX", fit: "Nhiều kích thước", origin: "Indonesia", desc: "Rãnh thoát nước sâu, hợp chất cao su cân bằng giữa bám đường và tuổi thọ, phù hợp di chuyển hằng ngày." },
  { id: 7, name: "ECU SmartTune V2", category: "Hiệu năng", price: 3590000, oldPrice: 3990000, rating: 4.9, reviews: 44, badge: "TINH CHỈNH", image: "assets/products/ecu.svg", meta: ["Bản đồ nhiên liệu tùy chỉnh", "Kết nối ứng dụng"], warranty: "12 tháng", fit: "Theo mã xe", origin: "Đài Loan", desc: "Cho phép tinh chỉnh nhiên liệu và phản hồi ga theo cấu hình thực tế. Cần lắp đặt và cân chỉnh bởi kỹ thuật viên." },
  { id: 8, name: "Lọc gió hiệu suất cao Flow+", category: "Hiệu năng", price: 690000, oldPrice: 790000, rating: 4.7, reviews: 91, badge: "DỄ LẮP", image: "assets/products/filter.svg", meta: ["Có thể vệ sinh", "Luồng gió tối ưu"], warranty: "6 tháng", fit: "Theo hộp gió zin", origin: "Thái Lan", desc: "Tăng khả năng lưu thông khí trong khi vẫn bảo vệ động cơ. Có thể vệ sinh và tái sử dụng theo hướng dẫn." },
  { id: 9, name: "Nhớt tổng hợp 10W40 Racing", category: "Bảo dưỡng", price: 245000, oldPrice: 280000, rating: 4.9, reviews: 214, badge: "BÁN NHIỀU", image: "assets/products/oil.svg", meta: ["API SN", "JASO MA2"], warranty: "Tem chính hãng", fit: "Xe số/côn tay", origin: "Đức", desc: "Dầu động cơ tổng hợp toàn phần, hỗ trợ vận hành ổn định ở nhiệt độ cao và sang số mượt." },
  { id: 10, name: "Bộ nhông sên dĩa X-Ring", category: "Bảo dưỡng", price: 1390000, oldPrice: 1550000, rating: 4.8, reviews: 76, badge: "BỀN BỈ", image: "assets/products/chain.svg", meta: ["X-Ring", "Thép tôi cứng"], warranty: "6 tháng", fit: "Theo tỉ số truyền", origin: "Nhật Bản", desc: "Bộ truyền động giảm ma sát, độ bền cao và vận hành êm khi được vệ sinh, căn chỉnh đúng định kỳ." },
  { id: 11, name: "Kính chiếu hậu CNC Vision", category: "Ngoại hình", price: 790000, oldPrice: 920000, rating: 4.6, reviews: 64, badge: "CNC", image: "assets/products/mirror.svg", meta: ["Chống rung", "Góc nhìn rộng"], warranty: "6 tháng", fit: "Chân ren phổ biến", origin: "Việt Nam", desc: "Thiết kế gọn, mặt kính chống chói nhẹ và khớp chỉnh chắc chắn. Có pát chuyển cho nhiều dòng xe." },
  { id: 12, name: "Bao tay chống trượt Street", category: "Ngoại hình", price: 320000, oldPrice: 390000, rating: 4.7, reviews: 138, badge: "GIÁ TỐT", image: "assets/products/grip.svg", meta: ["Cao su mềm", "Giảm tê tay"], warranty: "3 tháng", fit: "Tay lái 22mm", origin: "Việt Nam", desc: "Bề mặt bám tốt khi tay ướt, lớp cao su đàn hồi giúp giảm mỏi trong các chuyến đi dài." },
  { id: 13, name: "Yên thể thao Comfort GT", category: "Ngoại hình", price: 1690000, oldPrice: 1890000, rating: 4.8, reviews: 47, badge: "ÊM ÁI", image: "assets/products/seat.svg", meta: ["Mút nhiều lớp", "Da chống trượt"], warranty: "12 tháng", fit: "Đóng theo mẫu xe", origin: "Việt Nam", desc: "Tạo hình ôm người, mút nhiều mật độ và bề mặt chống trượt, phù hợp cả đi phố lẫn đường dài." },
  { id: 14, name: "Ốp body kit Urban V2", category: "Ngoại hình", price: 2250000, oldPrice: 2590000, rating: 4.7, reviews: 33, badge: "PHONG CÁCH", image: "assets/products/bodykit.svg", meta: ["ABS dẻo", "Sơn theo màu"], warranty: "6 tháng", fit: "Vario / Air Blade", origin: "Việt Nam", desc: "Bộ ốp tạo phong cách mạnh mẽ, sử dụng nhựa ABS dẻo và ngàm lắp theo xe để hạn chế rung lắc." },
  { id: 15, name: "Camera hành trình MotoCam S2", category: "Điện & đèn", price: 2790000, oldPrice: 3150000, rating: 4.8, reviews: 58, badge: "2K", image: "assets/products/camera.svg", meta: ["2 camera", "Wi‑Fi/Ứng dụng"], warranty: "12 tháng", fit: "Mọi dòng xe", origin: "Trung Quốc", desc: "Ghi hình trước sau, hỗ trợ kết nối điện thoại, chống nước và tự động ghi vòng lặp khi xe hoạt động." },
  { id: 16, name: "Còi đôi âm trầm Compact", category: "Điện & đèn", price: 580000, oldPrice: 650000, rating: 4.6, reviews: 82, badge: "ÂM TRẦM", image: "assets/products/horn.svg", meta: ["12V", "Kèm relay"], warranty: "6 tháng", fit: "Hệ điện 12V", origin: "Công nghệ Nhật Bản", desc: "Âm thanh rõ, dải trầm chắc. Bộ lắp đúng kỹ thuật gồm relay, cầu chì và dây nguồn độc lập." }
];

const gallery = [
  ["assets/gallery/project-1.svg", "Đêm đô thị", "Vario 160 · đèn, phuộc, bộ ốp"],
  ["assets/gallery/project-2.svg", "Carbon đường phố", "Exciter 155 · pô, ECU, phanh"],
  ["assets/gallery/project-3.svg", "Sẵn sàng đường dài", "Winner X · lốp, yên, camera hành trình"],
  ["assets/gallery/project-4.svg", "Bạc tinh gọn", "Air Blade · chăm sóc & làm mới"],
  ["assets/gallery/project-5.svg", "Điểm nhấn đường đua", "Raider · mâm, phanh, tay lái"],
  ["assets/gallery/project-6.svg", "Cao cấp hằng ngày", "SH · đèn, phuộc, chăm sóc chi tiết"]
];

let activeCategory = "Tất cả";
let showAll = false;

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem("motolab-cart") || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch (_) {
    return [];
  }
}
let cart = loadCart();

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

function applyConfig() {
  $$('[data-store-name]').forEach(el => el.textContent = CONFIG.STORE_NAME || "MOTOLAB GARAGE");
  $$('[data-slogan]').forEach(el => el.textContent = CONFIG.SLOGAN || "Độ chất riêng — Sửa chuẩn kỹ thuật");
  $$('[data-phone]').forEach(el => el.textContent = CONFIG.PHONE || "0901 234 567");
  $$('[data-phone-link]').forEach(el => el.href = `tel:${String(CONFIG.PHONE || "").replace(/\D/g, "")}`);
  $$('[data-address]').forEach(el => el.textContent = CONFIG.ADDRESS || "Hãy cập nhật địa chỉ trong config.js");
  $$('[data-opening-hours]').forEach(el => el.textContent = CONFIG.OPENING_HOURS || "07:30 – 20:30");
  $$('[data-email]').forEach(el => el.textContent = CONFIG.EMAIL || "contact@example.com");
  $$('[data-email-link]').forEach(el => el.href = `mailto:${CONFIG.EMAIL || "contact@example.com"}`);
  const zaloPhone = String(CONFIG.ZALO_PHONE || CONFIG.PHONE || "").replace(/\D/g, "");
  const zaloUrl = CONFIG.ZALO_URL || (zaloPhone ? `https://zalo.me/${zaloPhone}` : "#");
  $$('[data-zalo-link]').forEach(el => { el.href = zaloUrl; el.setAttribute("target", "_blank"); el.setAttribute("rel", "noopener"); });
  $$('[data-map-link]').forEach(el => el.href = CONFIG.MAP_URL || "#");
  const note = $("#sampleAddressNotice");
  if (note && CONFIG.SHOW_SAMPLE_ADDRESS_NOTICE === false) note.remove();
  document.title = `${CONFIG.STORE_NAME || "MOTOLAB GARAGE"} | Độ & sửa xe chuyên nghiệp`;
}

function productCard(p) {
  return `<article class="product-card reveal" data-product-id="${p.id}">
    <div class="product-image" data-view-product="${p.id}">
      <span class="product-badge">${p.badge}</span>
      <img src="${p.image}" alt="${p.name}" loading="lazy" />
      <button class="quick-view" aria-label="Xem nhanh ${p.name}" data-view-product="${p.id}">⌕</button>
    </div>
    <div class="product-info">
      <span class="product-category">${p.category}</span>
      <h3>${p.name}</h3>
      <div class="rating-row">★★★★★ <span>${p.rating} (${p.reviews})</span></div>
      <div class="product-meta">${p.meta.map(x => `<span>${x}</span>`).join("")}</div>
      <div class="product-bottom">
        <div class="product-price"><strong>${money.format(p.price)}</strong><del>${money.format(p.oldPrice)}</del></div>
        <button class="add-cart" data-add-cart="${p.id}" aria-label="Thêm ${p.name} vào giỏ">+</button>
      </div>
    </div>
  </article>`;
}

function renderCategories() {
  const categories = ["Tất cả", ...new Set(products.map(p => p.category))];
  $("#categoryTabs").innerHTML = categories.map(c => `<button class="${c === activeCategory ? "active" : ""}" data-category="${c}">${c}</button>`).join("");
}

function getVisibleProducts() {
  let list = activeCategory === "Tất cả" ? [...products] : products.filter(p => p.category === activeCategory);
  const sort = $("#sortProducts").value;
  if (sort === "price-asc") list.sort((a,b) => a.price - b.price);
  if (sort === "price-desc") list.sort((a,b) => b.price - a.price);
  if (sort === "rating") list.sort((a,b) => b.rating - a.rating || b.reviews - a.reviews);
  return showAll ? list : list.slice(0, 12);
}

function renderProducts() {
  const list = getVisibleProducts();
  $("#productGrid").innerHTML = list.map(productCard).join("");
  $("#showAllProducts").textContent = showAll ? "Thu gọn danh sách" : "Hiển thị toàn bộ sản phẩm";
  initReveal();
}

function openProduct(id) {
  const p = products.find(x => x.id === Number(id));
  if (!p) return;
  $("#productModalContent").innerHTML = `<div class="product-modal-layout">
    <div class="product-modal-image"><img src="${p.image}" alt="${p.name}" /></div>
    <div class="product-modal-copy">
      <span class="eyebrow">${p.category}</span><h2>${p.name}</h2>
      <div class="rating-row">★★★★★ <span>${p.rating} · ${p.reviews} đánh giá</span></div>
      <p>${p.desc}</p>
      <div class="spec-list"><div><span>Tương thích</span><b>${p.fit}</b></div><div><span>Xuất xứ</span><b>${p.origin}</b></div><div><span>Bảo hành</span><b>${p.warranty}</b></div><div><span>Lắp đặt</span><b>Tư vấn tại xưởng</b></div></div>
      <div class="modal-price">${money.format(p.price)}</div>
      <button class="btn btn-primary" data-add-cart="${p.id}">Thêm vào giỏ <span>＋</span></button>
    </div>
  </div>`;
  openModal("productModal");
}

function addToCart(id) {
  const product = products.find(p => p.id === Number(id));
  if (!product) return;
  const existing = cart.find(x => x.id === product.id);
  if (existing) existing.qty += 1; else cart.push({ id: product.id, qty: 1 });
  saveCart();
  toast(`Đã thêm “${product.name}” vào giỏ`);
}

function saveCart() {
  try { localStorage.setItem("motolab-cart", JSON.stringify(cart)); } catch (_) { /* Trình duyệt chặn lưu cục bộ; giỏ vẫn dùng được trong phiên hiện tại. */ }
  updateCartCount();
  renderCart();
}

function updateCartCount() {
  $("#cartCount").textContent = cart.reduce((n, x) => n + x.qty, 0);
}

function renderCart() {
  const holder = $("#cartItems");
  if (!cart.length) {
    holder.innerHTML = `<div class="cart-empty"><div><div style="font-size:42px">🛒</div><p>Chưa có sản phẩm nào trong giỏ.</p></div></div>`;
    $("#cartTotal").textContent = money.format(0);
    return;
  }
  holder.innerHTML = cart.map(item => {
    const p = products.find(x => x.id === item.id);
    return `<div class="cart-item"><img src="${p.image}" alt="${p.name}" /><div><h4>${p.name}</h4><small>Số lượng: ${item.qty}</small><strong>${money.format(p.price * item.qty)}</strong></div><button data-remove-cart="${p.id}" aria-label="Xóa">×</button></div>`;
  }).join("");
  const total = cart.reduce((sum,item) => sum + products.find(p => p.id === item.id).price * item.qty,0);
  $("#cartTotal").textContent = money.format(total);
}

function removeCart(id) {
  cart = cart.filter(x => x.id !== Number(id));
  saveCart();
}

function cartMessage() {
  if (!cart.length) return "Giỏ hàng trống";
  const lines = cart.map(item => {
    const p = products.find(x => x.id === item.id);
    return `- ${p.name} x${item.qty}: ${money.format(p.price * item.qty)}`;
  });
  const total = cart.reduce((sum,item) => sum + products.find(p => p.id === item.id).price * item.qty,0);
  return `${lines.join("\n")}\nTạm tính: ${money.format(total)}`;
}

function openModal(id) {
  const modal = document.getElementById(id);
  if (!modal) return;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}
function closeModals() {
  $$(".modal.open").forEach(m => { m.classList.remove("open"); m.setAttribute("aria-hidden","true"); });
  document.body.classList.remove("modal-open");
}

async function publishNtfy({ title, message, priority = 4, tags = ["wrench"] }) {
  const server = String(CONFIG.NTFY_SERVER || "https://ntfy.sh").replace(/\/$/, "");
  const topic = String(CONFIG.NTFY_TOPIC || "").trim();
  if (!topic || topic.includes("YOUR_TOPIC")) throw new Error("Chưa cấu hình NTFY_TOPIC trong config.js");
  const response = await fetch(`${server}/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ topic, title, message, priority, tags, click: location.href })
  });
  if (!response.ok) throw new Error(`ntfy phản hồi mã ${response.status}`);
  return response.json().catch(() => ({}));
}

function formDataObject(form) { return Object.fromEntries(new FormData(form).entries()); }
function setFormLoading(form, loading) {
  const btn = $("button[type='submit']", form);
  if (!btn) return;
  if (!btn.dataset.original) btn.dataset.original = btn.innerHTML;
  btn.disabled = loading;
  btn.innerHTML = loading ? "Đang gửi..." : btn.dataset.original;
}
function setFormStatus(form, text, type = "") {
  const box = $(".form-status", form);
  if (!box) return;
  box.textContent = text; box.className = `form-status ${type}`;
}

async function handleBooking(e) {
  e.preventDefault();
  const form = e.currentTarget; const d = formDataObject(form);
  setFormLoading(form,true); setFormStatus(form,"Đang chuyển yêu cầu đến admin...");
  const message = `YÊU CẦU ĐẶT LỊCH\nKhách: ${d.name}\nSĐT: ${d.phone}\nDòng xe: ${d.vehicle}\nDịch vụ: ${d.service}\nThời gian: ${d.date} · ${d.time}\nNội dung: ${d.message}`;
  try {
    await publishNtfy({ title: `🔧 Lịch mới: ${d.name} — ${d.vehicle}`, message, priority: 4, tags: ["wrench","calendar"] });
    setFormStatus(form,"Đã gửi thành công. Cửa hàng sẽ liên hệ để xác nhận.","success"); form.reset(); setMinDate(); toast("Đã gửi lịch đến admin");
  } catch (err) { setFormStatus(form,`Không gửi được: ${err.message}. Hãy gọi hotline để được hỗ trợ.`,"error"); }
  finally { setFormLoading(form,false); }
}

async function handleSupport(e) {
  e.preventDefault();
  const form = e.currentTarget; const d = formDataObject(form);
  const source = form.id === "quickNotifyForm" ? "Biểu mẫu nhanh" : "Cửa sổ hỗ trợ";
  setFormLoading(form,true); setFormStatus(form,"Đang gửi thông báo đến điện thoại quản trị viên...");
  const message = `YÊU CẦU HỖ TRỢ\nNguồn: ${source}\nKhách: ${d.name}\nSĐT: ${d.phone}\nChủ đề: ${d.subject || "Hỗ trợ chung"}\nNội dung: ${d.message}`;
  try {
    await publishNtfy({ title: `🔔 Hỗ trợ mới: ${d.subject || d.name}`, message, priority: d.subject === "Đặt lịch khẩn" ? 5 : 4, tags: ["bell","telephone_receiver"] });
    setFormStatus(form,"Đã gửi thành công. Quản trị viên đã nhận thông báo trên điện thoại.","success"); form.reset(); toast("Đã gửi thông báo đến quản trị viên");
  } catch (err) { setFormStatus(form,`Không gửi được: ${err.message}. Hãy gọi hotline hoặc nhắn Zalo.`,"error"); }
  finally { setFormLoading(form,false); }
}

function renderGallery() {
  $("#galleryGrid").innerHTML = gallery.map(([img,title,sub]) => `<figure class="gallery-item reveal"><img src="${img}" alt="${title}" loading="lazy" /><figcaption class="gallery-caption"><b>${title}</b><small>${sub}</small></figcaption></figure>`).join("");
}

function renderSearch(query = "") {
  const q = query.trim().toLocaleLowerCase("vi");
  const result = q ? products.filter(p => `${p.name} ${p.category} ${p.desc} ${p.meta.join(" ")}`.toLocaleLowerCase("vi").includes(q)).slice(0,8) : products.slice(0,6);
  $("#searchResults").innerHTML = result.length ? result.map(p => `<div class="search-result" data-view-product="${p.id}"><img src="${p.image}" alt=""/><div><b>${p.name}</b><small>${p.category} · ${p.meta.join(" · ")}</small></div><strong>${money.format(p.price)}</strong></div>`).join("") : `<p style="color:var(--muted)">Không tìm thấy sản phẩm phù hợp.</p>`;
}

function toast(text) {
  const box = $("#toast"); box.textContent = text; box.classList.add("show");
  clearTimeout(toast.timer); toast.timer = setTimeout(() => box.classList.remove("show"),2500);
}

function setMinDate() {
  const input = $('#bookingForm input[type="date"]');
  if (!input) return;
  const d = new Date(); d.setMinutes(d.getMinutes() - d.getTimezoneOffset()); input.min = d.toISOString().split("T")[0];
}

function initReveal() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { $$(".reveal").forEach(el => el.classList.add("visible")); return; }
  if (!window.revealObserver) {
    window.revealObserver = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("visible"); window.revealObserver.unobserve(entry.target); } }), { threshold: .12 });
  }
  $$(".reveal:not(.visible)").forEach(el => window.revealObserver.observe(el));
}

function bindEvents() {
  document.addEventListener("click", e => {
    const view = e.target.closest("[data-view-product]"); if (view) openProduct(view.dataset.viewProduct);
    const add = e.target.closest("[data-add-cart]"); if (add) addToCart(add.dataset.addCart);
    const remove = e.target.closest("[data-remove-cart]"); if (remove) removeCart(remove.dataset.removeCart);
    if (e.target.closest("[data-close-modal]")) closeModals();
    if (e.target.closest("[data-open-support]")) openModal("supportModal");
    const cat = e.target.closest("[data-category]"); if (cat) { activeCategory = cat.dataset.category; showAll = false; renderCategories(); renderProducts(); }
  });

  $("#sortProducts").addEventListener("change",renderProducts);
  $("#showAllProducts").addEventListener("click",() => { showAll = !showAll; renderProducts(); if (!showAll) $("#products").scrollIntoView({behavior:"smooth"}); });
  $("#openCart").addEventListener("click",() => openModal("cartModal"));
  $("#cartSupportBtn").addEventListener("click",() => {
    closeModals(); openModal("supportModal");
    const textarea = $('#supportForm textarea[name="message"]');
    const select = $('#supportForm select[name="subject"]');
    select.value = "Tư vấn sản phẩm"; textarea.value = `Tôi cần tư vấn các sản phẩm sau:\n${cartMessage()}`;
  });
  $("#bookingForm").addEventListener("submit",handleBooking);
  $("#supportForm").addEventListener("submit",handleSupport);
  const quickNotifyForm = $("#quickNotifyForm");
  if (quickNotifyForm) quickNotifyForm.addEventListener("submit",handleSupport);

  $("#openSearch").addEventListener("click",() => { $("#searchOverlay").classList.add("open"); $("#searchOverlay").setAttribute("aria-hidden","false"); document.body.classList.add("modal-open"); renderSearch(); setTimeout(() => $("#globalSearch").focus(),50); });
  $("#closeSearch").addEventListener("click",closeSearch);
  $("#globalSearch").addEventListener("input",e => renderSearch(e.target.value));
  function closeSearch(){ $("#searchOverlay").classList.remove("open"); $("#searchOverlay").setAttribute("aria-hidden","true"); document.body.classList.remove("modal-open"); }

  $("#menuToggle").addEventListener("click",e => { const open = $("#mainNav").classList.toggle("open"); e.currentTarget.setAttribute("aria-expanded",String(open)); });
  $$("#mainNav a").forEach(a => a.addEventListener("click",() => $("#mainNav").classList.remove("open")));

  $("#compareRange").addEventListener("input",e => $("#compareAfter").style.width = `${e.target.value}%`);
  document.addEventListener("keydown",e => { if (e.key === "Escape") { closeModals(); closeSearch(); } });
}

function init() {
  applyConfig(); renderCategories(); renderProducts(); renderGallery(); renderCart(); updateCartCount(); setMinDate(); bindEvents(); initReveal();
  $("#currentYear").textContent = new Date().getFullYear();
}

document.addEventListener("DOMContentLoaded",init);
