import Api from '@/services/Api'

export default {
    register(credentials) {
        return Api().post('register', credentials)
    }
}

// example of calling this module
// AuthenticationService.register({
//     email: "test@gmail.com", 
//     password: "123456"
// })