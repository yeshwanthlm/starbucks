import BestSeller from "../assests/img/Bestseller.jpg"
import drinks from "../assests/img/Drinks.jpg"
import food from "../assests/img/Food.jpg"
import merchandise from "../assests/img/Merchandise.jpg"
import coffeeAtHome from "../assests/img/CoffeeAtHome.jpg"
import readyToEat from "../assests/img/ReadyToEat.jpg"
import bhuna from "../assests/img/bhuna.webp"
import hazelnut from "../assests/img/hazelnut.webp"
import Three from "../assests/img/Three.webp"
import chocolatebrown from "../assests/img/chocolate-brown.webp"
import paneer from "../assests/img/panner.webp"
import veg from '../assests/img/veg.svg'
import nonveg from '../assests/img/nonveg.svg'
import icecoffee from "../assests/img/icecoffe.png"
import masalachai from "../assests/img/masala_chai.png"
import bg_1 from "../assests/img/bg_1.png"
import bg_2 from "../assests/img/bg_2.png"
import bg_3 from "../assests/img/bg_3.png"
import burger from "../assests/img/burger.png"



export const HandcraftedCurations = [
    {
        title: "BestSeller",
        img: BestSeller,
        link: "BestSeller"
    },
    {
        title: "Drinks",
        img: drinks,
        link: "Drinks"
    },
    {
        title: "Food",
        img: food,
        link: "Food"
    },
    {
        title: "Merchandise",
        img: merchandise,
        link: "Merchandise"
    },
    {
        title: "Coffee At Home",
        img: coffeeAtHome,
        link: "CoffeeAtHome"
    },
    {
        title: "Ready to Eat",
        img: readyToEat,
        link: "ReadytoEat"
    },
]


export const BaristaRecommends = [
    {
        id: "1",
        img: hazelnut,
        title: "Hazelnut Triangle ",
        gram: "50",
        type:nonveg,
        kcal: "302",
        price: "204",
        paise:"75"
    },
    {
        id: "2",
        img: bhuna,
        title: "Bhuna Chicken Puff ",
        type:nonveg,
        gram: "85",
        kcal: "390",
        price: "194",
        paise:"25"
    },
    {
        id: "3",
        img: chocolatebrown,
        title: "Chocolate Brownie Cupcake ",
        type:veg,
        gram: "80",
        kcal: "416",
        price: "288",
        paise:"75"
    },
    {
        id: "4",
        img: Three,
        title: "Three Dip Nachos ",
        gram: "80",
        type:veg,
        kcal: "513",
        price: "262",
        paise:"50"
    },
    {
        id: "5",
        img: paneer,
        title: "Chilli Paneer In Herbed Bun ",
        type:veg,
        gram: "180",
        kcal: "598",
        price: "283",
        paise:"50"
    },
]

export const PromotionBanner=[{
    id: "1",
    img: icecoffee,
    title: " Attention Starbucks Fans! ",
    bg:bg_1,
    head:"Signature Milkshakes",
    des:" Satisfy your sweet tooth with our signature milkshakes. Indulge today in these coffee-free versions. ",
    price: "330",
    paise:"00",
    b_content:"Order Now"

},
{
    id: "2",
    img:masalachai,
    title: "Go Desi With! ",
    bg:bg_2,
    head:" Masala Chai",
    des:"Enjoy traditional masala chai with abundance of strong Indian spices and flavourful handpicked tea.  ",
    price: "283",
    paise:"00",
    b_content:"Order Now"

},
{
    id: "3",
    img:burger,
    title: " Presenting ",
    bg:bg_3,
    head:" Freshly Assembled ",
    des:" Savor the taste of our new handcrafted sandwiches. Freshness never tasted so good.   ",
    price: "350",
    paise:"00",
    b_content:"Know More"

},

]