import AsosiyPage from "../page/asosiy"
import JamoaPage from "../page/jamoa"
import KursPage from "../page/kurslarimiz"
import NatijaPage from "../page/natija"
import YoutubePage from "../page/youtube"
export const NavbarData = [
    {
        id:1,
        name:'Asosiy',
        pathname:'/Asosiy',
        Element:AsosiyPage,
        hidden:false
    },
    {
        id:2,
        name:'Kurslarimiz',
        pathname:'/Kurslarimiz',
        Element:KursPage,
        hidden:false

    },
    {
        id:3,
        name:'Natijalar',
        pathname:'/Natijalar',
        Element:NatijaPage,
        hidden:false
    },
    {
        id:4,
        name:'Bizning jamoa',
        pathname:'/jamoa',
        Element:JamoaPage,
        hidden:false
    },
    {
        id:5,
        name:'YouTube',
        pathname:'/YouTube',
        Element:YoutubePage,
        hidden:false
    },
]