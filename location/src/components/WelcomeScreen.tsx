import React, { useEffect } from 'react';
import { ShinyText } from './ShinyText';
import { MapPin, ArrowRight } from 'lucide-react';

interface WelcomeScreenProps {
  onComplete: () => void;
}

const DISPLAY_DELAY_MS = 5500;

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, DISPLAY_DELAY_MS);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="screen-container welcome-screen">
      <div className="welcome-inner">
        {/* Top Branding */}
        <div className="welcome-header-brand">
          <img src="/SNSCT.png" alt="SNS College of Technology" className="welcome-logo" />
          <div className="welcome-tag">Venue Navigator</div>
        </div>

        {/* Conference Title Presentation */}
        <div className="welcome-hero-text">
          <p className="welcome-intro font-gambetta">Welcome to</p>

          <h1 className="welcome-main-title font-gambetta">
            <ShinyText
              text="ICAIDIET'26"
              speed={2.2}
              color="#0f172a"
              shineColor="#ffffff"
              spread={120}
              direction="left"
            />
          </h1>

          <p className="welcome-full-name">
            International Conference on AI Driven Innovation in Engineering and Technology
          </p>

          <div className="welcome-venue-pill">
            <MapPin size={15} className="venue-icon" />
            <span>SNS College of Technology • AI Campus</span>
          </div>
        </div>

        {/* Start Button */}
        <div className="welcome-actions">
          <button className="primary-btn pulse-glow" onClick={onComplete}>
            <span>Start Campus Navigation</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
