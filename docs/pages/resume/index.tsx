import { BusinessCenter, GitHub, Home, LinkedIn, Mail, Phone, Public } from '@mui/icons-material';
import { Box, Button, Chip, Divider, Grid, Link, Typography } from '@mui/material';
import { isArray } from 'lodash';
import { Page } from 'ui/components/page';


const website = 'https://cseitz.dev';
const portfolio = website + '/portfolios';

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
        return <Grid container sx={{ mb: 1, mt: -2 }}>
            <Grid item xs={6}>
                <Link href={website} sx={{ textDecoration: 'none', color: 'inherit' }}>
                    <Typography variant="h4">{name}</Typography>
                </Link>
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
            <Awards />
            <Skills />
            <Box sx={{ mt: 3 }}>
                <Typography sx={{ textAlign: 'center' }}>
                    <Link href="https://cseitz.dev/portfolio" sx={{ textDecoration: 'none', color: 'inherit' }}>
                        <Button endIcon={<BusinessCenter />} sx={{ px: 2, m: 0, textTransform: 'none' }}>View Portfolio</Button>
                    </Link>
                </Typography>
                <Typography sx={{ textAlign: 'center' }}>
                    <Link href="https://cseitz.dev" sx={{ textDecoration: 'none', color: 'inherit' }}>
                        <Button endIcon={<Public />} sx={{ px: 2, m: 0, textTransform: 'none' }}>View Personal Website</Button>
                    </Link>
                </Typography>

            </Box>
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
    const about = [
        `Hello! I'm a jack-of-all-trades programmer, web developer, and aspiring solutions architect.` + ' ' +
        `I started coding around early middle school by building games on roblox.com. Since then I've racked up experience in many different languages, tools, frameworks, and more!`,
        /*`I prefer to build projects using React, TypeScript, and Next.js; always using MongoDB as my database of choice.
        Nevertheless, I've used tons of different technologies over the years and my preferences are always changing!`*/
        /*`I specialize in being able to tackle whatever needs to get done. No matter what hurdles are in the way, 
        I'll find a way to get it done efficiently while navigating around any obstacles.`*/

    ]
    return <Section title="About">
        {about.map((content, i) => <Box key={i} sx={{ mb: 1 }} component={i == about.length - 1 ? 'span' : undefined}>
            <Typography variant='subtitle2' component={"span"}>{content.trim()}</Typography>
        </Box>)}
        <Typography variant="subtitle2" component="span">
            <Link href="https://linkedin.com/in/seitzc" sx={{ textDecoration: 'none', color: 'inherit', pl: 2 }}>
                <Button endIcon={<LinkedIn />} sx={{ p: 0, m: 0, textTransform: 'none', mt: '-3px' }}>Read more on LinkedIn</Button>
            </Link>
        </Typography>
    </Section>
}

function Education() {
    const degree = 'Bachelors of Science, Computer Science';
    const place = 'Kent State University, Kent, Ohio';
    const gpa = '3.78'; //'Magna Cum Laude'; //'3.78';
    const when = 'Fall 2022';
    const classes: string[][] = [
        [
            'Software Engineering',
            'Operating Systems',
            'Data Structures',
        ],
        [
            'Game Engine Concepts',
            'Cryptology',
            'Web Programming'
        ],
        [
            'Cloud Systems Computing',
            'Algorithms',
            'Calculus II',
        ]
    ]
    return <Section title="Academics">
        <Grid container>
            <Grid item xs={9.5}>
                <Typography>{degree}</Typography>
            </Grid>
            <Grid item xs={2.5} sx={{ textAlign: 'right', pr: 1.5 }}>
                <Typography variant='subtitle2' sx={{ lineHeight: '24px' }}>{when}</Typography>
            </Grid>
            <Grid item xs={7}>
                <Typography variant='subtitle2'>{place}</Typography>
            </Grid>
            <Grid item xs={5} sx={{ textAlign: 'right', pr: 1.5, mt: '-2px' }}>
                <Typography variant='caption'>{gpa} GPA</Typography>
            </Grid>
        </Grid>

        <Typography sx={{ mt: 0.5, /*ml: 0.5*/ }}>
            {classes.map(entries => (
                <Typography variant='caption'>
                    <div dangerouslySetInnerHTML={{ __html: entries.join('	&ndash; ') }} />
                </Typography>
            ))}
        </Typography>

    </Section>
}

function Experience() {
    const experiences: {
        title: string
        subtitle: string
        when: string[] | string
        href?: string,
        about?: string,
    }[] = [
            {
                title: 'Cloud Infrastructure Administrator',
                subtitle: 'Hyland Software, Co-Op',
                when: ['May 2021', 'Aug 2021'], //'Summer 2021',
                href: 'https://hyland.com',
                about: `Designed software to automatically document and generate reports on Hyland's R&D virtual environments through VMWare vSphere API.`,
            },
            {
                title: 'President & Development Lead',
                subtitle: 'HacKSU, Kent Hack Enough',
                when: ['May 2020', 'Apr 2022'],
                href: 'https://hacksu.com',
                about: `Student Club President of HacKSU, Kent State University's computer science club. 
                Facilitated club processes, organized annual hackathon, lead website development, hosted instructional events every tuesday at club meetings.`
            }
        ]
    return <Section title="Experience">
        {experiences.map(entry => {
            const { title, subtitle, when, href, about } = entry;
            const result = <Grid container sx={{ mb: 1 }}>
                <Grid item xs={7.35}>
                    <Typography>{title}</Typography>
                </Grid>
                <Grid item xs={12 - 7.35} sx={{ textAlign: 'right', pr: 1.5 }}>
                    <Typography variant="subtitle2" sx={{ textAlign: 'right', lineHeight: '24px' }}>
                        <div dangerouslySetInnerHTML={{ __html: isArray(when) ? when.join('	&ndash; ') : when }} />
                    </Typography>
                </Grid>
                <Grid item xs={7}>
                    {href ? <Link href={href} sx={{ textDecoration: 'none', color: 'inherit' }}>
                        <Typography variant="subtitle2">{subtitle}</Typography>
                    </Link> : <Typography variant="subtitle2">{subtitle}</Typography>}
                </Grid>
                <Grid item xs={12 - 7} sx={{ textAlign: 'right', pr: 1.5 }}>

                </Grid>
                {about && <Grid item xs={12} sx={{ /*pl: 0.5,*/ pr: 1.5, pt: 0.5, lineHeight: '12px' }}>
                    <Typography variant="caption" sx={{}}>{about}</Typography>
                </Grid>}
            </Grid>
            // if (href) return <Link href={href}>
            //     {result}
            // </Link>;
            return result;
        })}
    </Section>
}

function Projects() {
    const projects: {
        title: string
        subtitle?: string
        about?: string
        href?: string
        when: string
    }[] = [
            {
                title: 'Capstone Project',
                when: 'May 2022',
                href: 'https://github.com/cseitz/capstone',
                about: `Lead team project on developing unique software to implement features as per stakeholder request.
                Documented project with diagrams and detailed writeups, ensured all deadlines were met,
                assigned tasks to team members, assisted team members in completion of tasks,
                performed code reviews, facilitated nearly all group processes.`
            },
            {
                title: 'Software Engineering Project',
                when: 'May 2021',
                href: 'https://github.com/cseitz/SoftwareEngineering-Team-TGMGPA',
                about: `Lead team project as Scrum Master. 
                Implemented capabilities as per instructor request by allocating work via the Scrum process.
                Hosted on AWS Lightsail.`
            },
            {
                title: 'HacKSU Website',
                when: 'May 2021',
                href: `${portfolio}/hacksu/2021/`, //'https://github.com/hacksu/hacksu-2021',
                about: `Designed and developed to replace the previous website.
                Built using Vue.JS and hosted on the DigitalOcean cloud.`
            },
            {
                title: 'Kent Hack Enough',
                when: 'Oct 2020',
                href: `${portfolio}/khe/2020/`,
                about: `Designed and implemented major stylistic changes for KHE 2020 as per the event's theme.
                Maintained application throughout the event. Ensured all event processes were completed successfully.
                Hosted opening and closing ceremonies. Facilitated project judging.`
            },
        ];
    return <Section title="Projects">
        {projects.map(entry => {
            const { title, subtitle, about, href, when } = entry;

            const result = <Grid container>
                <Grid item xs={8}>
                    <Typography>{title}</Typography>
                </Grid>
                <Grid item xs={12 - 8} sx={{ textAlign: 'right', pr: 1.5 }}>
                    <Typography variant="subtitle2">{when}</Typography>
                </Grid>
                {subtitle && <Grid item xs={12}>
                    <Typography variant="subtitle2">{subtitle}</Typography>
                </Grid>}
            </Grid>;

            return <Box sx={{ mb: 1 }}>
                {href ? <Link href={href} sx={{ textDecoration: 'none', color: 'inherit' }}>
                    {result}
                </Link> : result}
                {about && <Box sx={{ pr: 1.5, pt: 0.5, lineHeight: '12px' }}>
                    <Typography variant="caption">{about}</Typography>
                </Box>}
            </Box>
        })}
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
            string[],
            string,
        ][]
    } = {
        'Experience': [
            ['Website Design', colors.green, website],
            ['Cloud Servers', colors.yellow, 'https://digitalocean.com'],
            ['Project Management', colors.pink, 'https://github.com/cseitz/capstone'],
            ['Virtualization', colors.blue, 'https://docker.com'],
        ],
        'Software & Frameworks': [
            ['React', colors.cyan, 'https://reactjs.org/'],
            ['Vue', colors.green, 'https://vuejs.org/'],
            ['Electron', colors.grey, 'https://www.electronjs.org/'],
            ['Git', colors.orange, 'https://git-scm.com/'],
            ['AWS', colors.yellow, 'https://aws.amazon.com/'],
            ['MongoDB', colors.green, 'https://www.mongodb.com/'],
            ['MySQL', colors.blue, 'https://www.mysql.com/'],
            ['NGINX', colors.green, 'https://www.nginx.com/'],
            ['Linux', colors.orange, 'https://ubuntu.com/'],
        ],
        'Programming Languages': [
            ['TypeScript', colors.cyan, 'https://www.typescriptlang.org/'],
            ['JavaScript', colors.yellow, 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'],
            ['HTML5', colors.orange, 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5'],
            ['CSS', colors.blue, 'https://developer.mozilla.org/en-US/docs/Web/CSS'],
            ['Sass', colors.pink, 'https://sass-lang.com/'],
            ['Lua', colors.indigo, 'https://www.lua.org/'],
            ['C++', colors.blue, 'https://www.cplusplus.com/'],
        ],
    }
    const doLinks = true;
    const hexToRgb = hex =>
        hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
            , (m, r, g, b) => '#' + r + r + g + g + b + b)
            .substring(1).match(/.{2}/g)
            .map(x => parseInt(x, 16))
    return <Section title="Skills">
        {Object.entries(sections).map(([title, items]) => <Box key={title} sx={{ mb: 2 }}>
            <Typography variant='subtitle2' sx={{ mb: 0.5, pl: 0.5 }}>{title}</Typography>
            <Grid container>
                {items.map(([name, [backgroundColor, color], href]) => (
                    <Chip label={name} sx={{
                        backgroundColor: 'rgba(' + [...hexToRgb(backgroundColor), 0.25].join(', ') + ')',
                        color,
                        m: 0.23,
                        fontWeight: 200,
                        cursor: doLinks ? 'pointer' : undefined,
                    }} component={doLinks ? 'a' : undefined} href={doLinks ? href : undefined} />
                ))}
            </Grid>
        </Box>)}
    </Section>
}


function Awards() {
    const awards: {
        title: string;
        when: string;
        subtitle?: string;
    }[] = [
            {
                title: 'Honors College Scholar',
                subtitle: 'Kent State University',
                when: '2019 - 2022'
            },
            {
                title: 'Choose Ohio First',
                subtitle: 'Academic Scholarship',
                when: '2020 - 2022'
            },
            {
                title: 'Outstanding Presentation',
                subtitle: 'Choose Ohio First',
                when: '2021 & 2022'
            },
            /*{
                title: 'SkillsUSA State Champion',
                subtitle: 'Website Design, High School',
                when: '2018 & 2019'
            },*/
            {
                title: 'SkillsUSA National Finalist',
                subtitle: '4th Place, Website Design',
                when: '2018 & 2019'
            }
        ]
    return <Section title="Honors & Awards">
        {awards.map(award => {
            const { title, subtitle, when } = award;
            return <Grid container sx={{ mb: 1 }}>
                <Grid item xs={8}>
                    <Typography variant="subtitle2">{title}</Typography>
                </Grid>
                <Grid item xs={12 - 8} sx={{ textAlign: 'right', lineHeight: '24px' }}>
                    <Typography variant="subtitle2" sx={{ pr: 1.5 }}>
                        <div dangerouslySetInnerHTML={{ __html: when.split('-').join('&ndash;') }} />
                    </Typography>
                </Grid>
                <Grid item xs={12} sx={{ pt: 0, lineHeight: '12px' }}>
                    <Typography variant="caption">{subtitle}</Typography>
                </Grid>
            </Grid>
        })}
    </Section>
}