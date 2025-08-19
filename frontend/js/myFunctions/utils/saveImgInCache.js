export default async function saveImageToCache(url) {
    try {
        // Abre o cache com um nome específico
        const cache = await caches.open('my-image-cache');
        
        // Adiciona a imagem ao cache
        await cache.add(url);
        console.log(`Imagem de ${url} salva no cache.`);
        
    } catch (error) {
        console.error('Falha ao salvar a imagem no cache:', error);
    }
}