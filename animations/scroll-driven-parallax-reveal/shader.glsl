// Optional original fragment-shader starting point; no third-party shader source.
#ifdef GL_ES
precision mediump float;
#endif
uniform vec2 u_resolution;
uniform float u_time;
void main(){
 vec2 uv=gl_FragCoord.xy/u_resolution;
 float wave=0.5+0.5*sin(uv.x*8.0+sin(uv.y*6.0+u_time)*1.4+u_time*0.35);
 vec3 a=vec3(0.04,0.10,0.20), b=vec3(0.25,0.72,0.72);
 gl_FragColor=vec4(mix(a,b,wave),1.0);
}
