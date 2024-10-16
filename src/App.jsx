import { AboutSection } from "./components/AboutSection"
import { BannerSection } from "./components/BannerSection"
import { CommentSection } from "./components/CommentSection"
import { CostSection } from "./components/CostSection"
import { FooterSection } from "./components/FooterSection"
import { HistorySection } from "./components/HistorySection"
import { Howsection } from "./components/HowSection"
import "./styles/index.scss"

function App() {

  return (
    <>
      <BannerSection />
      <AboutSection />
      <CommentSection />
      <Howsection />
      <CostSection />
      <HistorySection />
      <FooterSection />
    </>
  )
}

export default App
