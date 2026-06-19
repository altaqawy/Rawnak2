export function StrategyCard() {
  return (
    <div className="strategy-card reveal delay-1">
      <h3>Strategy. Data. Growth.</h3>
      <p>We combine data, creativity, and technology to design strategies that deliver measurable results and long-term growth.</p>
      <div className="strategy-stats">
        <div><strong>120+</strong><span>Projects Delivered</span></div>
        <div><strong>98%</strong><span>Client Satisfaction</span></div>
        <div><strong>4.9/5</strong><span>Avg Rating</span></div>
      </div>
      <div className="avatar-row"><span /><span /><span /><span /><span /><b>+</b></div>
      <div className="bars">
        <label>Strategy <i style={{ "--w": "92%" } as React.CSSProperties} /><em>92%</em></label>
        <label>Design <i style={{ "--w": "88%" } as React.CSSProperties} /><em>88%</em></label>
        <label>Development <i style={{ "--w": "95%" } as React.CSSProperties} /><em>95%</em></label>
        <label>Automation <i style={{ "--w": "90%" } as React.CSSProperties} /><em>90%</em></label>
      </div>
    </div>
  );
}
