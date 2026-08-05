import os
import re

app_dir = r'd:\VinPro\nutrition-agent-web\src\app'

for root, _, files in os.walk(app_dir):
    for file in files:
        if file.endswith('.tsx'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Replace light blue block backgrounds with white
            new_content = content.replace("background: '#f0f9ff'", "background: 'var(--surface-color)'")
            # The onboarding page had #f8fafc (grayish) which they might have meant
            new_content = new_content.replace("background: '#f8fafc'", "background: 'var(--surface-color)'")
            # Replace primary-light when used as a card background (e.g., in some info boxes)
            # Need to be careful not to replace it in buttons. Let's target specific large padding ones if possible
            # Actually, var(--surface-color) is safe for most block-level elements.
            
            # Let's also bump font sizes in specific inline styles if they are too small
            new_content = new_content.replace("fontSize: '0.85rem'", "fontSize: '0.95rem'")
            new_content = new_content.replace("fontSize: '0.75rem'", "fontSize: '0.85rem'")
            new_content = new_content.replace("fontSize: '0.9rem'", "fontSize: '1rem'")
            
            if new_content != content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f'Updated {filepath}')
