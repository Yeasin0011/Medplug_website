import bcrypt, { genSalt } from "bcrypt"

export const hashPassword = async (password) => {
    try{
        const saltRounds = 10; //amar password tah 10 bar randomly hash kortese
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        return hashedPassword;
    } catch (error) {
        console.log(error);
    }
};

export const comparePassword = async (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);
}