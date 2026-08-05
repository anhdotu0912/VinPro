import os
import re

patient_dir = r'd:\VinPro\nutrition-agent-web\src\app\patient'

for root, _, files in os.walk(patient_dir):
    # Exclude login and register directories
    if 'login' in root or 'register' in root:
        continue
    
    for file in files:
        if file.endswith('.tsx'):
            filepath = os.path.join(root, file)
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Replace various max-widths with 100%
            new_content = re.sub(r"maxWidth:\s*'1[0-9]{3}px'", "maxWidth: '100%'", content)
            new_content = re.sub(r"maxWidth:\s*'900px'", "maxWidth: '100%'", new_content)
            
            if new_content != content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f'Updated {filepath}')
