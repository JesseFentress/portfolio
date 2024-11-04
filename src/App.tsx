import { Box, Container, Flex, Grid, Theme } from '@radix-ui/themes';
// import './App.css'
import { ContactSection } from './sections/Contact';
import { Details } from './sections/Details';
import { About } from './sections/About';
import { Skills } from './sections/Skills';
import { NavBreadCrumb } from './components/NavBreadCrumb';
import { useState } from 'react';
import { Experience } from './sections/Experience';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
    <Theme appearance="dark" accentColor="iris" grayColor="mauve" panelBackground="translucent" className='p-6'>
      <Container>
        <Grid
          columns={{
            initial: "1",
            md: "auto auto"
          }}
          gap="6"
        >
          <Flex 
            className="lg:max-w-72 lg:sticky lg:top-11 lg:place-self-auto h-max"
            direction="column"
            gap="7"
          >
            <Details />
            <NavBreadCrumb />
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
  )
}

export default App
