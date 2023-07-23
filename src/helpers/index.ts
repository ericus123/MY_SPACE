import crypto from "crypto-js";

export const encryptData = (data: any) => {
    return crypto.AES.encrypt(JSON.stringify(data), process.env.NEXT_PUBLIC_ENCRYPT_SECRET_TEXT).toString();

}



export const decodeData = (ciphertext: string) => {
    return crypto.AES.decrypt(ciphertext, process.env.NEXT_PUBLIC_ENCRYPT_SECRET_TEXT);
}




export const dateToTimeStamp = (date_str: string) => {
    const date = new Date(date_str);
    const timestamp = date.getTime();

    return timestamp;
}