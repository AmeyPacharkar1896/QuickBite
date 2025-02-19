const restaurants = [
  {
    id: "R123456",
    name: "The Bombay Curry House",
    urlName: "The_Bombay_Curry_House", // new key with underscores instead of spaces
    location: {
      address: "45 Spice Avenue",
      city: "Mumbai",
      state: "Maharashtra",
      zipCode: "400003",
    },
    contact: {
      phone: "+91-9876543211",
      email: "contact@bombaycurry.in",
      website: "https://www.bombaycurryhouse.com/",
    },
    openingHours: {
      monday: "11:00 AM - 11:00 PM",
      tuesday: "11:00 AM - 11:00 PM",
      wednesday: "11:00 AM - 11:00 PM",
      thursday: "11:00 AM - 11:00 PM",
      friday: "11:00 AM - 12:00 AM",
      saturday: "10:00 AM - 12:00 AM",
      sunday: "10:00 AM - 10:00 PM",
    },
    cuisine: ["Indian", "Mughlai"],
    rating: 4.6,
    image: "https://imgs.search.brave.com/20Iuns_JSjY4273R7XlVLb_f8f5vTAKE3Lt1orUKe9Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMud2l4c3RhdGlj/LmNvbS9tZWRpYS9m/MTU3ZjZfNDRkMGIz/MmM5YjRiNDA4M2Iw/OGJiMTBlMjQyNGIy/Njd-bXYyLmpwZy92/MS9jcm9wL3hfNDAz/LHlfMCx3XzM1ODYs/aF80MDI3L2ZpbGwv/d180NDUsaF81MDAs/YWxfYyxxXzgwLHVz/bV8wLjY2XzEuMDBf/MC4wMSxlbmNfYXZp/ZixxdWFsaXR5X2F1/dG8vNS5qcGc",
    dishes: [
      {
        id: "D100001",
        name: "Chicken Tikka Masala",
        description: "Char-grilled chicken in creamy tomato sauce.",
        price: 400,
        vegetarian: false,
        image: "https://example.com/images/chicken-tikka-masala.jpg",
      },
      {
        id: "D100002",
        name: "Dal Makhani",
        description: "Slow-cooked black lentils in rich butter sauce.",
        price: 250,
        vegetarian: true,
        image: "https://example.com/images/dal-makhani.jpg",
      },
      {
        id: "D100003",
        name: "Tandoori Roti",
        description: "Whole wheat flatbread baked in a tandoor.",
        price: 30,
        vegetarian: true,
        image: "https://example.com/images/tandoori-roti.jpg",
      },
    ],
  },
  {
    id: "R654321",
    name: "The South Indian Cafe",
    urlName: "The_South_Indian_Cafe", // new key with underscores instead of spaces
    location: {
      address: "78 Coconut Road",
      city: "Chennai",
      state: "Tamil Nadu",
      zipCode: "600004",
    },
    contact: {
      phone: "+91-9988776655",
      email: "info@southindiancafe.com",
      website: "https://www.southindiancafe.com",
    },
    openingHours: {
      monday: "8:00 AM - 10:00 PM",
      tuesday: "8:00 AM - 10:00 PM",
      wednesday: "8:00 AM - 10:00 PM",
      thursday: "8:00 AM - 10:00 PM",
      friday: "8:00 AM - 11:00 PM",
      saturday: "8:00 AM - 11:00 PM",
      sunday: "8:00 AM - 9:00 PM",
    },
    cuisine: ["South Indian"],
    rating: 4.8,
    image: "https://imgs.search.brave.com/TQkr4w93FAsUMYwqQ7_7ZxnvJenguN1i5tVPa9Vi8WU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saDMu/Z29vZ2xldXNlcmNv/bnRlbnQuY29tL2Jv/STVra1poeHl3QW10/dG4xMG94QXUtTmQ5/QTF6czhrMkVqdWFQ/S2U5eFhXek96c1Fv/NUVOOHFxbkZSWFVY/LVplU2Q4SnJ2Ylg2/OUpJUy15c2pGd0Jn/eXlaT1E9dzM2MC1y/dw",
    dishes: [
      {
        id: "D200001",
        name: "Idli Sambar",
        description: "Steamed rice cakes served with lentil stew.",
        price: 100,
        vegetarian: true,
        image: "https://example.com/images/idli-sambar.jpg",
      },
      {
        id: "D200002",
        name: "Vada",
        description: "Crispy lentil fritters served with coconut chutney.",
        price: 80,
        vegetarian: true,
        image: "https://example.com/images/vada.jpg",
      },
      {
        id: "D200003",
        name: "Filter Coffee",
        description: "Traditional South Indian coffee made with milk and sugar.",
        price: 50,
        vegetarian: true,
        image: "https://example.com/images/filter-coffee.jpg",
      },
    ],
  },
];

export { restaurants };
