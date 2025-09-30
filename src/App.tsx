import React, { useState, useEffect } from 'react';
import './reset.css';
import './App.css';

function App() {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const sidebarRef = React.useRef<HTMLElement>(null);

    const sidebarWidth = 250;
    const closedOffset = 6;

    useEffect(() => {
        if (sidebarRef.current) {
            const sidebarHeight = sidebarRef.current.offsetHeight;
            const scaleX = (sidebarWidth - closedOffset) / sidebarWidth;
            const scaleY = (sidebarHeight - closedOffset) / sidebarHeight;

            const root = document.documentElement;
            root.style.setProperty('--sidebar-scale-x', scaleX.toString());
            root.style.setProperty('--sidebar-scale-y', scaleY.toString());
        }
    }, [sidebarOpen]);

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Enter') {
                setSidebarOpen(!sidebarOpen);
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [sidebarOpen]);

    return (
        <div className={`App ${!sidebarOpen ? 'sidebar-closed' : ''}`}>
            <aside className="sidebar" ref={sidebarRef}>
                <h2>Navigation</h2>
                <ul>
                    <li><a href="#dashboard">Dashboard</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#tasks">Tasks</a></li>
                    <li><a href="#team">Team</a></li>
                    <li><a href="#reports">Reports</a></li>
                    <li><a href="#settings">Settings</a></li>
                </ul>
            </aside>
            <div className="main-content">
                <header className="App-header">
                    <button 
                        className="hamburger-btn"
                        onClick={() => setSidebarOpen(!sidebarOpen)}
                    >
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </button>
                    <h1>Dashboard</h1>
                </header>
                <main className="content">
                    <div className="stats">
                        <div className="stat-card">
                            <div className="stat-number">24</div>
                            <div className="stat-label">Active Projects</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">156</div>
                            <div className="stat-label">Tasks Completed</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">12</div>
                            <div className="stat-label">Team Members</div>
                        </div>
                        <div className="stat-card">
                            <div className="stat-number">98%</div>
                            <div className="stat-label">Success Rate</div>
                        </div>
                    </div>
                    
                    <div className="card">
                        <h3>Recent Activity</h3>
                        <p>Your team has completed 15 tasks this week. The project "Website Redesign" is 75% complete and on track for the deadline. New features have been deployed to the staging environment.</p>
                    </div>
                    
                    <div className="card">
                        <h3>Upcoming Deadlines</h3>
                        <p>Mobile App Release - Due in 3 days<br/>
                        Client Presentation - Due in 1 week<br/>
                        Q4 Planning Meeting - Due in 2 weeks</p>
                    </div>
                    
                    <div className="card">
                        <h3>System Status</h3>
                        <p>All systems are operational. Last backup completed successfully at 2:30 AM. Server performance is optimal with 99.9% uptime this month.</p>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;
