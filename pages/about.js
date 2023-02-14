import AboutUs from "@/components/about/aboutus"
import Future from "@/components/about/future"
import Mission from "@/components/about/mission"
import Partners from "@/components/about/partners"
import Values from "@/components/about/values"

export default function About() {
  return (
    <>
      <div className="font-noto">
      <Mission />
      <Values />
      <AboutUs />
      <Future />
      <Partners />
      </div>
    </>
  )

}