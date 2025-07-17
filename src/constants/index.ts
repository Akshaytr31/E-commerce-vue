import type FooterContentType from '@/types';

export const copyRight = "©ShopeVue. all right reserved ";

export const cart = 'Your Cart'

export const cartTable = ['Product', 'Name', 'Quality', 'Price', 'Action']

export const homeContent = {
    title: "Eleva Your Lifestyle",
    discription:
        "Discover curated collections for every aspect of your life, from fashion to home essentials",
};

export const footerContent: FooterContentType[] = [
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    {
        title: "Customer Support",
        path: "/customerSupport",
    },
    {
        title: "Privacy Policy",
        path: "/privacyPolicy",
    },
    {
        title: "Terms of Service",
        path: "/service",
    },
];
