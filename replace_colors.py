import os

replacements = {
    '#047857': '#0284c7',
    '#059669': '#0284c7',
    '#065f46': '#0369a1',
    '#d1fae5': '#e0f2fe',
    '#ecfdf5': '#f0f9ff',
    '#f0fdf4': '#f0f9ff',
    '#bbf7d0': '#bae6fd'
}

target_dir = r"d:\VinPro\nutrition-agent-web\src\app"

for root, dirs, files in os.walk(target_dir):
    for file in files:
        if file.endswith('.tsx') or file.endswith('.css'):
            file_path = os.path.join(root, file)
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            new_content = content
            for old, new in replacements.items():
                new_content = new_content.replace(old, new)
                new_content = new_content.replace(old.upper(), new)
                
            if new_content != content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated {file_path}")

print("Done")
