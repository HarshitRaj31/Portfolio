import { useState } from 'react';
import { Terminal, Server, Cpu, HardDrive, Network, ArrowUpRight, ShieldCheck, Activity } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import './CloudSystems.css';

export default function CloudSystems({ cloudSection }) {
  const [selectedNode, setSelectedNode] = useState(1);

  const architectureNodes = [
    {
      id: 0,
      name: "Edge Gateway",
      role: "TLS Ingress & HTTP/3 Proxy",
      tech: "Linux iptables · Go Proxy",
      status: "HEALTHY",
      ping: "4ms",
      details: "Inspects incoming client requests, handles encryption termination, and load-balances across active private node listeners."
    },
    {
      id: 1,
      name: "Kamui Daemon",
      role: "Go Master Orchestration Core",
      tech: "Go (Goroutines) · IPC Channels",
      status: "RUNNING",
      ping: "1ms",
      details: "Custom lightweight control plane written in Go. Dispatches task workloads, monitors heartbeat signals, and reconciles desired state."
    },
    {
      id: 2,
      name: "Docker Pods",
      role: "Isolated Application Containers",
      tech: "Docker API · cgroups · namespaces",
      status: "4 CONTAINERS",
      ping: "2ms",
      details: "Sandboxed microservice execution environments provisioned dynamically using Unix domain sockets and Docker engine hooks."
    },
    {
      id: 3,
      name: "Linux Host Kernel",
      role: "Bare-Metal SysAdmin Layer",
      tech: "Linux · Systemd · Shell",
      status: "KERNEL 6.8",
      ping: "0ms",
      details: "Direct hardware utilization on available commodity components. Configured with systemd units, resource limits, and log rotations."
    }
  ];

  return (
    <section id="systems" className="section cloud-systems-section">
      <div className="app-container">
        
        {/* Section Header */}
        <div className="section-header-editorial">
          <div className="section-tag">
            <span className="section-tag-dot"></span>
            <span>04 // BEYOND THE BROWSER</span>
          </div>
          <h2 className="section-headline-editorial">
            <span>NOT JUST INTERFACES.</span><br />
            <span className="text-electric-blue">SYSTEMS</span>{' '}
            <span className="text-outlined">THAT POWER THEM.</span>
          </h2>
          <p className="section-lead">
            {cloudSection.intro}
          </p>
        </div>

        {/* Central Architecture Interactive Display */}
        <div className="systems-dual-grid">
          
          {/* Left Column: Interactive Cloud Architecture Topology */}
          <div className="architecture-stage-box">
            <div className="stage-top-meta">
              <span className="mono text-cyan" style={{ fontSize: '0.74rem' }}>
                LIVE TOPOLOGY // KAMUI CLUSTER SIMULATOR
              </span>
              <span className="live-status-pill mono">
                <span className="pulse-dot"></span>
                <span>MESH ACTIVE</span>
              </span>
            </div>

            {/* Interactive SVG Node Diagram */}
            <div className="topology-svg-wrapper">
              <svg className="topology-svg" viewBox="0 0 540 260" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Interconnecting Link Lines */}
                <line x1="70" y1="130" x2="200" y2="130" stroke="rgba(54, 217, 245, 0.4)" strokeWidth="2" strokeDasharray="6 6" className="flow-dash" />
                <line x1="200" y1="130" x2="340" y2="70" stroke="rgba(71, 123, 255, 0.45)" strokeWidth="2" strokeDasharray="6 6" className="flow-dash" />
                <line x1="200" y1="130" x2="340" y2="190" stroke="rgba(71, 123, 255, 0.45)" strokeWidth="2" strokeDasharray="6 6" className="flow-dash" />
                <line x1="340" y1="70" x2="470" y2="130" stroke="rgba(54, 217, 245, 0.3)" strokeWidth="1.5" strokeDasharray="4 4" />
                <line x1="340" y1="190" x2="470" y2="130" stroke="rgba(54, 217, 245, 0.3)" strokeWidth="1.5" strokeDasharray="4 4" />

                {/* Animated Particle Packets */}
                <circle cx="135" cy="130" r="3" fill="#36D9F5" className="packet-anim" />
                <circle cx="270" cy="100" r="3" fill="#477BFF" className="packet-anim delay-1" />
                <circle cx="270" cy="160" r="3" fill="#477BFF" className="packet-anim delay-2" />
              </svg>

              {/* Node Hotspots */}
              <div className="topology-nodes-overlay">
                {architectureNodes.map((node) => (
                  <button
                    key={node.id}
                    className={`node-interactive-btn node-pos-${node.id} ${selectedNode === node.id ? 'active' : ''}`}
                    onClick={() => setSelectedNode(node.id)}
                    aria-label={`Inspect ${node.name}`}
                  >
                    <div className="node-icon-ring">
                      {node.id === 0 && <Network size={16} />}
                      {node.id === 1 && <Cpu size={16} />}
                      {node.id === 2 && <Server size={16} />}
                      {node.id === 3 && <HardDrive size={16} />}
                    </div>
                    <span className="node-btn-title mono">{node.name}</span>
                    <span className="node-btn-metric mono">{node.status}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Node Telemetry Card */}
            <div className="telemetry-teleprinter mono">
              <div className="tele-header">
                <span className="text-cyan">NODE INSPECTOR // {architectureNodes[selectedNode].name}</span>
                <span className="text-muted">LATENCY: {architectureNodes[selectedNode].ping}</span>
              </div>
              <div className="tele-body">
                <p className="tele-role"><strong>Role:</strong> {architectureNodes[selectedNode].role}</p>
                <p className="tele-tech"><strong>Stack:</strong> {architectureNodes[selectedNode].tech}</p>
                <p className="tele-desc">{architectureNodes[selectedNode].details}</p>
              </div>
            </div>

          </div>

          {/* Right Column: Kamui Cloud Deep-Dive Spotlight */}
          <div className="kamui-spotlight-card">
            <div className="kamui-badge mono">
              <Terminal size={14} className="text-cyan" />
              <span>PRIMARY INFRASTRUCTURE FOCUS</span>
            </div>

            <h3 className="kamui-title font-editorial">
              Kamui Cloud
            </h3>
            <p className="kamui-subtitle font-display">
              {cloudSection.kamuiHighlight.subtitle}
            </p>
            <p className="kamui-narrative">
              {cloudSection.kamuiHighlight.description}
            </p>

            {/* Technical Pillars Grid */}
            <div className="kamui-pillars-grid">
              {cloudSection.kamuiHighlight.pillars.map((pillar, i) => (
                <div key={i} className="pillar-cell">
                  <span className="pillar-index mono text-cyan">0{i + 1}</span>
                  <h4 className="pillar-heading font-display">{pillar.title}</h4>
                  <p className="pillar-text">{pillar.desc}</p>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="kamui-cta-wrap">
              <a
                href={cloudSection.kamuiHighlight.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                <GithubIcon size={16} />
                <span>Explore Kamui Repository</span>
                <ArrowUpRight size={15} />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
