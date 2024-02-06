
import Dashboard from './components/Dashboard.vue';
import ListAppointment from './pages/appointments/ListAppointment.vue';
import ListUsers from './users/ListUsers.vue';
import Settings from './settings/UpdateSetting.vue';
import Profile from './profile/UpdateProfile.vue';

export default [
    {
        path: '/admin/dashboard',
        name: 'admin.dashboard',
        component: Dashboard,
    },

    {
        path: '/admin/appointments',
        name: 'admin.appointments',
        component: ListAppointment,
    },

    {
        path: '/admin/users',
        name: 'admin.users',
        component: ListUsers,
    },

    
    {
        path: '/admin/settings',
        name: 'admin.settings',
        component: Settings,

    },

    {
        path: '/admin/profile',
        name: 'admin.profile',
        component: Profile,

    },

    // {
    //     path: '/admin/logout',
    //     name: 'admin.logout',
    //     component: Logout,

    // },



]