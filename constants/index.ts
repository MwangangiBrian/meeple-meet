import {
  LayoutDashboard,
  Users,
  GamepadIcon,
  CalendarDays,
  Settings,
} from 'lucide-react';

export const navigationLinks = [
  {
    href: '/library',
    label: 'Library',
  },

  {
    img: '/icons/user.svg',
    selectedImg: '/icons/user-fill.svg',
    href: '/my-profile',
    label: 'My Profile',
  },
];

export const sidebarItems = [
  {
    title: 'Dashboard',
    icon: LayoutDashboard,
    href: '/admin',
  },
  {
    title: 'Users',
    icon: Users,
    href: '/admin/users',
  },
  {
    title: 'Games',
    icon: GamepadIcon,
    href: '/admin/games',
  },
  {
    title: 'Loans',
    icon: CalendarDays,
    href: '/admin/loans',
  },
  {
    title: 'Settings',
    icon: Settings,
    href: '/admin/settings',
  },
];

export const FIELD_NAMES = {
  userName: 'Username',
  email: 'Email',
  password: 'Password',
};

export const FIELD_TYPES = {
  userName: 'text',
  email: 'email',
  password: 'password',
};

export const sorts = [
  {
    value: 'oldest',
    label: 'Oldest',
  },
  {
    value: 'newest',
    label: 'Newest',
  },
  {
    value: 'available',
    label: 'Available',
  },
  {
    value: 'highestRated',
    label: 'Highest Rated',
  },
];

export const userRoles = [
  {
    value: 'user',
    label: 'User',
    bgColor: 'bg-[#FDF2FA]',
    textColor: 'text-[#C11574]',
  },
  {
    value: 'admin',
    label: 'Admin',
    bgColor: 'bg-[#ECFDF3]',
    textColor: 'text-[#027A48]',
  },
];

export const borrowStatuses = [
  {
    value: 'overdue',
    label: 'Overdue',
    bgColor: 'bg-[#FFF1F3]',
    textColor: 'text-[#C01048]',
  },
  {
    value: 'borrowed',
    label: 'Borrowed',
    bgColor: 'bg-[#F9F5FF]',
    textColor: 'text-[#6941C6]',
  },
  {
    value: 'returned',
    label: 'Returned',
    bgColor: 'bg-[#F0F9FF]',
    textColor: 'text-[#026AA2]',
  },
];

export const games = [
  {
    id: 1,
    name: "Catan",
    image: "/placeholder.svg",
    owner: {
      name: "John Doe",
      image: "/placeholder.svg",
      initials: "JD",
    },
    members: 3,
    status: "available",
    condition: "Good",
    borrowTime: "6 hours",
    lastBorrowed: "6 Mar",
  },
  {
    id: 2,
    name: "Ticket to Ride",
    image: "/placeholder.svg", 
    owner: {
      name: "Sarah Smith",
      image: "/placeholder.svg",
      initials: "SS",
    },
    members: 4,
    status: "borrowed",
    condition: "Excellent",
    borrowTime: "2 hours",
    lastBorrowed: "7 Feb",
  },
];

export const chartData = [
  {
    name: "Jan",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Feb",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Mar",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Apr",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "May",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jun",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Jul",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Aug",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Sep",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Oct",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Nov",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
  {
    name: "Dec",
    total: Math.floor(Math.random() * 5000) + 1000,
  },
]