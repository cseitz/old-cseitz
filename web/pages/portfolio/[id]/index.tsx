import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";
import PortfolioPage from "..";

export default PortfolioPage;

export function PortfolioView(props: { id: string }) {
    const { id } = props;
    return <Box>
        <Typography>Portfolio Entry '{id}'</Typography>
    </Box>
}