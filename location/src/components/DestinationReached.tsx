import React from 'react';
import { Building2, CheckCircle, ArrowRight, RotateCcw, MapPin, Sparkles } from 'lucide-react';

interface DestinationReachedProps {
  onRestart: () => void;
}

export const DestinationReached: React.FC<DestinationReachedProps> = ({ onRestart }) => {
  return (
    <div className="screen-container destination-screen">
      <div className="arrival-hero">
        <div className="arrival-badge">
          <CheckCircle size={16} />
          <span>Arrived at Venue</span>
        </div>

        <div className="arrival-image-frame">
          <img
            src="/snsct-ai.jfif"
            alt="SNS College of Technology AI Campus"
            className="arrival-image"
          />
          <div className="arrival-overlay">
            <span className="arrival-tag">SNS AI Campus</span>
          </div>
        </div>

        <h1 className="arrival-title">SNS College of Technology</h1>
        <p className="arrival-sub">AI Campus • ICAIDIET'26 Conference Venue</p>
      </div>

      <div className="indoor-instructions-card">
        <div className="indoor-card-header">
          <Building2 size={20} className="indoor-icon" />
          <h2>Welcome to ICAIDIET'26!</h2>
        </div>

        <p className="indoor-instruction-text">
          You have arrived at the main AI Campus building. Please proceed through the main entrance opposite the Saibaba Temple.
        </p>

        <div className="indoor-guidance-steps">
          <div className="guidance-step">
            <div className="step-num">1</div>
            <div>
              <strong>Registration Desk</strong>
              <p>Located on the Ground Floor reception lobby to collect your badge, conference kit, and food coupons.</p>
            </div>
          </div>

          <div className="guidance-step">
            <div className="step-num">2</div>
            <div>
              <strong>Session Presentation Halls</strong>
              <p>Keynote sessions and presentation tracks are hosted across Blocks A &amp; B (Floors I, II &amp; III).</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-action">
        <button className="primary-btn" onClick={onRestart}>
          <RotateCcw size={16} />
          <span>Restart Route Navigation</span>
        </button>

        <a
          href="https://icaidiet26.tech"
          target="_blank"
          rel="noopener noreferrer"
          className="external-site-link"
        >
          <span>Open Main Conference Portal</span>
          <ArrowRight size={14} />
        </a>
      </div>
    </div>
  );
};

export default DestinationReached;
