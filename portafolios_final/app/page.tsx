import Link from "next/link"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "../components/ui/card"
import ContactForm from '../components/ui/contactForm';


export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
        <div>
          <div className="text-3xl font-bold">Franco Wang Kuo</div>
          <div className="text-1xl font-bold">Software Engineering Student</div>
        </div>
        <nav className="flex gap-4">
          <Link href="#hero" className="hover:underline" prefetch={false}>
            Home
          </Link>
          <Link href="#about" className="hover:underline" prefetch={false}>
            About
          </Link>
          <Link href="#projects" className="hover:underline" prefetch={false}>
            Projects
          </Link>
          <Link href="#contact" className="hover:underline" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section id="hero" className="bg-muted py-20 px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to my Portfolio</h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Hi, I'm Franco Wang, a passionate software engineering student with strong expertise in Python and a proven track record in solving complex problems on HackerRank.
          </p>
        </section>
        <section id="about" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Academic History</h3>
                <ul className="space-y-4">
                  <li>
                    <h4 className="font-bold">Bachelor's in Software Engineering</h4>
                    <p className="text-muted-foreground">Universidad Cenfotec, 2022 - 2025</p>
                  </li>
                  <li>
                    <h4 className="font-bold">Technical Degree in Software Engineering</h4>
                    <p className="text-muted-foreground">Universidad Cenfotec, 2022 - 2023</p>
                  </li>
                  <li>
                    <h4 className="font-bold">Bachelor's in Business Management</h4>
                    <p className="text-muted-foreground">Universidad de Costa Rica, 2021</p>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4">Professional Experience</h3>
                <ul className="space-y-4">
                  <li>
                    <h4 className="font-bold">El Bazar de las Sorpresas</h4>
                    <p className="text-muted-foreground">Developer and Designer | February - March 2022</p>
                    <p>Engineered a modern website offering an immersive user experience, incorporating advanced features for enhanced functionality.</p>
                  </li>
                  <li>
                    <h4 className="font-bold">Family Medicine</h4>
                    <p className="text-muted-foreground">Developer and Designer | September - December 2022</p>
                    <p>Designed and implemented an online platform for medical exam transactions, integrating PayPal payments and comprehensive post-appointment data management.</p>
                  </li>
                  <li>
                    <h4 className="font-bold">Dungeons Master</h4>
                    <p className="text-muted-foreground">Developer and Technical Artist | September - December 2022</p>
                    <p>Developed a battle and puzzle game set in Middle-earth, allowing users to create, play, and share custom levels using various design patterns.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="bg-muted py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>El Bazar de las Sorpresas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>A modern website offering an immersive user experience, incorporating advanced features for enhanced functionality.</p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="https://github.com/SalgadoFab/AppLibreria"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    View Project
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Family Medicine</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>An online platform for medical exam transactions, integrating PayPal payments and comprehensive post-appointment data management.</p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="https://dev.azure.com/KathySega/_git/Family%20Medicine"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    View Project
                  </Link>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Dungeons Master</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>A battle and puzzle game set in Middle-earth, allowing users to create, play, and share custom levels using various design patterns.</p>
                </CardContent>
                <CardFooter>
                  <Link
                    href="https://Franco-Wang@bitbucket.org/ignaciozelada23/juegoproyecto.git"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                    prefetch={false}
                  >
                    View Project
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        <ContactForm/>
      </main>
      <footer className="bg-primary text-primary-foreground py-6 px-6 text-sm">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <p>&copy; 2024 Franco Wang Kuo. All rights reserved.</p>
          <div className="flex justify-center gap-4">
            <Link href="https://www.linkedin.com/in/franco-w-69681b211" prefetch={false}>
              LinkedIn
            </Link>
            <Link href="https://github.com/wang-pixel-2003" prefetch={false}>
              GitHub
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
