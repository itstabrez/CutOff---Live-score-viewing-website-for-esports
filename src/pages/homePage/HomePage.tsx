import { useState } from "react";
import {
    Box,
    Typography,
    Tabs,
    Tab,
    Card,
    CardContent,
    CardMedia,
    Grid,
    Button,
} from "@mui/material";

const HomePage = () => {
    const [selectedTab, setSelectedTab] = useState(0);

    // Mock match data
    const tournaments = [
        {
            id: 1,
            type: "Official",
            name: ["Battleground Mobile Showdown"],
            score: "Starts: 2 Oct, 9:30 AM",
            status: "Upcoming",
        },
        {
            id: 1,
            type: "Third Party",
            name: ["Battleground Master Series"],
            score: "Starts: 2 Oct, 9:30 AM",
            status: "Upcoming",
        },
        {
            id: 1,
            type: "Official",
            name: ["Battleground India Series"],
            score: "Starts: 2 Oct, 9:30 AM",
            status: "Upcoming",
        },
    ];

    // Mock blogs/videos
    const blogs = [
        {
            id: 1,
            title: "USA Cricket files for bankruptcy",
            description:
                "Minutes before their hearing against ACE, USA Cricket filed for bankruptcy.",
            image:
                "https://www.cricbuzz.com/a/img/v1/600x400/i1/cXXXX/usa-cricket.jpg", // Replace with actual
            link: "#",
        },
        {
            id: 2,
            title: "Afghanistan tour of Zimbabwe",
            description:
                "Afghanistan to tour Zimbabwe for one-off Test and T20s this winter.",
            image: "https://placehold.co/600x400",
            link: "#",
        },
    ];

    return (
        <Box sx={{ minHeight: "100vh", bgcolor: "#f9f9f9" }}>
            {/* TOP NAVIGATION TABS */}
            <Tabs
                value={selectedTab}
                onChange={(e, val) => setSelectedTab(val)}
                variant="scrollable"
                scrollButtons="auto"
                sx={{
                    bgcolor: "#3f3f3fff",
                    color: "white",
                    "& .MuiTab-root": {
                        color: "white",
                        fontWeight: "bold",
                    },
                    "& .Mui-selected": {
                        color: "#ff9800 !important",
                    },
                    "& .MuiTabs-indicator": {
                        backgroundColor: "#ff9800",
                    },
                }}
            >
                {tournaments.map((tournament, index) => (
                    <Tab
                        key={tournament.id}
                        label={`${tournament.name} (${tournament.type})`}
                        sx={{ color: "white", fontWeight: "bold", maxWidth: '800px', paddingX: '30px' }}
                    />
                ))}
            </Tabs>

            {/* SELECTED MATCH CARD */}
            <Box sx={{ p: 3 }}>
                <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                    <CardContent>
                        <Typography variant="h6" fontWeight="bold">
                            {tournaments[selectedTab].name}
                            ({tournaments[selectedTab].type})
                        </Typography>
                        <Typography variant="body1" color="text.secondary" mt={1}>
                            {tournaments[selectedTab].score}
                        </Typography>
                        <Typography variant="body2" color="primary" mt={1}>
                            {tournaments[selectedTab].status}
                        </Typography>
                        <Box mt={2}>
                            <Button variant="contained" sx={{ mr: 2 }}>
                                Points Table
                            </Button>
                            <Button variant="outlined">Schedule</Button>
                        </Box>
                    </CardContent>
                </Card>
            </Box>

            {/* BLOGS / VIDEOS SECTION */}
            <Box sx={{ p: 3 }}>
                <Typography variant="h5" gutterBottom fontWeight="bold">
                    Latest Blogs & Videos
                </Typography>
                <Grid container spacing={3}>
                    {blogs.map((blog: any) => (
                        <Grid size={{ xs: 12, md: 6 }} key={blog.id}>
                            <Card sx={{ display: "flex", borderRadius: 2, boxShadow: 2 }}>
                                <CardMedia
                                    component="img"
                                    sx={{ width: 160 }}
                                    image={blog.image}
                                    alt={blog.title}
                                />
                                <Box sx={{ display: "flex", flexDirection: "column" }}>
                                    <CardContent>
                                        <Typography variant="h6">{blog.title}</Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{ mb: 1 }}
                                        >
                                            {blog.description}
                                        </Typography>
                                        <Button size="small" href={blog.link}>
                                            Read More
                                        </Button>
                                    </CardContent>
                                </Box>
                            </Card>
                        </Grid>
                    ))}

                    {/* Example of an embedded YouTube video */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <Card sx={{ borderRadius: 2, boxShadow: 2 }}>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    🎥 Match Highlights
                                </Typography>
                                <Box
                                    sx={{
                                        position: "relative",
                                        paddingBottom: "56.25%",
                                        height: 0,
                                    }}
                                >
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                        title="YouTube video"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        style={{ position: "absolute", top: 0, left: 0 }}
                                    />
                                </Box>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default HomePage;
