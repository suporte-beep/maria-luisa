/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Download, Heart } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 font-sans selection:bg-stone-200">
      <div className="max-w-4xl w-full space-y-16 text-center py-12">
        
        {/* Cabeçalho */}
        <div className="space-y-6">
          <h2 className="text-stone-500 uppercase tracking-[0.3em] text-xs md:text-sm font-medium">
            Celebração de uma Vida
          </h2>
          <h1 className="font-serif text-6xl md:text-8xl text-stone-800 tracking-tight">
            Maria Luisa
          </h1>
          <div className="flex items-center justify-center gap-6 text-stone-400">
            <div className="h-px w-16 bg-stone-300"></div>
            <span className="font-serif italic text-3xl text-stone-600">90 Anos</span>
            <div className="h-px w-16 bg-stone-300"></div>
          </div>
        </div>

        {/* Moldura da Foto */}
        <div className="relative group mx-auto max-w-2xl">
          <div className="absolute -inset-4 bg-white/40 blur-2xl rounded-3xl opacity-50 transition duration-1000 group-hover:opacity-100"></div>
          <div className="relative bg-white p-4 md:p-6 pb-16 md:pb-20 shadow-2xl rounded-sm transform transition-all duration-700 hover:scale-[1.02] rotate-1 hover:rotate-0 border border-stone-100">
            <div className="overflow-hidden rounded bg-stone-100">
              <img 
                src="./familia-restaurada.png" 
                alt="Família Restaurada" 
                className="w-full h-auto object-cover shadow-inner max-h-[65vh] transition-transform duration-1000 hover:scale-105"
              />
            </div>
            <div className="absolute bottom-5 md:bottom-7 left-0 right-0 text-center">
              <p className="font-serif italic text-stone-500 text-xl md:text-2xl">Memórias de Família</p>
            </div>
          </div>
        </div>

        {/* Ações */}
        <div className="pt-4 pb-12 flex flex-col items-center gap-8">
          <a 
            href="./familia-restaurada.png" 
            download="Familia_Maria_Luisa_Restaurada.png"
            className="group relative inline-flex items-center gap-3 bg-stone-800 text-stone-50 hover:bg-stone-700 px-10 py-5 rounded-full transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            <Download size={22} className="relative z-10" />
            <span className="relative z-10 uppercase tracking-widest text-sm font-semibold">Baixar Foto Restaurada</span>
          </a>
          
          <p className="text-stone-400 text-sm flex items-center justify-center gap-2 font-serif italic">
            Feito com <Heart size={14} className="text-rose-400/70 fill-rose-400/20" /> para a família
          </p>
        </div>

      </div>
    </div>
  );
}
