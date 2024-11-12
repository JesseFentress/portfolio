import { Box, Container, Flex, Grid, Theme } from "@radix-ui/themes";
import { ContactSection } from "./sections/Contact";
import { Details } from "./sections/Details";
import { About } from "./sections/About";
import { NavBreadCrumb } from "./components/NavBreadCrumb";
import { Experience } from "./sections/Experience";
import { Footer } from "./components/Footer";
import { Socials } from "./components/Socials";

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
                            <Socials />
                        </Flex>
                        <Box>
                            <About />
                            <Experience />
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
