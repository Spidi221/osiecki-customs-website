export interface ReviewItem {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
  verified: boolean;
}

export const reviewsData: ReviewItem[] = [
  {
    id: 1,
    name: 'Bartosz Kalinowski',
    rating: 5,
    text: 'Zdecydowanie mogę polecić usługi. Profesjonalna obsługa, nie trzeba czekać długo na termin, praca została wykonana świetnie i efekt końcowy przeszedł moje najśmielsze oczekiwania. Na pewno wrócę ponownie. :)',
    date: 'rok temu',
    verified: true,
  },
  {
    id: 2,
    name: 'Norbert',
    rating: 5,
    text: 'Fachowo, przez duże "F". Naprawa w terminie, zrobione tak że nic nie widać, lakier dobrany w punkt. Naprawdę warsztat godny polecenia.',
    date: '7 miesięcy temu',
    verified: true,
  },
  {
    id: 3,
    name: 'Agnieszka Czarnecka',
    rating: 5,
    text: 'Polecam. Fachowo, w terminie i w rozsądnej cenie. Polecam',
    date: '8 miesięcy temu',
    verified: true,
  },
  {
    id: 4,
    name: 'Łukasz',
    rating: 5,
    text: 'Polecam. Wymiana maski z malowaniem przebiegła bez zarzutu. Efekt zaskakujący. Bardzo dobry kontakt z warsztatem do tego szybka realizacja.',
    date: 'rok temu',
    verified: true,
  },
  {
    id: 5,
    name: 'Zuzanna Filka',
    rating: 5,
    text: 'Najlepszy salon blacharski, z jakim miałam do czynienia! Fachowcy z ogromnym doświadczeniem, którzy naprawdę znają się na swojej pracy. Auto oddane w idealnym stanie, a całość przebiegła sprawnie i bezproblemowo. Polecam każdemu, kto ceni wysoką jakość usług!',
    date: '5 miesięcy temu',
    verified: true,
  },
  {
    id: 6,
    name: 'Kermit Customs',
    rating: 5,
    text: 'Próg wstawiany mimo braku na rynku pasujących reparaturek. Wyrzeźbili w dobrym tego słowa znaczeniu nowy próg. Jak oryginał. Lakier dobrany idealnie a to proste nie było. Polecam!',
    date: '8 miesięcy temu',
    verified: true,
  },
  {
    id: 7,
    name: 'Bartek Chudzik',
    rating: 5,
    text: 'Lakier dobrany idealnie. Widać, że właściciel jak i pracownicy znają się na swoim fachu. Auto jak nowe, posprzątane, oddane terminowo. Polecam! 👍',
    date: 'rok temu',
    verified: true,
  },
];