export const checkValidate= (email,password) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(password); // Minimum eight characters, at least one letter and one number
    if(!emailRegex){
        return "Email is not valid";
    }
    if(!passwordRegex){
        return "Password must be at least 8 characters with letters and numbers";
    }
    return null;
}