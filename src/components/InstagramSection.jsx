  import { useEffect } from 'react';
  import { InstagramEmbed } from 'react-social-media-embed';
  
  const InstagramSection = () => {
    // URLs de los posts de Instagram
    const postUrls = [
        'https://www.instagram.com/p/DHd0X7uxgzH/',
        'https://www.instagram.com/p/DGze-V-t0xH/',
        'https://www.instagram.com/p/DDkkEpCScrw/',
        'https://www.instagram.com/p/DMx5ruvxnVj/',
        'https://www.instagram.com/p/DL4kkxzxzir/',
        'https://www.instagram.com/p/DLu-MAZx89-/?img_index=1',
      ];
  
    // Función para redirigir al perfil de Instagram
    const redirectToProfile = (username) => {
      window.open(`https://www.instagram.com/${username}`, '_blank');
    };
  
    // Eliminar la descripción de los posts después de que se carguen
    useEffect(() => {
      const removeDescriptions = () => {
        const descriptions = document.querySelectorAll(
          'div[role="button"] > div > div > div > div > div > div > div > div'
        );
        descriptions.forEach((description) => {
          if (description.textContent.includes('Ver traducción')) {
            description.remove(); // Elimina la descripción
          }
        });
      };
  
      // Ejecutar después de que los embeds se hayan cargado
      const timer = setTimeout(removeDescriptions, 2000); // Ajusta el tiempo según sea necesario
      return () => clearTimeout(timer);
    }, []);
  
    return (

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {postUrls.map((postUrl, index) => (
              <div
                key={index}
                onClick={() => redirectToProfile('nombre_de_usuario')} 
                className="cursor-pointer transform hover:scale-105 transition-transform"
              >
                <div className="overflow-hidden rounded-lg shadow-lg w-full">
            <InstagramEmbed
              url={postUrl}
              width="100%"
              height="100%"
              captioned={false}
            />
          </div>
              </div>
            ))}
          </div>
      );
  };
  
  export default InstagramSection;