import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:5000' });

//send token to backend so the middleware knows that we're logged in
API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
})

export const fetchRecipes = () => API.get('/recipes');
export const createRecipe = (newRecipe) => API.post('/recipes', newRecipe);
export const updateRecipe = (id, updatedRecipe) => API.patch(`/recipes/${id}`, updatedRecipe);
export const deleteRecipe = (id) => API.delete(`/recipes/${id}`);
export const likeRecipe = (id) => API.patch(`/recipes/${id}/likeRecipe`);

export const signIn = (formData) => API.post('user/signin', formData);
export const signUp = (formData) => API.post('user/signup', formData);