// script.js – Logika pencarian kelulusan

(function () {
  const input     = document.getElementById('nisnInput');
  const btn       = document.getElementById('searchBtn');
  const section   = document.getElementById('resultSection');
  const notFound  = document.getElementById('notFound');
  const foundCard = document.getElementById('foundCard');

  function cari() {
    const q = input.value.trim();
    if (!q) {
      input.focus();
      input.classList.add('shake');
      setTimeout(() => input.classList.remove('shake'), 500);
      return;
    }

    const siswa = students.find(s => s.nisn === q);

    // Reset
    notFound.classList.add('hidden');
    foundCard.classList.add('hidden');
    section.classList.remove('hidden');

    if (siswa) {
      document.getElementById('resNama').textContent  = siswa.nama;
      document.getElementById('resNisn').textContent  = siswa.nisn;
      document.getElementById('resNis').textContent   = siswa.nis;
      document.getElementById('resStatus').textContent = siswa.status;

      foundCard.classList.remove('hidden');
      foundCard.classList.remove('pop-in');
      void foundCard.offsetWidth; // reflow trigger
      foundCard.classList.add('pop-in');
    } else {
      notFound.classList.remove('hidden');
      notFound.classList.remove('pop-in');
      void notFound.offsetWidth;
      notFound.classList.add('pop-in');
    }

    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  btn.addEventListener('click', cari);
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') cari();
  });

  // Shake keyframe
  const style = document.createElement('style');
  style.textContent = `
    @keyframes shake {
      0%,100%{transform:translateX(0)}
      20%{transform:translateX(-6px)}
      40%{transform:translateX(6px)}
      60%{transform:translateX(-4px)}
      80%{transform:translateX(4px)}
    }
    .shake { animation: shake 0.4s ease; }
  `;
  document.head.appendChild(style);
})();
