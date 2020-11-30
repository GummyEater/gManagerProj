const reducers = (state, action) => {
    switch (action.type) {
        case 'SET_USER_LOGGEDIN':
            return {
                ...state,
                loggedin: action.newLoggedin
            };
            break;
        case 'SET_PAGENAME':
            return {
                ...state,
                pagename: action.newPagename
            };
            break;
        case 'SET_LOGMENUOPEN':
            return {
                ...state,
                logmenuopen: action.newLogmenuopen
            };
            break;
        case 'SET_LOGMENUMETHOD':
            return {
                ...state,
                logmenumethod: action.newLogmenumethod
            };
            break;
        case 'SET_NAVDRAWEROPEN':
            return {
                ...state,
                navdraweropen: action.newNavdraweropen
            };
            break;
        default:
            return state;
            break;
    }
};

export default reducers;