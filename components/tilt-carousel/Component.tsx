import { useState, useEffect, useRef } from 'react';
import './styles.css';
export type TiltCarouselProps = { title?: string; className?: string };
export default function Component({ title = "Tilt Carousel", className = '' }: TiltCarouselProps) {
 const [active,setActive]=useState(0); const box=useRef<HTMLDivElement>(null);
 useEffect(()=>{ if(!box.current)return; const el=box.current; const onMove=(e:PointerEvent)=>{const r=el.getBoundingClientRect(); el.style.setProperty('--px',`${(e.clientX-r.left)/r.width*100}%`);el.style.setProperty('--py',`${(e.clientY-r.top)/r.height*100}%`);}; el.addEventListener('pointermove',onMove); return()=>el.removeEventListener('pointermove',onMove); },[]);
 return <section ref={box} className={`sm-card sm-tilt-carousel ${className}`} aria-label={title}>
  <div className="sm-kicker">SCROLLMOTION / INTERACTION</div><h2>{title}</h2><p>Pointer position gives the active card a restrained 3D tilt.</p>
  <div className="sm-stage" aria-live="polite">{[0,1,2].map((n)=><button type="button" key={n} aria-pressed={active===n} onClick={()=>setActive(n)} className={`sm-tile ${active===n?'is-active':''}`}><span>{['01','02','03'][n]}</span><b>{['Drift','Focus','Flow'][n]}</b></button>)}</div>
  <div className="sm-actions"><button type="button" onClick={()=>setActive((active+2)%3)} aria-label="Previous">←</button><span>{active+1} / 3</span><button type="button" onClick={()=>setActive((active+1)%3)} aria-label="Next">→</button></div>
 </section>;
}
