export function categories(category) {
    return fetch(`/api/discover/categories/${category}`);
}
