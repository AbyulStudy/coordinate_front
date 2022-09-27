const numberRegx = /^[0-9]*$/;

export const checkStrToNumber = (str: string) => {
    return numberRegx.test(str);
};
