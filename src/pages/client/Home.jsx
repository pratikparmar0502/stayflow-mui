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

import { useContext } from "react";
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
  Chip,
  Stack,
  Divider,
  Box,
  Typography,
  Button,
  Container,
  TextField,
  InputAdornment,
} from "@mui/material";
import { LocationOn, CalendarMonth } from "@mui/icons-material";
import { MoodContext } from "../../context/MoodContext.jsx";
import { motion } from "framer-motion";

const Home = () => {
  const { mood } = useContext(MoodContext);

  const moodImages = {
    nature: natureHero,
    urban: urbanHero,
    ocean: oceanHero,
    romantic: romanticHero,
    royal: royalHero,
    default: defaultHero,
  };

  const hotelData = {
    nature: [
      {
        id: 1,
        name: "Whispering Pines Sanctuary",
        price: "4,500",
        img: nature1,
        loc: "Gulmarg, Kashmir",
        rating: 4.8,
      },
      {
        id: 2,
        name: "The Mist-Clad Valley Lodge",
        price: "3,200",
        img: nature2,
        loc: "Munnar, Kerala",
        rating: 4.5,
      },
      {
        id: 3,
        name: "Hidden Peak Eco-Retreat",
        price: "5,800",
        img: nature3,
        loc: "Kasol, Himachal",
        rating: 4.7,
      },
      {
        id: 4,
        name: "Wildflower Canyon Suites",
        price: "4,000",
        img: nature4,
        loc: "Dharamshala, India",
        rating: 4.3,
      },
      {
        id: 5,
        name: "The Alpine Shadow Resort",
        price: "6,200",
        img: nature5,
        loc: "Coorg, Karnataka",
        rating: 4.6,
      },
      {
        id: 6,
        name: "Cedar Creek Riverside Inn",
        price: "2,800",
        img: nature6,
        loc: "Rishikesh, Uttarakhand",
        rating: 4.4,
      },
    ],
    urban: [
      {
        id: 7,
        name: "The Onyx Skyscraper Hotel",
        price: "12,000",
        img: urban1,
        loc: "South Bombay, Mumbai",
        rating: 4.9,
      },
      {
        id: 8,
        name: "Luminary Plaza & Suites",
        price: "8,500",
        img: urban2,
        loc: "Cyber Hub, Gurgaon",
        rating: 4.2,
      },
      {
        id: 9,
        name: "The Velvet Metropolitan",
        price: "15,000",
        img: urban3,
        loc: "Indiranagar, Bangalore",
        rating: 4.6,
      },
      {
        id: 10,
        name: "Iron & Glass Urban Loft",
        price: "9,000",
        img: urban4,
        loc: "Banjara Hills, Hyderabad",
        rating: 4.1,
      },
      {
        id: 11,
        name: "Neon Horizon Boutique",
        price: "11,200",
        img: urban5,
        loc: "New Town, Kolkata",
        rating: 4.7,
      },
      {
        id: 12,
        name: "The Quartz Central Tower",
        price: "18,500",
        img: urban6,
        loc: "Downtown, Dubai",
        rating: 4.8,
      },
    ],
    ocean: [
      {
        id: 13,
        name: "Azure Horizon Beach Club",
        price: "18,000",
        img: ocean1,
        loc: "North Goa, India",
        rating: 4.7,
      },
      {
        id: 14,
        name: "The Coral Reef Overwater Villa",
        price: "14,500",
        img: ocean2,
        loc: "Havelock Island, Andaman",
        rating: 4.5,
      },
      {
        id: 15,
        name: "Saltwater Palms Resort",
        price: "9,000",
        img: ocean3,
        loc: "Varkala, Kerala",
        rating: 4.4,
      },
      {
        id: 16,
        name: "Turquoise Tide Haven",
        price: "25,000",
        img: ocean4,
        loc: "Maldives",
        rating: 4.9,
      },
      {
        id: 17,
        name: "Sand & Serenity Island Spa",
        price: "11,000",
        img: ocean5,
        loc: "Pondicherry, India",
        rating: 4.2,
      },
      {
        id: 18,
        name: "The Sapphire Bay Resort",
        price: "16,800",
        img: ocean6,
        loc: "Gokarna, Karnataka",
        rating: 4.6,
      },
    ],
    romantic: [
      {
        id: 19,
        name: "The Moonlit Rose Manor",
        price: "10,500",
        img: romantic1,
        loc: "Lake Pichola, Udaipur",
        rating: 4.9,
      },
      {
        id: 20,
        name: "Eternal Bloom Boutique Stay",
        price: "12,800",
        img: romantic2,
        loc: "Nainital, Uttarakhand",
        rating: 4.8,
      },
      {
        id: 21,
        name: "Stardust Honeymoon Suites",
        price: "8,200",
        img: romantic3,
        loc: "Dal Lake, Srinagar",
        rating: 4.6,
      },
      {
        id: 22,
        name: "The Velvet Heart Retreat",
        price: "9,500",
        img: romantic4,
        loc: "Ooty, Tamil Nadu",
        rating: 4.5,
      },
      {
        id: 23,
        name: "Secret Garden Lover's Inn",
        price: "14,000",
        img: romantic5,
        loc: "Alleppey, Kerala",
        rating: 4.7,
      },
      {
        id: 24,
        name: "Sunset Serenade Villas",
        price: "11,500",
        img: romantic6,
        loc: "Shimla, Himachal",
        rating: 4.4,
      },
    ],
    royal: [
      {
        id: 25,
        name: "The Golden Scepter Palace",
        price: "45,000",
        img: royal1,
        loc: "Jodhpur, Rajasthan",
        rating: 5.0,
      },
      {
        id: 26,
        name: "Imperial Heritage Mansion",
        price: "22,000",
        img: royal2,
        loc: "Udaipur, Rajasthan",
        rating: 4.8,
      },
      {
        id: 27,
        name: "Majestic Crown Regency",
        price: "30,000",
        img: royal3,
        loc: "Jaipur, Rajasthan",
        rating: 4.9,
      },
      {
        id: 28,
        name: "The Royal Kohinoor Estate",
        price: "18,000",
        img: royal4,
        loc: "Gwalior, Madhya Pradesh",
        rating: 4.6,
      },
      {
        id: 29,
        name: "Victoria’s Dynasty Suites",
        price: "28,500",
        img: royal5,
        loc: "Lucknow, Uttar Pradesh",
        rating: 4.7,
      },
      {
        id: 30,
        name: "Emerald Throne Heritage Hotel",
        price: "35,000",
        img: royal6,
        loc: "Mysore, Karnataka",
        rating: 4.8,
      },
    ],
  };

  const displayedHotels =
    mood === "default"
      ? [
          hotelData.nature[0],
          hotelData.urban[0],
          hotelData.ocean[0],
          hotelData.royal[0],
          hotelData.romantic[0],
          hotelData.urban[1],
        ]
      : hotelData[mood] || [];

  return (
    <Box>
      <Box
        sx={{
          height: "90vh",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${
            moodImages[mood] || moodImages.default
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "background-image 0.8s ease-in-out",
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: "center", color: "white" }}>
          <Typography
            variant="h2"
            fontWeight="900"
            gutterBottom
            sx={{ textShadow: "2px 2px 10px rgba(0,0,0,0.5)" }}
          >
            Find Your Perfect{" "}
            {mood === "default"
              ? "Dream"
              : mood.charAt(0).toUpperCase() + mood.slice(1)}{" "}
            Stay
          </Typography>
          <Typography variant="h5" sx={{ mb: 6, opacity: 0.9 }}>
            Book unique hotels and vibrant spaces around the world.
          </Typography>

          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "50px",
              p: 1,
              display: "flex",
              alignItems: "center",
              boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
              flexWrap: { xs: "wrap", md: "nowrap" },
              gap: 1,
            }}
          >
            <TextField
              fullWidth
              variant="standard"
              placeholder="Where are you going?"
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
            <TextField
              fullWidth
              variant="standard"
              placeholder="Dates"
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <CalendarMonth color="primary" />
                  </InputAdornment>
                ),
              }}
              sx={{ px: 2, borderLeft: { md: "1px solid #ddd" } }}
            />
            <Button
              variant="contained"
              size="large"
              sx={{
                borderRadius: "40px",
                px: 5,
                py: 1.5,
                textTransform: "none",
                minWidth: "150px",
              }}
            >
              Search
            </Button>
          </Box>
        </Container>
      </Box>

      <Container sx={{ py: 10 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          {mood === "default"
            ? "Trending Stays"
            : `Perfect ${
                mood.charAt(0).toUpperCase() + mood.slice(1)
              } Getaways`}
        </Typography>
        <Typography variant="body1" color="textSecondary" mb={5}>
          Handpicked spaces that match your current vibe.
        </Typography>

        <Grid container spacing={4} sx={{ width: "100%" }}>
          {displayedHotels.map((hotel, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={hotel.id}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ maxWidth: "100%", width: "350px", display: "flex" }}
              >
                <Card
                  sx={{
                    height: "100%",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    borderRadius: "24px",
                    overflow: "hidden",
                    boxShadow: "0px 10px 25px rgba(0,0,0,0.05)",
                    transition: "0.3s",
                    "&:hover": {
                      transform: "translateY(-12px)",
                      boxShadow: "0px 20px 40px rgba(0,0,0,0.12)",
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: "250px",
                      overflow: "hidden",
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={hotel.img}
                      alt={hotel.name}
                      sx={{
                        height: "100%",
                        width: "100%",
                        objectFit: "cover",
                        objectPosition: "center",
                        transition: "transform 0.5s ease-in-out",
                        "&:hover": {
                          transform: "scale(1.1)",
                        },
                      }}
                    />
                    <Chip
                      label={hotel.loc}
                      sx={{
                        position: "absolute",
                        top: 16,
                        left: 16,
                        zIndex: 2,
                        bgcolor: "rgba(255,255,255,0.9)",
                        fontWeight: "bold",
                        backdropFilter: "blur(5px)",
                      }}
                    />
                  </Box>
                  <CardContent sx={{ p: 3, flexGrow: 1 }}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="start"
                    >
                      <Typography variant="h6" fontWeight="bold">
                        {hotel.name}
                      </Typography>
                      <Typography variant="subtitle2" fontWeight="bold">
                        ⭐ {hotel.rating}
                      </Typography>
                    </Stack>
                    <Divider sx={{ my: 2 }} />
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Box>
                        <Typography
                          variant="h6"
                          color="primary"
                          fontWeight="800"
                        >
                          ₹ {hotel.price}
                        </Typography>
                        <Typography variant="caption" color="textSecondary">
                          per night
                        </Typography>
                      </Box>
                      <Button
                        variant="contained"
                        size="small"
                        sx={{
                          borderRadius: "10px",
                          textTransform: "none",
                          px: 3,
                        }}
                      >
                        Details
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Home;
