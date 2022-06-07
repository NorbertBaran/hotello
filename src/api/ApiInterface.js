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
    user_bookings(jwt){throw notImplementedError('bookings(jwt)')}
    bookings_all(jwt){throw notImplementedError('bookings_all(jwt)')}
    rooms_state(){throw notImplementedError(' rooms_state()')}
}