import os

files = [
    r'd:\VinPro\nutrition-agent-web\src\app\patient\reports\page.tsx',
    r'd:\VinPro\nutrition-agent-web\src\app\patient\onboarding\page.tsx',
    r'd:\VinPro\nutrition-agent-web\src\app\patient\menus\page.tsx',
    r'd:\VinPro\nutrition-agent-web\src\app\patient\log-meal\page.tsx'
]

for file in files:
    if os.path.exists(file):
        with open(file, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Replace max-widths
        content = content.replace("maxWidth: '1000px'", "maxWidth: '1400px'")
        content = content.replace("maxWidth: '900px'", "maxWidth: '1300px'")
        
        with open(file, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f'Updated {file}')
