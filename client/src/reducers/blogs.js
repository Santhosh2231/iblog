

export default (blogs=[],action) =>{
    switch (action.type) {
        case "CREATE":
            return [...postMessage,action.payload];
        case "FETCH_ALL":
            return blogs;
        default:
            return blogs;

    }
}