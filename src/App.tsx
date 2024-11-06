import { Box, Container, Flex, Grid, Link, Theme } from "@radix-ui/themes";
import { ContactSection } from "./sections/Contact";
import { Details } from "./sections/Details";
import { About } from "./sections/About";
import { Skills } from "./sections/Skills";
import { NavBreadCrumb } from "./components/NavBreadCrumb";
import { Experience } from "./sections/Experience";
import { Footer } from "./components/Footer";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

function App() {
    return (
        <>
            <Theme
                appearance="dark"
                accentColor="iris"
                grayColor="mauve"
                panelBackground="translucent"
                className="p-6"
            >
                <Container>
                    <Grid
                        columns={{
                            initial: "1",
                            md: "300px auto",
                        }}
                        gap="9"
                    >
                        <Flex
                            className="lg:max-w-72 lg:sticky lg:top-11 lg:place-self-auto"
                            style={{ height: "80vh" }}
                            direction="column"
                            justify={{
                                initial: "center",
                                md: "between",
                            }}
                        >
                            <Flex direction="column" gap="7">
                                <Details />
                                <NavBreadCrumb />
                            </Flex>
                            <Flex
                                justify={{
                                    initial: "center",
                                    md: "start",
                                }}
                                gap="3"
                            >
                                <Link
                                    href="https://www.linkedin.com/in/jesse-fentress"
                                    target="_blank"
                                    className="text-gray-500 hover:text-slate-200"
                                >
                                    <LinkedInLogoIcon className="media-icon hover:text-white" />
                                </Link>
                                <Link
                                    href="https://github.com/JesseFentress"
                                    target="_blank"
                                    className="text-gray-500 hover:text-slate-200"
                                >
                                    <GitHubLogoIcon className="media-icon" />
                                </Link>
                            </Flex>
                        </Flex>
                        <Box>
                            <About />
                            <Experience />
                            <Skills />
                            <ContactSection />
                            <Footer />
                        </Box>
                    </Grid>
                </Container>
            </Theme>
        </>
    );
}

export default App;
