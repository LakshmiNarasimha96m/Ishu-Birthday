from pathlib import Path

for i in range(1, 16):
    path = Path(f"images/photo{i}.jpg")
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900">
  <rect width="1200" height="900" fill="#130d26"/>
  <rect x="40" y="40" width="1120" height="820" rx="34" fill="url(#g)" stroke="#ffffff33" stroke-width="4"/>
  <circle cx="310" cy="310" r="140" fill="#ffffff22"/>
  <circle cx="890" cy="255" r="118" fill="#ffd98a33"/>
  <path d="M250 710c70-140 220-205 350-190 140 15 227 127 330 155" stroke="#ffffff66" stroke-width="8" fill="none" stroke-linecap="round"/>
  <text x="600" y="470" font-family="Segoe UI, Arial" font-size="56" text-anchor="middle" fill="#fef7ff">Memory {i}</text>
  <text x="600" y="535" font-family="Segoe UI, Arial" font-size="28" text-anchor="middle" fill="#d7c3ff">Beautiful childhood moment</text>
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#7d4cff"/>
      <stop offset="50%" stop-color="#f08dc4"/>
      <stop offset="100%" stop-color="#7ec9ff"/>
    </linearGradient>
  </defs>
</svg>'''
    path.write_text(svg, encoding="utf-8")
