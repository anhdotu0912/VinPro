import os
import re

target_dir = r"d:\VinPro\nutrition-agent-web\src\app"

# Emojis regex
emoji_pattern = r'[\U00010000-\U0010ffff\u2600-\u27FF\u2200-\u22FF]'

for root, dirs, files in os.walk(target_dir):
    for file in files:
        if file.endswith('.tsx'):
            file_path = os.path.join(root, file)
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Just remove the emojis without touching any HTML elements
            new_content = re.sub(emoji_pattern, '', content)
            
            if new_content != content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Removed icons from {file_path}")

print("Done")
