/* Filtros de combustível e sedimentadores (dados do Catálogo Tecfil). Uma entrada por código Tecfil.
   Mesmo formato de filtros-de-oleo.js.
   Complete especificacoes, conversoes e aplicacoes conforme o catálogo da Tecfil. */
export const filtrosCombustivel = {

  "PSC498/4": {
    tipo: "combustivel",
    url: "https://catalogo.tecfil.com.br/search/PSC498%2F4",
    especificacoes: {},
    conversoes: {"Tecfil": ["PSC498/4"], "MWM": ["905411510035"], "Authomix": ["FCO4984"], "Mann": ["WK 940/35"], "Mahle": ["KL 747"], "Wega": ["FCD-2066/1"], "Fram": ["P4836A"], "Vox": ["FBD498/4"]},
    aplicacoes: null
  },

  "PSD450/1": {
    tipo: "sedimentador",
    url: "https://catalogo.tecfil.com.br/search/PSD450%2F1",
    especificacoes: {},
    conversoes: {"Tecfil": ["PSD450/1"], "MWM": ["905411510019"], "Authomix": ["FSE4501"], "Mann": ["WK 1030"], "Mahle": ["KC 121/1"], "Wega": ["FCD-2212"], "Fram": ["PS9029"], "Vox": ["FBS450/1"]},
    aplicacoes: null
  },

  "PSC706": {
    tipo: "combustivel",
    url: "https://catalogo.tecfil.com.br/search/PSC706",
    especificacoes: {},
    conversoes: {"Tecfil": ["PSC706"], "Cummins": ["5262311", "5303743"], "Authomix": ["FCO0706"], "Mann": ["WK 10002/1"], "Mahle": ["KC 511D"], "Wega": ["FCD-4000"], "Fram": ["P11474"], "Vox": ["FBD706"]},
    aplicacoes: null
  },

  "PSD925": {
    tipo: "sedimentador",
    url: "https://catalogo.tecfil.com.br/search/PSD925",
    especificacoes: {},
    conversoes: {"Tecfil": ["PSD925"], "Cummins": ["5264870", "5304214"], "Mann": ["WK 9046"], "Mahle": ["KC 624D"], "Wega": ["FCD-0960"], "Fram": ["P11036"]},
    aplicacoes: null
  }

};
