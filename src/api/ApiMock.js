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
    check_jwt(jwt) {
        return true
    }
    check_admin_jwt(jwt) {
        return true
    }


    //Dashboard
    getBookings(jwt){
        //Sorted by date; beds <= room.beds; rooms issued -> state: finished
        return [{
            id: 0,
            user_id: 0,
            from: '13.06.2022',
            to: '17.06.2022',
            payment: 'cash',
            state: 'not_finished',
            rooms: [{
                beds: 3,
                room_id: null
            },{
                beds: 2,
                room_id: null
            },{
                beds: 4,
                room_id: null
            },{
                beds: 1,
                room_id: null
            }]
        },{
            id: 1,
            user_id: 0,
            from: '13.06.2022',
            to: '13.06.2022',
            payment: 'bank',
            payment_code: 'qwerty',
            rooms: [5],
            state: 'finished',
        },{
            id: 2,
            user_id: 0,
            from: '15.06.2022',
            to: '15.06.2022',
            payment: 'cash',
            rooms: [3, 2, 4, 1]
        },{
            id: 3,
            user_id: 0,
            from: '17.06.2022',
            to: '20.06.2022',
            payment: 'cash',
            rooms: [3, 2, 4, 1]
        },{
            id: 4,
            user_id: 0,
            from: '31.06.2022',
            to: '03.07.2022',
            payment: 'bank',
            payment_code: 'asdf',
            rooms: [3, 2, 4, 1]
        }]
    }
    getUserBookings(jwt, user){
        //Sorted by date
        return [{
            id: 0,
            from: '13.06.2022',
            to: '17.06.2022',
            payment: 'cash',
            rooms: [3, 2, 4, 1]
        },{
            id: 1,
            from: '13.06.2022',
            to: '13.06.2022',
            payment: 'bank',
            payment_code: 'qwerty',
            rooms: [5]
        },{
            id: 2,
            from: '15.06.2022',
            to: '15.06.2022',
            payment: 'cash',
            rooms: [3, 2, 4, 1]
        }]
    }
    deleteBooking(jwt, booking){
        return {deleted: true}
    }
    updateBooking(jwt, booking){
        return {updated: true}
    }
    createBooking(jwt, booking){
        return {created: true, id: 5}
    }

    updateUserSettings(jwt, settings){
        return {updated: true}
    }

    //Dashboard Admin
    getTasks(jwt){
        return {
            id: 0,
            employee_id: 0,
            date: '09.06.2022',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim blandit volutpat maecenas volutpat. Cras ornare arcu dui vivamus. Id faucibus nisl tincidunt eget nullam. Rhoncus mattis rhoncus urna neque. Odio ut enim blandit volutpat maecenas volutpat. Eget magna fermentum iaculis eu non diam phasellus vestibulum lorem. Sed risus ultricies tristique nulla. Aliquam etiam erat velit scelerisque in. Arcu cursus vitae congue mauris rhoncus aenean vel.'
        }
    }
    deleteTask(jwt, task){
        return {deleted: true}
    }
    updateTask(jwt, task){
        return {updated: true}
    }
    createTask(jwt, task){
        return {created: true, id: 1}
    }

    getEmployees(jwt){
        return {
            id: 0,
            name: 'John',
            last_name: 'Smith',
            phone: '123456789'
        }
    }
    deleteEmployee(jwt, employee){
        return {deleted: true}
    }
    createEmployee(jwt, employee){
        return {created: true, id: 1}
    }
    updateEmployee(jwt, employee){
        return {updated: true}
    }

    getBlackList(jwt){
        return {
            id: 7,
            id_card: 'KPC571278',
            name: 'Bob',
            last_name: 'Smith'
        }
    }
    findInBlackList(jwt, customer){
        return {}
    }
    addToBlackList(jwt, customer){
        return {updated: true}
    }

    getCleanRooms(jwt){
        return [{
            id: 0,
            label: 'A01',
            beds: 2,
            state: 'clean',
            booking_id: null
        },{
            id: 1,
            label: 'A02',
            beds: 3,
            state: 'clean',
            booking_id: null
        },{
            id: 2,
            label: 'A03',
            beds: 3,
            state: 'clean',
            booking_id: null
        }]
    }
    getIssuedRooms(jwt){
        return [{
            id: 3,
            label: 'A04',
            beds: 3,
            state: 'issued',
            booking_id: 0
        },{
            id: 4,
            label: 'A05',
            beds: 5,
            state: 'issued',
            booking_id: 1
        }]
    }
    getDirtyRooms(jwt){
        return [{
            id: 5,
            label: 'A06',
            beds: 5,
            state: 'dirty'
        }]
    }
    getLeftRooms(jwt){
        return [{
            id: 6,
            label: 'A07',
            beds: 3,
            state: 'left'
        }]
    }
    getRooms(jwt){
        return [{
            id: 0,
            label: 'A01',
            beds: 2,
            state: 'clean'
        },{
            id: 1,
            label: 'A02',
            beds: 3,
            state: 'clean'
        },{
            id: 2,
            label: 'A03',
            beds: 3,
            state: 'clean'
        },{
            id: 3,
            label: 'A04',
            beds: 3,
            state: 'issued'
        },{
            id: 4,
            label: 'A05',
            beds: 5,
            state: 'issued'
        },{
            id: 5,
            label: 'A06',
            beds: 5,
            state: 'dirty'
        },{
            id: 6,
            label: 'A07',
            beds: 3,
            state: 'left'
        }]
    }
    deleteRoom(jwt, room){
        return {deleted: true}
    }
    updateRoom(jwt, room){
        return {updated: true}
    }
    createRoom(jwt, room){
        return {created: true, id: 12}
    }
}