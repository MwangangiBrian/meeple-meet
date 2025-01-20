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
