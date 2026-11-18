import React, { useEffect } from 'react';
import { AuroraText } from './AuroraText';
import { ArrowRight, Compass } from 'lucide-react';

interface WelcomeScreenProps {
  onComplete: () => void;
}

const DISPLAY_DELAY_MS = 6000;

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
        {/* Top small badge */}
        <div className="welcome-header-brand">
          <div className="welcome-badge-pill">
            <Compass size={14} className="welcome-badge-icon" />
            <span>Campus Venue Navigator</span>
          </div>
        </div>

        {/* Hero Conference Presentation - exact match to conference website */}
        <div className="welcome-hero-content">
          <div className="welcome-title-wrapper">
            <AuroraText className="welcome-aurora-title font-gambetta font-bold" speed={2}>
              ICAIDIET'26
            </AuroraText>
          </div>

          <div className="welcome-details font-libre">
            <h1 className="welcome-conf-title">
              <span className="block">International Conference on AI-Driven Innovation</span>
              <span className="block mt-1">in Engineering and Technology</span>
            </h1>

            <div className="welcome-on-label">
              On
            </div>

            <div className="welcome-dates">
              20<sup>th</sup> & 21<sup>st</sup> November 2026
            </div>

            <div className="welcome-mode">
              (Hybrid Mode)
            </div>

            <div className="welcome-venue-text">
              SNS - AI Campus
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="welcome-actions">
          <button className="primary-btn" onClick={onComplete}>
            <span>Start Campus Navigation</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeScreen;
