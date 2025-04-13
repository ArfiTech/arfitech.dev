const images = [
    {
      src: 'public/arisu_caupng.png',
      description: '닷디아나쟝'
    },
    {
      src: 'public/reisa_rkgk.png',
      description: '도럇'
    }
  ];
  
  function Gallery() {
    return (
      <section>
        <h2 className="text-xl font-bold mb-4">Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {images.map((item, index) => (
            <div key={index} className="shadow-lg rounded-lg overflow-hidden">
              <img src={item.src} alt={item.description} className="w-full h-64 object-cover" />
              <p className="p-2 text-center text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }

  export default Gallery;