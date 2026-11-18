import React, { useState, useRef, useEffect } from 'react';
import { departments } from '../data/departments';
import { Search, MapPin, ChevronDown, Check } from 'lucide-react';

interface DepartmentSelectorProps {
  onSelect: (departmentId: string) => void;
}

export const DepartmentSelector: React.FC<DepartmentSelectorProps> = ({ onSelect }) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const selectedDepartment = departments.find(d => d.id === selectedId);

  const filteredDepartments = departments.filter(d =>
    d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    d.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    d.rooms.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleStart = () => {
    if (selectedId) {
      onSelect(selectedId);
    }
  };

  return (
    <div className="screen-container">
      <div className="header-badge">
        <MapPin size={14} />
        <span>ICAIDIET'26 Presentation Venues</span>
      </div>

      <h1 className="screen-heading">Select Your Venue</h1>
      <p className="screen-subheading">
        Choose your conference presentation department or hall to start live campus guidance.
      </p>

      <div className="selector-wrapper" ref={dropdownRef}>
        {/* Trigger Button */}
        <div
          className={`dropdown-trigger ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="dropdown-trigger-content">
            <span className="dropdown-label">Destination</span>
            <span className="dropdown-value">
              {selectedDepartment ? selectedDepartment.name : "Choose Department / Hall"}
            </span>
          </div>
          <ChevronDown
            size={20}
            className={`dropdown-chevron ${isOpen ? 'rotate' : ''}`}
          />
        </div>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="dropdown-menu">
            <div className="dropdown-search">
              <Search size={16} className="search-icon" />
              <input
                type="text"
                placeholder="Search department, hall or room..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
              />
            </div>

            <div className="dropdown-list">
              {filteredDepartments.map((dept) => {
                const isSelected = selectedId === dept.id;
                return (
                  <div
                    key={dept.id}
                    className={`dropdown-item ${isSelected ? 'selected' : ''}`}
                    onClick={() => {
                      setSelectedId(dept.id);
                      setIsOpen(false);
                      setSearchQuery('');
                    }}
                  >
                    <div className="item-main">
                      <span className="item-title">{dept.name}</span>
                      <div className="item-badges">
                        <span className="badge badge-subtle">{dept.floor}</span>
                        <span className="badge badge-subtle">{dept.block}</span>
                        <span className="badge badge-rooms">Rooms: {dept.rooms}</span>
                      </div>
                    </div>
                    {isSelected && <Check size={18} className="item-check" />}
                  </div>
                );
              })}
              {filteredDepartments.length === 0 && (
                <div className="dropdown-empty">No departments matching your search</div>
              )}
            </div>
          </div>
        )}
      </div>

      {selectedDepartment && (
        <div className="selected-summary-card">
          <div className="summary-row">
            <span className="summary-label">Floor</span>
            <span className="summary-val">{selectedDepartment.floor}</span>
          </div>
          <div className="summary-row">
            <span className="summary-label">Block</span>
            <span className="summary-val">{selectedDepartment.block}</span>
          </div>
          <div className="summary-row">
            <span className="summary-label">Rooms</span>
            <span className="summary-val">{selectedDepartment.rooms}</span>
          </div>
        </div>
      )}

      <div className="bottom-action">
        <button
          className="primary-btn"
          onClick={handleStart}
          disabled={!selectedId}
        >
          Guide Me to Venue &rarr;
        </button>
      </div>
    </div>
  );
};

export default DepartmentSelector;
