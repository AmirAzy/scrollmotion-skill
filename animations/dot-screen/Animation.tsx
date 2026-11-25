import React, { useState } from 'react';
import './styles.css';
export type DotScreenProps = { title?: string; className?: string; speed?: number };
export default function Animation({ title = "Dot Screen", className = '', speed=1 }: DotScreenProps) {
 const [running,setRunning]=useState(true);
 return <section className={`sm-motion sm-dot-screen ${className} ${running?'is-running':'is-paused'}`} style={{'--speed': `${Math.max(.2,Math.min(3,speed))}s`} as React.CSSProperties} aria-label={title}>
 <div className="sm-visual" aria-hidden="true">{Array.from({length:18},(_,i)=><i key={i} style={{'--i':i} as React.CSSProperties} />)}</div><div className="sm-copy"><span>ANIMATION / BACKGROUND</span><h2>{title}</h2><p>Halftone dots reveal a modulated field.</p><button type="button" onClick={()=>setRunning(!running)}>{running?'Pause motion':'Play motion'}</button></div></section>;
}
