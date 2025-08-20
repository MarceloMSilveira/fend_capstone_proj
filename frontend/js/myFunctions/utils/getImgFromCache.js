export default async function getImageFromCache(url) {
    try {
        // Tenta encontrar a imagem no cache
        const response = await caches.match(url);
        
        if (response) {
            console.log('Imagem encontrada no cache.');
            return response.blob(); // Retorna o blob da imagem
        } else {
            console.log('Imagem não encontrada no cache, buscando na rede.');
            return null; // Retorna null se não encontrar
        }
    } catch (error) {
        console.error('Falha ao recuperar a imagem do cache:', error);
        return null;
    }
}