import json
import os

log_path = r"C:\Users\DELL\.gemini\antigravity-ide\brain\b96b6a47-dcf9-4c93-b0b7-90a10fefe36b\.system_generated\logs\transcript_full.jsonl"
recovered = {}

with open(log_path, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            data = json.loads(line)
            if data.get('type') == 'PLANNER_RESPONSE':
                for tc in data.get('tool_calls', []):
                    if tc.get('name') == 'write_to_file':
                        args = tc.get('args', {})
                        if isinstance(args, str):
                            # sometimes args is stringified json
                            args = json.loads(args)
                        target = args.get('TargetFile')
                        content = args.get('CodeContent')
                        if target and content and target.endswith('.tsx'):
                            recovered[target] = content
        except Exception as e:
            pass

for target, content in recovered.items():
    # Remove surrounding quotes if it got double encoded, though json.loads should handle it
    # We will write it out
    try:
        os.makedirs(os.path.dirname(target), exist_ok=True)
        with open(target, 'w', encoding='utf-8') as f:
            f.write(content)
        print(f"Recovered {target}")
    except Exception as e:
        print(f"Failed to write {target}: {e}")

print("Recovery done.")
