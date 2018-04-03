export const home = process.env.PUBLIC_URL + '/' || '/'
export const admin = process.env.PUBLIC_URL + '/admin' || '/admin'
export const signIn = process.env.PUBLIC_URL + '/signin' || '/signin'
export const signOut = process.env.PUBLIC_URL + '/signout' || '/signout'

export const userInfo = process.env.PUBLIC_URL + '/userinfo' || "/userinfo"

export function gameURL(title) {
    return (process.env.PUBLIC_URL + "/game/" + title) || ("/game/" + title)
}