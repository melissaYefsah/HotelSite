
import room1Img from '../assets/img/room1.jpeg';
import room2Img from '../assets/img/room2.jpg';
import room3Img from '../assets/img/room3.jpg';
import room4Img from '../assets/img/room4.jpg';
import room5Img from '../assets/img/room5.jpg';


export const ROOM = [
    {
        id: 1,
        name: "Standard Room",
        description: "A comfortable and affordable room for your stay.",
        image: room1Img,
        price: 100, // Add the price property or any other relevant information
        amenities: ["Queen Bed", "Private Bathroom", "Free Wi-Fi"],
    },
    {
        id: 2,
        name: "Deluxe Room",
        description: "Luxurious and spacious room with a beautiful view.",
        image: room2Img,
        price: 150,
        amenities: ["King Bed", "Balcony", "Mini Bar", "Free Breakfast"],
    },
    {
        id: 3,
        name: "Suite",
        description: "An exquisite suite for a premium experience.",
        image: room3Img,
        price: 200,
        amenities: ["King Bed", "Living Room", "Jacuzzi", "Room Service"],

    },
    {
        id: 4,
        name: "Family Room",
        description: "Perfect for families, with multiple beds and a cozy atmosphere.",
        image: room4Img,
        price: 180,
        amenities: ["Two Queen Beds", "Kitchenette", "Connecting Rooms"],
      },
      {
        id: 5,
        name: "Poolside Cabana",
        description: "Enjoy a private cabana with direct access to the pool.",
        image: room5Img,
        price: 120,
        amenities: ["Private Pool Access", "Sun Loungers", "Outdoor Dining"],
      },
]