export class Arac {
  id: number;
  marka: string;
  model: string;
  tipi: string;
  resim : string;
  vitesTuru: string;
  yakitTuru: string;
  gunlukUcret:number;
  kisiSayisi: number;
  kapiSayisi: number;
  klimaBilgisi: string;
  
  constructor(id: number, marka: string, Model: string, Tipi: string, Resim: string, VitesTuru: string, YakitTuru: string, GunlukUcret: number, KisiSayisi: number, KapiSayisi: number, KlimaBilgisi: string)
  {
    this.id = id;
    this.marka = marka;
    this.model = Model;
    this.tipi = Tipi;
    this.resim = Resim;
    this.vitesTuru = VitesTuru;
    this.yakitTuru = YakitTuru;
    this.gunlukUcret = GunlukUcret;
    this.kisiSayisi = KisiSayisi;
    this.kapiSayisi = KapiSayisi;
    this.klimaBilgisi = KlimaBilgisi;
    

  }
}

