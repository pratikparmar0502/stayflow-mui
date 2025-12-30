import { useState, useContext } from "react";
import {
  Add,
  Facebook,
  Instagram,
  Twitter,
  YouTube,
} from "@mui/icons-material";
import nature1 from "../../assets/hotel-image/nature-1.jpg";
import nature2 from "../../assets/hotel-image/nature-2.jpg";
import nature3 from "../../assets/hotel-image/nature-3.jpg";
import nature4 from "../../assets/hotel-image/nature-4.jpg";
import nature5 from "../../assets/hotel-image/nature-5.jpg";
import nature6 from "../../assets/hotel-image/nature-6.jpg";
import urban1 from "../../assets/hotel-image/urban-1.jpg";
import urban2 from "../../assets/hotel-image/urban-2.jpg";
import urban3 from "../../assets/hotel-image/urban-3.jpg";
import urban4 from "../../assets/hotel-image/urban-4.jpg";
import urban5 from "../../assets/hotel-image/urban-5.jpg";
import urban6 from "../../assets/hotel-image/urban-6.jpg";
import ocean1 from "../../assets/hotel-image/ocean-1.jpg";
import ocean2 from "../../assets/hotel-image/ocean-2.jpg";
import ocean3 from "../../assets/hotel-image/ocean-3.jpg";
import ocean4 from "../../assets/hotel-image/ocean-4.jpg";
import ocean5 from "../../assets/hotel-image/ocean-5.jpg";
import ocean6 from "../../assets/hotel-image/ocean-6.jpg";
import romantic1 from "../../assets/hotel-image/romantic-1.webp";
import romantic2 from "../../assets/hotel-image/romantic-2.webp";
import romantic3 from "../../assets/hotel-image/romantic-3.webp";
import romantic4 from "../../assets/hotel-image/romantic-4.webp";
import romantic5 from "../../assets/hotel-image/romantic-5.webp";
import romantic6 from "../../assets/hotel-image/romantic-6.webp";
import royal1 from "../../assets/hotel-image/royal-1.jpg";
import royal2 from "../../assets/hotel-image/royal-2.jpg";
import royal3 from "../../assets/hotel-image/royal-3.jpg";
import royal4 from "../../assets/hotel-image/royal-4.jpg";
import royal5 from "../../assets/hotel-image/royal-5.jpg";
import royal6 from "../../assets/hotel-image/royal-6.jpg";

import {
  Forest,
  Apartment,
  Waves,
  Favorite,
  Castle,
  AllInclusive,
  LocationOn,
  Close,
  Star,
  AccountCircle,
  SearchOff,
} from "@mui/icons-material";

import natureHero from "../../assets/nature-hero.avif";
import royalHero from "../../assets/royal-hero.avif";
import urbanHero from "../../assets/urban-hero.avif";
import oceanHero from "../../assets/ocean-hero.avif";
import romanticHero from "../../assets/romantic-hero.avif";
import defaultHero from "../../assets/defafult-hero.avif";

import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Stack,
  Divider,
  Box,
  Typography,
  Button,
  Container,
  TextField,
  InputAdornment,
  IconButton,
  AppBar,
  Toolbar,
  Modal,
  Fade,
} from "@mui/material";

import { MoodContext } from "../../context/MoodContext.jsx";
import { AnimatePresence, motion } from "framer-motion";

const moods = [
  { id: "default", label: "All Stays", icon: <AllInclusive /> },
  { id: "nature", label: "Nature", icon: <Forest /> },
  { id: "urban", label: "Urban", icon: <Apartment /> },
  { id: "ocean", label: "Ocean", icon: <Waves /> },
  { id: "romantic", label: "Romantic", icon: <Favorite /> },
  { id: "royal", label: "Royal", icon: <Castle /> },
];

const Home = () => {
  const { mood, setMood } = useContext(MoodContext);
  const [open, setOpen] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [wishlistedIds, setWishlistedIds] = useState([]);

  const handleOpen = (hotel) => {
    setSelectedHotel(hotel);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const moodImages = {
    nature: natureHero,
    urban: urbanHero,
    ocean: oceanHero,
    romantic: romanticHero,
    royal: royalHero,
    default: defaultHero,
  };

  const getMoodColor = (currentMood) => {
    switch (currentMood) {
      case "nature":
        return "#2e7d32";
      case "urban":
        return "#d32f2f";
      case "ocean":
        return "#0288d1";
      case "romantic":
        return "#d81b60";
      case "royal":
        return "#ffa000";
      default:
        return "#1976d2";
    }
  };

  const getLogoIcon = () => {
    const iconStyle = {
      mr: 1,
      fontSize: "2rem",
      color: getMoodColor(mood),
      transition: "0.5s all",
    };
    switch (mood) {
      case "nature":
        return <Forest sx={iconStyle} />;
      case "urban":
        return <Apartment sx={iconStyle} />;
      case "ocean":
        return <Waves sx={iconStyle} />;
      case "romantic":
        return <Favorite sx={iconStyle} />;
      case "royal":
        return <Castle sx={iconStyle} />;
      default:
        return <AllInclusive sx={iconStyle} />;
    }
  };

  const hotelData = {
    nature: [
      {
        id: 1,
        name: "Whispering Pines Sanctuary",
        price: "55",
        img: nature1,
        loc: "Gulmarg, Kashmir",
        rating: 4.8,
        desc: "A serene escape into the lush green pine forests of Kashmir.",
      },
      {
        id: 2,
        name: "The Mist-Clad Valley Lodge",
        price: "39",
        img: nature2,
        loc: "Munnar, Kerala",
        rating: 4.5,
        desc: "Breathtaking views of tea gardens and misty mountains.",
      },
      {
        id: 3,
        name: "Hidden Peak Eco-Retreat",
        price: "70",
        img: nature3,
        loc: "Kasol, Himachal",
        rating: 4.7,
        desc: "Riverside eco-friendly cabins for true nature lovers.",
      },
      {
        id: 4,
        name: "Wildflower Canyon Suites",
        price: "48",
        img: nature4,
        loc: "Dharamshala, India",
        rating: 4.3,
        desc: "Experience the tranquility of the Himalayas.",
      },
      {
        id: 5,
        name: "The Alpine Shadow Resort",
        price: "75",
        img: nature5,
        loc: "Coorg, Karnataka",
        rating: 4.6,
        desc: "A luxurious stay hidden within coffee plantations.",
      },
      {
        id: 6,
        name: "Cedar Creek Riverside Inn",
        price: "35",
        img: nature6,
        loc: "Rishikesh, Uttarakhand",
        rating: 4.4,
        desc: "Peaceful stay right on the banks of the holy Ganges.",
      },
    ],
    urban: [
      {
        id: 7,
        name: "The Onyx Skyscraper Hotel",
        price: "145",
        img: urban1,
        loc: "South Bombay, Mumbai",
        rating: 4.9,
        desc: "Luxury sky-high living in the heart of the business district.",
      },
      {
        id: 8,
        name: "Luminary Plaza & Suites",
        price: "105",
        img: urban2,
        loc: "Cyber Hub, Gurgaon",
        rating: 4.2,
        desc: "Modern amenities for the tech-savvy urban traveler.",
      },
      {
        id: 9,
        name: "The Velvet Metropolitan",
        price: "180",
        img: urban3,
        loc: "Indiranagar, Bangalore",
        rating: 4.6,
        desc: "Chic boutique hotel surrounded by the best cafes.",
      },
      {
        id: 10,
        name: "Iron & Glass Urban Loft",
        price: "110",
        img: urban4,
        loc: "Banjara Hills, Hyderabad",
        rating: 4.1,
        desc: "Industrial design meets city convenience.",
      },
      {
        id: 11,
        name: "Neon Horizon Boutique",
        price: "135",
        img: urban5,
        loc: "New Town, Kolkata",
        rating: 4.7,
        desc: "Vibrant stay in the growing tech hub of Kolkata.",
      },
      {
        id: 12,
        name: "The Quartz Central Tower",
        price: "220",
        img: urban6,
        loc: "Downtown, Dubai",
        rating: 4.8,
        desc: "World-class luxury with views of the Dubai skyline.",
      },
    ],
    ocean: [
      {
        id: 13,
        name: "Azure Horizon Beach Club",
        price: "215",
        img: ocean1,
        loc: "North Goa, India",
        rating: 4.7,
        desc: "Premium beach access and sundowner parties.",
      },
      {
        id: 14,
        name: "The Coral Reef Overwater Villa",
        price: "175",
        img: ocean2,
        loc: "Havelock Island, Andaman",
        rating: 4.5,
        desc: "Sleep right above the ocean with private water access.",
      },
      {
        id: 15,
        name: "Saltwater Palms Resort",
        price: "110",
        img: ocean3,
        loc: "Varkala, Kerala",
        rating: 4.4,
        desc: "Clifftop resort with an infinity view of the Arabian sea.",
      },
      {
        id: 16,
        name: "Turquoise Tide Haven",
        price: "300",
        img: ocean4,
        loc: "Maldives",
        rating: 4.9,
        desc: "The ultimate island paradise for luxury and privacy.",
      },
      {
        id: 17,
        name: "Sand & Serenity Island Spa",
        price: "130",
        img: ocean5,
        loc: "Pondicherry, India",
        rating: 4.2,
        desc: "Peaceful vibes and French-inspired coastal living.",
      },
      {
        id: 18,
        name: "The Sapphire Bay Resort",
        price: "200",
        img: ocean6,
        loc: "Gokarna, Karnataka",
        rating: 4.6,
        desc: "Untouched beaches and total tranquility.",
      },
    ],
    romantic: [
      {
        id: 19,
        name: "The Moonlit Rose Manor",
        price: "125",
        img: romantic1,
        loc: "Lake Pichola, Udaipur",
        rating: 4.9,
        desc: "Romantic palace stay with candlelit lake-view dinners.",
      },
      {
        id: 20,
        name: "Eternal Bloom Boutique Stay",
        price: "155",
        img: romantic2,
        loc: "Nainital, Uttarakhand",
        rating: 4.8,
        desc: "Cozy rooms for the perfect couple's retreat.",
      },
      {
        id: 21,
        name: "Stardust Honeymoon Suites",
        price: "99",
        img: romantic3,
        loc: "Dal Lake, Srinagar",
        rating: 4.6,
        desc: "Traditional houseboats for a unique romantic experience.",
      },
      {
        id: 22,
        name: "The Velvet Heart Retreat",
        price: "115",
        img: romantic4,
        loc: "Ooty, Tamil Nadu",
        rating: 4.5,
        desc: "Charming stay amidst the Nilgiri hills.",
      },
      {
        id: 23,
        name: "Secret Garden Lover's Inn",
        price: "170",
        img: romantic5,
        loc: "Alleppey, Kerala",
        rating: 4.7,
        desc: "Private backwater escapes for couples.",
      },
      {
        id: 24,
        name: "Sunset Serenade Villas",
        price: "140",
        img: romantic6,
        loc: "Shimla, Himachal",
        rating: 4.4,
        desc: "Mountain views and fireplace nights.",
      },
    ],
    royal: [
      {
        id: 25,
        name: "The Golden Scepter Palace",
        price: "540",
        img: royal1,
        loc: "Jodhpur, Rajasthan",
        rating: 5.0,
        desc: "Experience Rajasthan's royalty in a true heritage palace.",
      },
      {
        id: 26,
        name: "Imperial Heritage Mansion",
        price: "265",
        img: royal2,
        loc: "Udaipur, Rajasthan",
        rating: 4.8,
        desc: "Vintage luxury with modern comforts.",
      },
      {
        id: 27,
        name: "Majestic Crown Regency",
        price: "360",
        img: royal3,
        loc: "Jaipur, Rajasthan",
        rating: 4.9,
        desc: "Stay in the heart of the Pink City like a King.",
      },
      {
        id: 28,
        name: "The Royal Kohinoor Estate",
        price: "215",
        img: royal4,
        loc: "Gwalior, Madhya Pradesh",
        rating: 4.6,
        desc: "Rich history and grand hospitality.",
      },
      {
        id: 29,
        name: "Victoria’s Dynasty Suites",
        price: "340",
        img: royal5,
        loc: "Lucknow, Uttar Pradesh",
        rating: 4.7,
        desc: "Nawabi style meets colonial grandeur.",
      },
      {
        id: 30,
        name: "Emerald Throne Heritage Hotel",
        price: "420",
        img: royal6,
        loc: "Mysore, Karnataka",
        rating: 4.8,
        desc: "Classic luxury near the iconic Mysore Palace.",
      },
    ],
  };

  // ------------------------------------------------------------
  // UPDATED LOGIC HERE:
  // 1. Agar mood Default hai aur Search khaali hai -> Trending dikhao
  // 2. Agar mood Default hai aur Search active hai -> Sabme dhoondo (Flattened Array)
  // 3. Agar Specific mood hai -> Usi mood me dhoondo
  // ------------------------------------------------------------

  let hotelsToSearch = [];

  const trendingHotels = [
    hotelData.nature[0],
    hotelData.urban[0],
    hotelData.ocean[0],
    hotelData.royal[0],
    hotelData.romantic[0],
    hotelData.urban[1],
    hotelData.nature[1],
    hotelData.ocean[1],
    hotelData.royal[1],
  ];

  if (mood === "default") {
    // Agar search box mein text hai, toh poore database mein se filter karo
    if (searchQuery.trim().length > 0) {
      // Object.values(hotelData).flat() saare arrays ko ek array bana deta hai
      hotelsToSearch = Object.values(hotelData).flat();
    } else {
      // Search nahi hai, toh trending dikhao
      hotelsToSearch = trendingHotels;
    }
  } else {
    // Specific Mood selected
    hotelsToSearch = hotelData[mood] || [];
  }

  const displayedHotels = hotelsToSearch.filter(
    (hotel) =>
      hotel.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      hotel.loc.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          bgcolor: "white",
          color: "black",
          borderBottom: "1px solid #eee",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
              px: "0 !important",
              minHeight: "64px",
            }}
          >
            <Box
              onClick={() => setMood("default")}
              sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={mood}
                  initial={{ rotate: -180, opacity: 0, scale: 0.5 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 180, opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.4 }}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  {getLogoIcon()}
                </motion.div>
              </AnimatePresence>
              <Typography
                variant="h5"
                fontWeight="900"
                component={motion.span}
                animate={{ color: getMoodColor(mood) }}
                sx={{
                  ml: 0.5,
                  letterSpacing: "-1px",
                  textTransform: "uppercase",
                }}
              >
                Stayflow
              </Typography>
            </Box>
            <Stack
              direction="row"
              spacing={4}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              <Typography
                fontWeight="600"
                sx={{
                  cursor: "pointer",
                  "&:hover": { color: getMoodColor(mood) },
                }}
              >
                Explore
              </Typography>
              <Typography
                fontWeight="600"
                sx={{
                  cursor: "pointer",
                  "&:hover": { color: getMoodColor(mood) },
                }}
              >
                Destinations
              </Typography>
              <Typography
                fontWeight="600"
                sx={{
                  cursor: "pointer",
                  "&:hover": { color: getMoodColor(mood) },
                }}
              >
                My Bookings
              </Typography>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Button
                size="small"
                sx={{
                  color: "black",
                  fontWeight: "bold",
                  textTransform: "none",
                }}
              >
                Log in
              </Button>
              <IconButton>
                <AccountCircle />
              </IconButton>
            </Stack>
          </Toolbar>
          <Box sx={{ py: 1, borderTop: "1px solid #f9f9f9" }}>
            <Stack
              direction="row"
              spacing={4}
              justifyContent="center"
              sx={{
                overflowX: "auto",
                pb: 1,
                "&::-webkit-scrollbar": { display: "none" },
              }}
            >
              {moods.map((m) => (
                <Box
                  key={m.id}
                  onClick={() => setMood(m.id)}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    cursor: "pointer",
                    minWidth: "80px",
                    color:
                      mood === m.id ? getMoodColor(mood) : "text.secondary",
                    borderBottom:
                      mood === m.id
                        ? `2px solid ${getMoodColor(mood)}`
                        : "2px solid transparent",
                    transition: "0.3s",
                    opacity: mood === m.id ? 1 : 0.7,
                    "&:hover": { opacity: 1 },
                  }}
                >
                  {m.icon}
                  <Typography
                    variant="caption"
                    fontWeight="bold"
                    sx={{ mt: 0.5 }}
                  >
                    {m.label}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Box>
        </Container>
      </AppBar>
      {/* Hero Section */}
      <Box
        sx={{
          height: "80vh",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${
            moodImages[mood] || moodImages.default
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          transition: "0.8s ease",
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: "center", color: "white" }}>
          <Typography
            variant="h2"
            fontWeight="900"
            sx={{ textShadow: "2px 2px 10px rgba(0,0,0,0.5)" }}
          >
            Find Your Perfect{" "}
            {mood === "default"
              ? "Dream"
              : mood.charAt(0).toUpperCase() + mood.slice(1)}{" "}
            Stay
          </Typography>

          <Typography
            variant="h6"
            sx={{
              mt: 2,
              fontWeight: 400,
              opacity: 0.9,
              textShadow: "1px 1px 8px rgba(0,0,0,0.4)",
              maxWidth: "700px",
              mx: "auto",
              lineHeight: 1.4,
            }}
          >
            {mood === "default" &&
              "From hidden gems to iconic landmarks, discover stays that match your vibe."}
            {mood === "nature" &&
              "Escape the noise and breathe in the fresh mountain air."}
            {mood === "urban" &&
              "Stay in the heart of the action, where the city never sleeps."}
            {mood === "ocean" &&
              "Wake up to the sound of waves and the touch of golden sand."}
            {mood === "romantic" &&
              "Create unforgettable memories in the most enchanting settings."}
            {mood === "royal" &&
              "Experience grand hospitality and live like royalty in heritage palaces."}
          </Typography>
          <Box
            sx={{
              bgcolor: "white",
              borderRadius: "50px",
              p: 1,
              mt: 4,
              display: "flex",
              alignItems: "center",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
              flexWrap: { xs: "wrap", md: "nowrap" },
            }}
          >
            <TextField
              fullWidth
              variant="standard"
              placeholder="Where are you going?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationOn color="primary" sx={{ ml: 2 }} />
                  </InputAdornment>
                ),
              }}
              sx={{ px: 2 }}
            />
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: getMoodColor(mood),
                borderRadius: "40px",
                px: 5,
                py: 1.5,
                textTransform: "none",
                "&:hover": {
                  bgcolor: getMoodColor(mood),
                  filter: "brightness(0.9)",
                },
              }}
            >
              Search
            </Button>
          </Box>
        </Container>
      </Box>

      <Container sx={{ py: 10 }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          {/* Main Title - Centered */}
          <Typography
            variant="h3"
            fontWeight="900"
            sx={{
              // letterSpacing: "1px",
              mb: 2,
              color: "#1a1a1a",
            }}
          >
            {mood === "default" && searchQuery.length === 0
              ? "Trending Stays"
              : mood === "default" && searchQuery.length > 0
              ? `Search Results for "${searchQuery}"`
              : `Perfect ${
                  mood.charAt(0).toUpperCase() + mood.slice(1)
                } Getaways`}
          </Typography>

          {/* Niche ki 2 lines ki Description - Centered */}
          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              maxWidth: "600px",
              mx: "auto",
              lineHeight: 1.6,
              fontSize: "1.1rem",
            }}
          >
            {mood === "default"
              ? "Explore our top-rated collections and find the most loved destinations by travelers worldwide."
              : `Handpicked selection of the finest ${mood} properties, ensuring a stay that matches your lifestyle and desires.`}
          </Typography>

          {/* Ek choti underline decoration (Optional - looks good) */}
          <Box
            sx={{
              width: "60px",
              height: "4px",
              bgcolor: getMoodColor(mood),
              mx: "auto",
              mt: 3,
              borderRadius: "2px",
            }}
          />
        </Box>

        {displayedHotels.length === 0 && (
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            sx={{
              textAlign: "center",
              py: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <SearchOff sx={{ fontSize: 80, color: "#ccc", mb: 2 }} />
            <Typography variant="h5" fontWeight="bold" color="text.secondary">
              No stays found matching "{searchQuery}"
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Try checking your spelling or explore other categories.
            </Typography>
            <Button
              variant="outlined"
              onClick={() => setSearchQuery("")}
              sx={{
                borderRadius: "20px",
                color: getMoodColor(mood),
                borderColor: getMoodColor(mood),
                "&:hover": {
                  borderColor: getMoodColor(mood),
                  bgcolor: "rgba(0,0,0,0.04)",
                },
              }}
            >
              Clear Search
            </Button>
          </Box>
        )}

        <Grid
          container
          spacing={4}
          sx={{ mt: 2, display: "flex", justifyContent: "center" }}
        >
          {displayedHotels.map((hotel) => (
            <Grid item xs={12} sm={6} md={4} key={hotel.id}>
              <Box
                component={motion.div}
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <Card
                  sx={{
                    borderRadius: "24px",
                    overflow: "hidden",
                    boxShadow: "0 12px 40px rgba(0,0,0,0.06)",
                    border: "1px solid rgba(0,0,0,0.04)",
                  }}
                >
                  <Box sx={{ position: "relative", height: "220px" }}>
                    <CardMedia
                      component="img"
                      image={hotel.img}
                      sx={{ height: "100%", objectFit: "cover" }}
                    />
                    <Box
                      sx={{
                        position: "absolute",
                        top: 15,
                        right: 15,
                        bgcolor: "rgba(255,255,255,0.9)",
                        px: 1.2,
                        py: 0.4,
                        borderRadius: "10px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Star
                        sx={{
                          color: "#FFB300",
                          fontSize: "0.85rem",
                          mr: 0.3,
                        }}
                      />
                      <Typography variant="caption" fontWeight="800">
                        {hotel.rating}
                      </Typography>
                    </Box>
                  </Box>

                  <CardContent sx={{ p: 2.5 }}>
                    {/* Hotel Name */}
                    <Typography variant="h6" fontWeight="800" noWrap>
                      {hotel.name}
                    </Typography>

                    {/* Location */}
                    <Stack
                      direction="row"
                      alignItems="center"
                      spacing={0.5}
                      sx={{ color: "text.secondary", mb: 2 }}
                    >
                      <LocationOn sx={{ fontSize: "0.9rem" }} />
                      <Typography variant="caption" fontWeight="600">
                        {hotel.loc}
                      </Typography>
                    </Stack>
                    {/* Price aur Wishlist ka Main Container */}
                    <Box
                      sx={{
                        mb: 2,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between", // Ye sabse zaroori hai right mein bhejne ke liye
                        width: "100%", // Poori width lega tabhi space-between kaam karega
                        px: 0.5,
                      }}
                    >
                      {/* Left Side: Price */}
                      <Box sx={{ display: "flex", alignItems: "baseline" }}>
                        <Typography
                          variant="h5"
                          fontWeight="900"
                          sx={{ color: getMoodColor(mood) }}
                        >
                          ${hotel.price}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            ml: 0.5,
                            fontWeight: 700,
                            color: "text.secondary",
                          }}
                        >
                          / night
                        </Typography>
                      </Box>

                      {/* Right Side: Wishlist Button */}
                      <Box
                        component="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          if (wishlistedIds.includes(hotel.id)) {
                            setWishlistedIds(
                              wishlistedIds.filter((id) => id !== hotel.id)
                            );
                          } else {
                            setWishlistedIds([...wishlistedIds, hotel.id]);
                          }
                        }}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 0.8,
                          cursor: "pointer",
                          bgcolor: "transparent",
                          outline: "none",
                          py: 0.5,
                          px: 1.5,
                          borderRadius: "20px",
                          border: `1px solid ${getMoodColor(mood)}`,
                          transition: "0.3s",
                          // Isse ye hamesha container ke end (right) mein push hoga
                          alignSelf: "center",
                          "&:hover": { bgcolor: `${getMoodColor(mood)}10` },
                        }}
                      >
                        {wishlistedIds.includes(hotel.id) ? (
                          <Favorite
                            sx={{ fontSize: "1rem", color: getMoodColor(mood) }}
                          />
                        ) : (
                          <Add
                            sx={{
                              fontSize: "1.1rem",
                              color: getMoodColor(mood),
                            }}
                          />
                        )}

                        <Typography
                          variant="caption"
                          sx={{ fontWeight: "bold", color: getMoodColor(mood) }}
                        >
                          {wishlistedIds.includes(hotel.id)
                            ? "Saved"
                            : "Wishlist"}
                        </Typography>
                      </Box>
                    </Box>
                    <Divider sx={{ mb: 2, opacity: 0.6 }} />

                    {/* Line 2: Buttons Section */}
                    <Stack direction="row" spacing={2} alignItems="center">
                      <Button
                        fullWidth
                        variant="outlined"
                        size="small"
                        onClick={() => handleOpen(hotel)}
                        sx={{
                          textTransform: "none",
                          fontWeight: 700,
                          borderRadius: "12px",
                          borderColor: "#ddd",
                          color: "#555",
                          "&:hover": {
                            borderColor: getMoodColor(mood),
                            color: getMoodColor(mood),
                          },
                        }}
                      >
                        Details
                      </Button>
                      <Button
                        fullWidth
                        variant="contained"
                        disableElevation
                        sx={{
                          bgcolor: getMoodColor(mood),
                          borderRadius: "12px",
                          textTransform: "none",
                          fontWeight: "bold",
                          "&:hover": {
                            bgcolor: getMoodColor(mood),
                            filter: "brightness(0.9)",
                          },
                        }}
                      >
                        Book Now
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Hotel Details Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 2,
        }}
      >
        <Fade in={open}>
          <Box
            sx={{
              bgcolor: "background.paper",
              width: "100%",
              maxWidth: 600,
              borderRadius: "24px",
              boxShadow: 24,
              overflow: "hidden",
              outline: "none",
            }}
          >
            {selectedHotel ? (
              <>
                {/* 1. Image Section with Fix */}
                <Box
                  sx={{ position: "relative", height: 280, bgcolor: "#eee" }}
                >
                  <img
                    // Yahan check kijiye ki aapke data mein 'image' hi likha hai na?
                    src={
                      selectedHotel.image ||
                      selectedHotel.img ||
                      "https://via.placeholder.com/600x400?text=No+Image+Available"
                    }
                    alt={selectedHotel.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                    onError={(e) => {
                      e.target.src =
                        "https://via.placeholder.com/600x400?text=Image+Not+Found";
                    }}
                  />
                  <IconButton
                    onClick={handleClose}
                    sx={{
                      position: "absolute",
                      top: 15,
                      right: 15,
                      bgcolor: "rgba(255,255,255,0.9)",
                      "&:hover": { bgcolor: "white" },
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                    }}
                  >
                    <Close />
                  </IconButton>
                </Box>

                {/* 2. Content Section */}
                <Box sx={{ p: 4 }}>
                  <Typography variant="h4" fontWeight="900" sx={{ mb: 1 }}>
                    {selectedHotel.name}
                  </Typography>

                  <Stack
                    direction="row"
                    spacing={1}
                    alignItems="center"
                    sx={{ mb: 3, color: "text.secondary" }}
                  >
                    <LocationOn
                      sx={{ color: getMoodColor(mood), fontSize: "1.2rem" }}
                    />
                    <Typography variant="subtitle1" fontWeight="600">
                      {selectedHotel.loc}
                    </Typography>
                  </Stack>

                  <Divider sx={{ mb: 3 }} />

                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ mb: 3, lineHeight: 1.7 }}
                  >
                    {selectedHotel.desc ||
                      "Experience world-class hospitality in this beautiful location. Perfect for your next getaway."}
                  </Typography>

                  {/* Price & Book Footer */}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mt: 2,
                      p: 2.5,
                      borderRadius: "20px",
                      bgcolor: `${getMoodColor(mood)}08`,
                      border: `1px solid ${getMoodColor(mood)}20`,
                    }}
                  >
                    <Box>
                      <Typography
                        variant="h4"
                        fontWeight="900"
                        sx={{ color: getMoodColor(mood) }}
                      >
                        ${selectedHotel.price}
                      </Typography>
                      <Typography
                        variant="caption"
                        fontWeight="bold"
                        color="text.secondary"
                      >
                        PER NIGHT
                      </Typography>
                    </Box>
                    <Button
                      variant="contained"
                      size="large"
                      sx={{
                        bgcolor: getMoodColor(mood),
                        px: 5,
                        py: 1.5,
                        borderRadius: "15px",
                        fontWeight: "bold",
                        textTransform: "none",
                        fontSize: "1.1rem",
                        "&:hover": {
                          bgcolor: getMoodColor(mood),
                          filter: "brightness(0.9)",
                        },
                      }}
                    >
                      Book Now
                    </Button>
                  </Box>
                </Box>
              </>
            ) : (
              <Box sx={{ p: 5, textAlign: "center" }}>Loading details...</Box>
            )}
          </Box>
        </Fade>
      </Modal>
      {/* --- LUXURY FOOTER SECTION (STAYEASE BRANDING) --- */}
      <Box
        component="footer"
        sx={{
          bgcolor: "#111",
          color: "#fff",
          pt: 12,
          pb: 6,
          position: "relative",
          overflow: "hidden",
          mt: 10,
        }}
      >
        {/* Background Large Watermark Text */}
        <Typography
          sx={{
            position: "absolute",
            top: -10,
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: { xs: "6rem", md: "15rem" },
            fontWeight: "900",
            color: "rgba(255, 255, 255, 0.03)",
            whiteSpace: "nowrap",
            pointerEvents: "none",
            zIndex: 0,
            textTransform: "uppercase",
            letterSpacing: "10px",
          }}
        >
          STAY EASE
        </Typography>

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Grid
            container
            spacing={4}
            justifyContent="space-between" // Isse charo boxes ke beech barabar space rahega
          >
            {/* 1. Brand Section */}
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h5"
                  fontWeight="900"
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    letterSpacing: "1px",
                  }}
                >
                  STAY<span style={{ color: getMoodColor(mood) }}>EASE</span>
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: "#666",
                    letterSpacing: "3px",
                    fontWeight: "700",
                  }}
                >
                  PREMIUM STAYS
                </Typography>
              </Box>

              <Typography
                variant="body2"
                sx={{ color: "#888", mb: 4, lineHeight: 1.8 }}
              >
                Feel free to reach out if you want to collaborate with us, or
                chat.
              </Typography>

              <Typography
                variant="subtitle2"
                fontWeight="700"
                sx={{ mb: 2, textTransform: "uppercase" }}
              >
                Follow Us
              </Typography>
              <Stack direction="row" spacing={1.5}>
                {[Twitter, Facebook, YouTube, Instagram].map((Icon, index) => (
                  <IconButton
                    key={index}
                    size="small"
                    sx={{
                      bgcolor: "rgba(255,255,255,0.05)",
                      color: "white",
                      "&:hover": { bgcolor: getMoodColor(mood) },
                    }}
                  >
                    <Icon fontSize="inherit" />
                  </IconButton>
                ))}
              </Stack>
            </Grid>

            {/* 2. Service Links */}
            <Grid item xs={6} sm={6} md={2}>
              <Typography variant="subtitle1" sx={{ mb: 4, fontWeight: "700" }}>
                Service
              </Typography>
              <Stack spacing={2}>
                {[
                  "Store Directory",
                  "Top Hotels",
                  "Quick Links",
                  "Insights",
                ].map((text) => (
                  <Typography
                    key={text}
                    variant="body2"
                    sx={{
                      color:
                        text === "Quick Links" ? getMoodColor(mood) : "#777",
                      cursor: "pointer",
                      "&:hover": { color: "#fff" },
                    }}
                  >
                    {text}
                  </Typography>
                ))}
              </Stack>
            </Grid>

            {/* 3. Company Links */}
            <Grid item xs={6} sm={6} md={2}>
              <Typography variant="subtitle1" sx={{ mb: 4, fontWeight: "700" }}>
                Company
              </Typography>
              <Stack spacing={2}>
                {["Home", "About Us", "Services", "Career", "Contact"].map(
                  (text) => (
                    <Typography
                      key={text}
                      variant="body2"
                      sx={{
                        color: "#777",
                        cursor: "pointer",
                        "&:hover": { color: "#fff" },
                      }}
                    >
                      {text}
                    </Typography>
                  )
                )}
              </Stack>
            </Grid>

            {/* 4. Contact Details */}
            <Grid item xs={12} sm={6} md={3}>
              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="subtitle1"
                  sx={{ mb: 2, fontWeight: "700" }}
                >
                  New York
                </Typography>
                <Typography variant="body2" sx={{ color: "#777" }}>
                  2464 Royal Ln. Mesa, New Jersey 45463
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="subtitle1"
                  sx={{ mb: 2, fontWeight: "700" }}
                >
                  London
                </Typography>
                <Typography variant="body2" sx={{ color: "#777" }}>
                  {" "}
                  (229) 555-0109{" "}
                </Typography>
                <Typography variant="body2" sx={{ color: "#777" }}>
                  {" "}
                  info@stayease.com{" "}
                </Typography>
              </Box>
            </Grid>
          </Grid>

          {/* Bottom Line */}
          <Box
            sx={{
              mt: 10,
              pt: 4,
              borderTop: "1px solid rgba(255,255,255,0.05)",
              textAlign: "center",
            }}
          >
            <Typography
              variant="caption"
              sx={{ color: "#444", letterSpacing: "1px" }}
            >
              © 2025 STAYEASE LUXURY GROUP. ALL RIGHTS RESERVED.
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
