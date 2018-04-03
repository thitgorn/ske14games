export const home = process.env.PUBLIC_URL + '/' || '/'

export const admin = process.env.PUBLIC_URL + '/admin' || '/admin'
export const viewgame = process.env.PUBLIC_URL + '/admin/viewgame' || '/admin/viewgame'
export const managegame = process.env.PUBLIC_URL + '/admin/managegame' || '/admin/managegame'
export const addgame = process.env.PUBLIC_URL + '/admin/addgame' || '/admin/addgame'
export const manageadmin = process.env.PUBLIC_URL + '/admin/manageadmin' || '/admin/manageadmin'

export const signIn = process.env.PUBLIC_URL + '/signin' || '/signin'
export const signOut = process.env.PUBLIC_URL + '/signout' || '/signout'

export const userInfo = process.env.PUBLIC_URL + '/userinfo' || "/userinfo"

export function gameURL(title) {
    return (process.env.PUBLIC_URL + "/game/" + title) || ("/game/" + title)
}