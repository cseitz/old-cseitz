import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { PortfolioView } from "./[id]";

export default function PortfolioPage() {
    const router = useRouter();
    const { id } = router.query;
    return <Box>
        <Typography>Portfolio Entries</Typography>
        {id && <PortfolioView id={id as string} />}
    </Box>
}