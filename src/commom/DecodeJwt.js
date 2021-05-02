import jwts from "jsonwebtoken"

export function DecodeJwt(token) {
    const pubData = jwts.decode(token).sub.split(",");
    const info = {
        username: pubData[0],
        permission: pubData[1],
        id: pubData[2]
    }
    return info;
}