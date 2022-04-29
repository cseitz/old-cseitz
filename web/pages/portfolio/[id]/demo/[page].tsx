import { Box, Paper, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useLayoutEffect, useMemo, useRef } from "react";

export default function DemoPage() {
    const router = useRouter();
    const { query, asPath } = router;
    const { id } = query;
    const page = decodeURIComponent('/' + (query?.page as string || ''));
    const ref = useRef<HTMLIFrameElement>(null);
    useEffect(() => {
        if (typeof window == 'undefined') return;
        const listener = function(evt) {
            if ('location' in evt.data) {
                const path: string = evt.data.location;
                if (page != path) {
                    router.replace(asPath, asPath.split('/demo')[0] + '/demo' + path, {
                        shallow: true
                    })
                }
            }
        }
        window.addEventListener('message', listener);
        return () => window.removeEventListener('message', listener);
    }, [asPath]);
    const doc = (typeof window == 'undefined') ? { domain: 'localhost' } : document;
    const iFrame = useMemo(() => {
        if (!router.isReady) return;
        return <iframe ref={ref} src={"http://" + id + ".portfolio." + doc.domain + page} style={{ height: '100%', width: '100%', border: 'none' }} />
    }, [doc?.domain, router.isReady]);
    return <Box sx={{ overflow: 'hidden' }}>
        <Box sx={{ position: 'fixed', height: '100vh', width: '100vw', top: '0px', left: '0px' }}>
            {iFrame}
        </Box>
        <Box sx={{ position: 'fixed', top: '10vh' }}>
            <Paper>
                <Typography>Portfolio Entry '{id}'</Typography>
                <Typography>Page: {page}</Typography>
            </Paper>
        </Box>
    </Box>
}