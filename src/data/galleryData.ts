export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
}

// Używamy "export const", żeby uniknąć problemów z importem
export const projects: Project[] = [
  {
    id: 1,
    title: 'Audi A5 - Naprawa Błotnika i Zderzaka',
    category: 'Blacharstwo i Lakiernictwo',
    description: 'Kompleksowa naprawa tylnego błotnika i zderzaka z wykorzystaniem technologii cieniowania lakieru, aby zapewnić niewidoczne przejście kolorystyczne.',
    beforeImage: '/images/gallery/Przed1.jpg',
    afterImage: '/images/gallery/po1.jpg',
    beforeAlt: 'Uszkodzone Audi A5 przed naprawą błotnika i zderzaka - warsztat Góra Kalwaria',
    afterAlt: 'Audi A5 po profesjonalnej naprawie blacharsko-lakierniczej błotnika Osiecki Customs',
  },
  {
    id: 2,
    title: 'Bentley Continental - Usuwanie Wgnieceń',
    category: 'Naprawy bezinwazyjne (PDR)',
    description: 'Precyzyjne usunięcie wgnieceń na masce bez potrzeby ponownego lakierowania, przywracające idealną gładkość powierzchni.',
    beforeImage: '/images/gallery/przed2.jpg',
    afterImage: '/images/gallery/po2.jpg',
    beforeAlt: 'Bentley Continental z wgnieceniami na masce przed naprawą PDR',
    afterAlt: 'Bentley Continental po bezinwazyjnym usunięciu wgnieceń metodą PDR Góra Kalwaria',
  },
  {
    id: 3,
    title: 'Subaru Forester - Rekonstrukcja Przodu',
    category: 'Naprawy powypadkowe',
    description: 'Wymiana i pasowanie nowych elementów karoserii po kolizji czołowej. Pełne lakierowanie przodu pojazdu z dbałością o fabryczne standardy.',
    beforeImage: '/images/gallery/przed3.jpg',
    afterImage: '/images/gallery/po3.jpg',
    beforeAlt: 'Subaru Forester po wypadku przed rekonstrukcją przodu - naprawy powypadkowe',
    afterAlt: 'Subaru Forester po kompletnej rekonstrukcji przodu warsztat Osiecki Customs',
  },
  {
    id: 4,
    title: 'Hyundai ix35 - Szkoda Parkingowa',
    category: 'Blacharstwo i Lakiernictwo',
    description: 'Naprawa wgniecenia na przednim błotniku i drzwiach, powstałego w wyniku szkody parkingowej. Zastosowano cieniowanie w celu idealnego dopasowania koloru.',
    beforeImage: '/images/gallery/przed4.jpg',
    afterImage: '/images/gallery/po4.jpg',
    beforeAlt: 'Hyundai ix35 z wgnieceniem po szkodzie parkingowej przed naprawą',
    afterAlt: 'Hyundai ix35 po naprawie szkody parkingowej - blacharstwo lakiernictwo Góra Kalwaria',
  },
];