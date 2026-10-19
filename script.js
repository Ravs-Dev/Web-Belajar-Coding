// Database Material Coding (PAWN Dihapus, Digantikan & Ditambah C++, Python, C#, SQL, Dart, Java, Go)
const SCRIPT_DATA = {
  cpp: {
    title: "C++ Programming",
    icon: "fa-solid fa-code",
    desc: "Bahasa berkinerja tinggi untuk sistem, game engine, dan aplikasi desktop.",
    topics: [
      {
        name: "Struktur Dasar & Output cout",
        purpose: "Pintu masuk utama program C++ menggunakan pustaka iostream.",
        code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << "Halo dari C++!" << endl;\n    return 0;\n}`
      },
      {
        name: "Percabangan if - else",
        purpose: "Mengeksekusi blok kode berdasarkan kondisi tertentu.",
        code: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int skor = 85;\n    \n    if (skor >= 75) {\n        cout << "Selamat, Anda LULUS!" << endl;\n    } else {\n        cout << "Maaf, coba lagi." << endl;\n    }\n    return 0;\n}`
      },
      {
        name: "Perulangan for Loop",
        purpose: "Mengulang iterasi kode dengan jumlah perulangan yang pasti.",
        code: `for (int i = 1; i <= 5; i++) {\n    cout << "Perulangan ke-" << i << endl;\n}`
      }
    ]
  },
  python: {
    title: "Python 3",
    icon: "fa-brands fa-python",
    desc: "Bahasa pemrograman populer yang sangat bersih dan mudah dipelajari.",
    topics: [
      {
        name: "Logika Conditional if-elif-else",
        purpose: "Pemeriksaan kondisi bercabang dalam Python.",
        code: `umur = 18\n\nif umur >= 17:\n    print("Sudah bisa bikin KTP")\nelse:\n    print("Belum cukup umur")`
      },
      {
        name: "Function (Def)",
        purpose: "Membuat blok kode yang dapat dipanggil berkali-kali.",
        code: `def sapa(nama):\n    return f"Halo, {nama}! Selamat belajar Python."\n\nprint(sapa("Budi"))`
      }
    ]
  },
  js: {
    title: "JavaScript (ES6+)",
    icon: "fa-brands fa-js",
    desc: "Bahasa pemrograman logika interaktif untuk membuat web hidup.",
    topics: [
      {
        name: "Percabangan IF - ELSE",
        purpose: "Mengeksekusi kode berdasarkan kondisi logika tertentu (Benar/Salah).",
        code: `let nilai = 85;\n\nif (nilai >= 75) {\n  console.log("Selamat, Anda LULUS!");\n} else {\n  console.log("Maaf, Anda harus remidi.");\n}`
      },
      {
        name: "Looping FOR",
        purpose: "Mengulang instruksi kode secara otomatis hingga batas yang ditentukan.",
        code: `for (let i = 1; i <= 5; i++) {\n  console.log("Perulangan ke-" + i);\n}`
      }
    ]
  },
  html: {
    title: "HTML5 (HyperText Markup Language)",
    icon: "fa-brands fa-html5",
    desc: "Bahasa standar pembuatan struktur dasar halaman web.",
    topics: [
      {
        name: "<div> & <section>",
        purpose: "Digunakan sebagai kontainer untuk mengelompokkan elemen web.",
        code: `<!-- Contoh Wadah Konten -->\n<div class="box-container">\n  <h2>Judul Artikel</h2>\n  <p>Ini adalah isi paragraf di dalam box.</p>\n</div>`
      },
      {
        name: "<a> (Anchor Link)",
        purpose: "Digunakan untuk membuat tautan / link navigasi ke halaman lain.",
        code: `<!-- Contoh Link Navigasi -->\n<a href="https://google.com" target="_blank">Buka Google</a>`
      }
    ]
  },
  css: {
    title: "CSS3 (Cascading Style Sheets)",
    icon: "fa-brands fa-css3-alt",
    desc: "Digunakan untuk mengatur tampilan, tata letak, warna, dan animasi 3D.",
    topics: [
      {
        name: "Flexbox Layout",
        purpose: "Membuat tata letak elemen menjadi responsif dan rapi secara fleksibel.",
        code: `.container {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}`
      },
      {
        name: "3D Transform & Shadow",
        purpose: "Memberikan efek kedalaman 3D dan bayangan bercahaya (glowing effect).",
        code: `.card-3d {\n  transform: perspective(1000px) rotateY(15deg);\n  box-shadow: 0 0 20px rgba(0, 210, 255, 0.5);\n}`
      }
    ]
  },
  csharp: {
    title: "C# (C-Sharp)",
    icon: "fa-solid fa-terminal",
    desc: "Bahasa populer dari Microsoft untuk game Unity dan enterprise app.",
    topics: [
      {
        name: "Kondisi if-else pada C#",
        purpose: "Pengecekan logika kondisi pada C#.",
        code: `using System;\n\nclass Program {\n    static void Main() {\n        int status = 1;\n        if (status == 1) {\n            Console.WriteLine("Server Online");\n        } else {\n            Console.WriteLine("Server Offline");\n        }\n    }\n}`
      }
    ]
  },
  sql: {
    title: "SQL Database",
    icon: "fa-solid fa-database",
    desc: "Bahasa kueri untuk mengelola data pada basis data relasional.",
    topics: [
      {
        name: "SELECT & WHERE",
        purpose: "Mengambil data dari tabel database dengan kriteria kondisi tertentu.",
        code: `-- Mengambil pengguna yang berstatus aktif\nSELECT id, username, email \nFROM users \nWHERE status = 'active';`
      }
    ]
  },
  dart: {
    title: "Dart (Flutter)",
    icon: "fa-solid fa-mobile-screen",
    desc: "Bahasa utama framework Flutter untuk pembuatan aplikasi mobile Android/iOS.",
    topics: [
      {
        name: "Pengondisian if-else",
        purpose: "Mengontrol alur logika aplikasi mobile.",
        code: `void main() {\n  bool isLoggedIn = true;\n  if (isLoggedIn) {\n    print("Navigasi ke Dashboard");\n  } else {\n    print("Navigasi ke Login");\n  }\n}`
      }
    ]
  }
};

// State Aplikasi
let currentTab = 'dashboard';

// Inisialisasi Saat Halaman Dimuat
document.addEventListener('DOMContentLoaded', () => {
  init3DEngine();
  renderSidebar();
  navigateTo('dashboard');
  setupAiAssistant();
});

// Render Menu Sidebar
function renderSidebar() {
  const container = document.getElementById('sidebarModulesList');
  container.innerHTML = '';

  Object.keys(SCRIPT_DATA).forEach(key => {
    const item = SCRIPT_DATA[key];
    const a = document.createElement('a');
    a.className = `nav-item ${currentTab === key ? 'active' : ''}`;
    a.id = `nav-${key}`;
    a.onclick = () => navigateTo(key);
    a.innerHTML = `
      <i class="${item.icon}"></i>
      <span>${item.title.split(' ')[0]}</span>
    `;
    container.appendChild(a);
  });
}

// Navigasi Antar Halaman
function navigateTo(target) {
  currentTab = target;

  // Update Status Active Sidebar
  document.querySelectorAll('.nav-item').forEach(el => el.classList.remove('active'));
  const activeNav = document.getElementById(`nav-${target}`);
  if (activeNav) activeNav.classList.add('active');

  const mainView = document.getElementById('mainView');
  const topbarTitle = document.getElementById('topbarTitle');

  if (target === 'dashboard') {
    topbarTitle.innerText = 'Dashboard Overview';
    renderDashboardView(mainView);
  } else if (SCRIPT_DATA[target]) {
    topbarTitle.innerText = `Modul: ${SCRIPT_DATA[target].title}`;
    renderModuleView(mainView, SCRIPT_DATA[target]);
  }
}

// Render Tampilan Dashboard
function renderDashboardView(container) {
  let modulesCards = '';
  Object.keys(SCRIPT_DATA).forEach(key => {
    const mod = SCRIPT_DATA[key];
    modulesCards += `
      <div class="module-card" onclick="navigateTo('${key}')">
        <div class="card-header">
          <div class="card-icon"><i class="${mod.icon}"></i></div>
          <div class="card-title-wrap">
            <h3>${mod.title.split(' ')[0]}</h3>
            <span>${mod.topics.length} Topik Pembelajaran</span>
          </div>
        </div>
        <div class="card-desc">${mod.desc}</div>
        <div class="card-footer">
          <span>Pelajari Modul</span>
          <i class="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    `;
  });

  container.innerHTML = `
    <div class="dashboard-hero">
      <div class="hero-welcome-card">
        <div class="hero-badge-tag"><i class="fa-solid fa-sparkles"></i> PLATFORM BELAJAR SCRIPT</div>
        <h2 class="hero-title">Selamat Datang di Hub Coding Interactive</h2>
        <p class="hero-desc">Pilih modul bahasa pemrograman di menu sebelah kiri atau kartu di bawah ini untuk mempelajari sintaks, logika percabangan, serta contoh penggunaannya.</p>
        <div class="hero-stats-row">
          <div class="stat-box">
            <div class="stat-number">8+</div>
            <div class="stat-label">Bahasa Modul</div>
          </div>
          <div class="stat-box">
            <div class="stat-number">3D</div>
            <div class="stat-label">Visual Engine</div>
          </div>
        </div>
      </div>

      <div class="profile-card">
        <div class="photo-frame-3d">
          <div class="photo-inner">
            <i class="fa-solid fa-user-astronaut"></i>
          </div>
        </div>
        <div class="profile-name">Developer Name</div>
        <div class="profile-role">Creator & Web Developer</div>
        <p class="profile-bio">Pembuat platform edukasi coding interaktif berbasic</p>
        <div class="profile-tags">
          <span class="tag">C++</span>
          <span class="tag">Python</span>
          <span class="tag">JavaScript</span>
          <span class="tag">3D Web</span>
        </div>
      </div>
    </div>

    <div class="section-heading">
      <i class="fa-solid fa-cubes"></i>
      <span>Pilih Modul Pembelajaran</span>
    </div>

    <div class="modules-grid">
      ${modulesCards}
    </div>
  `;
}

// Render Tampilan Detail Modul
function renderModuleView(container, data) {
  let topicsHtml = '';

  data.topics.forEach(t => {
    topicsHtml += `
      <div class="concept-card">
        <div class="concept-header">
          <i class="fa-solid fa-code-branch"></i>
          <span>${t.name}</span>
        </div>
        <div class="concept-desc">${t.purpose}</div>
        <div class="code-box">
          <div class="code-header">
            <span>Contoh Script</span>
            <i class="fa-solid fa-terminal"></i>
          </div>
          <pre class="code-content"><code>${escapeHtml(t.code)}</code></pre>
        </div>
      </div>
    `;
  });

  container.innerHTML = `
    <div class="learn-page">
      <div class="learn-header-card">
        <div class="learn-header-icon">
          <i class="${data.icon}"></i>
        </div>
        <div>
          <h2 style="font-size: 1.5rem; font-weight: 800; margin-bottom: 6px;">${data.title}</h2>
          <p style="color: var(--text-muted); font-size: 0.95rem;">${data.desc}</p>
        </div>
      </div>

      ${topicsHtml}
    </div>
  `;
}

// Helper Encode HTML
function escapeHtml(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

// Filter Pencarian Sidebar
function filterModules() {
  const query = document.getElementById('moduleSearch').value.toLowerCase();
  Object.keys(SCRIPT_DATA).forEach(key => {
    const navItem = document.getElementById(`nav-${key}`);
    const title = SCRIPT_DATA[key].title.toLowerCase();
    if (title.includes(query)) {
      navItem.style.display = 'flex';
    } else {
      navItem.style.display = 'none';
    }
  });
}

// Setup Event Listeners AI Assistant Chatbot Widget
function setupAiAssistant() {
  const fab = document.getElementById('aiFabBtn');
  const chatWindow = document.getElementById('aiChatWindow');
  const closeBtn = document.getElementById('aiCloseBtn');

  fab.addEventListener('click', () => {
    chatWindow.classList.toggle('hidden');
  });

  closeBtn.addEventListener('click', () => {
    chatWindow.classList.add('hidden');
  });
}

// Fungsi Mengirim Pesan ke AI Bot
function sendAiMessage() {
  const input = document.getElementById('aiInput');
  const text = input.value.trim();
  if (!text) return;

  const chatBody = document.getElementById('aiChatBody');

  // Tambahkan gelembung pesan user
  const userBubble = document.createElement('div');
  userBubble.className = 'chat-bubble user';
  userBubble.innerText = text;
  chatBody.appendChild(userBubble);

  input.value = '';
  chatBody.scrollTop = chatBody.scrollHeight;

  // Indikator ketik bot
  const botBubble = document.createElement('div');
  botBubble.className = 'chat-bubble bot';
  botBubble.innerText = 'Sedang berpikir...';
  chatBody.appendChild(botBubble);
  chatBody.scrollTop = chatBody.scrollHeight;

  // Simulasi jawaban AI Assistant
  setTimeout(() => {
    botBubble.innerText = generateAiResponse(text);
    chatBody.scrollTop = chatBody.scrollHeight;
  }, 800);
}

// Jawaban Simulasi Pintar AI Scripting Assistant
function generateAiResponse(prompt) {
  const p = prompt.toLowerCase();
  
  if (p.includes('if') || p.includes('kondisi') || p.includes('percabangan')) {
    return "Logika `if` digunakan untuk mengeksekusi kode jika suatu syarat bernilai BENAR (true). Contoh pada C++:\n\nif (uang >= 100) {\n    cout << 'Beli item';\n} else {\n    cout << 'Uang tidak cukup';\n}";
  } else if (p.includes('cpp') || p.includes('c++')) {
    return "C++ adalah bahasa berkinerja tinggi. Struktur umumnya:\n\n#include <iostream>\nusing namespace std;\n\nint main() {\n    cout << 'Hello World!';\n    return 0;\n}";
  } else if (p.includes('loop') || p.includes('for') || p.includes('while') || p.includes('perulangan')) {
    return "Perulangan (Loop) digunakan untuk mengulang baris kode secara otomatis. Contoh `for` di C++ / JS:\n\nfor(int i = 0; i < 5; i++) {\n    // Dijalankan 5 kali\n}";
  } else if (p.includes('fungsi') || p.includes('function') || p.includes('def')) {
    return "Fungsi/Function digunakan untuk membungkus sekumpulan perintah agar bisa dipanggil berkali-kali secara fleksibel.";
  } else {
    return `Jawaban AI untuk "${prompt}":\n\nUntuk mempelajari sintaks lebih rinci, kamu bisa memilih modul terkait (C++, Python, JS, dll) di sidebar kiri platform ini!`;
  }
}

// Three.js 3D Background Interactive Engine
function init3DEngine() {
  const canvas = document.getElementById('canvas3d');
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 30;

  const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Partikel Bintang 3D
  const particlesCount = 350;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 100;
  }
  geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const material = new THREE.PointsMaterial({
    size: 0.8,
    color: 0x00d2ff,
    transparent: true,
    opacity: 0.8
  });

  const particleSystem = new THREE.Points(geometry, material);
  scene.add(particleSystem);

  // Objek Kubus 3D Utama
  const cubeGeo = new THREE.IcosahedronGeometry(8, 1);
  const cubeMat = new THREE.MeshBasicMaterial({
    color: 0x00d2ff,
    wireframe: true,
    transparent: true,
    opacity: 0.25
  });
  const cubeMesh = new THREE.Mesh(cubeGeo, cubeMat);
  cubeMesh.position.set(20, -5, 0);
  scene.add(cubeMesh);

  // Interaksi Mouse
  let mouseX = 0;
  let mouseY = 0;
  window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  // Animation Loop
  function animate() {
    requestAnimationFrame(animate);

    particleSystem.rotation.y += 0.001;
    particleSystem.rotation.x += 0.0005;

    cubeMesh.rotation.x += 0.005;
    cubeMesh.rotation.y += 0.008;

    camera.position.x += (mouseX * 3 - camera.position.x) * 0.05;
    camera.position.y += (-mouseY * 3 - camera.position.y) * 0.05;

    renderer.render(scene, camera);
  }
  animate();

  // Resize Window Listener
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}
