function Places() {
  const places = [
    {
      id: "ayasofya",
      name: "Ayasofya Cami",
      image: "../pictures/ayasofya.jpg",
      alt: "Ayasofya",
      description: "Bizans ve Osmanlı İmparatorluklarına ev sahipliği yapmış, dünya tarihinin en önemli yapılarından biri.",
      link: "../places/ayasofya",
    },
    {
      id: "arkeoloji",
      name: "Arkeoloji",
      image: "../pictures/arkeoloji1.jpg",
      alt: "Arkeoloji",
      description: "Türkiye'nin en önemli müzelerinden biri ve zengin tarihi koleksiyonu.",
      link: "../places/arkeoloji",
    },
    {
      id: "bogazturu",
      name: "Boğaz Turu",
      image: "../pictures/bogazturu.jpg",
      alt: "Bogaz Turu",
      description: "İstanbul Boğazı'nın eşsiz güzelliklerini tekne turuyla keşfetme deneyimi.",
      link: "../places/bogazturu",
    },
    {
      id: "camlica",
      name: "Camlıca Tepesi",
      image: "../pictures/camlica.jpg",
      alt: "Camlica",
      description: "İstanbul'un en yüksek noktalarından biri ve muhteşempanoramik manzara.",
      link: "../places/camlica",
    },
    {
      id: "dolmabahce",
      name: "Dolmabahçe Sarayı",
      image: "../pictures/dolmabahce.jpg",
      alt: "Dolmabahce",
      description: "Osmanlı'nın son dönem sarayı ve muhteşem Boğaz manzarasına sahip yapı.",
      link: "../places/dolmabahce",
    },
    {
      id: "emirgan",
      name: "Emirgan Korusu",
      image: "../pictures/emirgan.jpg",
      alt: "Emirgan",
      description: "Lale festivaliyle ünlü, Boğaz'ın yeşil vahası.",
      link: "../places/emirgan",
    },
    {
      id: "eyupsultan",
      name: "Eyup Sultan Cami",
      image: "../pictures/eyupsultan.jpg",
      alt: "Eyupsultan",
      description: "İstanbul'un en kutsal mekanlarından biri ve önemli bir ziyaret noktası.",
      link: "../places/eyupsultan",
    },
    {
      id: "galata",
      name: "Galata Kulesi",
      image: "../pictures/galatakulesi.jpg",
      alt: "Galata",
      description: "İstanbul'un en eski kulesi ve şehrin simgelerinden biri.",
      link: "../places/galata",
    },
    {
      id: "istiklal",
      name: "İstiklal",
      image: "../pictures/istiklal.jpg",
      alt: "İstiklal",
      description: "arihi binaları, kültür sanat mekanları ve nostaljik  tramvayıyla ünlü yaya caddesi.",
      link: "../places/istiklal",
    },
    {
      id: "kapalı Çarsi",
      name: "Kapali Carşı",
      image: "../pictures/kapalicarsi.jpg",
      alt: "Kapalı Çarşı",
      description: "Dünyanın en eski ve en büyük kapalı çarşılarından biri.",
      link: "../places/kapalicarsi",
    },
    {
      id: "kizkulesi",
      name: "Kız Kulesi",
      image: "../pictures/kizkulesi.jpg",
      alt: "Kız Kulesi",
      description: "Üsküdar açıklarında, efsanelere konu olmuş tarihi deniz feneri.",
      link: "../places/kizkulesi",
    },
    {
      id: "miniaturk",
      name: "Miniatürk",
      image: "../pictures/miniaturk.jpg",
      alt: "Miniatürk",
      description: "Türkiye'nin ve Osmanlı coğrafyasının önemli eserlerinin minyatürlerinin sergilendiği park.",
      link: "../places/miniaturk",
    },
    {
      id: "ortakoy",
      name: "Ortaköy Cami",
      image: "../pictures/ortakoycami.jpg",
      alt: "Ortaköy cami",
      description: "Boğaz'ın incisi, neo-barok tarzda inşa edilmiş zarif cami.",
      link: "../places/ortakoy",
    },
    {
      id: "pierreloti",
      name: "Pierreloti",
      image: "../pictures/pierloti.jpg",
      alt: "Pierreloti",
      description: "Haliç'in muhteşem manzarasına sahip tarihi tepe.",
      link: "../places/pierreloti",
    },
    {
      id: "rumelihisarı",
      name: "Rumeli Hisarı",
      image: "../pictures/rumelihisari.jpg",
      alt: "Rumeli Hisarı",
      description: "Fatih Sultan Mehmet tarafından yaptırılan, Boğaz'ınkoruyucusu tarihi kale.",
      link: "../places/rumelihisarı",
    },
    {
      id: "suleymaniye",
      name: "Süleymaniye Cami",
      image: "../pictures/suleymaniye.jpg",
      alt: "Süleymaniye Cami",
      description: "Mimar Sinan'ın başyapıtı ve Osmanlı klasik dönem mimarisinin zirvesi.",
      link: "../places/suleymaniye",
    },
    {
      id: "sultanahmet",
      name: "Sultanahmet Cami",
      image: "../pictures/sultanahmetcami.jpg",
      alt: "Sultanahmet Cami",
      description: "Bavi çinileriyle ünlü, Osmanlı mimarisinin en güzel örneklerinden biri.",
      link: "../places/sultanahmet",
    },
    {
      id: "taksim",
      name: "Taksim Meydanı",
      image: "../pictures/taksim.jpg",
      alt: "Taksim Meydanı",
      description: "Modern İstanbul'un kalbi ve şehrin en önemli buluşma noktası.",
      link: "../places/taksim",
    },
    {
      id: "topkapi",
      name: "Topkapı Sarayı",
      image: "../pictures/topkapi.jpg",
      alt: "Ayasofya",
      description: "Osmanlı padişahlarının 400 yıl boyunca yaşadığı ve devleti yönettiği muhteşem saray kompleksi.",
      link: "../places/topkapi",
    },
    {
      id: "yerebatan",
      name: "Yerebatan Sarnıcı",
      image: "../pictures/yerebatansarnici.jpg",
      alt: "Yerebatan Sarnıcı",
      description: "Bizans döneminden kalma, gizemli atmosferiyle büyüleyen tarihi su sarnıcı.",
      link: "../places/yerebatan",
    },
  ];

  return (
    <div className="container py-5 mt-5">
      <div className="text-center mb-5">
        <h1 className="display-4">Gezilecek Yerler</h1>
      </div>

      <div className="row g-4">
        {places.map((place) => (
          <div key={place.id} className="col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm">
              <a href={place.link} className="text-decoration-none text-dark">
                <img
                  src={place.image}
                  className="card-img-top"
                  alt={place.alt}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h2 className="card-title h5">{place.name}</h2>
                  <p className="card-text text-muted">{place.description}</p>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Places;