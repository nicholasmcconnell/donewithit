import client from './client';

const endpoint = '/listings';

const getListings = () => client.get(endpoint);

const addListing = listing => {
    const data = new FormData();
    data.append('title', listing.title)
    data.append('price', listing.price)
    data.append('categoryId', listing.category.value)
}

export default {
    getListings,
}