import { GitHub, Home, LinkedIn, Mail, Phone } from '@mui/icons-material';
import { Box, Chip, Divider, Grid, Link, Typography } from '@mui/material';
import { Page } from 'ui/components/page';


export default function Resume() {
    return <Page sx={{}}>
        <Header />
        <Body />
    </Page>
}


function Header() {
    const name = 'Chris Seitz';
    const email = 'cseitz.work@gmail.com';
    const variant: number = 1;
    if (variant == 1)
        return <Grid container sx={{ mb: 1 }}>
            <Grid item xs={6}>
                <Typography variant="h4">{name}</Typography>
                <Link href={"mailto:" + email} style={{ textDecoration: 'none' }}>
                    <Typography variant='h6'>{email}</Typography>
                </Link>
            </Grid>
            <Grid item xs={6} sx={{ textAlign: 'right' }}>
                {/* <LinkChip icon={Mail} label="cseitz.work@gmail.com" href="mailto:cseitz.work@gmail.com" /> */}
                <LinkChip icon={Phone} label="(440) 226-1337" href="tel:440-226-1337" />
                <LinkChip icon={GitHub} label="github.com/cseitz" href="https://github.com/cseitz" />
                <LinkChip icon={Home} label="38380 Rogers Rd, Willoughby Hills, OH" href="" />
                {/* <LinkChip icon={LinkedIn} label="linkedin.com/in/seitzc" href="https://www.linkedin.com/in/seitzc" /> */}

            </Grid>
        </Grid>;
    if (variant == 2)
        return <Grid container sx={{ mb: 1 }}>
            <Grid item xs={6}>
                <Typography variant="h4">{name}</Typography>
                <LinkChip icon={Home} label="38380 Rogers Rd, Willoughby Hills, OH" />
                <LinkChip icon={Mail} label="cseitz.work@gmail.com" href="mailto:cseitz.work@gmail.com" />
                <br />
                <LinkChip icon={Phone} label="(440) 226-1337" href="tel:440-226-1337" />
                <br />
                <LinkChip icon={GitHub} label="github.com/cseitz" href="https://github.com/cseitz" />
            </Grid>
            <Grid item xs={6} sx={{ textAlign: 'right' }}>

                {/* <LinkChip icon={LinkedIn} label="linkedin.com/in/seitzc" href="https://www.linkedin.com/in/seitzc" /> */}

            </Grid>
        </Grid>;
}

function LinkChip(props: {
    href?: string
    label: string
    icon: any
}) {
    const { href, label, icon } = props;
    const Icon = icon;
    return <Chip icon={<Icon sx={{ fontSize: '1.125rem', padding: 0.5, boxSizing: 'content-box' }} />}
        component={href ? 'a' : undefined} label={label} href={href} sx={{ background: 'none', cursor: 'pointer' }} />
}


function Body() {
    const median = 7;
    return <Grid container>
        <Grid item xs={median} sx={{ pr: 1 }}>
            <Education />
            <Experience />
            <Projects />
        </Grid>
        <Grid item xs={12 - median} sx={{ pl: 1 }}>
            <About />
            <Skills />
        </Grid>
    </Grid>
}


function Section(props: {
    title: string
    children: any
}) {
    const {
        title,
        children,
        ...rest
    } = props;
    return <Box sx={{ mb: 1 }}>
        <Typography variant="h6">{title}</Typography>
        <Divider orientation='horizontal' />
        <Box sx={{ mt: 0.5 }}>
            {children}
        </Box>
    </Box>
}


function About() {
    return <Section title="About">
        about me
    </Section>
}

function Education() {
    const degree = 'Bachelors of Science, Computer Science';
    const place = 'Kent State University, Kent, Ohio';
    const gpa = '3.78';
    const when = 'Fall 2022';
    return <Section title="Academics">
        <Grid container>
            <Grid item xs={9.5}>
                <Typography>{degree}</Typography>
            </Grid>
            <Grid item xs={2.5} sx={{ textAlign: 'right', pr: 1.5 }}>
                <Typography variant='subtitle2' sx={{ lineHeight: '24px' }}>{when}</Typography>
            </Grid>
            <Grid item xs={8}>
                <Typography variant='subtitle2'>{place}</Typography>
            </Grid>
            <Grid item xs={4} sx={{ textAlign: 'right', pr: 1.5 }}>

                <Typography variant='caption'>{gpa} GPA</Typography>
            </Grid>
        </Grid>



    </Section>
}

function Experience() {
    return <Section title="Experience">
        work experience
    </Section>
}

function Projects() {
    return <Section title="Projects">
        some projects
    </Section>
}

function Skills() {
    const text = 'black';
    const colors = {
        'orange': ['#ff7043', text],
        'red': ['#ef5350', text],
        'blue': ['#42a5f5', text],
        'yellow': ['#ffd54f', text],
        'pink': ['#f06292', text],
        'indigo': ['#7986cb', text],
        'cyan': ['#4fc3f7', text],
        'green': ['#81c784', text],
        'grey': ['#90a4ae', text],
    }
    const sections: {
        [key: string]: [
            string,
            string[]
        ][]
    } = {
        'Programming Languages': [
            ['TypeScript', colors.cyan],
            ['JavaScript', colors.yellow],
            ['HTML5', colors.orange],
            ['CSS', colors.blue],
            ['Sass', colors.pink],
            ['Lua', colors.indigo],
            ['C++', colors.blue],
        ],
        'Software & Frameworks': [
            ['React', colors.cyan],
            ['Vue', colors.green],
            ['Electron', colors.grey],
            ['Git', colors.orange],
            ['AWS', colors.yellow],
            ['MongoDB', colors.green],
            ['MySQL', colors.blue],
            ['NGINX', colors.green],
            ['Linux', colors.orange],

        ],
    }
    const hexToRgb = hex =>
        hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
            , (m, r, g, b) => '#' + r + r + g + g + b + b)
            .substring(1).match(/.{2}/g)
            .map(x => parseInt(x, 16))
    return <Section title="Skills">
        {Object.entries(sections).map(([title, items]) => <Box key={title} sx={{ mb: 2 }}>
            <Typography variant='subtitle2' sx={{ mb: 0.5, pl: 0.5 }}>{title}</Typography>
            <Grid container>
                {items.map(([name, [backgroundColor, color]]) => (
                    <Chip label={name} sx={{ backgroundColor: 'rgba(' + [...hexToRgb(backgroundColor), 0.25].join(', ') + ')', color, m: 0.23, fontWeight: 200 }} />
                ))}
            </Grid>
        </Box>)}
    </Section>
}

