export const ERROR_MESSAGES = {
  USERNAME_MIN_LENGTH: 'Username must be at least 3 characters long!',
  USERNAME_MAX_LENGTH: 'Username must be at most 20 characters long!',
  EMAIL_REQUIRED: 'Invalid email address!',
  PASSWORD_REQUIRED: 'Password must be at least 8 characters long!',
  FIRST_NAME_REQUIRED: 'First name is required!',
  LAST_NAME_REQUIRED: 'Last name is required!',
  PHONE_REQUIRED: 'Phone is required!',
  ADDRESS_REQUIRED: 'Address is required!',
  BLOOD_TYPE_REQUIRED: 'Blood type is required!',
  BIRTHDAY_REQUIRED: 'Birthday is required!',
  GENDER_REQUIRED: 'Sex is required!',
  IMG_REQUIRED: 'Image is required!',
}

export const SERVER_CONSTANTS = {
  TOKEN_EXPIRY_DURATION: '3h'
}

export const GENDERS: any = ['male', 'female'];

export const menuItems = [
  {
    title: 'MENU',
    items: [
      {
        icon: '/home.png',
        label: 'Home',
        href: '/admin',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: '/teacher.png',
        label: 'Teachers',
        href: '/list/teachers',
        visible: ['admin', 'teacher'],
      },
      {
        icon: '/student.png',
        label: 'Students',
        href: '/list/students',
        visible: ['admin', 'teacher'],
      },
      {
        icon: '/parent.png',
        label: 'Parents',
        href: '/list/parents',
        visible: ['admin', 'teacher'],
      },
      {
        icon: '/subject.png',
        label: 'Subjects',
        href: '/list/subjects',
        visible: ['admin'],
      },
      {
        icon: '/class.png',
        label: 'Classes',
        href: '/list/classes',
        visible: ['admin', 'teacher'],
      },
      {
        icon: '/lesson.png',
        label: 'Lessons',
        href: '/list/lessons',
        visible: ['admin', 'teacher'],
      },
      {
        icon: '/exam.png',
        label: 'Exams',
        href: '/list/exams',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: '/assignment.png',
        label: 'Assignments',
        href: '/list/assignments',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: '/result.png',
        label: 'Results',
        href: '/list/results',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: '/attendance.png',
        label: 'Attendance',
        href: '/list/attendance',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: '/calendar.png',
        label: 'Events',
        href: '/list/events',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: '/message.png',
        label: 'Messages',
        href: '/list/messages',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: '/announcement.png',
        label: 'Announcements',
        href: '/list/announcements',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
    ],
  },
  {
    title: 'OTHER',
    items: [
      {
        icon: '/profile.png',
        label: 'Profile',
        href: '/profile',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: '/setting.png',
        label: 'Settings',
        href: '/settings',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
      {
        icon: '/logout.png',
        label: 'Logout',
        href: '/api/users/logout',
        visible: ['admin', 'teacher', 'student', 'parent'],
      },
    ],
  },
]


export const RESPONSE_MESSAGES = {
  LOGIN_SUCCESS: 'Login successfully!',
  LOGIN_FAILED: 'Login failed!',
  SIGNUP_SUCCESS: '',
  SIGNUP_FAILED: '',
  LOGOUT_SUCCESS: 'Logged out successfully!',
  LOGOUT_FAILED: 'Logged out failed!',
}

export const WEB_ROUTES = {
  LOGIN: '/login',
  SIGNUP: '/signup',
  ADMIN: '/admin'
}

export const API_ROUTES = {
  LOGIN: '/api/users/login',
  SIGNUP: '/api/users/signup',
  LOGOUT: '/api/users/logout'
}

export const COOKIE_TOKEN_KEY = 'token'
