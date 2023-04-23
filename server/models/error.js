const CustomError = (errorMessage, status) => {  
    return {
        isSuccess: false,
        errorMessage,
        status
    }
}
module.exports = CustomError  