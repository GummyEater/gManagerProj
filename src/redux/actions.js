export const setUserLoggedIn = (newLoggedin) => ({
  type: 'SET_USER_LOGGEDIN',
  newLoggedin: newLoggedin,
});

export const setUserDisplayName = (newDisplayname) => ({
  type: 'SET_USER_DISPLAYNAME',
  newDisplayname: newDisplayname,
});

export const setPageName = (newPagename) => ({
  type: 'SET_PAGENAME',
  newPagename: newPagename,
});

export const setLogmenuOpen = (newLogmenuopen) => ({
  type: 'SET_LOGMENUOPEN',
  newLogmenuopen: newLogmenuopen,
});

export const setLogmenuMethod = (newLogmenumethod) => ({
  type: 'SET_LOGMENUMETHOD',
  newLogmenumethod: newLogmenumethod,
});

export const setNavdrawerOpen = (newNavdraweropen) => ({
  type: 'SET_NAVDRAWEROPEN',
  newNavdraweropen: newNavdraweropen,
});