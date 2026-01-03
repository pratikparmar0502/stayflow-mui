import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useContext } from "react";
import { MoodContext } from "../../context/MoodContext";
import {
  AllInclusive,
  Apartment,
  Castle,
  Facebook,
  Favorite,
  Forest,
  Instagram,
  Twitter,
  Waves,
  YouTube,
} from "@mui/icons-material";

const Footer = () => {
  const { mood, setMood } = useContext(MoodContext);

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

  return (
    <>
      {/* --- DYNAMIC MOOD FOOTER --- */}
      <Box
        component="footer"
        sx={{
          bgcolor: "#0a0a0a",
          background: "linear-gradient(180deg, #0a0a0a 0%, #050505 100%)",
          color: "#fff",
          pt: { xs: 10, md: 12 },
          pb: { xs: 8, md: 8 },
          position: "relative",
          overflow: "hidden",
          // mt: 8,
          borderTop: "1px solid rgba(255,255,255,0.08)",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)",
          },
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "1px",
            background: `linear-gradient(90deg, transparent, ${getMoodColor(
              mood
            )}30, transparent)`,
          },
        }}
      >
        {/* Animated Background Elements - Mood based colors */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
        radial-gradient(circle at 15% 20%, ${getMoodColor(
          mood
        )}05 0%, transparent 40%),
        radial-gradient(circle at 85% 80%, ${getMoodColor(
          mood
        )}03 0%, transparent 40%),
        radial-gradient(circle at 50% 50%, transparent 0%, #0a0a0a 70%)
      `,
            pointerEvents: "none",
            zIndex: 0,
          }}
        />

        {/* Floating Elements - Mood color */}
        {[1, 2, 3].map((i) => (
          <Box
            key={i}
            sx={{
              position: "absolute",
              width: i * 100,
              height: i * 100,
              borderRadius: "50%",
              background: `radial-gradient(circle, ${getMoodColor(
                mood
              )}02 0%, transparent 70%)`,
              top: `${20 * i}%`,
              left: `${10 * i}%`,
              filter: "blur(40px)",
              opacity: 0.1,
              zIndex: 0,
              animation: `float ${6 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 1}s`,
              "@keyframes float": {
                "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
                "50%": { transform: "translateY(-20px) translateX(20px)" },
              },
            }}
          />
        ))}

        <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
          <Grid
            container
            spacing={{ xs: 6, md: 8 }}
            justifyContent="space-between"
          >
            {/* Brand Section */}
            <Grid item xs={12} md={4}>
              <Box sx={{ mb: 5 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  {getLogoIcon()}
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: "900",
                      fontFamily: "'Playfair Display', serif",
                      letterSpacing: "-1px",
                      background: `linear-gradient(45deg, #fff, ${getMoodColor(
                        mood
                      )})`,
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                    }}
                  >
                    StayFlow
                  </Typography>
                </Box>

                <Typography
                  variant="body2"
                  sx={{
                    color: "#888",
                    mb: 4,
                    lineHeight: 1.8,
                    fontSize: "0.95rem",
                    maxWidth: "380px",
                  }}
                >
                  We don't just book stays, we craft experiences. Each property
                  is handpicked to match your mood, ensuring memories that last
                  a lifetime.
                </Typography>

                {/* Newsletter Subscription */}
                <Box sx={{ mb: 5 }}>
                  <Typography
                    variant="body2"
                    sx={{ color: "#aaa", mb: 2, fontWeight: "500" }}
                  >
                    Join our exclusive travel community
                  </Typography>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    <TextField
                      placeholder="Your email address"
                      size="small"
                      variant="outlined"
                      sx={{
                        flex: 1,
                        "& .MuiOutlinedInput-root": {
                          bgcolor: "rgba(255,255,255,0.05)",
                          color: "#fff",
                          border: "1px solid rgba(255,255,255,0.1)",
                          borderRadius: "10px",
                          fontSize: "0.9rem",
                          transition: "all 0.3s ease",
                          "&:hover": {
                            borderColor: `${getMoodColor(mood)}50`,
                          },
                          "&.Mui-focused": {
                            borderColor: getMoodColor(mood),
                            boxShadow: `0 0 0 2px ${getMoodColor(mood)}20`,
                          },
                        },
                        "& .MuiInputBase-input::placeholder": {
                          color: "#666",
                        },
                      }}
                    />
                    <Button
                      variant="contained"
                      size="small"
                      sx={{
                        bgcolor: getMoodColor(mood),
                        color: "#fff",
                        px: 3,
                        borderRadius: "10px",
                        fontWeight: "bold",
                        textTransform: "none",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          bgcolor: getMoodColor(mood),
                          filter: "brightness(1.2)",
                          transform: "translateY(-2px)",
                          boxShadow: `0 8px 25px ${getMoodColor(mood)}50`,
                        },
                      }}
                    >
                      Join
                    </Button>
                  </Box>
                </Box>

                {/* Social Links - Mood color on hover */}
                <Stack direction="row" spacing={2}>
                  {[
                    { icon: <Twitter />, name: "Twitter" },
                    { icon: <Instagram />, name: "Instagram" },
                    { icon: <Facebook />, name: "Facebook" },
                    { icon: <YouTube />, name: "YouTube" },
                  ].map((social, index) => (
                    <Box
                      key={index}
                      sx={{
                        position: "relative",
                        "&:hover .social-tooltip": {
                          opacity: 1,
                          transform: "translateY(0)",
                        },
                      }}
                    >
                      <IconButton
                        component="a"
                        href="https://twitter.com/stayflow"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                          border: "1px solid rgba(255,255,255,0.1)",
                          color: "#888",
                          transition: "all 0.4s ease",
                          bgcolor: "rgba(255,255,255,0.03)",
                          "&:hover": {
                            bgcolor: getMoodColor(mood),
                            borderColor: getMoodColor(mood),
                            transform: "translateY(-4px) scale(1.1)",
                            color: "#fff",
                            boxShadow: `0 8px 20px ${getMoodColor(mood)}40`,
                          },
                        }}
                      >
                        {social.icon}
                      </IconButton>
                      <Box
                        className="social-tooltip"
                        sx={{
                          position: "absolute",
                          bottom: "100%",
                          left: "50%",
                          transform: "translateX(-50%) translateY(10px)",
                          bgcolor: "#111",
                          color: "#fff",
                          px: 2,
                          py: 1,
                          borderRadius: "6px",
                          fontSize: "0.75rem",
                          whiteSpace: "nowrap",
                          opacity: 0,
                          transition: "all 0.3s ease",
                          mb: 1,
                          border: `1px solid ${getMoodColor(mood)}30`,
                          "&::after": {
                            content: '""',
                            position: "absolute",
                            top: "100%",
                            left: "50%",
                            transform: "translateX(-50%)",
                            border: "4px solid transparent",
                            borderTopColor: "#111",
                          },
                        }}
                      >
                        Follow on {social.name}
                      </Box>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Grid>

            {/* Quick Links Grids - Hover with mood color */}
            {[
              {
                title: "MOODS",
                items: [
                  "Nature Retreats",
                  "Urban Escapes",
                  "Ocean Views",
                  "Romantic Stays",
                  "Royal Heritage",
                ],
              },
              {
                title: "SERVICES",
                items: [
                  "Concierge",
                  "Airport Transfers",
                  "Private Chef",
                  "Spa & Wellness",
                  "Event Planning",
                ],
              },
              {
                title: "COMPANY",
                items: [
                  "About Us",
                  "Careers",
                  "Press",
                  "Sustainability",
                  "Investors",
                ],
              },
            ].map((section, idx) => (
              <Grid item xs={6} md={2.5} key={section.title}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    mb: 4,
                    fontWeight: "700",
                    color: "#fff",
                    textTransform: "uppercase",
                    fontSize: "0.8rem",
                    letterSpacing: "1px",
                    position: "relative",
                    pb: 2,
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "40px",
                      height: "2px",
                      background: `linear-gradient(90deg, ${getMoodColor(
                        mood
                      )}, transparent)`,
                      transition: "all 0.3s ease",
                    },
                    "&:hover::after": {
                      width: "60px",
                      background: `linear-gradient(90deg, ${getMoodColor(
                        mood
                      )}, ${getMoodColor(mood)}80)`,
                    },
                  }}
                >
                  {section.title}
                </Typography>
                <Stack spacing={2.5}>
                  {section.items.map((item) => (
                    <Box
                      key={item}
                      sx={{
                        position: "relative",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          transform: "translateX(8px)",
                          "& .link-text": {
                            color: getMoodColor(mood),
                          },
                          "& .link-arrow": {
                            opacity: 1,
                            transform: "translateX(0)",
                            color: getMoodColor(mood),
                          },
                        },
                      }}
                      onClick={() => {
                        alert(`${item} page is coming soon! 🚀`);
                      }}
                    >
                      <Typography
                        component="a"
                        href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                        onClick={(e) => e.preventDefault()}
                        variant="body2"
                        className="link-text"
                        sx={{
                          color: "#888",
                          fontWeight: "400",
                          fontSize: "0.9rem",
                          display: "flex",
                          textDecoration: "none",
                          alignItems: "center",
                          transition: "all 0.3s ease",
                        }}
                      >
                        <Box
                          className="link-arrow"
                          sx={{
                            opacity: 0,
                            transform: "translateX(-5px)",
                            transition: "all 0.3s ease",
                            mr: 1,
                          }}
                        >
                          →
                        </Box>
                        {item}
                      </Typography>
                    </Box>
                  ))}
                </Stack>
              </Grid>
            ))}
          </Grid>

          {/* Awards & Recognition - Mood color hover */}
          {/* <Box
            sx={{
              mt: 10,
              pt: 5,
              borderTop: "1px solid rgba(255,255,255,0.05)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography
              variant="caption"
              sx={{ color: "#666", mb: 3, letterSpacing: "2px" }}
            >
              AWARD-WINNING SERVICE
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: 4,
                mb: 6,
              }}
            >
              {[
                { label: "Best Luxury Platform 2024", icon: "🏆" },
                { label: "Travelers' Choice", icon: "⭐" },
                { label: "5-Star Service", icon: "✨" },
                { label: "Sustainable Travel", icon: "🌿" },
              ].map((award) => (
                <Box
                  key={award.label}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    p: 2,
                    borderRadius: "12px",
                    "&:hover": {
                      transform: "translateY(-5px)",
                      bgcolor: `${getMoodColor(mood)}10`,
                      border: `1px solid ${getMoodColor(mood)}20`,
                      "& .award-icon": {
                        transform: "scale(1.2)",
                        filter: `drop-shadow(0 0 8px ${getMoodColor(mood)}40)`,
                      },
                      "& .award-label": {
                        color: getMoodColor(mood),
                      },
                    },
                  }}
                >
                  <Typography
                    variant="h4"
                    className="award-icon"
                    sx={{ transition: "all 0.3s ease" }}
                  >
                    {award.icon}
                  </Typography>
                  <Typography
                    variant="caption"
                    className="award-label"
                    sx={{
                      color: "#888",
                      maxWidth: "120px",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {award.label}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box> */}

          {/* Bottom Bar - Mood color hover */}
          <Box
            sx={{
              pt: 4,
              borderTop: "1px solid rgba(255,255,255,0.05)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: { xs: "column", md: "row" },
              gap: 3,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                color: "#666",
                fontSize: "0.9rem",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              © 2026 StayFlow. All rights reserved.
              <Box
                component="span"
                sx={{
                  color: getMoodColor(mood),
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  "&:hover": {
                    filter: "brightness(1.3)",
                    textShadow: `0 0 10px ${getMoodColor(mood)}40`,
                  },
                }}
              >
                Crafted with ❤️
              </Box>
              for travelers worldwide.
            </Typography>

            <Stack direction="row" spacing={3} alignItems="center">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (item) => (
                  <Box key={item} sx={{ position: "relative" }}>
                    <Typography
                      component="a"
                      href={`/${item.toLowerCase().replace(/\s+/g, "-")}`}
                      onClick={(e) => {
                        e.preventDefault();
                        alert(
                          `${item} page is under development. Coming soon! 🚀`
                        );
                      }}
                      variant="body2"
                      sx={{
                        color: "#888",
                        cursor: "pointer",
                        textDecoration: "none",
                        transition: "all 0.3s ease",
                        position: "relative",
                        "&:hover": {
                          color: getMoodColor(mood),
                          transform: "translateY(-2px)",
                          textDecoration: "none",
                          "&::after": {
                            width: "100%",
                          },
                        },
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          bottom: -2,
                          left: 0,
                          width: "0%",
                          height: "1px",
                          background: getMoodColor(mood),
                          transition: "width 0.3s ease",
                        },
                      }}
                    >
                      {item}
                    </Typography>
                  </Box>
                )
              )}
            </Stack>
          </Box>

          {/* Back to Top Button - Mood color */}
          {/* <Box
            sx={{
              position: "absolute",
              right: 0,
              top: 0,
              transform: "translateY(-50%)",
              mr: { xs: 2, md: 0 },
            }}
          >
            <IconButton
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              sx={{
                bgcolor: getMoodColor(mood),
                color: "#fff",
                border: "3px solid #0a0a0a",
                width: "48px",
                height: "48px",
                transition: "all 0.4s ease",
                position: "relative",
                overflow: "hidden",
                "&:hover": {
                  bgcolor: "#fff",
                  color: getMoodColor(mood),
                  transform: "translateY(-5px)",
                  boxShadow: `0 10px 30px ${getMoodColor(mood)}60`,
                  "&::before": {
                    transform: "translateX(100%)",
                  },
                },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(45deg, transparent, rgba(255,255,255,0.2), transparent)",
                  transform: "translateX(-100%)",
                  transition: "transform 0.6s ease",
                },
              }}
            >
              ↑
            </IconButton>
          </Box> */}
        </Container>
      </Box>
    </>
  );
};

export default Footer;
