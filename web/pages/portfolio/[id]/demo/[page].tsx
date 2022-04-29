import { Box, Typography } from "@mui/material";
import { useRouter } from "next/router";

export default function DemoPage() {
    const router = useRouter();
    const { query } = router;
    const { id } = query;
    const page = decodeURIComponent('/' + (query?.page as string || ''));
    return <Box>
        <Typography>Portfolio Entry '{id}'</Typography>
        <Typography>Page: {page}</Typography>
    </Box>
}