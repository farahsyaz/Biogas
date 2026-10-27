
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fff8f5] text-[#2b1703]">
      <header className="sticky top-0 z-10 flex items-center justify-between border-b border-[#dce5dc] bg-white/90 px-5 py-4 backdrop-blur">
        <div>
          <h1 className="text-xl font-bold text-[#14422d]">
            BioVerdant
          </h1>
          <p className="text-xs text-[#4e635a]">CleanTech Community</p>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-full bg-[#14422d] px-4 py-2 text-sm font-semibold text-white"
        >
          {menuOpen ? "Tutup" : "Menu"}
        </button>
      </header>

      {menuOpen && (
        <nav className="flex gap-4 bg-[#eaf3ec] px-5 py-3 text-sm">
          <a href="#proses">Proses</a>
          <a href="#dampak">Dampak</a>
          <a href="#komunitas">Komunitas</a>
        </nav>
      )}

      <main className="mx-auto max-w-5xl px-5 py-12">
        <section className="py-8">
          <p className="mb-4 inline-block rounded-full bg-[#d1e8dd] px-4 py-2 text-sm font-semibold text-[#14422d]">
            🌱 Decentralized CleanTech Engine
          </p>

          <h2 className="max-w-3xl text-4xl font-bold leading-tight text-[#14422d] md:text-6xl">
            Mengubah Sampah Organik Menjadi Energi Bersih
          </h2>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-[#52675e]">
            BioVerdant membantu komunitas mengolah ampas kopi dan sisa
            makanan menjadi biogas serta energi terbarukan.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#proses"
              className="rounded-full bg-[#14422d] px-6 py-3 font-semibold text-white"
            >
              Jelajahi Proses
            </a>
            <a
              href="#dampak"
              className="rounded-full border border-[#14422d] px-6 py-3 font-semibold text-[#14422d]"
            >
              Lihat Dampak
            </a>
          </div>
        </section>

        <section
          id="proses"
          className="mt-8 rounded-3xl bg-white p-6 shadow-sm md:p-8"
        >
          <h3 className="text-2xl font-bold text-[#14422d]">
            Bagaimana BioVerdant Bekerja
          </h3>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <article className="rounded-2xl bg-[#f4f7f1] p-5">
              <p className="text-3xl">☕</p>
              <h4 className="mt-3 font-bold">1. Kumpulkan</h4>
              <p className="mt-2 text-sm leading-6 text-[#52675e]">
                Kumpulkan ampas kopi dan sisa makanan dari komunitas.
              </p>
            </article>

            <article className="rounded-2xl bg-[#f4f7f1] p-5">
              <p className="text-3xl">♻️</p>
              <h4 className="mt-3 font-bold">2. Olah</h4>
              <p className="mt-2 text-sm leading-6 text-[#52675e]">
                Olah bahan organik melalui proses pencernaan anaerobik.
              </p>
            </article>

            <article className="rounded-2xl bg-[#f4f7f1] p-5">
              <p className="text-3xl">⚡</p>
              <h4 className="mt-3 font-bold">3. Hasilkan Energi</h4>
              <p className="mt-2 text-sm leading-6 text-[#52675e]">
                Biogas dapat dimanfaatkan untuk menghasilkan energi.
              </p>
            </article>
          </div>
        </section>

        <section
          id="dampak"
          className="mt-6 rounded-3xl bg-[#14422d] p-6 text-white md:p-8"
        >
          <h3 className="text-2xl font-bold">Dampak untuk Bumi</h3>
          <p className="mt-3 max-w-2xl leading-7 text-[#d1e8dd]">
            Pantau pengolahan limbah dan dampak energi bersih melalui
            data operasional yang nantinya akan terhubung ke sistem IoT.
          </p>
          <p className="mt-4 text-sm text-[#d1e8dd]">
            Data telemetri belum terhubung. Angka operasional akan ditampilkan
            setelah sumber data tersedia.
          </p>
        </section>

        <section
          id="komunitas"
          className="mt-6 rounded-3xl bg-white p-6 shadow-sm md:p-8"
        >
          <h3 className="text-2xl font-bold text-[#14422d]">
            Komunitas BioVerdant
          </h3>
          <p className="mt-3 leading-7 text-[#52675e]">
            Bersama, kita mengubah sisa organik menjadi peluang energi
            yang lebih berkelanjutan.
          </p>
        </section>
      </main>

      <footer className="border-t border-[#dce5dc] px-5 py-6 text-center text-sm text-[#52675e]">
        BioVerdant CleanTech · Mengubah limbah menjadi potensi energi.
      </footer>
    </div>
  );
}

export default App;
