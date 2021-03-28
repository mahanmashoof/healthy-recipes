/* eslint-disable import/no-anonymous-default-export */
export default (recipes = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...recipes, action.payload];
        default:
            return recipes;
    }
}