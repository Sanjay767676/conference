import React from 'react';
import { ArrowRight, Compass } from 'lucide-react';

interface WelcomeScreenProps {
  onComplete: () => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onComplete }) => {
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
            <h1 className="welcome-bold-title font-libre font-bold">
              ICAIDIET'26
            </h1>
          </div>

          <div className="welcome-details font-libre">
            <div className="welcome-conf-title">
              <span className="block">International Conference on AI-Driven Innovation</span>
              <span className="block mt-1">in Engineering and Technology</span>
            </div>

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
