import ApiInterface from "./ApiInterface";
import welcome from './mock_assets/welcome.jpg'

import img1 from './mock_assets/gallery/1.jpg'
import img2 from './mock_assets/gallery/2.jpg'
import img3 from './mock_assets/gallery/3.jpg'
import img4 from './mock_assets/gallery/4.jpg'
import img5 from './mock_assets/gallery/5.jpg'
import img6 from './mock_assets/gallery/6.jpg'
import img7 from './mock_assets/gallery/7.jpg'
import img8 from './mock_assets/gallery/8.jpg'
import img9 from './mock_assets/gallery/9.jpg'
import img10 from './mock_assets/gallery/10.jpg'
import img11 from './mock_assets/gallery/11.jpg'

export default class ApiMock extends ApiInterface{
    welcome() {
        return {
            img: welcome,
            location: 'Kraków',
            company: 'Hotello',
            phone: '123 456 789',
            slogan: 'Lorem imsum dolor sit ament'
        }
    }
    slogan() {
        return {
            slogan: 'Lorem imsum dolor sit ament'
        }
    }
    gallery() {
        return {
            images: [
                welcome,
                img1,
                img2,
                img3,
                img4,
                img5,
                img6,
                img7,
                img8,
                img9,
                img10,
                img11
            ]
        }
    }
    signs() {
        return {
            company: 'Hotello',
            img: welcome
        }
    }
    sign_in(data) {
        return data.email === 'admin@admin.com' && data.password === 'admin' ? {token: '123', role: 'admin'} : {token: null, role: null}
    }
    email(email){
        return email === 'admin@admin.com' ? {exist: true} : {exist: false}
    }
    sign_up(data) {
        return data.email !== '500@server.com' ? {created: true} : {created: false}
    }
    user_bookings(jwt) {
        //Sorted by date
        return [{
            from: '13.06.2022',
            to: '17.06.2022',
            payment: 'cash',
            rooms: [3, 2, 4, 1]
        },{
            from: '13.06.2022',
            to: '13.06.2022',
            payment: 'bank',
            payment_code: 'qwerty',
            rooms: [5]
        },{
            from: '15.06.2022',
            to: '15.06.2022',
            payment: 'cash',
            rooms: [3, 2, 4, 1]
        },{
            from: '17.06.2022',
            to: '20.06.2022',
            payment: 'cash',
            rooms: [3, 2, 4, 1]
        },{
            from: '31.06.2022',
            to: '03.07.2022',
            payment: 'bank',
            payment_code: 'asdf',
            rooms: [3, 2, 4, 1]
        }]
    }
    bookings_all(jwt) {
        //Sorted by date
    }
    rooms_state() {

    }
    check_jwt(jwt) {
        return true
    }
    check_admin_jwt(jwt) {
        return true
    }
}