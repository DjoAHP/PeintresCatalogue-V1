import React, { useState } from "react";
import { ExternalLink, Search } from "lucide-react";

type Painter = {
  id: string;
  name: string;
  birth: number;
  death: number;
  origin: string;
  link: string;
  image: string;
};

const initialPainters: Painter[] = [
  {
    id: "1",
    name: "Pierre Paul Rubens",
    birth: 1577,
    death: 1640,
    origin: "Saint-Empire Romain Germanique, Allemagne",
    link: "https://gallerix.ru/album/Rubens",
    image:
      "https://mouvement-europeen.eu/wp-content/uploads/2019/07/Rubens_Self-portrait_1623-1.jpg",
  },
  {
    id: "2",
    name: "Hieronymus Bosch",
    birth: 1450,
    death: 1516,
    origin:
      "Pays-Bas bourguignons, Belgique, Luxembourg et des Hauts-de-France",
    link: "https://gallerix.ru/storeroom/1400476940/",
    image:
      "https://www.francetvinfo.fr/pictures/rxKG2Z36GW1K7Ojxn4tMwZw_enY/1200x675/2019/04/12/ca06e0eb-fc2b-c7f3-5702-eabf9cbfb7f8.jpg",
  },
  {
    id: "3",
    name: "Jan van Eyck",
    birth: 1385,
    death: 1441,
    origin: "Saint-Empire Romain Germanique, Allemagne",
    link: "https://fr.gallerix.ru/storeroom/1888032609/",
    image: "https://media.beauxarts.com/uploads/2019/12/1765-964x1349.jpg",
  },
  {
    id: "4",
    name: "John William Waterhouse",
    birth: 1849,
    death: 1917,
    origin: "Rome, Italy",
    link: "https://fr.gallerix.ru/album/Waterhouse",
    image:
      "https://www.repro-tableaux.com/kunst/john_william_waterhouse/Destiny.jpg",
  },
  {
    id: "5",
    name: "Leonardo da Vinci",
    birth: 1452,
    death: 1519,
    origin: "Vinci, Toscane, Italy",
    link: "https://gallerix.org/album/Leonardo",
    image:
      "https://leonardointeractivemuseum.com/wp-content/uploads/2021/10/La-Dama-con-l_ermellino-di-Leonardo-da-Vinci-851x1024.webp",
  },
  {
    id: "6",
    name: "Michelangelo Merisi da Caravaggio",
    birth: 1571,
    death: 1610,
    origin: "Milan, Duché de Milan, Italy",
    link: "https://fr.gallerix.ru/album/Caravaggio",
    image:
      "https://www.art9000.com/media_kunst/img/36/g/36_50197~michelangelo-merisi-da-caravaggio_la-tete-de-meduse-sur-un-bouclier-en-cuir.jpg",
  },
  {
    id: "7",
    name: "Michelangelo Buonarroti",
    birth: 1475,
    death: 1564,
    origin: "Caprese, République de Florence, Italy",
    link: "https://fr.gallerix.ru/album/Michelangelo-Buonarroti",
    image:
      "https://images.photowall.com/products/44210/buonarroti-michelangelo-creation-of-adam-1.jpg?h=699&q=85",
  },
  {
    id: "8",
    name: "Raphael (Raffaello Sanzio)",
    birth: 1483,
    death: 1520,
    origin: "Urbin, Duché d'Urbin, Italy",
    link: "https://fr.gallerix.ru/album/Rafael",
    image:
      "https://static.nationalgeographic.fr/files/styles/image_3200/public/school-of-athens.jpg?w=1900&h=1241",
  },
  {
    id: "9",
    name: "Titien (Tiziano Vecellio)",
    birth: 1488,
    death: 1576,
    origin: "Pieve di Cadore, Italy",
    link: "https://www.wikiart.org/fr/titien",
    image:
      "https://wahooart.com/Art.nsf/O/7YKG4R/$File/Titian-Tiziano-Vecelli-The-Rape-of-Europa.JPG",
  },
  {
    id: "10",
    name: "Gustave Moreau",
    birth: 1826,
    death: 1898,
    origin: "Ancien 10e arrondissement de Paris, France",
    link: "https://fr.gallerix.ru/storeroom/1065654342/",
    image: "https://live.staticflickr.com/4705/39185960284_17fc01d0eb_h.jpg",
  },
  {
    id: "11",
    name: "Jean Marc Nattier",
    birth: 1685,
    death: 1766,
    origin: "Paris, France",
    link: "https://fr.gallerix.ru/storeroom/1776435823/",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Jean-Marc_Nattier%2C_Terpsichore_%281739%29.jpg/800px-Jean-Marc_Nattier%2C_Terpsichore_%281739%29.jpg",
  },
  {
    id: "12",
    name: "Mårten Eskil Winge",
    birth: 1825,
    death: 1896,
    origin: "Stockholm, Sweden ",
    link: "https://www.wikiart.org/fr/marten-eskil-winge",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/M%C3%A5rten_Eskil_Winge_-_Tor%27s_Fight_with_the_Giants_-_Google_Art_Project.jpg/1416px-M%C3%A5rten_Eskil_Winge_-_Tor%27s_Fight_with_the_Giants_-_Google_Art_Project.jpg",
  },
  {
    id: "13",
    name: "Francisco De Zurbaran",
    birth: 1598,
    death: 1664,
    origin: "Fuente de Cantos, Estrémadure, Espagne",
    link: "https://fr.gallerix.ru/storeroom/100406879/",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Muerte_de_H%C3%A9rcules%2C_por_Zurbar%C3%A1n.jpg/1105px-Muerte_de_H%C3%A9rcules%2C_por_Zurbar%C3%A1n.jpg",
  },
  {
    id: "14",
    name: "Giambattista Tiepolo",
    birth: 1696,
    death: 1770,
    origin: "Venice, Italy",
    link: "https://www.wikiart.org/fr/giambattista-tiepolo",
    image:
      "https://www.finestresullarte.info/rivista/immagini/2021/fn/giambattista-tiepolo-ifigenia-valmarana.jpg",
  },
  {
    id: "15",
    name: "Henry (Fussli Fuseli)",
    birth: 1741,
    death: 1825,
    origin: "Zurich, Suisse",
    link: "https://fr.gallerix.ru/storeroom/1772373417/",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/56/John_Henry_Fuseli_-_The_Nightmare.JPG",
  },
  {
    id: "16",
    name: "Giuseppe Arcimboldo",
    birth: 1526,
    death: 1593,
    origin: "Milan, Duché de Milan, Italy",
    link: "https://fr.gallerix.ru/storeroom/1970278838/",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Giuseppe_Arcimboldo_-_Rudolf_II_of_Habsburg_as_Vertumnus_-_Google_Art_Project.jpg/1663px-Giuseppe_Arcimboldo_-_Rudolf_II_of_Habsburg_as_Vertumnus_-_Google_Art_Project.jpg",
  },
  {
    id: "17",
    name: "Jacques-Louis David",
    birth: 1748,
    death: 1825,
    origin: "Paris, France",
    link: "https://fr.gallerix.ru/storeroom/2120799558/",
    image:
      "https://www.artprinta.com/cdn/shop/products/ANJ2G23S1_1600x.jpg?v=1579025064",
  },
  {
    id: "18",
    name: "Giuseppe Cesari (Cavalier d'Arpin)",
    birth: 1568,
    death: 1640,
    origin: "Arpino, Italy",
    link: "https://fr.gallerix.ru/storeroom/2040723124/",
    image:
      "https://d3d00swyhr67nd.cloudfront.net/w800h800/collection/GL/GM/GL_GM_153-001.jpg",
  },
  {
    id: "19",
    name: "Albrecht Dürer",
    birth: 1471,
    death: 1528,
    origin: "Nuremberg, Saint-Empire romain germanique, Allemagne",
    link: "https://fr.gallerix.ru/storeroom/825575191/",
    image:
      "https://medias.gazette-drouot.com/prod/medias/mediatheque/137433.jpg",
  },
  {
    id: "20",
    name: "Sandro Botticelli",
    birth: 1444,
    death: 1510,
    origin: "République de Florence, Italy",
    link: "https://www.haltadefinizione.com/en/image-bank/?mixed=Botticelli",
    image:
      "https://static.nationalgeographic.fr/files/styles/image_3200/public/08-love-and-beauty.jpg?w=1900&h=1299",
  },
  {
    id: "21",
    name: "Jean Louis Andre Theodore Gericault",
    birth: 1791,
    death: 1824,
    origin: "Rouen, France",
    link: "https://fr.gallerix.ru/storeroom/145241820/",
    image:
      "https://artsdot.com/ADC/Art-ImgScreen-1.nsf/O/A-8Y3ANT/$FILE/Jean-louis-andre-theodore-gericault-the-raft-of-the-medusa.Jpg",
  },
  {
    id: "22",
    name: "Piero di Cosimo",
    birth: 1462,
    death: 1522,
    origin: "Florence, Italy",
    link: "https://fr.gallerix.ru/storeroom/734167568/",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Piero_di_Cosimo_-_Liberazione_di_Andromeda_-_Google_Art_Project.jpg/1200px-Piero_di_Cosimo_-_Liberazione_di_Andromeda_-_Google_Art_Project.jpg",
  },
  {
    id: "23",
    name: "Domenico Ghirlandaio",
    birth: 1449,
    death: 1494,
    origin: "République de Florence, Italy",
    link: "https://gallerix.ru/storeroom/349690011/",
    image: "https://sr.gallerix.ru/G/349690011/1974339120.jpg",
  },
  {
    id: "24",
    name: "Dosso Dossi (Jean-François de Nicolas de Luteri)",
    birth: 1489,
    death: 1542,
    origin: "Mirandola, Italy",
    link: "https://gallerix.ru/storeroom/565731854/",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Dosso_Dossi_010.jpg/250px-Dosso_Dossi_010.jpg",
  },
  {
    id: "25",
    name: "Giorgio Vasari",
    birth: 1511,
    death: 1574,
    origin: "Arezzo (république de Florence), Italy",
    link: "https://gallerix.ru/album/Vasari",
    image:
      "https://artsdot.com/ADC/Art-ImgScreen-2.nsf/O/A-8Y2UW5/$FILE/Giorgio_vasari-allegory_of_the_immaculate_conception.Jpg",
  },
  {
    id: "26",
    name: "Benozzo Gozzoli",
    birth: 1420,
    death: 1497,
    origin: "Florence, Italy",
    link: "https://gallerix.ru/storeroom/1100894218/",
    image: "https://arthive.com/res/media/img/oy800/work/630/181889@2x.jpg",
  },
  {
    id: "27",
    name: "Agnolo di Cosimo dit / Bronzino",
    birth: 1503,
    death: 1572,
    origin: "Florence, Italy",
    link: "https://gallerix.ru/storeroom/1857473792/",
    image:
      "https://www.radiofrance.fr/s3/cruiser-production/2020/05/9ea372dc-bb6f-4548-bbad-bfffef55c0c3/1200x680_bronzino_-_allegorie_du_triomphe_de_venus_1540-1545.jpg",
  },
  {
    id: "28",
    name: "Andrea Mantegna",
    birth: 1431,
    death: 1506,
    origin: "Venice, Italy",
    link: "https://gallerix.ru/storeroom/33937639/",
    image:
      "https://www.worldhistory.org/img/r/p/500x600/12691.jpg?v=1713475203",
  },
  {
    id: "29",
    name: "Antonello da Messina",
    birth: 1430,
    death: 1479,
    origin: "Royaume de Sicile, Italy",
    link: "https://gallerix.ru/storeroom/1524174720/",
    image:
      "https://www.jeanpaulbarreaud.com/wp-content/uploads/2020/04/JPB-blog-antonello-da-messina-gallery-04.jpg",
  },
  {
    id: "30",
    name: "Nicolas Poussin",
    birth: 1594,
    death: 1665,
    origin: "Normandie, France",
    link: "https://gallerix.ru/storeroom/55174892/",
    image: "https://images.navigart.fr/1000/5D/89/5D89135.jpg",
  },
  {
    id: "31",
    name: "Rembrandt Harmenszoon van Rijn",
    birth: 1606,
    death: 1669,
    origin: "Leyde, Pays-Bas",
    link: "https://gallerix.ru/album/Rembrandt",
    image:
      "https://www.meisterdrucke.fr/kunstwerke/1260px/Rembrandt%20van%20Rijn%20-%20The%20Blinding%20of%20Samson%20-%20%28MeisterDrucke-20521%29.jpg",
  },
  {
    id: "32",
    name: "Jean Auguste Dominique Ingres",
    birth: 1780,
    death: 1867,
    origin: "Montauban, France",
    link: "https://gallerix.ru/storeroom/775186124/",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/0/08/J%C3%BApiter_y_Tetis%2C_por_Dominique_Ingres.jpg",
  },
  {
    id: "33",
    name: "Francisco de Goya",
    birth: 1746,
    death: 1828,
    origin: "Fuendetodos, Espagne",
    link: "https://gallerix.ru/storeroom/383254267/",
    image:
      "https://media.beauxarts.com/uploads/2021/10/francisco_de_goya__hexensabbat__el_aquelerre___1797-98_lac.jpg",
  },
  {
    id: "34",
    name: "Artemisia Gentileschi (Une Elève de Le Caravage)",
    birth: 1593,
    death: 1656,
    origin: "Rome/États pontificaux, Italy",
    link: "https://gallerix.ru/storeroom/1447229473/",
    image:
      "https://medias.histoire-et-civilisations.com/api/v1/images/view/65f31f1978102e4f072901e9/width_1000/image.jpg",
  },
  {
    id: "35",
    name: "Domínikos Theotokópoulos dit/ le Greco",
    birth: 1541,
    death: 1614,
    origin: "Candie, (République de Venise), Italy",
    link: "https://gallerix.ru/storeroom/442445070/",
    image:
      "https://www.singulart.com/blog/wp-content/uploads/2023/10/The-Adoration-of-the-Shepherds-1612-1614-574x1024.jpg",
  },
  {
    id: "36",
    name: "Jean Cousin l'Ancien",
    birth: 1503,
    death: 1560,
    origin: "Soucy (Yonne), France",
    link: "https://gallerix.ru/storeroom/3575090783/N/3973742302/",
    image:
      "https://img.over-blog.com/600x402/2/89/06/71/Rennaissance-France/Jean-cousin-l-enlevement-d-Europe.jpg",
  },
  {
    id: "37",
    name: "Giovanni Baglione",
    birth: 1566,
    death: 1644,
    origin: "Rome, Italy",
    link: "https://gallerix.ru/storeroom/128247334/",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Giovanni_Baglione_-_The_Divine_Eros_Defeats_the_Earthly_Eros_-_Google_Art_Project.jpg/195px-Giovanni_Baglione_-_The_Divine_Eros_Defeats_the_Earthly_Eros_-_Google_Art_Project.jpg",
  },
  {
    id: "38",
    name: "Annibal Carrache",
    birth: 1560,
    death: 1609,
    origin: "Bologne, Italy",
    link: "https://gallerix.ru/storeroom/2136404724/",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Annibale_Carracci_Assumption_of_the_Virgin.jpg/220px-Annibale_Carracci_Assumption_of_the_Virgin.jpg",
  },
  {
    id: "39",
    name: "le Dominiquin (Domenico Zampieri)",
    birth: 1581,
    death: 1641,
    origin: "Bologne, Italy",
    link: "https://gallerix.ru/storeroom/1378206396/",
    image: "https://sr.gallerix.ru/D/1378206396/459061126.jpg",
  },
  {
    id: "40",
    name: "Francesco Albani (l’Albane)",
    birth: 1578,
    death: 1660,
    origin: "Bologne, Italy",
    link: "https://gallerix.ru/storeroom/1074702132/",
    image: "https://sr.gallerix.ru/A/1074702132/1091754436.jpg",
  },
  {
    id: "40",
    name: "Mattia Preti",
    birth: 1613,
    death: 1699,
    origin: "Taverna, Italy",
    link: "https://gallerix.ru/storeroom/1347339950/",
    image: "https://sr.gallerix.ru/P/1347339950/460244620.jpg",
  },
];

function App() {
  const [painters, setPainters] = useState<Painter[]>(initialPainters);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const filteredPainters = painters
    .filter((painter) => {
      const nameMatch = painter.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const originMatch = painter.origin
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const letterMatch = selectedLetter
        ? painter.name.toUpperCase().startsWith(selectedLetter)
        : true;

      return (nameMatch || originMatch) && letterMatch;
    })
    .sort((a, b) => a.name.localeCompare(b.name));

  const handleLetterClick = (letter: string) => {
    setSelectedLetter(selectedLetter === letter ? null : letter);
    setSearchTerm("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 p-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Les Peintres et leur Oeuvres (Mythologies)
        </h1>

        <div className="relative mb-4">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={18}
          />
          <input
            type="text"
            placeholder="Rechercher..."
            className="w-full pl-10 pr-4 py-2 rounded-lg bg-gray-800/50 backdrop-blur-xl border border-gray-700 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all text-sm"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setSelectedLetter(null);
            }}
          />
        </div>

        <div className="flex flex-wrap gap-1 mb-6 p-3 rounded-lg bg-gray-800/30 backdrop-blur-xl border border-gray-700/50">
          {alphabet.map((letter) => (
            <button
              key={letter}
              onClick={() => handleLetterClick(letter)}
              className={`w-7 h-7 rounded flex items-center justify-center text-sm font-medium transition-all
                ${
                  selectedLetter === letter
                    ? "bg-purple-500 text-white shadow-lg shadow-purple-500/20"
                    : "text-gray-400 hover:text-purple-400 hover:bg-white/5"
                }
              `}
            >
              {letter}
            </button>
          ))}
        </div>

        <div className="grid gap-3">
          {filteredPainters.map((painter) => (
            <div
              key={painter.id}
              className="relative group backdrop-blur-xl bg-white/5 rounded-lg p-4 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300" />

              <div className="relative flex items-center gap-4">
                <div className="flex-shrink-0">
                  <img
                    src={painter.image}
                    alt={`Portrait de ${painter.name}`}
                    className="w-16 h-16 object-cover rounded-lg shadow-lg border border-gray-700/50"
                  />
                </div>

                <div className="flex-grow min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <a
                      href={painter.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-semibold text-purple-400 hover:text-purple-300 transition-colors truncate"
                    >
                      {painter.name}
                    </a>
                    <ExternalLink
                      size={14}
                      className="flex-shrink-0 text-gray-400"
                    />
                  </div>

                  <div className="flex items-center gap-3 text-sm">
                    <span className="text-gray-400">
                      {painter.birth}-{painter.death}
                    </span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-300 truncate">
                      {painter.origin}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
