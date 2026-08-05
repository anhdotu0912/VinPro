import re

filepath = r'd:\VinPro\nutrition-agent-web\src\app\patient\onboarding\page.tsx'

with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Fix the main container background
old_container = "<div style={{ maxWidth: '1000px', width: '100%', margin: '0 auto', background: 'var(--surface-color)', padding: '2rem 3rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>"
new_container = "<div style={{ maxWidth: '1100px', width: '100%', margin: '0 auto', padding: '0 1rem' }}>"
content = content.replace(old_container, new_container)

# 2. Add white background to individual cards
old_card = "border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-md)', padding: '1.5rem'"
new_card = "background: 'var(--surface-color)', border: '1px solid var(--glass-border)', borderRadius: 'var(--radius-lg)', padding: '2rem', boxShadow: 'var(--shadow-sm)'"
content = content.replace(old_card, new_card)

# 3. Remove inline input styling that overrides .form-input
content = content.replace(" style={{ background: '#f8fafc', border: 'none' }}", "")
content = content.replace(" style={{ background: '#f8fafc', border: 'none', flex: 1 }}", "")
content = content.replace(" style={{ background: '#f8fafc', border: 'none', borderTopRightRadius: 0, borderBottomRightRadius: 0 }}", "")
content = content.replace(" style={{ maxWidth: '300px', background: '#f8fafc', border: 'none' }}", " style={{ maxWidth: '300px' }}")

# 4. Add SVGs
user_svg = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--primary)\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><path d=\"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2\"></path><circle cx=\"12\" cy=\"7\" r=\"4\"></circle></svg>"
health_svg = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"var(--primary)\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><path d=\"M19 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z\"></path><path d=\"M12 9v6\"></path><path d=\"M9 12h6\"></path></svg>"
robot_svg = "<svg width=\"20\" height=\"20\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" strokeWidth=\"2\" strokeLinecap=\"round\" strokeLinejoin=\"round\"><rect x=\"3\" y=\"11\" width=\"18\" height=\"10\" rx=\"2\"></rect><circle cx=\"12\" cy=\"5\" r=\"2\"></circle><path d=\"M12 7v4\"></path><line x1=\"8\" y1=\"16\" x2=\"8.01\" y2=\"16\"></line><line x1=\"16\" y1=\"16\" x2=\"16.01\" y2=\"16\"></line></svg>"

content = content.replace(
    "Thông tin cá nhân\n                  </h3>",
    f"{user_svg} Thông tin cá nhân\n                  </h3>"
)

content = content.replace(
    "Tình trạng sức khỏe\n                  </h3>",
    f"{health_svg} Tình trạng sức khỏe\n                  </h3>"
)

content = content.replace(
    "Mẹo từ AI Guardian\n                  </h4>",
    f"{robot_svg} Mẹo từ AI Guardian\n                  </h4>"
)

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
print("Finished updating onboarding layout")
