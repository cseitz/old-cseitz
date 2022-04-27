import { Box, BoxProps } from "@mui/material";

export function Page(props: { children } & BoxProps) {
    const { children, ...rest } = props;
    return <Box className="page" {...rest}>
        {children}
    </Box>
}