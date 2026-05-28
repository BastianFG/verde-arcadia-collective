export default function Footer() {
  return (
    <footer className="bg-[var(--charcoal)] text-background">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 py-20">
        <div className="grid grid-cols-12 gap-10 mb-16">
          <div className="col-span-12 md:col-span-5">
            <div className="flex items-center gap-2 mb-6">
              <span className="inline-block h-2 w-2 rounded-full bg-[var(--sage)]" />
              <span className="font-display text-xl">Bascharant</span>
            </div>
            <p className="font-display text-3xl leading-[1.1] tracking-tightest max-w-md text-balance">
              Paisajismo contemporáneo
              <span className="italic text-white/60"> diseñado para perdurar.</span>
            </p>
          </div>

          <div className="col-span-6 md:col-span-2">
            <div className="text-[11px] tracking-[0.25em] uppercase text-white/50 mb-5">Navegación</div>
            <ul className="space-y-3 text-sm text-white/80">
              <li><a href="#inicio" className="hover:text-white">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-white">Servicios</a></li>
              <li><a href="#empresas" className="hover:text-white">Empresas</a></li>
              <li><a href="#particulares" className="hover:text-white">Particulares</a></li>
              <li><a href="#proyectos" className="hover:text-white">Proyectos</a></li>
            </ul>
          </div>

          <div className="col-span-6 md:col-span-2">
            <div className="text-[11px] tracking-[0.25em] uppercase text-white/50 mb-5">Contacto</div>
            <ul className="space-y-3 text-sm text-white/80">
              <li><a href="tel:+56988458216" className="hover:text-white">+56 9 8845 8216</a></li>
              <li><a href="mailto:contacto@bascharant.cl" className="hover:text-white">contacto@bascharant.cl</a></li>
              <li><a href="https://wa.me/56988458216" className="hover:text-white">WhatsApp</a></li>
            </ul>
          </div>

          <div className="col-span-12 md:col-span-3">
            <div className="text-[11px] tracking-[0.25em] uppercase text-white/50 mb-5">Redes</div>
            <ul className="space-y-3 text-sm text-white/80">
              <li><a href="https://instagram.com" className="hover:text-white">Instagram</a></li>
              <li><a href="#" className="hover:text-white">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[11px] tracking-wider uppercase text-white/40">
          <div>© {new Date().getFullYear()} Paisajismo Bascharant SpA</div>
          <div>Santiago · Chile</div>
        </div>
      </div>
    </footer>
  );
}
