const notImplementedError = name => "Not implemented '" + name + "' flashcards api method"

export default class ApiInterface {
    welcome(){throw notImplementedError('welcome()')}
    slogan(){throw notImplementedError('slogan()')}
    gallery(){throw notImplementedError('gallery()')}
    signs(){throw notImplementedError('sign()')}
    sign_in(data){throw notImplementedError('sign_in(data)')}
    email(email){throw notImplementedError('email(email)')}
    sign_up(data){throw notImplementedError('sign_up(data)')}
    check_jwt(jwt){throw notImplementedError('check_jwt(jwt)')}
    check_admin_jwt(jwt){throw notImplementedError('check_admin_jwt(jwt)')}

    //Dashboard
    getBookings(jwt){throw notImplementedError('getBookings(jwt)')}
    getUserBookings(jwt, user){throw notImplementedError('getUserBookings(jwt)')}
    deleteBooking(jwt, booking){throw notImplementedError('deleteBooking(jwt, booking)')}
    updateBooking(jwt, booking){throw notImplementedError('updateBooking(jwt, booking)')}
    createBooking(jwt, booking){throw notImplementedError('createBooking(jwt, booking)')}
    findBooking(jwt, data){throw notImplementedError('findBooking(jwt, data)')}

    updateUserSettings(jwt, settings){throw notImplementedError('updateUserSettings(jwt, settings)')}

    //Dashboard Admin
    getTasks(jwt){throw notImplementedError('getTasks(jwt)')}
    deleteTask(jwt, task){throw notImplementedError('deleteTask(jwt)')}
    updateTask(jwt, task){throw notImplementedError('updateTask(jwt, task)')}
    createTask(jwt, task){throw notImplementedError('createTask(jwt, task)')}
    findTask(jwt, data){throw notImplementedError('findTask(jwt, data)')}

    getEmployees(jwt){throw notImplementedError('getEmployees(jwt)')}
    deleteEmployee(jwt, employee){throw notImplementedError('deleteEmployee(jwt, employee)')}
    createEmployee(jwt, employee){throw notImplementedError('createEmployee(jwt, employee)')}
    updateEmployee(jwt, employee){throw notImplementedError('updateEmployee(jwt, employee)')}
    findEmployee(jwt, data){throw notImplementedError('findEmployee(jwt, data)')}

    getBlackList(jwt){throw notImplementedError('getBlackList(jwt)')}
    addToBlackList(jwt, customer){throw notImplementedError('addToBlackList(jwt, customer)')}
    findInBlackList(jwt, data){throw notImplementedError('findInBlackList(jwt, customer)')}

    getCleanRooms(jwt){throw notImplementedError('getCleanRooms(jwt)')}
    getIssuedRooms(jwt){throw notImplementedError('getIssuedRooms(jwt)')}
    getLeftRooms(jwt){throw notImplementedError('getLeftRooms(jwt)')}
    getDirtyRooms(jwt){throw notImplementedError('getDirtyRooms(jwt)')}
    getRooms(jwt){throw notImplementedError('getRooms(jwt)')}
    deleteRoom(jwt, room){throw notImplementedError('deleteRoom(jwt, room)')}
    updateRoom(jwt, room){throw notImplementedError('updateRoom(jwt, room)')}
    createRoom(jwt, room){throw notImplementedError('createRoom(jwt, room)')}
    findRooms(jwt, data){throw notImplementedError('findRooms(jwt, room)')}

    getCustomers(jwt){throw notImplementedError('getCustomers(jwt)')}
    deleteCustomer(jwt, customer){throw notImplementedError('deleteCustomer(jwt, customer)')}
    updateCustomer(jwt, customer){throw notImplementedError('updateCustomer(jwt, customer)')}
    createCustomer(jwt, customer){throw notImplementedError('createCustomer(jwt, customer)')}
    findCustomers(jwt, data){throw notImplementedError('createCustomer(jwt, customer)')}
}