import { DownloadIcon, EnvelopeClosedIcon, GitHubLogoIcon, LinkedInLogoIcon, MobileIcon, SewingPinFilledIcon } from "@radix-ui/react-icons";
import { Avatar, Badge, Button, Flex, Grid, Heading, Link, Text } from "@radix-ui/themes";

export const Details: React.FC = () => {
    return (
        <aside className="mt-5 p-5 rounded place-self-center">
            <Grid
                columns={{
                    initial: "1",
                    xs: "2",
                    sm: "2",
                    md: "1",
                    lg: "1"
                }}
                gap="6"
            >
                <Flex direction="column" align="center" gap="3">
                    <Avatar
                        className="-translate-y-9"
                        src="src/assets/headshot.jpg"
                        fallback="Jesse Fentress Headshot"
                        size="9"
                    />
                    <Heading as="h1">Jesse Fentress</Heading>
                    <Badge>Software Engineer</Badge>
                    <Flex gap="3">
                        <Link href="https://www.linkedin.com/in/jesse-fentress" target="_blank">
                            <LinkedInLogoIcon />
                        </Link>
                        <Link href="https://github.com/JesseFentress" target="_blank">
                            <GitHubLogoIcon />
                        </Link>
                    </Flex>
                </Flex>
                <Flex direction="column" gap="3" justify="center">
                    <Flex gap="2" align="baseline"> 
                        <SewingPinFilledIcon color="#fed1aad9" />
                        <Text>Denver, CO</Text>
                    </Flex>
                    <Link href="tel:215-791-4772" underline="none">
                        <Flex gap="2" align="center"> 
                            <MobileIcon color="#fed1aad9" />
                            <Text className="text-white">+1 (215) 791-4772</Text>
                        </Flex>
                    </Link>
                    <Link href="#contact" underline="none">
                        <Flex gap="2" align="center"> 
                            <EnvelopeClosedIcon />
                            <Text className="text-white">jesse.s.fentress@gmail.com</Text>
                        </Flex>
                    </Link>
                    <Button size="3" radius="large">
                        <DownloadIcon />
                        <Text wrap="nowrap">
                            Download Resume
                        </Text>
                    </Button>
                </Flex>
            </Grid>
        </aside>
    );
}