export const FogShader = {
  uniforms: {
    uTime: { value: 0 },
    uIntensity: { value: 0.45 },
    uColor: { value: [0.89, 0.04, 0.08] },
  },
  vertexShader: /* glsl */`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  fragmentShader: /* glsl */`
    varying vec2 vUv;
    uniform float uTime;
    uniform float uIntensity;
    uniform vec3 uColor;

    // Simple fbm
    float hash(vec2 p){return fract(sin(dot(p, vec2(127.1,311.7))) * 43758.5453123);} 
    float noise(in vec2 p){
      vec2 i = floor(p);
      vec2 f = fract(p);
      float a = hash(i);
      float b = hash(i + vec2(1.0, 0.0));
      float c = hash(i + vec2(0.0, 1.0));
      float d = hash(i + vec2(1.0, 1.0));
      vec2 u = f*f*(3.0-2.0*f);
      return mix(a, b, u.x) + (c - a)* u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
    }
    float fbm(vec2 p){
      float t = 0.0;
      float a = 0.5;
      for(int i=0;i<5;i++){
        t += a * noise(p);
        p *= 2.0; a *= 0.5;
      }
      return t;
    }

    void main(){
      float n = fbm(vUv * 4.0 + vec2(0.0, -uTime*0.03));
      float fog = smoothstep(0.4, 1.0, n) * uIntensity;
      vec3 color = mix(vec3(0.0), uColor, fog);
      // subtle RGB split
      float r = fog;
      float g = fbm(vUv * 4.0 + vec2(0.005, -uTime*0.03));
      float b = fbm(vUv * 4.0 + vec2(-0.005, -uTime*0.03));
      gl_FragColor = vec4(color.r * r, color.g * g, color.b * b, fog);
    }
  `
}
