import React, { useState } from 'react';
import './styles.css';
export type ChromeOozeProps = { title?: string; className?: string; speed?: number };
export default function Animation({ title = "Chrome Ooze", className = '', speed=1 }: ChromeOozeProps) {
 const [running,setRunning]=useState(true);
 return <section className={`sm-motion sm-chrome-ooze ${className} ${running?'is-running':'is-paused'}`} style={{'--speed': `${Math.max(.2,Math.min(3,speed))}s`} as React.CSSProperties} aria-label={title}>
 <div className="sm-visual" aria-hidden="true">{Array.from({length:18},(_,i)=><i key={i} style={{'--i':i} as React.CSSProperties} />)}</div><div className="sm-copy"><span>ANIMATION / BACKGROUND</span><h2>{title}</h2><p>Reflective merging fluid forms.</p><button type="button" onClick={()=>setRunning(!running)}>{running?'Pause motion':'Play motion'}</button></div></section>;
}
