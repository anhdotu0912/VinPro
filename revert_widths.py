import os

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
            
            # Revert 100% back to a sensible centered width
            new_content = content.replace("maxWidth: '100%'", "maxWidth: '1000px'")
            
            if new_content != content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f'Updated {filepath}')
