import React, { useEffect, useState } from "react";
import {
    Box,
    Select,
    MenuItem,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Chip
} from "@mui/material";
import { dataLowerBracket, dataQuarterFinals, dataUpperBracket } from "../../constants/pointStandingBMSD/pointStandingConstants";

const rounds = ["Quarter Finals", "Upper Bracket", "Lower Bracket"];



export default function Scoreboard() {
    const [round, setRound] = useState(rounds[0]);
    const [data, setData] = useState(dataQuarterFinals);

    const handleRoundChange = (e: any) => {
        const value = e.target.value
        setRound(value)
        if (value === "Quarter Finals") {
            setData(dataQuarterFinals)
        } else if (value === "Upper Bracket") {
            setData(dataUpperBracket)
        } else if (value === "Lower Bracket") {
            setData(dataLowerBracket)
        }
    }
    return (
        <Box sx={{ p: 4, bgcolor: "#f5f7fa", minHeight: "100vh" }}>
            {/* Header */}
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
                <Typography variant="h4" fontWeight="bold" color="primary">
                    Points Table
                </Typography>
                <Select
                    value={round}
                    onChange={(e) => handleRoundChange(e)}
                    sx={{
                        bgcolor: "white",
                        borderRadius: 2,
                        px: 2,
                        boxShadow: 2,
                    }}
                >
                    {rounds.map((r) => (
                        <MenuItem key={r} value={r}>
                            {r}
                        </MenuItem>
                    ))}
                </Select>
            </Box>

            {/* Table */}
            <TableContainer component={Paper} sx={{ borderRadius: 3, boxShadow: 4 }}>
                <Table>
                    <TableHead>
                        <TableRow sx={{ bgcolor: "#1976d2" }}>
                            {["RANK", "TEAM NAME", "MATCHES", "WWCD", "POSITION", "FINISH", "OVERALL"].map((head) => (
                                <TableCell key={head} sx={{ color: "white", fontWeight: "bold" }}>
                                    {head}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.map((row) => (
                            <TableRow
                                key={row.rank}
                                hover
                                sx={{
                                    "&:nth-of-type(odd)": { bgcolor: "#f9f9f9" },
                                    "&:hover": { bgcolor: "#e3f2fd" },
                                    ...(row.rank <= 12 && { bgcolor: "#e8f5e9" }), // highlight top 12
                                }}
                            >
                                <TableCell>{row.rank}</TableCell>
                                <TableCell sx={{ fontWeight: "bold", display: "flex", alignItems: "center", justifyContent: 'space-between' }}>
                                    {row.team}
                                    {row.rank <= 12 && (
                                        <Chip label="Qualified" color="success" size="small" sx={{ fontWeight: "bold" }} />
                                    )}
                                </TableCell>
                                <TableCell>{row.matches}</TableCell>
                                <TableCell>{row.wwcd}</TableCell>
                                <TableCell>{row.position}</TableCell>
                                <TableCell>{row.finish}</TableCell>
                                <TableCell sx={{ fontWeight: "bold", color: "primary.main" }}>
                                    {row.overall}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
}
