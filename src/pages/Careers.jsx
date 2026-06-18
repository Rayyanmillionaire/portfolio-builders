import { useState } from "react";

import Hero from "../components/Hero";
import WhyJoinUs from "../components/WhyJoinUs";
import Culture from "../components/Culture";
import Benefits from "../components/Benefits";
import OpenPositions from "../components/OpenPositions";
import HiringProcess from "../components/HiringProcess";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ApplyModal from "../components/ApplyModal";

function Careers() {

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Navbar
        onApplyClick={() => setShowModal(true)}
      />

      <Hero />

      <WhyJoinUs />

      <Culture />

      <Benefits />

      <OpenPositions />

      <HiringProcess />

      <CTA
        onApplyClick={() => setShowModal(true)}
      />

      <Footer />

      <ApplyModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        position="General Application"
      />
    </>
  );
}

export default Careers;